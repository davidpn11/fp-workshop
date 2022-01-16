## Task 2 - Option and Either

Make all necessary changes on `app/src/tasks/task2/dates.ts`.
Use the App to check your solutions

## Challenge 3 - Either (final)

Youre are now gonna be introduced to the `Range` type, that will be working with more over the workshop. It contains a `startDate` and an `endDate` property, and we will use it
to create ranges.

For this task, we will having a method that gets `range` and a `date`, where we need to check if the date fits the range.

Now that you have a working `compareDates` method lets use it to render a component conditionally to the Either state. you will work on the method `renderDateCompare` that has the following type.

```typescript
- (range: Range, date: Date) => JSX.Element
```

To get there you will also have to extract the dates from an API . (This is for the next task)

simple case

- get dates
- compute them using compare date
- render with Either.fold

mid case:

- gets data from async action (Task<A>), that is an optional
- Convert to either,
- if right, compute with `compareDates`
- if left, return the E.left(invalid_values)

complex case:

- gets data from async action (TaskEither<A>),
- if right, gets optional case
- converts to either
- if right, compute with `compareDates`
- if left, return the E.left(invalid_values)
