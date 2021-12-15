import React from 'react';
import * as A from 'fp-ts/lib/Array';
import * as O from 'fp-ts/lib/Option';
import {identity, pipe} from 'fp-ts/lib/function';

export function useTaskSystem(runningTask: TaskType) {
  const [task, setTask] = React.useState(runningTask);

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
    console.log(sets);
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

  return {task, changeSet, onRun, challengeStatus};
}
