import {IconButton} from '@jet-pie/react';
import React from 'react';
import {Play} from '@jet-pie/react/esm/icons';
import {
  InputBox,
  BallsWrapper,
  SystemWrapper,
  Ball,
  OutputBox,
  Wrapper,
} from './styles';

export type Status = 'positive' | 'negative' | 'neutral';

export type SystemTypeText = {
  id: string;
  type: 'text';
  status: Status;
} & ({input: string; output: string} | {input: number; output: number});

export type SystemTypeArray = {
  id: string;
  type: 'array';
  status: Status;
} & ({input: string[]; output: string[]} | {input: number[]; output: number[]});

export type SystemTypeJSON = {
  id: string;
  type: 'json';
  status: Status;
  input: object;
  output: object;
};

export type SystemTypes = SystemTypeText | SystemTypeArray | SystemTypeJSON;

type Props = {
  system: SystemTypes;
  onRun: (id: string) => void;
};

export function TaskSystem({system, onRun}: Props) {
  if (system.type !== 'text') {
    return <div>No Text</div>;
  }

  return (
    <Wrapper>
      <InputBox>
        <h2>Input</h2>
        {system.input}
      </InputBox>
      <IconButton
        size="large"
        variant="secondary"
        icon={<Play />}
        onClick={() => onRun(system.id)}
      />
      <OutputBox status={system.status}>
        <h2>Output</h2>
        {system.output || '-'}
      </OutputBox>
    </Wrapper>
  );
}
