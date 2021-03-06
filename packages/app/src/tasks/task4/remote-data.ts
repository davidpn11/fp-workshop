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

/**
 * Solutions
 */

initial = () => ({tag: 'initial'});
loading = () => ({tag: 'loading'});
success = result => ({tag: 'success', result});
failure = error => ({tag: 'failure', error});

//@ts-ignore
isInitial = rd => rd.tag === 'initial';
//@ts-ignore
isLoading = rd => rd.tag === 'loading';
//@ts-ignore
isSuccess = rd => rd.tag === 'success';
//@ts-ignore
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
