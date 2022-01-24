# Task 4 - RemoteData

Make all necessary changes on `app/src/tasks/task4/remote-data.ts`. Use the App to check your solutions.

---

### Creating our own `RemoteData`

In this module we will be looking into the `RemoteData` datatype.

This is a type used to express different states of an IO operation. It has the following states:

- `initial` represents the initial state, where the operation hasn’t started yet
- `loading` represents when the IO operation is in progress
- `success` represents that the operation has terminated successfully, and its `data` is available
- `failure` represents that the operation has failed to complete, and it contains an `error`

We will be creating `RemoteData` from scratch and in each challenge you will be tasked to build a different part.


---

**Challenge 1.a** - `initial = <E, A>() => RemoteData<E, A>`

This constructor should return a `RemoteData` in the `initial` state.

---

**Challenge 1.b** - `loading = <E, A>() => RemoteData<E, A>`

This constructor should return a `RemoteData` in the `loading` state.

---

**Challenge 1.c** - `success = <E, A>(result: A) => RemoteData<E, A>`

This constructor should return a `RemoteData` in the `success` state containing the `result`.

---

**Challenge 1.d** - `failure = <E, A>(err: E) => RemoteData<E, A>`

This constructor should return a `RemoteData` in the `failure` state containing the `err`.

---
