import React from 'react';
import {TaskSystem} from '../../components/TaskSystem';
import {TaskPage} from '../style';
import Challenge1Markdown from './challenge1.md';

const challengeSet1: ChallengeSet = {
  title: 'Challenge 1 - RemoteData',
  markdown: Challenge1Markdown.markdown,
  challenges: [],
};

const task4: TaskType = {
  title: 'task3',
  sets: [challengeSet1],
  currentSet: challengeSet1,
};

export function Task4() {
  return (
    <TaskPage>
      <TaskSystem task={task4} />
    </TaskPage>
  );
}
