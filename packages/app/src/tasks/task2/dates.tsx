import React from 'react';
import {NotificationBanner} from '@jet-pie/react';
import {
  format,
  compareAsc,
  isDate,
  isBefore,
  isAfter,
  sub,
  differenceInDays,
  formatDistance,
} from 'date-fns';
import * as E from 'fp-ts/lib/Either';
import {pipe} from 'fp-ts/lib/function';

type DateError =
  | 'UNSUPPORTED_VALUE'
  | 'INVALID_RANGE'
  | 'OUT_OF_RANGE_BEFORE'
  | 'OUT_OF_RANGE_AFTER';

type Range = {
  startDate: Date;
  endDate: Date;
};

export let compareDates: (
  date1: Date | any,
  date2: Date | any,
) => (date3: Date) => E.Either<DateError, Date>;

export let renderDateCompare: (Range: Range, date: Date) => JSX.Element;

const UNSUPPORTED_VALUE: DateError = 'UNSUPPORTED_VALUE';
const INVALID_RANGE: DateError = 'INVALID_RANGE';
const OUT_OF_RANGE_BEFORE: DateError = 'OUT_OF_RANGE_BEFORE';
const OUT_OF_RANGE_AFTER: DateError = 'OUT_OF_RANGE_AFTER';

const parseDate = (d: any): E.Either<DateError, Date> => {
  if (isDate(d)) return E.right(d);
  return E.left(UNSUPPORTED_VALUE);
};

const guard = <E, A>(predicate: (a: A) => boolean, e: E) =>
  E.chainFirstW<E, A, A>(a => (predicate(a) ? E.right(a) : E.left(e)));

compareDates = (d1, d2) => d3 =>
  pipe(
    E.Do,
    E.bind('d1', () => parseDate(d1)),
    E.bind('d2', () => parseDate(d2)),
    E.bind('d3', () => parseDate(d3)),
    guard(ctx => isBefore(ctx.d1, ctx.d2), INVALID_RANGE),
    guard(ctx => isAfter(ctx.d3, ctx.d1), OUT_OF_RANGE_BEFORE),
    guard(ctx => isBefore(ctx.d3, ctx.d2), OUT_OF_RANGE_AFTER),
    E.map(ctx => ctx.d3),
  );

renderDateCompare = (range, date) =>
  pipe(
    date,
    compareDates(range.startDate, range.endDate),
    E.fold(
      err => (
        <NotificationBanner variant="error" title="Error">
          You got the following error: {err}
        </NotificationBanner>
      ),
      date => (
        <NotificationBanner variant="positive" title="In Range">
          You got the following error: u{format(date, 'MM/dd/yyyy')}
        </NotificationBanner>
      ),
    ),
  );
