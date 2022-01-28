## Challenge 7 - RemoteData: The Sequel

Keep making all necessary changes on `app/src/tasks/task7/remote-data.ts`.
Use the App to check your solutions

### Introduction

Wow! Look how far have you come! Great job!
And now to solidify your learnings, we will dedust one of our favourite type: `RemoteData`!

We will take what we learned from the last modules and top up our module a notch.

---

### Challenge 1a (1 to 2) - `anyFailures`

For this challenge we will created a helper to detect if there are any `failure` cases in an array of `RemoteData`'s.

We will return an `Option` type. Return `some` if found the a `Error`, and `none` in case there are no `failure`s.

---

### Challenge 1b (1 to 2) - `successMap`

We require a `map` method, to allow us to modify the `result` of a `success` case, without much concern if it's found in another state. Therefore, in case is not a `success`, it should return itself.

---

### Challenge 1c - `Eq and Ord` [EXTRA CHALLENGE]

Create the `eqRD` and an `ordRD` classes.
On the `eq` case, we are required to compose it by another `eq`, to compare the results on a `success` case. The same should be done for `ord`.
The order elsewhere is `success`, `loading`, `initial` and `failure`, respectively.
