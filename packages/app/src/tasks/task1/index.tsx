import {number} from 'fp-ts';
import {flow} from 'fp-ts/lib/function';
import React from 'react';
import {
  CompilingSystem,
  ChallengeCompiler,
  Challenge,
} from '../../components/CompilingSystem';

const add = (x: number) => (y: number) => x + y;
const mult = (x: number) => (y: number) => x * y;

const add1 = add(1);
const mult2 = mult(2);
const multNeg1 = mult(-1);

export function Task1() {
  const tas1Pipe: (i: number) => number = flow(
    add1,
    add1,
    add1,
    mult2,
    mult2,
    add1,
  );

  const tas2Pipe: (i: number) => string = flow(
    flow(add1, add1, add1, add1),
    multNeg1,
    mult2,
    mult2,
    add1,
    add1,
    add1,
    String,
  );

  const challenge: Challenge = {
    type: 'numberToNumber',
    title: 'Challenge 1.a',
    challenge: {
      input: 0,
      expectedOutput: 13,
      handler: tas1Pipe,
    },
  };

  const challenge2: Challenge = {
    type: 'numberToString',
    title: 'Challenge 1.b',
    challenge: {
      input: 0,
      expectedOutput: '-13',
      handler: tas2Pipe,
    },
  };

  return <CompilingSystem tasks={[challenge, challenge2]} />;
}
