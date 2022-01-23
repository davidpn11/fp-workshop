export type RemoteData<A, E = Error> =
  | {tag: 'initial'}
  | {tag: 'loading'}
  | {tag: 'success'; result: A}
  | {tag: 'failure'; error: E};

export let initial: RemoteData<never, never>;
export let loading: RemoteData<never, never>;
export let success: <A, E = Error>(result: A) => RemoteData<A, E>;
export let failure: <A, E = Error>(error: E) => RemoteData<A, E>;

export let isInitial: <A, E>(rd: RemoteData<A, E>) => boolean;
export let isLoading: <A, E>(rd: RemoteData<A, E>) => boolean;
export let isSuccess: <A, E>(rd: RemoteData<A, E>) => boolean;
export let isFailure: <A, E>(rd: RemoteData<A, E>) => boolean;

export let fold: <B, A, E>(
  whenInitial: B,
  whenLoading: B,
  whenSuccess: (result: A) => B,
  whenFailure: (error: E) => B,
) => B;

export let successOrElse: <A, B, E>(
  onSuccess: (a: A) => B,
  orElse: () => B,
) => B;

export let failureOrElse: <E, B>(onFailure: (e: E) => B, orElse: () => B) => B;
