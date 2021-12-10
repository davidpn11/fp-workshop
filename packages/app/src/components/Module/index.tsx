import {identity, pipe} from 'fp-ts/lib/function';
import React, {useEffect} from 'react';
import {useLocation, useParams} from 'react-router';
import {taskList, Task} from '../../tasks';
import * as R from 'fp-ts/lib/Record';
import * as O from 'fp-ts/lib/Option';
import {MarkdownPage} from '../MarkdownPage';
export function Module() {
  const {id = ''} = useParams();
  console.log(location);
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
    return 'No Module';
  }

  return (
    <div>
      <h1>{currentModule.title}</h1>
      <MarkdownPage content={currentModule.markdown} />
      {currentModule.component}
    </div>
  );
}
