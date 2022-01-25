import React, {useEffect} from 'react';
import * as A from 'fp-ts/lib/Array';
import * as O from 'fp-ts/lib/Option';
import * as R from 'fp-ts/lib/Record';
import {identity, pipe} from 'fp-ts/lib/function';
import isEqual from 'react-fast-compare';

export function useTaskSystem(runningTask: TaskType) {
  const [task, setTask] = React.useState(runningTask);

  useEffect(() => {
    const getCurrentSet = () => {
      if (task.currentSet.title !== runningTask.currentSet.title) {
        return pipe(
          runningTask.sets,
          A.findFirst(s => s.title === task.currentSet.title),
          O.getOrElse(() => runningTask.currentSet),
          a => ({
            ...a,
            challenges: pipe(
              task.currentSet.challenges,
              A.map(currC => ({
                ...currC,
                ...pipe(
                  a.challenges,
                  A.findFirst(runC => runC.id === currC.id),
                  O.fold(
                    () => ({handler: currC.handler, input: currC.input}),
                    runC => ({handler: runC.handler, input: runC.input}),
                  ),
                ),
              })),
            ),
          }),
        );
      }

      return {
        ...task.currentSet,
        challenges: pipe(
          task.currentSet.challenges,
          A.map(currC => ({
            ...currC,
            ...pipe(
              runningTask.currentSet.challenges,
              A.findFirst(runC => runC.id === currC.id),
              O.fold(
                () => ({handler: currC.handler, input: currC.input}),
                runC => ({handler: runC.handler, input: runC.input}),
              ),
            ),
          })),
        ),
      };
    };

    const newCurrentSet = getCurrentSet();

    const updatedSets = pipe(
      task.sets,
      A.map(a => {
        if (a.title === newCurrentSet.title) {
          return {
            ...a,
            challenges: pipe(
              task.currentSet.challenges,
              A.map(currC => ({
                ...currC,
                ...pipe(
                  runningTask.currentSet.challenges,
                  A.findFirst(runC => runC.id === currC.id),
                  O.fold(
                    () => ({handler: currC.handler, input: currC.input}),
                    runC => ({handler: runC.handler, input: runC.input}),
                  ),
                ),
              })),
            ),
          };
        }
        return a;
      }),
    );

    setTask({...task, sets: updatedSets, currentSet: newCurrentSet});
  }, [runningTask.currentSet]);

  const changeSet = (id: string) => {
    setTask({
      ...task,
      currentSet: pipe(
        runningTask.sets,
        A.findFirst(s => s.title === id),
        O.getOrElse(() => runningTask.currentSet),
      ),
    });
  };

  const compareOutputs = (type: IOType, output1: any, output2: any) => {
    switch (type) {
      case 'primitive':
        return output1 === output2;
      case 'array':
        return output1.every((o: string | number, i: string | number) => {
          return o === output2[i];
        });
      case 'json':
        return isEqual(output1, output2);
      case 'component':
        return isEqual(output1.props, output2.props);
      default:
        return false;
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
    console.log(task, runningTask);

    const output =
      challenge.paramsType === 'spread'
        ? challenge.handler(...pipe(challenge.input, Object.values))
        : challenge.handler(challenge.input);

    const sets: ChallengeSet[] = pipe(
      task.sets,
      A.map(set => {
        const challenges = pipe(
          set.challenges,
          A.map(c => {
            if (c.id === id) {
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
  ``;

  const completedModule = pipe(
    challengeStatus,
    R.every(c => c === 'positive'),
  );

  if (completedModule) {
    alert('Congrats, you Finished the module!');
  }

  return {task, changeSet, onRun, challengeStatus};
}
