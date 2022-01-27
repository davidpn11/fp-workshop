import * as O from 'fp-ts/lib/Option';

type RemoteDataInitial = {tag: 'initial'};
type RemoteDataLoading = {tag: 'loading'};
type RemoteDataSuccess<A> = {tag: 'success'; result: A};
type RemoteDataFailure<E> = {tag: 'failure'; error: E};

export type RemoteData<A, E = Error> =
  | RemoteDataInitial
  | RemoteDataLoading
  | RemoteDataSuccess<A>
  | RemoteDataFailure<E>;

export let initial: () => RemoteData<never, never>;
export let loading: () => RemoteData<never, never>;
export let success: <A, E = Error>(result: A) => RemoteData<A, E>;
export let failure: <A, E = Error>(error: E) => RemoteData<A, E>;

export let isInitial: any;
export let isLoading: any;
export let isSuccess: any;
export let isFailure: any;

export let fold: <A, B, E>(
  whenInitial: () => B,
  whenLoading: () => B,
  whenSuccess: (result: A) => B,
  whenFailure: (error: E) => B,
) => (rd: RemoteData<A, E>) => B;

export let successOrElse: <A, B, E>(
  onSuccess: (a: A) => B,
  orElse: () => B,
) => (rd: RemoteData<A, E>) => B;

export let failureOrElse: <A, E, B>(
  onFailure: (e: E) => B,
  orElse: () => B,
) => (rd: RemoteData<A, E>) => B;

export let anyFailures: <E = Error>(p: RemoteData<unknown, E>[]) => O.Option<E>;

export let successMap: <A, B>(
  f: (a: A) => B,
) => (fa: RemoteData<A, unknown>) => RemoteData<B, unknown>;
