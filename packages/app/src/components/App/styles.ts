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
