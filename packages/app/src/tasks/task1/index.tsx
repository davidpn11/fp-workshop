import React from 'react';
import {number} from 'fp-ts';
import {flow} from 'fp-ts/lib/function';
import {TaskSystem} from '../../components/TaskSystem';

// import {
//   challenge1a,
//   challenge1b,
//   challenge1c,
//   challenge1d,
//   challenge2a,
//   Student,
//   students,
// } from './challenge';
import {TaskPage} from '../style';

const handler = (a: string) => a;

const challenge1a: Challenge = {
  id: 'Challenge 1.a',
  input: 1,
  expectedOutput: 9,
  status: 'neutral',
  handler,
  type: 'primitive',
};

const challenge1b: Challenge = {
  id: 'Challenge 1.b',
  input: 0,
  expectedOutput: 16,
  status: 'neutral',
  handler,
  type: 'primitive',
};

const challenge2a: Challenge = {
  id: 'Challenge 2.a',
  input: 0,
  expectedOutput: 9,
  status: 'neutral',
  handler,
  type: 'primitive',
};

const challenge2b: Challenge = {
  id: 'Challenge 2.b',
  input: 0,
  expectedOutput: 16,
  status: 'neutral',
  handler,
  type: 'primitive',
};

const challengeSet1: ChallengeSet = {
  title: 'Challenge 1',
  markdown: 'Challenge1',
  challenges: [challenge1a, challenge1b],
};

const challengeSet2: ChallengeSet = {
  title: 'Challenge 2',
  markdown: 'Challenge2',
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
