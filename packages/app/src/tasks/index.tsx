import Task1Markdown from './task1/task1.md';
import {Task1} from './task1/index';
import React from 'react';

export type Task = {
  title: string;
  markdown: string;
  component: React.ReactNode;
};
export const taskList: Record<string, Task> = {
  task1: {
    title: 'Task 1 - Pipe and Flow',
    markdown: Task1Markdown.markdown,
    component: <Task1 />,
  },
};
