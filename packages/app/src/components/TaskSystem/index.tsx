import React from 'react';

import * as R from 'fp-ts/lib/Record';
import * as A from 'fp-ts/lib/Array';
import * as O from 'fp-ts/lib/Option';
import {identity, pipe} from 'fp-ts/lib/function';
import {Balls} from './components/Balls';
import {MarkdownPage} from '../MarkdownPage';
import {TaskRunner} from './components/TaskRunner';
import {TaskPage} from '../../tasks/style';

type Props = {
  task: TaskType;
};

export function TaskSystem(props: Props) {
  const [task, setTask] = React.useState(props.task);

  const changeSet = (id: string) => {
    setTask({
      ...task,
      currentSet: pipe(
        task.sets,
        A.findFirst(s => s.title === id),
        O.getOrElse(() => task.currentSet),
      ),
    });
  };

  const onRun = (id: string) => {
    const challenge = pipe(
      task.currentSet.challenges,
      A.findFirst(a => a.id === id),
      O.fold(() => {
        throw new Error();
      }, identity),
    );

    const output = challenge.handler(challenge.input);
    const sets: ChallengeSet[] = pipe(
      task.sets,
      A.map(set => {
        const challenges = pipe(
          set.challenges,
          A.map(c => {
            if (c.id === id)
              return {
                ...c,
                output,
                status: (output === c.expectedOutput
                  ? 'positive'
                  : 'negative') as Status,
              };
            return c;
          }),
        );
        return {...set, challenges};
      }),
    );
    setTask({
      ...task,
      sets,
      currentSet: pipe(
        sets,
        A.findFirst(s => s.title === task.currentSet.title),
        O.getOrElse(() => task.currentSet),
      ),
    });
  };

  const challengeStatus: ChallengeStatus = pipe(
    task.sets,
    A.reduce({}, (acc, set) => {
      return {
        ...acc,
        [set.title]: set.challenges.every(s => s.status === 'positive')
          ? 'positive'
          : 'neutral',
      };
    }),
  );

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
