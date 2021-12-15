import React from 'react';
import {Balls} from './components/Balls';
import {MarkdownPage} from '../MarkdownPage';
import {TaskRunner} from './components/TaskRunner';
import {TaskPage} from '../../tasks/style';
import {useTaskSystem} from './hooks/useTaskSystem';

type Props = {
  task: TaskType;
};

export function TaskSystem(props: Props) {
  const {task, changeSet, onRun, challengeStatus} = useTaskSystem(props.task);
  return (
    <TaskPage>
      <MarkdownPage content={task.currentSet.markdown || ''} />
      {task.currentSet.challenges.map(challenge => (
        <TaskRunner key={challenge.id} challenge={challenge} onRun={onRun} />
      ))}
      <Balls
        active={task.currentSet.title}
        onSelect={changeSet}
        challengeStatus={challengeStatus}
      />
    </TaskPage>
  );
}
