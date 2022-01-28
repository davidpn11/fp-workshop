## Challenge 6 - Eq and Sort

---

### Order Eq/Sort

---

**Challenge 2.a (1 to 3)** - `Eq.Eq<Order>`
Create and Eq type for Order called `eqOrder`. To be the same, both orders have to have the same the `customerId` and `orderDate`.

---

**Challenge 2.b** - `(orders: []) => Order[]`

Create a Ord type for Order called `ordOrder`, that sorts the `Order`s by date. Then, create the method `filterDuplicatedOrder` that gets an `Order` array and returns that array sorted and without duplicates

---

**Challenge 2.c** - `(orderRecord: Record<string, Order>) => Order[];`

We have an `Order` object with the following type: `Record<string, Order>`. Create an `Ord<Order>` type that order `dates` from the newest to the oldesst. Then, implement a `recordToOrderList` method, that has a `Order` record as an input and then returns a sorted `Order` list.

> To compare Orders, just compare the `orderDate`.
