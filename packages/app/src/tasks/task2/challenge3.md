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

We will be using this method to conditionally render components, in this case we will render `NotificationBanner` components from PIE!

For the following challenges, render a different variant of the component based on its Either state:

- If `left`, render the `positive` variant with `In Range` as its title, with the date as its content. Here is an example:

```typescript
<NotificationBanner variant="positive" title="In Range">
  MM/DD/YYYY
</NotificationBanner>
```

- If `right`, render the `error` variant with `Error` as its title, and with the text `You got the following error: {ERROR}` as its content. here is an example:

```typescript
<NotificationBanner variant="error" title="Error">
  You got the following error: {'INVALID_VALUES'}
</NotificationBanner>
```
