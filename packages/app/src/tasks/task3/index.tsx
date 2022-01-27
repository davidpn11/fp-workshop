import {identity} from 'fp-ts/lib/function';
import React from 'react';
import {TaskSystem} from '../../components/TaskSystem';
import {TaskPage} from '../style';
import Challenge1Markdown from './challenge1.md';
import {
  challenge1a as challenge1aHandler,
  challenge1b as challenge1bHandler,
  challenge1c as challenge1cHandler,
} from './users';
import * as E from 'fp-ts/lib/Either';

const challenge1a: Challenge = {
  id: 'Challenge 1.a',
  input: ['128'],
  inputType: 'json',
  expectedOutput: E.right({
    name: 'Admin',
    status: 'online',
    permission: 'ADMIN',
  }),
  outputType: 'json',
  status: 'neutral',
  handler: challenge1aHandler,
  async: true,
};

const challenge1b1: Challenge = {
  id: 'Challenge 1.b (1)',
  input: ['128', '256'],
  inputType: 'json',
  expectedOutput: E.right([
    {
      name: 'Admin',
      status: 'online',
      permission: 'ADMIN',
    },
    {
      name: 'Chales',
      status: 'online',
      permission: 'VIEW',
    },
  ]),
  outputType: 'json',
  status: 'neutral',
  handler: challenge1bHandler,
  async: true,
};

const challenge1b2: Challenge = {
  id: 'Challenge 1.b (2)',
  input: ['404'],
  inputType: 'json',
  expectedOutput: E.left('404 not found'),
  outputType: 'json',
  status: 'neutral',
  handler: challenge1bHandler,
  async: true,
};

const challenge1c: Challenge = {
  id: 'Challenge 1.c',
  input: ['128', '256', '512'],
  inputType: 'json',
  expectedOutput: E.right(['Admin', 'Chales', 'John']),
  outputType: 'json',
  status: 'neutral',
  handler: challenge1cHandler,
  async: true,
};

const challengeSet1: ChallengeSet = {
  title: 'Challenge 1.a',
  markdown: Challenge1Markdown.markdown,
  challenges: [challenge1a, challenge1b1, challenge1b2, challenge1c],
};

const task3: TaskType = {
  title: 'task3',
  sets: [challengeSet1],
  currentSet: challengeSet1,
};

export function Task3() {
  return (
    <TaskPage>
      <TaskSystem task={task3} />
    </TaskPage>
  );
}
