import React from 'react';
import {NotificationBanner} from '@jet-pie/react';
import * as E from 'fp-ts/lib/Either';
import * as T from 'fp-ts/lib/Task';
import * as TE from 'fp-ts/lib/TaskEither';
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

const getDates = (range: Range, date: Date) => {
  return {
    range,
    date,
  };
};

const date1 = new Date(2020, 5, 20);
const date2 = new Date(2020, 5, 23);
const date3 = new Date(2020, 6, 3);

const getDatesT = T.of({
  range: {startDate: date1, endDate: date2},
  date: date3,
});

const getDatesTE = TE.of({
  range: {startDate: date1, endDate: date2},
  date: date3,
});

const getDatesP = (range: Range, date: Date) =>
  new Promise((res, rej) => {
    setTimeout(() => {
      res({range, date});
    }, 3000);
  });

const getDatesTE2 = pipe(
  TE.tryCatch(
    () => getDatesP({startDate: date1, endDate: date2}, date3),
    e => 'UNSUPPORTEDVALUE',
  ),
  TE.map(a => {
    console.log('AZAO', a);
    return a;
  }),
);

const abc = pipe(await getDatesT());
const abc2 = pipe(await getDatesTE2());

console.log({abc});
console.log({abc2});
