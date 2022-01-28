import {number} from 'fp-ts';
import {pipe, flow} from 'fp-ts/lib/function';
import * as O from 'fp-ts/lib/Option';
import * as R from 'fp-ts/lib/Record';
import * as IO from 'io-ts';
import {optionFromNullable} from 'io-ts-types/lib/optionFromNullable';
import {withFallback} from 'io-ts-types/lib/withFallback';
import {runDecoder} from './decoder';

const Scholarship = IO.type({
  type: IO.string,
  percentage: IO.number,
});

const PermissionIO = IO.union([
  IO.literal('VIEW'),
  IO.literal('EDIT'),
  IO.literal('ADMIN'),
]);

const UserIO = IO.type({
  id: IO.number,
  age: IO.string,
  status: IO.union([IO.literal('offline'), IO.literal('online')]),
  permission: withFallback(PermissionIO, 'VIEW'),
  scholarship: optionFromNullable(Scholarship),
});

function main() {
  //success case
  const user1 = {
    id: 1,
    name: 'Harry',
    status: 'online',
    permission: 'EDIT',
  };

  //fallback case
  const user2 = {
    id: 1,
    name: 'Harry',
    status: 'online',
  };

  //failureCase
  const user3 = {
    id: 1,
    name: 'Harry',
    permission: 'EDIT',
  };

  try {
    pipe(user1, runDecoder(UserIO));
  } catch (error) {
    console.error(error);
  }
  try {
    pipe(user2, runDecoder(UserIO));
  } catch (error) {
    console.error(error);
  }

  try {
    pipe(user3, runDecoder(UserIO));
  } catch (error) {
    console.error(error);
  }
}
