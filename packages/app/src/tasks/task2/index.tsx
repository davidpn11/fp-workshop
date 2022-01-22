import React from 'react';
import {TaskSystem} from '../../components/TaskSystem';
import {TaskPage} from '../style';
import Challenge1Markdown from './challenge1.md';
import Challenge2Markdown from './challenge2.md';
import Challenge3Markdown from './challenge3.md';
import {
  resto1,
  resto2,
  challenge1a as challenge1aHandler,
  challenge1b as challenge1bHandler,
  challenge1c as challenge1cHandler,
} from './restaurant';
import {compareDates, renderDateCompare} from './dates';
import * as O from 'fp-ts/lib/Option';
import * as E from 'fp-ts/lib/Either';
import {NotificationBanner} from '@jet-pie/react';

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
  expectedOutput: 100,
  outputType: 'primitive',
  status: 'neutral',
  handler: challenge1bHandler,
};

const challenge1c: Challenge = {
  id: 'Challenge 1.c',
  input: resto2,
  inputType: 'json',
  expectedOutput: 'You have a TOP_PLACEMENT with $90 left',
  outputType: 'primitive',
  status: 'neutral',
  handler: challenge1cHandler,
};

const compareUncurry = (date1: Date, date2: Date, date3: Date) =>
  compareDates(date1, date2)(date3);

const date1 = new Date(2020, 5, 20);
const date2 = new Date(2020, 5, 23);
const date3 = new Date(2020, 6, 3);
const date4 = new Date(2020, 6, 18);
const date5 = new Date(2020, 6, 24);

const challenge2a: Challenge = {
  id: 'Challenge 2.a',
  input: {startDate: date1, endDate: '11/11/11', dateInput: date2},
  inputType: 'json',
  paramsType: 'spread',
  expectedOutput: E.left('UNSUPPORTED_VALUE'),
  outputType: 'json',
  status: 'neutral',
  handler: compareUncurry,
};

const challenge2b: Challenge = {
  id: 'Challenge 2.b',
  input: {startDate: date2, endDate: date1, dateInput: date3},
  inputType: 'json',
  paramsType: 'spread',
  expectedOutput: E.left('INVALID_RANGE'),
  outputType: 'json',
  status: 'neutral',
  handler: compareUncurry,
};
const challenge2c: Challenge = {
  id: 'Challenge 2.c',
  input: {startDate: date1, endDate: date3, dateInput: date4},
  inputType: 'json',
  paramsType: 'spread',
  expectedOutput: E.left('OUT_OF_RANGE_AFTER'),
  outputType: 'json',
  status: 'neutral',
  handler: compareUncurry,
};
const challenge2d: Challenge = {
  id: 'Challenge 2.d',
  input: {startDate: date4, endDate: date5, dateInput: date1},
  inputType: 'json',
  paramsType: 'spread',
  expectedOutput: E.left('OUT_OF_RANGE_BEFORE'),
  outputType: 'json',
  status: 'neutral',
  handler: compareUncurry,
};
const challenge2e: Challenge = {
  id: 'Challenge 2.e',
  input: {startDate: date1, endDate: date5, dateInput: date2},
  inputType: 'json',
  paramsType: 'spread',
  expectedOutput: E.right(date1),
  outputType: 'json',
  status: 'neutral',
  handler: compareUncurry,
};

const challenge2f: Challenge = {
  id: 'Challenge 2.f',
  input: {startDate: date1, endDate: date5, dateInput: date4},
  inputType: 'json',
  paramsType: 'spread',
  expectedOutput: E.right(date5),
  outputType: 'json',
  status: 'neutral',
  handler: compareUncurry,
};

const challengeSet1: ChallengeSet = {
  title: 'Challenge 1 - Option',
  markdown: Challenge1Markdown.markdown,
  challenges: [challenge1a, challenge1b, challenge1c],
};

const challengeSet2: ChallengeSet = {
  title: 'Challenge 2 - Either',
  markdown: Challenge2Markdown.markdown,
  challenges: [
    challenge2a,
    challenge2b,
    challenge2c,
    challenge2d,
    challenge2e,
    challenge2f,
  ],
};

const challenge3a: Challenge = {
  id: 'Challenge 3.a',
  input: [{startDate: date1, endDate: date4}, date2],
  inputType: 'json',
  paramsType: 'spread',
  expectedOutput: (
    <NotificationBanner variant="positive" title="In Range">
      06/20/2020
    </NotificationBanner>
  ),
  outputType: 'component',
  status: 'neutral',
  handler: renderDateCompare,
};

const challenge3b: Challenge = {
  id: 'Challenge 3.b',
  input: [{startDate: date1, endDate: date4}, date5],
  inputType: 'json',
  paramsType: 'spread',
  expectedOutput: (
    <NotificationBanner variant="error" title="Error">
      You got the following error: {'OUT_OF_RANGE_AFTER'}
    </NotificationBanner>
  ),
  outputType: 'component',
  status: 'neutral',
  handler: renderDateCompare,
};

const challengeSet3: ChallengeSet = {
  title: 'Challenge 3 - Either (final)',
  markdown: Challenge3Markdown.markdown,
  challenges: [challenge3a, challenge3b],
};

const task2: TaskType = {
  title: 'task2',
  sets: [challengeSet1, challengeSet2, challengeSet3],
  currentSet: challengeSet1,
};

export function Task2() {
  return (
    <TaskPage>
      <TaskSystem task={task2} />
    </TaskPage>
  );
}
