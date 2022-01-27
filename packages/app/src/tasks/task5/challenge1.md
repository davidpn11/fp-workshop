## Task 5 - Record and Array

Make all necessary changes on `app/src/tasks/task5/challenge.ts`.
Use the App to check your solutions

### Introduction

Now we will be working with an upgraded `Restaurant` type. This new type has 3 new properties we will be working with:

- a `promotions` array;
- a `ordersHistory` Record, containing all the `orders` indexed by `orderId`
- a `earnings` object;

For the next part, we will process this structure using the `Record` and `Array` modules.

> Use the methods discussed in the slides

---

### Promotions Tasks

**Challenge 1.a** - `(menuItems: MenuItem[], minimumPrice: number) => MenuItem[]`

This time you will be getting a list of `menuItems` and a `minimumPrice` as parameters. The list is already sorted by price. Remove all items that it's `price` is lower than the minimum price and return the list with the higher prices shown first.

---

**Challenge 1.b (1 to 2)** - `(menuItems: MenuItem[], itemName: string) => Option<string>`

From a list of `menuItem`'s and a `itemName`, search for an item that has the same name as the one inputed. This method will return an `Option`. If such `menuItem` is found, return `some` with the `id` as value, or `none` not.

---

**Challenge 1.c** - `(restaurants: Restaurant[]) => string[]`
From a list of `restaurants`, return a list of the restaurant names that have `FREE_ITEM` promotions

---

**Challenge 1.d** - `(restaurants: Restaurant[]) => { restoNames: string[]; totalBudget: number; }`

From a list of restaurants, we want to know all of them that have `TOP_PLACEMENT` promotions. Return an object that contains the values:

- `restoNames`, as a list with all the restaurant names that have `TOP_PLACEMENT` promotion
- `totalBudget`, being the `totalBudget` combined of all those restaurants

---

**Challenge 1.e (1 to 3)** - `(restaurant: Restaurant) => Either<string[], PromotionType[]>`

For a promotion to be eligible it has to have its eligibility flag `isEligible` set as `true` AND also shouldn't have any running promotions of that type.

We want to render two cases, if there are eligible promotions and if there aren't. Return an `Either` type were:

- If it has eligible promotions, return a list of `PromotionType`
- If it hasn't eligible promotions, return a list of reasons, extracted from the `Eligibility` type;
