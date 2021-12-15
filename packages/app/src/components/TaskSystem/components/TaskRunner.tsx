import React from 'react';
import {
  InputBox,
  OutputBox,
  Wrapper,
  TaskRunnerTitle,
  ErrorWrapper,
} from '../styles';
import {Play} from '@jet-pie/react/esm/icons';
import {Button, IconButton} from '@jet-pie/react';

type Props = {
  challenge: Challenge;
  onRun: (id: string) => void;
};

export function TaskRunner(props: Props) {
  const [error, setError] = React.useState<Error | null>(null);

  const onClick = () => {
    try {
      props.onRun(props.challenge.id);
      setError(null);
    } catch (error) {
      //@ts-ignore
      setError(error);
    }
  };

  if (error !== null) {
    return (
      <ErrorWrapper>
        <h2>Ops! something went wrong with your method</h2>
        <Button
          size="medium"
          variant="secondary"
          onClick={() => setError(null)}>
          Retry
        </Button>
      </ErrorWrapper>
    );
  }

  return (
    <>
      <TaskRunnerTitle>{props.challenge.id}</TaskRunnerTitle>
      <Wrapper>
        <InputBox>
          <span>Input</span>
          <b>{props.challenge.input}</b>
        </InputBox>
        <IconButton
          size="large"
          variant="secondary"
          icon={<Play />}
          onClick={onClick}
        />
        <OutputBox>
          <span>Output</span>
          <b>{props.challenge.output || '-'}</b>
        </OutputBox>
      </Wrapper>
    </>
  );
}
