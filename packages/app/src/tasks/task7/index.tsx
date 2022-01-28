import {identity} from 'fp-ts/lib/function';
import React from 'react';
import {TaskSystem} from '../../components/TaskSystem';
import {TaskPage} from '../style';
import Challenge1Markdown from './challenge1.md';
import {
  anyFailures,
  successMap,
  initial,
  loading,
  success,
  failure,
} from './remote-data';
import * as O from 'fp-ts/lib/Option';

type User = {
  id: number;
  name: string;
  status: 'online' | 'offline';
  permission: 'VIEW' | 'EDIT' | 'ADMIN';
};

const challenge1a1: Challenge = {
  id: 'Challenge 1.a (1)',
  input: [loading, success(1), failure('critical')],
  inputType: 'json',
  expectedOutput: O.some(failure('critical')),
  outputType: 'json',
  status: 'neutral',
  handler: anyFailures,
};
const challenge1a2: Challenge = {
  id: 'Challenge 1.a (2)',
  input: [loading, success(1), initial(), success(2)],
  inputType: 'json',
  expectedOutput: O.none,
  outputType: 'json',
  status: 'neutral',
  handler: anyFailures,
};

const challenge1b1: Challenge = {
  id: 'Challenge 1.b (1)',
  input: loading(),
  inputType: 'json',
  expectedOutput: {tag: 'loading'},
  outputType: 'json',
  status: 'neutral',
  handler: successMap((u: User) => u.name),
};

const challenge1b2: Challenge = {
  id: 'Challenge 1.b (2)',
  input: success({id: 1, name: 'david', status: 'online', permission: 'VIEW'}),
  inputType: 'json',
  expectedOutput: success('david'),
  outputType: 'json',
  status: 'neutral',
  handler: successMap((u: User) => u.name),
};

const challengeSet1: ChallengeSet = {
  title: 'Challenge 1.a',
  markdown: Challenge1Markdown.markdown,
  challenges: [challenge1a1, challenge1a2, challenge1b1, challenge1b2],
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
