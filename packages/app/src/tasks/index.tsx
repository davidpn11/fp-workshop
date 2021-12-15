import {Task1} from './task1';
import {Task2} from './task2';
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
};
