import React, {useEffect} from 'react';
import * as A from 'fp-ts/lib/Array';
import * as O from 'fp-ts/lib/Option';
import * as R from 'fp-ts/lib/Record';
import {identity, pipe} from 'fp-ts/lib/function';
import isEqual from 'react-fast-compare';
import {fromTaskK} from 'fp-ts/lib/FromTask';

//Failed store persistence atempt, as the handler is not being set its
// crashing when running a task
const STORAGE_KEY = 'FP_WORKSHOP_TASK';

const getPersistedTask = (fallback: TaskType) => {
  try {
    const localStorage = window.localStorage;
    const persisted = localStorage.getItem(STORAGE_KEY);
    if (persisted) {
      const taskType = JSON.parse(persisted) as TaskType;
      console.log({persisted: taskType, fallback});
      return {...fallback, currentSet: taskType.currentSet};
    }
    return fallback;
  } catch (error) {
    console.error(error);
    return fallback;
  }
};

const setPersistedTask = (task: TaskType) => {
  const localStorage = window.localStorage;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(task));
  } catch (error) {
    console.error(error);
  }
};

function usePersistedTask(runningTask: TaskType) {
  const [task, setTask] = React.useState(() => getPersistedTask(runningTask));

  useEffect(() => {
    setPersistedTask(task);
  }, [task]);

  return {task, setTask};
}

export function useTaskSystem(runningTask: TaskType) {
  // const {task, setTask} = usePersistedTask(runningTask);
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
          return o === output2[i];
        });
      case 'json':
        return isEqual(output1, output2);
      case 'component':
        console.log(output1.props, output2.props);
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

    const output =
      challenge.paramsType === 'spread'
        ? challenge.handler(...challenge.input)
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

  const completedModule = pipe(
    challengeStatus,
    R.every(c => c === 'positive'),
  );

  if (completedModule) {
    alert('Congrats, you Finished the module!');
  }

  return {task, changeSet, onRun, challengeStatus};
}
