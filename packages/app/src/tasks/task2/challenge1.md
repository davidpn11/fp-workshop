## Task 2 - Option and Either

Make all necessary changes on `app/src/tasks/task2/restaurant.ts`.
Use the App to check your solutions

### Introduction
We will be working with the `Restaurant` type. This type contains a _optional_ `promotion?` property, that itself also contains an _optional_ `budget?` property. We will avoid using optional chaining (`restaurant?.promotion?.budget`), instead using the functions provided by the `Option` module.

---

**Challenge 1.a** - `(restaurant?: Restaurant) => Option<Budget>`

Create a function that gets a `Restaurant` checks if has a `Promotion` with a budget, returning that budget as an `Option<Budget>`.

---

**Challenge 1.b** - `(restaurant?: Restaurant) => number`

Create a function that gets a `Restaurant` checks if has a Promotion with a budget. If yes, returns the budget value. Else, returns 0.

---

**Challenge 1.c** - `(restaurant?: Restaurant) => string`

Create a function that gets a `Restaurant` checks if has a `Promotion` with a budget. If it has return, `"You have a PROMOTION_TYPE with $BUDGET_REMAINING remaining"`. If not, return `“Click here to sign in"`

---
