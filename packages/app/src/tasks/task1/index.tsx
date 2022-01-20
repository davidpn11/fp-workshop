import React from 'react';
import {TaskSystem} from '../../components/TaskSystem';

import {
  challenge1a as challenge1aHandler,
  challenge1b as challenge1bHandler,
  challenge1c as challenge1cHandler,
  challenge1d as challenge1dHandler,
  challenge2a as challenge2aHandler,
  challenge2b as challenge2bHandler,
  Student,
} from './challenge';
import {TaskPage} from '../style';
import Challenge1Markdown from './challenge1.md';
import Challenge2Markdown from './challenge2.md';

const students: Student[] = [
  {
    firstName: 'Stephen',
    lastName: 'Hawking',
    score: 70,
    graduated: false,
  },
  {
    firstName: 'Albert',
    lastName: 'Einstein',
    score: 90,
    graduated: false,
  },
  {
    firstName: 'Isaac',
    lastName: 'Newton',
    score: 75,
    graduated: false,
  },
];

const students2bOutput: Student[] = [
  {
    firstName: 'Stephen',
    lastName: 'Hawking',
    score: 70,
    graduated: true,
  },
  {
    firstName: 'Albert',
    lastName: 'Einstein',
    score: 90,
    graduated: true,
  },
  {
    firstName: 'Isaac',
    lastName: 'Newton',
    score: 75,
    graduated: false,
  },
];

const challenge1a: Challenge = {
  id: 'Challenge 1.a',
  input: 0,
  inputType: 'primitive',
  expectedOutput: 9,
  outputType: 'primitive',
  status: 'neutral',
  handler: challenge1aHandler,
};
const challenge1b: Challenge = {
  id: 'Challenge 1.b',
  input: 0,
  inputType: 'primitive',
  expectedOutput: 16,
  outputType: 'primitive',
  status: 'neutral',
  handler: challenge1bHandler,
};
const challenge1c: Challenge = {
  id: 'Challenge 1.c',
  input: 0,
  inputType: 'primitive',
  expectedOutput: 13,
  outputType: 'primitive',
  status: 'neutral',
  handler: challenge1cHandler,
};
const challenge1d: Challenge = {
  id: 'Challenge 1.d',
  input: 0,
  inputType: 'primitive',
  expectedOutput: '-13',
  outputType: 'primitive',
  status: 'neutral',
  handler: challenge1dHandler,
};

const challenge2a: Challenge = {
  id: 'Challenge 2.a',
  input: {students, score: 73},
  inputType: 'json',
  expectedOutput: ['Einstein', 'Newton'],
  outputType: 'array',
  paramsType: 'spread',
  status: 'neutral',
  handler: challenge2aHandler,
};

const challenge2b: Challenge = {
  id: 'Challenge 2.b',
  input: {students, names: ['Hawking', 'Einstein']},
  inputType: 'json',
  expectedOutput: students2bOutput,
  paramsType: 'spread',
  outputType: 'json',
  status: 'neutral',
  handler: challenge2bHandler,
};

const challengeSet1: ChallengeSet = {
  title: 'Challenge 1',
  markdown: Challenge1Markdown.markdown,
  challenges: [challenge1a, challenge1b, challenge1c, challenge1d],
};

const challengeSet2: ChallengeSet = {
  title: 'Challenge 2',
  markdown: Challenge2Markdown.markdown,
  challenges: [challenge2a, challenge2b],
};

const task1: TaskType = {
  title: 'Task1',
  sets: [challengeSet1, challengeSet2],
  currentSet: challengeSet1,
};

export function Task1() {
  return (
    <TaskPage>
      <TaskSystem task={task1} />
    </TaskPage>
  );
}
