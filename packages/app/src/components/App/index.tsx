import React from 'react';
import {PIEThemeProvider} from '@jet-pie/react';
import {
  AppContainer,
  PageWrapper,
  GlobalStyles,
  SidenavContainer,
} from './styles';
import '@jet-pie/theme/variations/skip/variables.css';
import {Sidenav} from '../Sidenav';

export function App() {
  return (
    <PIEThemeProvider mode="dark">
      <GlobalStyles />
      <PageWrapper>
        <SidenavContainer>
          <Sidenav />
        </SidenavContainer>
        <AppContainer>Content here</AppContainer>
      </PageWrapper>
    </PIEThemeProvider>
  );
}
