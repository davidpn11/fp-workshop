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
import {is} from 'date-fns/locale';
import * as E from 'fp-ts/lib/Either';
import {pipe} from 'fp-ts/lib/function';

type DateError =
  | 'UNSUPPORTED_VALUE'
  | 'INVALID_RANGE'
  | 'OUT_OF_RANGE_BEFORE'
  | 'OUT_OF_RANGE_AFTER';

export let compareDates: (
  date1: Date,
  date2: Date,
) => (date3: Date) => E.Either<DateError, Date>;
