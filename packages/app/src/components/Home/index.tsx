import React from 'react';
import {HomeWrapper} from './styles';
import {MarkdownPage} from '../../components/MarkdownPage';
import HomePage from './home.md';

export function Home() {
  return (
    <HomeWrapper>
      <MarkdownPage content={HomePage.markdown} />
    </HomeWrapper>
  );
}
