## Challenge 6 - Eq and Sort

---

### Introduction

---

### Promotions Eq/Sort

**Challenge 1.a (1 to 3)** - `Eq.Eq<Promotion>`

Create and Eq type for Promotions called `eqPromotions`. if the promotion is of type `TOP_PLACEMENT` only compare the id.
If is `FREE_ITEM` compare the promotion id and the item name

---

**Challenge 1.b** - `( promotions: Promotion[], deletedPromotions: Promotion[], ) => Promotion[];`

This type takes as a input `promotions` and `deletedPromotions`, both being lists of `Promotions`. Create a method called `removeDeletedPromotions`. It returns the `promotions` list, but removing all the promotions that also exist in `deletedPromotions`.

---

**Challenge 1.c** - `Ord.Ord<Promotion>`

Create a Ord type for Promotions `ordPromotions`. The rules to sort promotions are:

- `TOP_PLACEMENT` promotions should come first than `FREE_ITEM`
- if it has budget, sort by `totalAmount`

> This will be used to sort an array of `Promotions`

---
