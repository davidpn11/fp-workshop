import React from 'react';
import {PIEThemeProvider} from '@jet-pie/react';
import {GlobalStyles} from './styles';
import '@jet-pie/theme/variations/skip/variables.css';

export function App() {
  return (
    <PIEThemeProvider mode="light">
      <GlobalStyles /> Olar
    </PIEThemeProvider>
  );
}
