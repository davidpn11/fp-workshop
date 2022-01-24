export type RemoteData<A, E = Error> =
  | {tag: 'initial'}
  | {tag: 'loading'}
  | {tag: 'success'; result: A}
  | {tag: 'failure'; error: E};

export let initial: () => RemoteData<never, never>;
export let loading: () => RemoteData<never, never>;
export let success: <A, E = Error>(result: A) => RemoteData<A, E>;
export let failure: <A, E = Error>(error: E) => RemoteData<A, E>;

export let isInitial: <A, E>(rd: RemoteData<A, E>) => boolean;
export let isLoading: <A, E>(rd: RemoteData<A, E>) => boolean;
export let isSuccess: <A, E>(rd: RemoteData<A, E>) => boolean;
export let isFailure: <A, E>(rd: RemoteData<A, E>) => boolean;

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

/**
 * Solutions
 */

initial = () => ({tag: 'initial'});
loading = () => ({tag: 'loading'});
success = result => ({tag: 'success', result});
failure = error => ({tag: 'failure', error});

isInitial = rd => rd.tag === 'initial';
isLoading = rd => rd.tag === 'loading';
isSuccess = rd => rd.tag === 'success';
isFailure = rd => rd.tag === 'failure';

fold =
  <B, A, E>(
    whenInitial: () => B,
    whenLoading: () => B,
    whenSuccess: (result: A) => B,
    whenFailure: (error: E) => B,
  ) =>
  (rd: RemoteData<A, E>): B => {
    if (rd.tag === 'initial') return whenInitial();
    if (rd.tag === 'loading') return whenLoading();
    if (rd.tag === 'success') return whenSuccess(rd.result);
    return whenFailure(rd.error);
  };

successOrElse = (onSuccess, onElse) => fold(onElse, onElse, onSuccess, onElse);
failureOrElse = (onFailure, onElse) => fold(onElse, onElse, onElse, onFailure);
