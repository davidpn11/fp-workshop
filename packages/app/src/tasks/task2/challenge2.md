## Task 2 - Option and Either

Make all necessary changes on `app/src/tasks/task2/dates.ts`.
Use the App to check your solutions

---

### Using `Either`

For these challenges we'll be implementing a function to check if a `target` date is within a given `start` and `end` date:

```typescript
isDateWithinRange = (start: Date, end: Date) => (target: Date) => E.Either<DateError, Date>
```

If `target` is within the range, return it. However there are multiple ways this function can fail. Your job is to implement them.

---

**Challenge 2.a** - `isDateWithinRange`
Add a failure case for `start > end`, returning `E.left('INVALID_RANGE')`

---

**Challenge 2.b** - `isDateWithinRange`
Add a failure case for `target < start`, returning `E.left('OUT_OF_RANGE_BEFORE')`

---

**Challenge 2.c** - `isDateWithinRange`
Add a failure case for `target > end`, returning `E.left('OUT_OF_RANGE_AFTER')`

---

**Challenge 2.d** - `isDateWithinRange`
Finally return `E.right(target)` if it's within the range

---