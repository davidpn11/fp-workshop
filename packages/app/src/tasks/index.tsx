import Task1Markdown from './task1/task1.md';
import Task2Markdown from './task2/task2.md';
import {Task1} from './task1';
import {Task2} from './task2';
import React from 'react';

export type Task = {
  title: string;
  markdown: string;
  component: React.ReactNode;
};
export const taskList: Record<string, Task> = {
  task1: {
    title: 'Task 1 - Currying and composition',
    markdown: Task1Markdown.markdown,
    component: <Task1 />,
  },
  task2: {
    title: 'Task 2 - Pipe and Flow',
    markdown: Task2Markdown.markdown,
    component: <Task2 />,
  },
};
