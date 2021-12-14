import {identity, pipe} from 'fp-ts/lib/function';
import React, {useEffect} from 'react';
import {useLocation, useParams} from 'react-router';
import {taskList, Task} from '../../tasks';
import * as R from 'fp-ts/lib/Record';
import * as O from 'fp-ts/lib/Option';
import {MarkdownPage} from '../MarkdownPage';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
`;

export function Module() {
  const {id = ''} = useParams();

  const getModule = (): Task | null => {
    return pipe(
      taskList,
      R.lookup(id),
      O.fold(() => null, identity),
    );
  };
  const [currentModule, setCurrentModule] = React.useState<Task | null>(null);

  useEffect(() => {
    setCurrentModule(getModule());
  }, [id]);

  if (currentModule === null) {
    return <>No Module</>;
  }

  return (
    <Wrapper>
      {/* <MarkdownPage content={currentModule.markdown} /> */}
      {currentModule.component}
    </Wrapper>
  );
}
