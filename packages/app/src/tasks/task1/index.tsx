import React from 'react';
import {TaskSystem} from '../../components/TaskSystem';

import {
  challenge1a as challenge1aHandler,
  challenge1b as challenge1bHandler,
  challenge1c as challenge1cHandler,
  challenge1d as challenge1dHandler,
  challenge2a as challenge2aHandler,
  challenge2b as challenge2bHandler,
} from './challenge';
import {TaskPage} from '../style';
import Challenge1Markdown from './challenge1.md';
import Challenge2Markdown from './challenge2.md';

const challenge1a: Challenge = {
  id: 'Challenge 1.a',
  input: 1,
  expectedOutput: 9,
  status: 'neutral',
  handler: challenge1aHandler,
  type: 'primitive',
};
const challenge1b: Challenge = {
  id: 'Challenge 1.a',
  input: 1,
  expectedOutput: 16,
  status: 'neutral',
  handler: challenge1bHandler,
  type: 'primitive',
};
const challenge1c: Challenge = {
  id: 'Challenge 1.a',
  input: 1,
  expectedOutput: 13,
  status: 'neutral',
  handler: challenge1cHandler,
  type: 'primitive',
};
const challenge1d: Challenge = {
  id: 'Challenge 1.a',
  input: 1,
  expectedOutput: '-13',
  status: 'neutral',
  handler: challenge1dHandler,
  type: 'primitive',
};

const challenge2a: Challenge = {
  id: 'Challenge 2.a',
  input: 0,
  expectedOutput: 9,
  status: 'neutral',
  handler: challenge2aHandler,
  type: 'primitive',
};

const challenge2b: Challenge = {
  id: 'Challenge 2.b',
  input: 0,
  expectedOutput: 16,
  status: 'neutral',
  handler: challenge2bHandler,
  type: 'primitive',
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
