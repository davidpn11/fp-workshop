import {identity} from 'fp-ts/lib/function';
import React from 'react';
import {TaskSystem} from '../../components/TaskSystem';
import {TaskPage} from '../style';
import {
  resto1,
  resto2,
  resto3,
  resto4,
  resto5,
  menuItems1,
  menuItems2,
} from './types';
import {
  challenge1a as challenge1aHandler,
  challenge1b as challenge1bHandler,
  challenge1c as challenge1cHandler,
  challenge1d as challenge1dHandler,
  challenge1e as challenge1eHandler,
} from './challenges';
import Challenge1Markdown from './challenge1.md';
import Challenge2Markdown from './challenge2.md';
import * as E from 'fp-ts/lib/Either';
import * as O from 'fp-ts/lib/Option';

const challenge1a: Challenge = {
  id: 'Challenge 1.a',
  input: {menuItems: menuItems1, minimumPrice: 10},
  inputType: 'json',
  paramsType: 'spread',
  expectedOutput: [
    {
      id: '5',
      name: 'Peperonni Pizza',
      price: 18.2,
    },
    {id: '4', name: 'Bacon Burger', price: 10.5},
  ],
  outputType: 'json',
  status: 'neutral',
  handler: challenge1aHandler,
};

const challenge1b: Challenge = {
  id: 'Challenge 1.b (1)',
  input: {menuItems: menuItems2, itemName: 'Poutine'},
  paramsType: 'spread',
  inputType: 'json',
  expectedOutput: O.some('2'),
  outputType: 'json',
  status: 'neutral',
  handler: challenge1bHandler,
};

const challenge1b2: Challenge = {
  id: 'Challenge 1.b (2)',
  input: {menuItems: menuItems2, itemName: 'Big Mac'},
  paramsType: 'spread',
  inputType: 'json',
  expectedOutput: O.none,
  outputType: 'json',
  status: 'neutral',
  handler: challenge1bHandler,
};

const challenge1c: Challenge = {
  id: 'Challenge 1.c',
  input: [resto1, resto2, resto3, resto4, resto5],
  inputType: 'json',
  expectedOutput: ['Anghethi', 'Edo Japan', "Trifon's Pizza"],
  outputType: 'json',
  status: 'neutral',
  handler: challenge1cHandler,
};

const challenge1d: Challenge = {
  id: 'Challenge 1.d',
  input: [resto1, resto2, resto3, resto4, resto5],
  inputType: 'json',
  expectedOutput: {
    restoNames: ['Anghethi', "Trifon's Pizza"],
    totalBudget: 300,
  },
  outputType: 'json',
  status: 'neutral',
  handler: challenge1dHandler,
};

const challenge1e: Challenge = {
  id: 'Challenge 1.e (1)',
  input: resto2,
  inputType: 'json',
  expectedOutput: E.left(['COMPETITION']),
  outputType: 'json',
  status: 'neutral',
  handler: challenge1eHandler,
};

const challenge1e2: Challenge = {
  id: 'Challenge 1.e (2)',
  input: resto3,
  inputType: 'json',
  expectedOutput: E.right(['TOP_PLACEMENT', 'FREE_ITEM']),
  outputType: 'json',
  status: 'neutral',
  handler: challenge1eHandler,
};

const challenge1e3: Challenge = {
  id: 'Challenge 1.e (3)',
  input: resto4,
  inputType: 'json',
  expectedOutput: E.left(['CITY_NOT_ELIGIBLE', 'COMPETITION']),
  outputType: 'json',
  status: 'neutral',
  handler: challenge1eHandler,
};

const challengeSet1: ChallengeSet = {
  title: 'Challenge 5 - Record and Array',
  markdown: Challenge1Markdown.markdown,
  challenges: [
    challenge1a,
    challenge1b,
    challenge1b2,
    challenge1c,
    challenge1d,
    challenge1e,
    challenge1e2,
    challenge1e3,
  ],
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
