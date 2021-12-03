import styled, {createGlobalStyle, ThemeProps} from 'styled-components';
import {Theme} from '@jet-pie/theme/variations/skip';
import {getColorAlias, getFontSize} from '@jet-pie/react';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: ${(props: ThemeProps<Theme>) =>
      props.theme.font.familyPrimary};
  }

  html, body {
    background: ${getColorAlias('backgroundDefault')};
    margin: 0;
    padding: 0;
  }

  p {
    padding: 0;
    margin: 0 0 8px;
    ${getFontSize('sizeC')};
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
    list-style: none;
    padding: 0 0 0 16px;
    margin: 0;

    li {
      margin: 4px 0;
    }
  }

  a {
    color: ${getColorAlias('contentLink')};
    text-decoration: none;
    font-weight: ${props => props.theme.font.weightBold};
  }


  pre {
    background-color: ${getColorAlias('containerStrong')};
    padding: ${props => `${props.theme.spacing.S} ${props.theme.spacing.XS}`};
    border-radius: ${props => props.theme.radius.roundedA};
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


      &.language-tsx, &.language-json{
        /* padding: 20px 0; */
      }
  }
`;

export const PageWrapper = styled.main`
  display: grid;
  justify-content: center;
  grid-template-columns: 1fr 2fr;
  height: 100vh;
`;

export const SidenavContainer = styled.aside`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  background-color: ${getColorAlias('backgroundDefault')};
`;

export const AppContainer = styled.section`
  display: flex;
  flex-flow: row nowrap;
  margin: 0;
  padding: 16px 48px 16px 16px;
  position: relative;
  width: 100%;
  background-color: ${getColorAlias('interactiveLight')};
`;
