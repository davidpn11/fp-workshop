import {Task1} from './task1';
import {Task2} from './task2';
import {Task3} from './task3';
import {Task4} from './task4';
import {Task5} from './task5';
import {Task6} from './task6';
import {Task7} from './task7';
import {Task8} from './task8';
import React from 'react';

export type Task = {
  title: string;
  component: React.ReactNode;
};
export const taskList: Record<string, Task> = {
  task1: {
    title: 'Task 1 - Pipe and Flow',
    component: <Task1 />,
  },
  task2: {
    title: 'Task 2 - Option and Either',
    component: <Task2 />,
  },
  task3: {
    title: 'Task 3 - Task and taskEither',
    component: <Task3 />,
  },
  task4: {
    title: 'Task 4 - RemoteData',
    component: <Task4 />,
  },
  task5: {
    title: 'Task 5 - Record and Array',
    component: <Task5 />,
  },
  task6: {
    title: 'Task 6 - Eq and Sort',
    component: <Task6 />,
  },
  task7: {
    title: 'Task 8 - RemoteData: the Sequel',
    component: <Task7 />,
  },
  task8: {
    title: 'Task 8 - IO-TS',
    component: <Task8 />,
  },
};
