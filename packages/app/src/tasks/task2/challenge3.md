# Task 2 - Option and Either

**Continuing** in `app/src/tasks/task2/dates.ts`.
Use the App to check your solutions

---

## Rendering `Either`

We'll take the result of `isDateWithinRange` (`E.Either<DateError, Date>`) and render a `<NotificationBanner />` from PIE.
Make youre changes to `renderIsWithinRange`.

---

**Challenge 3.a**
For a _successful_ result, render a `<NotificationBanner />` with the following props and children:

```typescript
<NotificationBanner variant="positive" title="In Range">
  MM/DD/YYYY
</NotificationBanner>
```

---

**Challenge 3.b**
For a _failure_ result, render a `<NotificationBanner />` with the following props and children:

```typescript
<NotificationBanner variant="error" title="Error">
  You got the following error: {DateError}
</NotificationBanner>
```

---
