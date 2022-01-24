# Task 4 - RemoteData

Make all necessary changes on `app/src/tasks/task4/remote-data.ts`. Use the App to check your solutions.

---

### Creating refinements

When passing around a `rd: RemoteData`, we are unable to read anything other than `rd.tag` as it's the only property that is present in all 4 states. A refinement let's us tell TypeScript we know which state `rd` is in and therefore let us access the properties of that specific type. Refinements require a TypeScript feature call Type Guards: 

Instead of `isFailure = <E,A>(rd: RemoteData<E,A>) => boolean` we use `isFailure = <E,A>(rd: RemoteData<E,A>) => rd is RemoteDataFailure<E,A>`. This function still returns a `boolean` but now TypeScript known that if the result is `true` then we must have specifically `RemoteDataFailure`. 

> This time you are **not** provided with the initial function declarations. You must implement everything yourself.

---

**Challenge 1.a** - `isInitial = <E,A>(rd: RemoteData<E,A>): rd is RemoteDataInitial<E,A>`

Create a refinement for the `initial` state

---

**Challenge 1.b** - `isLoading = <E,A>(rd: RemoteData<E,A>): rd is RemoteDataLoading<E,A>`

Create a refinement for the `loading` state

---

**Challenge 1.c** - `isFailure = <E,A>(rd: RemoteData<E,A>): rd is RemoteDataFailure<E,A>`

Create a refinement for the `failure` state

---

**Challenge 1.d** - `isSuccess = <E,A>(rd: RemoteData<E,A>): rd is RemoteDataSuccess<E,A>`

Create a refinement for the `success` state

---
