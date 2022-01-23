import {getColorAlias, getFontSize} from '@jet-pie/react';
import styled from 'styled-components';

export const MarkdownWrapper = styled.div`
  * {
    box-sizing: border-box;
    font-family: ${props => props.theme.font.familyPrimary};
  }

  html,
  body {
    background: ${getColorAlias('backgroundDefault')};
    margin: 0;
    padding: 0;
  }

  p {
    padding: 0;
    margin: 0 0 8px;
    ${getFontSize('sizeC')};
    line-height: 28px;
  }

  b {
    font-weight: ${props => props.theme.font.weightBold};
  }

  h1 {
    margin: 0 0 16px;
    font-weight: ${props => props.theme.font.weightExtrabold};
    ${getFontSize('sizeE')};
  }

  h2 {
    margin: 16px 0 8px;
    font-weight: ${props => props.theme.font.weightExtrabold};
    ${getFontSize('sizeD')};
  }

  h3 {
    margin: 16px 0 8px;
    font-weight: ${props => props.theme.font.weightBold};
    ${getFontSize('sizeD')};
  }

  ul {
    list-style: inside;
    padding: 0 0 0 16px;
    margin: 0;

    li {
      margin: 8px 0;
      line-height: 26px;
    }
  }

  a {
    color: ${getColorAlias('contentLink')};
    text-decoration: none;
    font-weight: ${props => props.theme.font.weightBold};
  }

  blockquote {
    background: ${getColorAlias('contentSubdued')};
    color: ${getColorAlias('contentInteractiveDark')};
    margin: 12px 0;
    padding: 12px 0;
    padding-left: 1.4rem;
    position: relative;
    border-radius: 4px;
    p {
      margin: 0;
    }
  }
  blockquote::before {
    content: '';
    position: absolute;
    left: 2px;
    top: 5%;
    width: 4px;
    height: 90%;

    background: ${getColorAlias('contentBrand')};
    border-radius: 2px / 4px;
  }

  code {
    font-family: ${props => props.theme.font.familyPrimary};
    color: ${getColorAlias('interactivePrimary')};
    background-color: ${getColorAlias('containerStrong')};
    border-style: none;
    border-radius: 3px;
    display: inline;
    padding: 2px 4px;
    white-space: pre-wrap;
    overflow-wrap: break-word;
  }
`;
