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
import ReactJson from 'react-json-view';

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
      console.log(error.message);
      //@ts-ignore
      setError(error);
    }
  };

  if (error !== null) {
    return (
      <ErrorWrapper>
        <span>
          <h2>Ops! something went wrong</h2>
          <p>
            Error: <i>{error.message}</i>
          </p>
        </span>

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
          <b>
            {props.challenge.inputType === 'primitive' ? (
              props.challenge.input
            ) : (
              <ReactJson
                theme="monokai"
                src={props.challenge.input}
                displayDataTypes={false}
                displayObjectSize={false}
                enableClipboard={false}
                collapsed={1}
              />
            )}
          </b>
        </InputBox>
        <IconButton
          size="large"
          variant="secondary"
          icon={<Play />}
          onClick={onClick}
        />
        <OutputBox state={props.challenge.status}>
          <span>Output</span>
          {props.challenge.outputType === 'primitive' ? (
            <b>{props.challenge.output || '-'}</b>
          ) : (
            <ReactJson
              theme="monokai"
              src={props.challenge.output}
              displayDataTypes={false}
              displayObjectSize={false}
            />
          )}
        </OutputBox>
      </Wrapper>
    </>
  );
}
