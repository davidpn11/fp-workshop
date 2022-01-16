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
