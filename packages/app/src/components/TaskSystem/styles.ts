import React from 'react';
import {Card, getColorAlias} from '@jet-pie/react';
import {AliasKey} from '@jet-pie/theme/variations/skip';
import styled, {css} from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const Box = styled(Card)<{state?: Status}>`
  ${props => {
    if (props.state === 'negative') {
      return css`
        border: 3px solid ${props.theme.global.red};
      `;
    }
    if (props.state === 'positive') {
      return css`
        border: 3px solid ${props.theme.global.green};
      `;
    }
    return '';
  }}
`;

export const InputBox = styled(Box)`
  display: flex;
  flex-direction: column;
`;
export const OutputBox = styled(Box)`
  display: flex;
  flex-direction: column;
`;

export const BallsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 14px;
  justify-content: center;
`;

const getColor = (active: boolean, status?: Status): AliasKey | null => {
  if (status === 'positive') {
    return 'contentPositive';
  }
  if (status === 'negative') {
    return 'contentError';
  }

  return active ? 'contentInteractiveDark' : null;
};

export const Ball = styled.div<{active: boolean; status?: Status}>`
  height: 30px;
  width: 30px;
  margin-top: 10px;
  background: transparent;
  border-radius: ${props => props.theme.radius.roundedE};
  margin: 0 10px;
  ${props => {
    const color = getColor(props.active, props.status);

    if (color === null) {
      return css`
        border: 3px solid ${getColorAlias('contentInteractiveDark')};
        background: transparent;
      `;
    }
    return css`
      border: 3px solid ${getColorAlias(color)};
      background: ${getColorAlias(color)};
    `;
  }}
`;

export const SystemWrapper = styled.div`
  margin-top: 20px;
`;
