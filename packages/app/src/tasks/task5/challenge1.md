## Task 5 - Record and Array

Make all necessary changes on `app/src/tasks/task5/challenge.ts`.
Use the App to check your solutions

### Introduction

Now we will be working with an upgraded `Restaurant` type. This type contains the running `promotions` for that restaurant, a list of `orders` and `earnings` details for each month.
Note: The data available refers to the restaurant's monthly earnings, split by day. Each key represents that day of the month.

For the next We will process this structure using the `Record` and `Array` modules, achiving the right results for each challenge.

---

### Promotions Tasks

**Challenge 1.a** - `(restaurant: Restaurant) => Record<PromotionType, number>`

We want to know the remaining budget for each of promotion Type. Return an object that has each `PromotionType` as key and the remaining budget if not. If no budget, return 0.

---

**Challenge 1.b** - `(restaurant: Restaurant) => Either<PromotionType[], string[]>`

For a promotion to be eligible it has to have its eligibility flag `isEligible` set as `true` AND also shouldn't have any running promotions of that type.

We want to render two cases, if there are eligible promotions and if there aren't. Return an `Either` type were:

- If it has eligible promotions, return a list of `PromotionType`
- If it hasn't eligible promotions, return a list of reasons, extracted from the `Eligibility` type;
