## Challenge 3 - Task and TaskEither

Make all necessary changes on `app/src/tasks/task3/users.ts`.

---

### Introduction

In this challenge, we will be performing async operations to retrieve `user` data from a `Record`.

We have a async method `getUserDetails` that retrieves the data and returns a `Promise`. It returns a `User` if it founds it and `${userID} not found` if not.

All challenge methods will be `async` methods. You will have to use `await` to resolve Provises and `Tasks` to return the required results.

---

### Task

**Challenge 1.a** - `(id: string): Promise<E.Either<never, User>>`

Transform the `getUserDetails` method into a `TaskEither`. Then, run the `Promise`, return the given `Either` type.

---

**Challenge 1.b (1 to 2)** - `(usersIds: string[]): Promise<E.Either<unknown, readonly User[]>`

From an list of `userId`s, use the `getUserDetails` method to fetch `users` in parallel. Return an `Either` type where:

- if finds all users, returns `E.right(users)`
- If fail to find a user, returns `E.left(userId)` where `userId` is one not found

---

**Challenge 1.c** - `( usersIds: string[], ): Promise<E.Either<unknown, readonly string[]>>`

This challenge is very similar to **Challenge 1.b**.
Now instead of returning all the `User` data, we are just required to return their `name`. Now the `right` scenario should be of type `string[]`
