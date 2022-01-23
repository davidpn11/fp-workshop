## Task 2 - Option and Either

Make all necessary changes on `app/src/tasks/task2/dates.ts`.
Use the App to check your solutions

## Challenge 2 - Either

For this challenge, you will have to create a date comparisson method called `compareDates`. Here its signature

```typescript
- (date1: Date, date2: Date) => (date3: Date) => E.Either<Error, Response>
```

This method will get two dates to create a **Range**. Then it will return a method so the user can input a third date to check if it fits the **Range**, and returns the date where is closer to. Here are the possible outputs:

- Left case:
  - Invalid dates: E.left('UNSUPPORTED_VALUE')
  - Date2 is earlier than Date1: E.left('INVALID_RANGE')
  - If Date 3 is before **Range**: E.left('OUT_OF_RANGE_BEFORE')
  - If Date 3 is after **Range**: E.left('OUT_OF_RANGE_AFTER')
- Right case:
  - If range is valid and date3 fits the **Range**: E.right(date3),

> IMPORTANT NOTE: Always consider that the input data have the followying type `Date | undefined`

---

The input arrays contain 3 dates, **date1**, **date2** and **date3**, respectively.
Your method should work for all the inputs bellow:
