import {number} from 'fp-ts';
import {flow} from 'fp-ts/lib/function';
import React from 'react';
import {
  CompilingSystem,
  ChallengeCompiler,
  Challenge,
} from '../../components/CompilingSystem';
import {challenge1a, challenge1b, challenge1c, challenge1d} from './challenge';
import {TaskPage} from '../style';

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

  return (
    <TaskPage>
      <CompilingSystem tasks={[c1a, c1b, c1c, c1d]} />{' '}
    </TaskPage>
  );
}
