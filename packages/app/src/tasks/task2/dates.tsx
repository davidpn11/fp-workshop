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

type DateError = 'INVALID_RANGE' | 'OUT_OF_RANGE_BEFORE' | 'OUT_OF_RANGE_AFTER';

type Range = {
  startDate: Date;
  endDate: Date;
};

export let isWithinRange: (
  date1: Date,
  date2: Date,
) => (date3: Date) => E.Either<DateError, Date>;

export let renderIsWithinRange: (Range: Range, date: Date) => JSX.Element;

/**
 * Solutions
 */

isWithinRange = (date1, date2) => {
  return date3 => {
    if (isBefore(date2, date1)) {
      return E.left('INVALID_RANGE');
    }

    if (isBefore(date3, date1)) {
      return E.left('OUT_OF_RANGE_BEFORE');
    }

    if (isAfter(date3, date2)) {
      return E.left('OUT_OF_RANGE_AFTER');
    }

    return E.right(date3);
  };
};

renderIsWithinRange = (range, date) => {
  const compDates = isWithinRange(range.startDate, range.endDate);
  return pipe(
    date,
    compDates,
    E.fold(
      err => (
        <NotificationBanner variant="error" title="Error">
          You got the following error: {err}
        </NotificationBanner>
      ),
      date => (
        <NotificationBanner variant="positive" title="In Range">
          {format(date, 'MM/dd/yyyy')}
        </NotificationBanner>
      ),
    ),
  );
};
