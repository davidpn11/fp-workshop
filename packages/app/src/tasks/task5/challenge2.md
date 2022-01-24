## Task 5 - Record and Array

Keep making all necessary changes on `app/src/tasks/task5/challenge.ts`.
Use the App to check your solutions

### Order Tasks

**Challenge 1.a** - `(restaurant: Restaurant, day: number) => string[]`

List all the name of all items from all the orders made on a specific day.

**Challenge 1.b** - `(restaurant: Restaurant, day: number) => boolean`

In this challenge, we will create a method called `validateTotalEarnings`. It will get a `restaurant` and a `day` as parameters. For that specific day, it will verify if its `totalEarnings` matches the combined `totalPrice` of all the orders made that day.

**Challenge 1.c** - `(restaurant: Restaurant, range: Range) => Either<number[], number>`

Now, using the `validateTotalEarnings` we will create a new method called `validateTotalEarningsRange`. This method run the `validateTotalEarnings` for each of the days added in the range, and it will return an Either.

- If all days are valid, return `right` with the combined `totalEarnings` of all the range
- If any of days have invalid data, return `right` with a list of the days that have invalid `totalEarnings`
