import React, {PropsWithChildren} from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import {MarkdownWrapper} from './styles';

type Props = {
  content: string;
};

export function MarkdownPage(props: PropsWithChildren<Props>) {
  return (
    <MarkdownWrapper>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{props.content}</ReactMarkdown>
    </MarkdownWrapper>
  );
}
