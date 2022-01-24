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
  date1: Date,
  date2: Date,
) => (date3: Date) => E.Either<DateError, Date>;

export let renderDateCompare: (Range: Range, date: Date) => JSX.Element;

/**
 * Solutions
 */

compareDates = (date1, date2) => {
  return date3 => {
    console.log(isDate(date1));
    if (!isDate(date1) || !isDate(date2) || !isDate(date3)) {
      console.log(date3);
      return E.left('UNSUPPORTED_VALUE');
    }

    if (isBefore(date2, date1)) {
      return E.left('INVALID_RANGE');
    }

    if (isBefore(date3, date1)) {
      return E.left('OUT_OF_RANGE_BEFORE');
    }

    if (isAfter(date3, date2)) {
      return E.left('OUT_OF_RANGE_AFTER');
    }

    const diffDate1 = differenceInDays(date3, date1);
    const diffDate2 = differenceInDays(date3, date2) * -1;

    console.log({diffDate1, diffDate2});
    if (diffDate1 < diffDate2) return E.right(date1);

    return E.right(date2);
  };
};

renderDateCompare = (range, date) => {
  const compDates = compareDates(range.startDate, range.endDate);
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
