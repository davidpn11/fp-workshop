import React from 'react';
import * as A from 'fp-ts/lib/Array';
import * as O from 'fp-ts/lib/Option';
import {identity, pipe} from 'fp-ts/lib/function';
import isEqual from 'react-fast-compare';

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

  const compareOutputs = (type: IOType, output1: any, output2: any) => {
    switch (type) {
      case 'primitive':
        return output1 === output2;
      case 'array':
        return output1.every((o: string | number, i: string | number) => {
          console.log({output1, output2});
          console.log({o, i});
          return o === output2[i];
        });
      case 'json':
        return isEqual(output1, output2);
      default:
        break;
    }
  };

  const onRun = (id: string) => {
    const challenge = pipe(
      task.currentSet.challenges,
      A.findFirst(a => a.id === id),
      O.fold(() => {
        throw new Error();
      }, identity),
    );

    console.log('input', challenge.input);
    const output =
      challenge.outputType === 'primitive'
        ? challenge.handler(challenge.input)
        : challenge.handler(...challenge.input);
    const sets: ChallengeSet[] = pipe(
      task.sets,
      A.map(set => {
        const challenges = pipe(
          set.challenges,
          A.map(c => {
            if (c.id === id) {
              console.log(c);
              return {
                ...c,
                output,
                status: (compareOutputs(c.outputType, output, c.expectedOutput)
                  ? 'positive'
                  : 'negative') as Status,
              };
            }
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

  return {task, changeSet, onRun, challengeStatus};
}
