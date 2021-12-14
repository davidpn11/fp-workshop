import React from 'react';
import {Ball, BallsWrapper} from '../styles';

type BallsProps = {
  active: string;
  onSelect: (i: string) => void;
  challengeStatus: ChallengeStatus;
};

export function Balls(props: BallsProps) {
  const onClick = (i: string) => () => props.onSelect(i);
  const arr = Object.keys(props.challengeStatus);

  return (
    <BallsWrapper>
      {arr.map(key => {
        return (
          <Ball
            status={props.challengeStatus[key]}
            active={key === props.active}
            key={key}
            onClick={onClick(key)}
          />
        );
      })}
    </BallsWrapper>
  );
}
