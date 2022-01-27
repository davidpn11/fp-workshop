export const taskListDay2 = [
  {
    id: 'task5',
    title: 'Type Classes: Record and Array',
  },
  {
    id: 'task6',
    title: 'Type Classes: Eq and Sort',
  },
  {
    id: 'task7',
    title: 'RemoteData: The Sequel',
  },
  {
    id: 'task8',
    title: 'Advanced: IO-TS',
  },
];

export const taskListDay1 = [
  {
    id: 'task1',
    title: 'Pipe and Flow',
  },
  {
    id: 'task2',
    title: 'Option and Either',
  },
  {
    id: 'task3',
    title: 'Task and TaskEither',
  },
  {
    id: 'task4',
    title: 'Remote Data',
  },
];

export type Day = 'DAY 1' | 'DAY 2';

export function selectDayTag(name: string): Day {
  const hasDay2 = taskListDay2.find(t => name.includes(t.id));
  if (hasDay2) return 'DAY 2';
  return 'DAY 1';
}
