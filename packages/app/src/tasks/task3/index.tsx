import React from 'react';
import {TaskSystem} from '../../components/TaskSystem';
import {TaskPage} from '../style';
import Challenge1Markdown from './challenge1.md';

const challengeSet1: ChallengeSet = {
  title: 'Challenge 1 - Task',
  markdown: Challenge1Markdown.markdown,
  challenges: [],
};

const task3: TaskType = {
  title: 'task3',
  sets: [challengeSet1],
  currentSet: challengeSet1,
};

export function Task3() {
  return (
    <TaskPage>
      <TaskSystem task={task3} />
    </TaskPage>
  );
}
