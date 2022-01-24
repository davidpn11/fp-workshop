import {identity} from 'fp-ts/lib/function';
import React from 'react';
import {TaskSystem} from '../../components/TaskSystem';
import {TaskPage} from '../style';
import Challenge1Markdown from './challenge1.md';
import Challenge2Markdown from './challenge2.md';

const challenge1a: Challenge = {
  id: 'Challenge 1.a',
  input: {},
  paramsType: 'spread',
  inputType: 'json',
  expectedOutput: 'Success: Folds are awesome',
  outputType: 'primitive',
  status: 'neutral',
  handler: identity,
};

const challenge1b: Challenge = {
  id: 'Challenge 1.b',
  input: {},
  paramsType: 'spread',
  inputType: 'json',
  expectedOutput: 'Failure: Unkown error',
  outputType: 'primitive',
  status: 'neutral',
  handler: identity,
};

const challengeSet1: ChallengeSet = {
  title: 'Challenge 5 - Record and Array',
  markdown: Challenge1Markdown.markdown,
  challenges: [challenge1a, challenge1b],
};
const challengeSet2: ChallengeSet = {
  title: 'Challenge 5 - Record and Array',
  markdown: Challenge2Markdown.markdown,
  challenges: [challenge1a, challenge1b],
};

const task4: TaskType = {
  title: 'task3',
  sets: [challengeSet1, challengeSet2],
  currentSet: challengeSet1,
};

export function Task5() {
  return (
    <TaskPage>
      <TaskSystem task={task4} />
    </TaskPage>
  );
}
