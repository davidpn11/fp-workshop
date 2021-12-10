export const taskListDay2 = [
  {
    id: 'task6',
    title: 'Type Classes: Eq, Sort, Array, Record',
  },
  {
    id: 'task7',
    title: 'Advanced Type Classes: Semigroups',
  },
  {
    id: 'task8',
    title: 'Advanced Type Classes: Monoids',
  },
  {
    id: 'task9',
    title: 'Advanced Type Classes: Monads',
  },
];

export const taskListDay1 = [
  {
    id: 'task1',
    title: 'Currying and composition',
  },
  {
    id: 'task3',
    title: 'Pipe and Flow',
  },
  {
    id: 'task4',
    title: 'Option and Either',
  },
  {
    id: 'task5',
    title: 'Remote Data',
  },
];

export type Day = 'DAY 1' | 'DAY 2';

export function selectDayTag(name: string): Day {
  const hasDay2 = taskListDay2.find(t => name.includes(t.id));
  if (hasDay2) return 'DAY 2';
  return 'DAY 1';
}
