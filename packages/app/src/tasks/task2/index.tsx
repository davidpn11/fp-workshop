import React from 'react';
import {TaskSystem} from '../../components/TaskSystem';
import {TaskPage} from '../style';
import Challenge1Markdown from './challenge1.md';
import Challenge2Markdown from './challenge2.md';
import {
  resto1,
  resto2,
  resto3,
  challenge1a as challenge1aHandler,
  challenge1b as challenge1bHandler,
} from './restaurant';
import * as O from 'fp-ts/lib/Option';

const challenge1a: Challenge = {
  id: 'Challenge 1.a',
  input: resto1,
  inputType: 'json',
  expectedOutput: O.none,
  outputType: 'json',
  status: 'neutral',
  handler: challenge1aHandler,
};

const challenge1b: Challenge = {
  id: 'Challenge 1.b',
  input: resto2,
  inputType: 'json',
  expectedOutput: 'You have a TOP_PLACEMENT with $90 left',
  outputType: 'primitive',
  status: 'neutral',
  handler: challenge1bHandler,
};

const challengeSet1: ChallengeSet = {
  title: 'Challenge 1 - Option',
  markdown: Challenge1Markdown.markdown,
  challenges: [challenge1a, challenge1b],
};

const challengeSet2: ChallengeSet = {
  title: 'Challenge 2 - Either',
  markdown: Challenge2Markdown.markdown,
  challenges: [],
};

const task2: TaskType = {
  title: 'task2',
  sets: [challengeSet1, challengeSet2],
  currentSet: challengeSet1,
};
export function Task2() {
  return (
    <TaskPage>
      <TaskSystem task={task2} />
    </TaskPage>
  );
}
