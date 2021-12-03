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
import {Routes, Route} from 'react-router';
import {Home} from '../Home';
import {Module} from '../Module';

export function App() {
  return (
    <PIEThemeProvider mode="dark">
      <GlobalStyles />
      <PageWrapper>
        <SidenavContainer>
          <Sidenav />
        </SidenavContainer>
        <AppContainer>
          <Routes>
            <Route path={'/'} element={<Home />} />
            <Route path="/module/:id" element={<Module />} />
          </Routes>
        </AppContainer>
      </PageWrapper>
    </PIEThemeProvider>
  );
}
