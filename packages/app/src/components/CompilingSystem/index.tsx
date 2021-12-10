import {IconButton} from '@jet-pie/react';
import {Play} from '@jet-pie/react/esm/icons';

import React from 'react';
import {
  InputBox,
  BallsWrapper,
  SystemWrapper,
  Ball,
  OutputBox,
  Wrapper,
} from './styles';

export type ChallengeCompiler<I, O> = {
  input: I;
  expectedOutput: O;
  handler: (i: I) => O;
};

type ChallengeTypes =
  | {
      type: 'numberToNumber';
      challenge: ChallengeCompiler<number, number>;
    }
  | {
      type: 'numberToString';
      challenge: ChallengeCompiler<number, string>;
    }
  | {
      type: 'jsonObject';
      challenge: ChallengeCompiler<number, number>;
    };

export type Challenge = {
  title: string;
} & ChallengeTypes;

type Props = {
  tasks: Challenge[];
  // | Task<number, string>
  // | Task<string, number>;
};
export type Status = 'positive' | 'negative' | 'neutral';
export type State<T> =
  | {
      status: 'neutral';
    }
  | {
      status: 'positive';
      answer: T;
    }
  | {
      status: 'negative';
      answer: T;
    };

type BallsProps = {
  size: number;
  active: number;
  onSelect: (i: number) => void;
  status: TasksStatus;
};

function Balls(props: BallsProps) {
  const onClick = (i: number) => () => props.onSelect(i);
  const arr = Array.from({length: props.size});

  console.log(props.status);
  return (
    <BallsWrapper>
      {arr.map((_, i) => {
        console.log(i, props.status[i]);
        return (
          <Ball
            status={props.status[i]}
            active={i === props.active}
            key={i}
            onClick={onClick(i)}
          />
        );
      })}
    </BallsWrapper>
  );
}

type TasksStatus = Record<string, Status>;

type ActionTypes =
  | {type: 'COMPLETE_TASK'; payload: number}
  | {type: 'FAIL_TASK'; payload: number};

const completionReducer = (state: TasksStatus, action: ActionTypes) => {
  switch (action.type) {
    case 'COMPLETE_TASK':
      return {...state, [action.payload]: 'positive'};
    case 'FAIL_TASK':
      return {...state, [action.payload]: 'negative'};
    default:
      return state;
  }
};

export function CompilingSystem(props: Props) {
  const [taskPos, setTaskPos] = React.useState(0);
  const [completion, dispatch] = React.useReducer(
    completionReducer,
    props.tasks.reduce((acc, _, i) => ({...acc, [i]: 'neutral'}), {}),
  );

  const onTaskRun = (status: Status) => {
    dispatch({
      type: status === 'positive' ? 'COMPLETE_TASK' : 'FAIL_TASK',
      payload: taskPos,
    });
  };

  if (props.tasks.length === 0) return <>no tasks</>;

  const currentChallenge = props.tasks[taskPos];

  return (
    <SystemWrapper>
      <h1>{currentChallenge.title}</h1>
      {currentChallenge.type === 'numberToNumber' && (
        <TaskRunnerPrimitive
          onRun={onTaskRun}
          challenge={currentChallenge.challenge}
        />
      )}
      {currentChallenge.type === 'numberToString' && (
        <TaskRunnerPrimitive
          onRun={onTaskRun}
          challenge={currentChallenge.challenge}
        />
      )}
      <Balls
        status={completion}
        size={props.tasks.length}
        active={taskPos}
        onSelect={i => setTaskPos(i)}
      />
    </SystemWrapper>
  );
}

type TaskRunnerPrimitive = {
  challenge:
    | ChallengeCompiler<number, number>
    | ChallengeCompiler<number, string>;
  onRun: (status: Status) => void;
};

export function TaskRunnerPrimitive(props: TaskRunnerPrimitive) {
  const [state, setState] = React.useState<State<number | string>>({
    status: 'neutral',
  });
  const [output, setOutput] = React.useState<string | number | null>(null);

  const run = () => {
    const newOutput = props.challenge.handler(props.challenge.input);
    setOutput(newOutput);
    setState({
      answer: newOutput,
      status:
        newOutput === props.challenge.expectedOutput ? 'positive' : 'negative',
    });
    props.onRun(
      newOutput === props.challenge.expectedOutput ? 'positive' : 'negative',
    );
  };

  return (
    <Wrapper>
      <InputBox>
        <h2>Input</h2>
        {props.challenge.input}
      </InputBox>
      <IconButton
        size="large"
        variant="secondary"
        icon={<Play />}
        onClick={run}
      />
      <OutputBox state={state.status}>
        <h2>Output</h2>
        {output || '-'}
      </OutputBox>
    </Wrapper>
  );
}
