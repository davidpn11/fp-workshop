## Task 5 - Record and Array

Keep making all necessary changes on `app/src/tasks/task5/challenge.ts`.
Use the App to check your solutions

---

### Order Tasks

**Challenge 2.a** - `(restaurant: Restaurant, date: Date) => Order[]`

List all the orders made on a specific day

---

**Challenge 2.b** - `(restaurant: Restaurant, minumumPrice: number) => string[]`

For this challenge, we will get all the orders that the `totalPrice` is above the `minimumPrice`. From that, return a list of `string` with the following format:
`{orderId}-{totalPrice}`, where the `orderId` is the Record `key`.

---

**Challenge 2.c (1 to 2)** - `(restaurant: Restaurant) => Record<string, Order>`

An `order` can have a `promotionId` if it had an active promotion when it was made. The `promotionId` is the same as the `id` property on the `Promotion` type.

Return all the `orders` that were made with the current running `promotions`.

---

**Challenge 2.d (1 to 3)** - `(restaurant: Restaurant) => boolean`

The properties you see on `earnings` are based on the `orders` made at that time. The `orderNumber` refers to the total number of orders made so far, and the `totalEarnings` should be equal the sum of the `totalPrice` from all the orders made.

For this challenge you create a method to verify if those values are correct.

---

**Challenge 2.e (1 to 2)** - `(restaurant: Restaurant, orderIds: string[]) => Either<string, number>`

This challenge requires you to get all the orders that match the `orderIds`,given as input. The method will return an `Either` type, folowing the current scenarios:

- If all `orders` are found, sum the `totalPrice` of all the orders that match the `orderIds` array. Then, return `E.right(sumTotalPrice)`
- If any of the `orders` is not found, use its `id` to return `E.left(orderId)`
