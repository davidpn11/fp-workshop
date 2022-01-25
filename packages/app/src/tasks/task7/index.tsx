import {identity} from 'fp-ts/lib/function';
import React from 'react';
import {TaskSystem} from '../../components/TaskSystem';
import {TaskPage} from '../style';
import Challenge1Markdown from './challenge1.md';

const challenge1a: Challenge = {
  id: 'Challenge 1.a',
  input: {},
  inputType: 'json',
  expectedOutput: {},
  outputType: 'json',
  status: 'neutral',
  handler: identity,
};

const challengeSet1: ChallengeSet = {
  title: 'Challenge 1.a',
  markdown: Challenge1Markdown.markdown,
  challenges: [challenge1a],
};

const task3: TaskType = {
  title: 'task3',
  sets: [challengeSet1],
  currentSet: challengeSet1,
};

export function Task7() {
  return (
    <TaskPage>
      <TaskSystem task={task3} />
    </TaskPage>
  );
}
