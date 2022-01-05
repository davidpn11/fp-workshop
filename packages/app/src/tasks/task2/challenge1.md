## Task 1 - Option and Either

Make all necessary changes on `app/src/tasks/task2/restaurant.ts`.
Use the App to check your solutions

## Challenge 1 - Option

We will be working with the `Restaurant` type. This type contains a optional `promotion` property, that itself also contains an optional `budget` prop. You will be asked to compute some data based on this type

> IMPORTANT NOTE: Always consider that the input data have the followying type `Restaurant | undefined`

### Challenge 1a

Create a helper method that gets a `Restaurant` checks if has a Promotion with a budget, returning that budget as an Option.

### Challenge 1b

Create a helper method that gets a `Restaurant` checks if has a Promotion with a budget. If yes, returns the budget value. Else, returns 0.

### Challenge 1c

Create a helper method that gets a `Restaurant` checks if has a Promotion with a budget. If it has display, _"You have an PROMOTION_TYPE with $BUDGET_REMAINING remaining"_. If not, display _“Click here to sign in"_
