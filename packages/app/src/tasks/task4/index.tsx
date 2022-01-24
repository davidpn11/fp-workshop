import React from 'react';
import {TaskSystem} from '../../components/TaskSystem';
import {TaskPage} from '../style';
import Challenge1Markdown from './challenge1.md';
import Challenge2Markdown from './challenge2.md';
import Challenge3Markdown from './challenge3.md';
import * as RD from './remote-data';
import {identity} from 'fp-ts/lib/function';

type Methods<A, B, E> = {
  whenInitial: () => B;
  whenLoading: () => B;
  whenSuccess: (result: A) => B;
  whenFailure: (error: E) => B;
};

const methods = {
  whenInitial: () => 'Initial',
  whenLoading: () => 'Loading',
  whenSuccess: (result: string) => `Success: ${result}`,
  whenFailure: (error: string) => `Failure: ${error}`,
};

const foldUncurry = <A, B, E>(
  methods: Methods<A, B, E>,
  rd: RD.RemoteData<A, E>,
) =>
  RD.fold<A, B, E>(
    methods.whenInitial,
    methods.whenLoading,
    methods.whenSuccess,
    methods.whenFailure,
  )(rd);

const successOrElseUncurry = <A, B, E>(
  methods: Omit<Methods<A, B, E>, 'whenLoading' | 'whenFailure'>,
  rd: RD.RemoteData<A, E>,
) => RD.successOrElse<A, B, E>(methods.whenSuccess, methods.whenInitial)(rd);

const failureOrElseUncurry = <A, B, E>(
  methods: Omit<Methods<A, B, E>, 'whenLoading' | 'whenSuccess'>,
  rd: RD.RemoteData<A, E>,
) => RD.failureOrElse<A, E, B>(methods.whenFailure, methods.whenInitial)(rd);

type Restaurant = {
  name: string;
  address: string;
};

export const resto1: Restaurant = {
  name: 'Anghethi',
  address: '222 Stonebridge Dr',
};

const challenge1a: Challenge = {
  id: 'Challenge 1.a',
  input: {},
  inputType: 'json',
  expectedOutput: {tag: 'initial'},
  outputType: 'json',
  status: 'neutral',
  handler: RD.initial,
};

const challenge1b: Challenge = {
  id: 'Challenge 1.b',
  input: {},
  inputType: 'json',
  expectedOutput: {tag: 'loading'},
  outputType: 'json',
  status: 'neutral',
  handler: RD.loading,
};

const challenge1c: Challenge = {
  id: 'Challenge 1.c',
  input: resto1,
  inputType: 'json',
  expectedOutput: {tag: 'success', result: resto1},
  outputType: 'json',
  status: 'neutral',
  handler: RD.success,
};

const challenge1d: Challenge = {
  id: 'Challenge 1.d',
  input: 'Execution error',
  inputType: 'primitive',
  expectedOutput: {tag: 'failure', error: 'Execution error'},
  outputType: 'json',
  status: 'neutral',
  handler: RD.failure,
};

const challenge2a: Challenge = {
  id: 'Challenge 2.a',
  input: RD.initial,
  inputType: 'json',
  expectedOutput: true,
  outputType: 'primitive',
  status: 'neutral',
  handler: RD.isInitial,
};

const challenge2b: Challenge = {
  id: 'Challenge 2.b',
  input: {tag: 'pending'},
  inputType: 'json',
  expectedOutput: false,
  outputType: 'primitive',
  status: 'neutral',
  handler: RD.isLoading,
};

const challenge2c: Challenge = {
  id: 'Challenge 2.c',
  input: {tag: 'success', result: null},
  inputType: 'json',
  expectedOutput: true,
  outputType: 'primitive',
  status: 'neutral',
  handler: RD.isSuccess,
};

const challenge2d: Challenge = {
  id: 'Challenge 2.d',
  input: {tag: 'failure', error: 'err'},
  inputType: 'json',
  expectedOutput: true,
  outputType: 'primitive',
  status: 'neutral',
  handler: RD.isFailure,
};

const challenge3a: Challenge = {
  id: 'Challenge 3.a',
  input: {
    methods: methods,
    rd: {tag: 'initial'},
  },
  paramsType: 'spread',
  inputType: 'json',
  expectedOutput: 'Initial',
  outputType: 'primitive',
  status: 'neutral',
  handler: foldUncurry,
};

const challenge3b: Challenge = {
  id: 'Challenge 3.b',
  input: {
    methods: methods,
    rd: {tag: 'success', result: 'Folds are awesome'},
  },
  paramsType: 'spread',
  inputType: 'json',
  expectedOutput: 'Success: Folds are awesome',
  outputType: 'primitive',
  status: 'neutral',
  handler: successOrElseUncurry,
};

const challenge3c: Challenge = {
  id: 'Challenge 3.c',
  input: {
    methods: methods,
    rd: {tag: 'failure', error: 'Unkown error'},
  },
  paramsType: 'spread',
  inputType: 'json',
  expectedOutput: 'Failure: Unkown error',
  outputType: 'primitive',
  status: 'neutral',
  handler: failureOrElseUncurry,
};

const challengeSet1: ChallengeSet = {
  title: 'Challenge 4 - RemoteData (Constructors)',
  markdown: Challenge1Markdown.markdown,
  challenges: [challenge1a, challenge1b, challenge1c, challenge1d],
};

const challengeSet2: ChallengeSet = {
  title: 'Challenge 4 - RemoteData (Validators)',
  markdown: Challenge2Markdown.markdown,
  challenges: [challenge2a, challenge2b, challenge2c, challenge2d],
};

const challengeSet3: ChallengeSet = {
  title: 'Challenge 4 - RemoteData (Iterators)',
  markdown: Challenge3Markdown.markdown,
  challenges: [challenge3a, challenge3b, challenge3c],
};

const task4: TaskType = {
  title: 'task3',
  sets: [challengeSet1, challengeSet2, challengeSet3],
  currentSet: challengeSet1,
};

export function Task4() {
  return (
    <TaskPage>
      <TaskSystem task={task4} />
    </TaskPage>
  );
}
