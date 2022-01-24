# Task 4 - RemoteData

Make all necessary changes on `app/src/tasks/task4/remote-data.ts`. Use the App to check your solutions.

---

### Creating destructors

We created functions which helped us construct `RemoteData`s, now it's time to create functions which help is get stuff out of `RemoteData`.

---

**Challenge 3.a**

The `fold` function takes 4 callbacks (one for each possible state) and runs the appropriate one. For states which contain data the callback accepts this data as an argument, for example `onSuccess(value: A) => B` & `onFailure(err: E) => B`.

> All callbacks must have the same return type, `B`.

Implement the `fold` function. The type signature can be found in the `task4/remote-data.ts` file.

---

**Challenge 3.b**

`successOrElse` is a simpler `fold` where we only require 2 callbacks; for for the `success` state and another for the remaining states. 

Implement a `successOrElse` function. The type signature can be found in the `task4/remote-data.ts` file.

---

**Challenge 3.c**

This function is same concept as `successOrElse` but it targets the `failure` state instead.

Implement a `failureOrElse` function. The type signature can be found in the `task4/remote-data.ts` file.

---