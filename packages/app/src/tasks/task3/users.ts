import {pipe} from 'fp-ts/lib/function';
import * as O from 'fp-ts/lib/Option';
import * as A from 'fp-ts/lib/Array';
import * as R from 'fp-ts/lib/Record';
import * as TE from 'fp-ts/lib/TaskEither';
import * as T from 'fp-ts/lib/Task';
import * as E from 'fp-ts/lib/Either';

type User = {
  name: string;
  status: 'online' | 'offline';
  permission: 'VIEW' | 'EDIT' | 'ADMIN';
};

export const usersDoc1: Record<string, User> = {
  '128': {
    name: 'Admin',
    status: 'online',
    permission: 'ADMIN',
  },
  '256': {
    name: 'Chales',
    status: 'online',
    permission: 'VIEW',
  },
  '512': {
    name: 'John',
    status: 'online',
    permission: 'EDIT',
  },
};

export const getUserDetails = (id: string): Promise<User> => {
  return new Promise((res, rej) => {
    pipe(
      usersDoc1,
      R.lookup(id),
      O.fold(
        () => rej(`${id} not found`),
        data => res(data),
      ),
    );
  });
};

export let challenge1a: (id: string) => Promise<E.Either<never, User>>;

export let challenge1b: (
  usersIds: string[],
) => Promise<E.Either<unknown, readonly User[]>>;

export let challenge1c: (
  usersIds: string[],
) => Promise<E.Either<unknown, readonly string[]>>;
