import { findFirst } from "fp-ts/lib/Array";
import * as Option from "fp-ts/lib/Option";
import { pipe } from "fp-ts/lib/pipeable";
import { Semigroup } from "fp-ts/lib/Semigroup";

export type RemoteData<A, E = Error> =
  | { tag: "initial" }
  | { tag: "loading" }
  | { tag: "success"; result: A }
  | { tag: "failure"; error: E };

export type RemoteDataNext<A, E = Error> = RemoteData<A, E> | { tag: "empty" };

export const initial: RemoteData<never, never> = { tag: "initial" };
export const loading: RemoteData<never, never> = { tag: "loading" };
export const empty: RemoteDataNext<never, never> = { tag: "empty" };
export const success = <A, E = Error>(result: A): RemoteData<A, E> => ({
  tag: "success",
  result,
});
export const failure = <A, E = Error>(error: E): RemoteData<A, E> => ({
  tag: "failure",
  error,
});

export const isInitial = <A, E>(
  rd: RemoteData<A, E>
): rd is { tag: "initial" } => rd.tag === "initial";
export const isLoading = <A, E>(
  rd: RemoteData<A, E>
): rd is { tag: "loading" } => rd.tag === "loading";
export const isEmpty = <A, E>(
  rd: RemoteDataNext<A, E>
): rd is { tag: "empty" } => rd.tag === "empty";
export const isSuccess = <A, E>(
  rd: RemoteData<A, E>
): rd is { tag: "success"; result: A } => rd.tag === "success";
export const isFailure = <A, E>(
  rd: RemoteData<A, E>
): rd is { tag: "failure"; error: E } => rd.tag === "failure";

export const anyFailures = <E = Error>(p: RemoteData<unknown, E>[]) =>
  pipe(
    p,
    findFirst(isFailure),
    Option.map((rd) => rd.error)
  );

export const foldNext =
  <B, A, E>(
    whenInitial: () => B,
    whenLoading: () => B,
    whenEmpty: () => B,
    whenSuccess: (result: A) => B,
    whenFailure: (error: E) => B
  ) =>
  (rd: RemoteDataNext<A, E>): B => {
    if (rd.tag === "initial") return whenInitial();
    if (rd.tag === "loading") return whenLoading();
    if (rd.tag === "empty") return whenEmpty();
    if (rd.tag === "success") return whenSuccess(rd.result);
    return whenFailure(rd.error);
  };

export const foldL =
  <B, A, E>(
    whenInitial: () => B,
    whenLoading: () => B,
    whenSuccess: (result: A) => B,
    whenFailure: (error: E) => B
  ) =>
  (rd: RemoteData<A, E>): B => {
    if (rd.tag === "initial") return whenInitial();
    if (rd.tag === "loading") return whenLoading();
    if (rd.tag === "success") return whenSuccess(rd.result);
    return whenFailure(rd.error);
  };

/**
 * Original version of the above with strict arguments for initial & loading
 * This version is simpler for simple cases
 * but TS' type inference can struggle with B sometimes
 * In that case, use the deferred version above
 */
export const fold = <B, A, E>(
  whenInitial: B,
  whenLoading: B,
  whenSuccess: (result: A) => B,
  whenFailure: (error: E) => B
) =>
  foldL(
    () => whenInitial,
    () => whenLoading,
    whenSuccess,
    whenFailure
  );

export const map = <A, B, E>(fn: (a: A) => B) =>
  fold<RemoteData<B, E>, A, E>(
    initial,
    loading,
    (res) => success(fn(res)),
    (err) => failure(err)
  );

/**
 * When combining two RD, choose which ever has the data
 * if both have, combine the data
 *
 *  	               B = init	  B = loading	 B = success	B = failure
    A = init  	     B	        B	           B	          B
    A = loading	     B	        B	           B	          B
    A = success	     A	        A	           A+B        	A
    A = failure	     B	        B	           B	          B
 *
 *
 */
export const getSemigroup = <A>(S: Semigroup<A>): Semigroup<RemoteData<A>> => ({
  concat(x, y) {
    const whenBothSuccess = (xResult: A) => (yResult: A) =>
      success(S.concat(xResult, yResult));

    const whenXSuccess = (xResult: A) =>
      pipe(
        y,
        fold(x, x, whenBothSuccess(xResult), (_error) => x)
      );

    const whenXFailure = () => y;

    return pipe(x, fold(y, y, whenXSuccess, whenXFailure));
  },
});

export const successOrElse = <A, B, E>(
  onSuccess: (a: A) => B,
  orElse: () => B
) => foldL(orElse, orElse, onSuccess, orElse);

export const failureOrElse = <E, B>(onFailure: (e: E) => B, orElse: () => B) =>
  foldL(orElse, orElse, orElse, onFailure);
