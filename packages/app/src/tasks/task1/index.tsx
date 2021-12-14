import {number} from 'fp-ts';
import {flow} from 'fp-ts/lib/function';
import React from 'react';
import {
  CompilingSystem,
  ChallengeCompiler,
  Challenge,
} from '../../components/CompilingSystem';
import {
  challenge1a,
  challenge1b,
  challenge1c,
  challenge1d,
  challenge2a,
  Student,
  students,
} from './challenge';
import {TaskPage} from '../style';
import {
  TaskSystem,
  SystemTypes,
  SystemTypeText,
} from '../../components/App/TaskSystem';

type Challen = {
  id: string;
  title: string;
  type: 'text';
  expectedOutput: string | number;
  system: SystemTypeText;
  // handler: (s: string) => string | ((s: number) => number);
};

export function Task1() {
  const c1a: Challenge = {
    type: 'numberToNumber',
    title: 'Challenge 1.a',
    challenge: {
      input: 0,
      expectedOutput: 9,
      handler: challenge1a,
    },
  };
  const c1b: Challenge = {
    type: 'numberToNumber',
    title: 'Challenge 1.b',
    challenge: {
      input: 0,
      expectedOutput: 16,
      handler: challenge1b,
    },
  };
  const c1c: Challenge = {
    type: 'numberToNumber',
    title: 'Challenge 1.c',
    challenge: {
      input: 0,
      expectedOutput: 13,
      handler: challenge1c,
    },
  };

  const c1d: Challenge = {
    type: 'numberToString',
    title: 'Challenge 1.d',
    challenge: {
      input: 0,
      expectedOutput: '-13',
      handler: challenge1d,
    },
  };

  const c2a: Challenge<{students: Student[]; score: number}> = {
    type: 'jsonToString',
    title: 'Challenge 2.a',
    challenge: {
      input: {students, score: 10},
      expectedOutput: ['david'],
      handler: challenge2a,
      extraInputs: {score: 10},
      inputKey: 'students',
    },
  };

  //@ts-ignore
  const tasks: Challenge[] = [c1a, c1b, c1c, c1d, c2a];

  const chall1 = (s: number | string) => {
    return s;
  };

  const c1a2: Challen = {
    id: 'c1a',
    type: 'text',
    title: 'Challenge 1.a',
    expectedOutput: 9,
    system: {
      id: 'c1a',
      type: 'text',
      input: 0,
      output: 0,
      status: 'neutral',
    },
  };

  const onRun = (id: string) => {
    if (id === c1a2.id) {
      const res = chall1(c1a2.system.input);
      console.log({res});
    }
  };

  return (
    <TaskPage>
      {/* <CompilingSystem tasks={tasks} /> */}
      <TaskSystem system={c1a2.system} onRun={onRun} />{' '}
    </TaskPage>
  );
}
