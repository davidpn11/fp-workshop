import {IconButton, Button} from '@jet-pie/react';
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

export type ChallengeCompilerComplex<I = {}, S = {}, O = string[]> = {
  input: I;
  expectedOutput: O;
  extraInputs: any;
  handler: (...i: any) => S;
  inputKey: keyof I;
};

type ChallengeTypes<T = {}> =
  | {
      type: 'numberToNumber';
      challenge: ChallengeCompiler<number, number>;
    }
  | {
      type: 'numberToString';
      challenge: ChallengeCompiler<number, string>;
    }
  | {
      type: 'jsonToString';
      challenge: ChallengeCompilerComplex<T, string[], string[]>;
    };

export type Challenge<T = {}> = {
  title: string;
} & ChallengeTypes<T>;

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

  return (
    <BallsWrapper>
      {arr.map((_, i) => {
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
      {currentChallenge.type === 'jsonToString' && (
        <TaskRunnerComplex
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

type TaskRunnerComplex<T = {}> = {
  challenge:
    | ChallengeCompilerComplex<T, T, string[]>
    | ChallengeCompilerComplex<T, string[], string[]>;
  onRun: (status: Status) => void;
};

export function TaskRunnerComplex<T = {}>(props: TaskRunnerComplex<T>) {
  const [state, setState] = React.useState<State<T | string[]>>({
    status: 'neutral',
  });
  const [output, setOutput] = React.useState<string[] | T | null>(null);
  const [error, setError] = React.useState('');

  const run = () => {
    try {
      const abc = {
        _: props.challenge.input[props.challenge.inputKey],
        ...props.challenge.extraInputs,
      };

      const newOutput = props.challenge.handler(
        props.challenge.input[props.challenge.inputKey],
        ...props.challenge.extraInputs,
      );
      setOutput(newOutput);
      setState({
        answer: newOutput,
        status:
          newOutput === props.challenge.expectedOutput
            ? 'positive'
            : 'negative',
      });
      props.onRun(
        newOutput === props.challenge.expectedOutput ? 'positive' : 'negative',
      );
      setError('');
    } catch (err) {
      //@ts-ignore
      setError(err.message);
      //@ts-ignore
      console.error(err.message);
    }
  };

  if (error !== '') {
    return (
      <h1>
        Ops! something went wrong with your method
        <Button size="medium" variant="secondary" onClick={() => setError('')}>
          Retry
        </Button>
      </h1>
    );
  }

  const getInput = () => {
    if (typeof props.challenge.input === 'object') {
      const values = props.challenge.input[props.challenge.inputKey];

      return JSON.stringify(values);
    }
  };

  return (
    <Wrapper>
      <InputBox>
        <h2>Input</h2>
        {getInput()}
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

type Student = {
  name: string;
  score: number;
};

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
  const [error, setError] = React.useState('');

  const run = () => {
    try {
      const newOutput = props.challenge.handler(props.challenge.input);
      setOutput(newOutput);
      setState({
        answer: newOutput,
        status:
          newOutput === props.challenge.expectedOutput
            ? 'positive'
            : 'negative',
      });
      props.onRun(
        newOutput === props.challenge.expectedOutput ? 'positive' : 'negative',
      );
      setError('');
    } catch (err) {
      //@ts-ignore
      setError(err.message);
    }
  };

  if (error !== '') {
    return (
      <h1>
        Ops! something went wrong with your method
        <Button size="medium" variant="secondary" onClick={() => setError('')}>
          Retry
        </Button>
      </h1>
    );
  }

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
