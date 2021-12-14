import React from 'react';
import {InputBox, OutputBox, Wrapper} from '../styles';
import {Play} from '@jet-pie/react/esm/icons';
import {IconButton} from '@jet-pie/react';

type Props = {
  challenge: Challenge;
  onRun: (id: string) => void;
};

export function TaskRunner(props: Props) {
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
        onClick={() => props.onRun(props.challenge.id)}
      />
      <OutputBox>
        <h2>Output</h2>
        {props.challenge.output || '-'}
      </OutputBox>
    </Wrapper>
  );
}
