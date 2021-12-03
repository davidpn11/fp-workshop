import React from 'react';
import {useLocation, Link} from 'react-router-dom';
import {Day, taskListDay1, taskListDay2} from '../utils';
import {MenuListCard, Item, SourceWrapper} from './styles';

export function MenuList({showList}: {showList: Day}) {
  const location = useLocation();

  return (
    <MenuListCard outline inverse>
      <ul>
        {(showList === 'DAY 1' ? taskListDay1 : taskListDay2).map(t => (
          <Link key={t.id} to={`module/${t.id}`}>
            <Item active={location.pathname.includes(t.id)}>{t.title}</Item>
          </Link>
        ))}
      </ul>
    </MenuListCard>
  );
}

export function Sources() {
  return (
    <SourceWrapper outline inverse>
      Sources
    </SourceWrapper>
  );
}
