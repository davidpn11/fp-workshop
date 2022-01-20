import React from 'react';
import {Card, getColorAlias, getFontSize} from '@jet-pie/react';
import {AliasKey} from '@jet-pie/theme/variations/skip';
import styled, {css} from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: stretch;
  margin: 10px 0;
`;

export const Box = styled(Card)<{state?: Status}>`
  width: 400px;
  padding: 10px 12px;
  border: 3px solid transparent;
  max-height: 600px;
  overflow-y: auto;
  span {
    font-weight: ${props => props.theme.font.weightExtrabold};
    align-self: flex-start;
  }
  b {
    ${getFontSize('sizeD')}
  }

  .react-json-view {
    background: transparent !important;
  }

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
  align-items: center;
`;
export const OutputBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BallsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 24px;
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
  cursor: pointer;
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

export const TaskRunnerTitle = styled.b`
  margin: 8px 0;
  ${getFontSize('sizeD')}
`;

export const ErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  span {
    width: 100%;
    align-self: flex-start;
  }

  p {
    display: flex;
    width: 100%;
    font-family: ${props => props.theme.font.familyPrimary};
    color: ${getColorAlias('contentError')};
    background-color: ${getColorAlias('containerStrong')};
    border-style: none;
    border-radius: ${props => props.theme.radius.roundedA};
    padding: 6px 12px;
    white-space: pre-wrap;
    overflow-wrap: break-word;
  }
`;
