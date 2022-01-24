import React from 'react';
import {useLocation, Link} from 'react-router-dom';
import {Day, taskListDay1, taskListDay2} from '../utils';
import {MenuListCard, Item, SourceWrapper} from './styles';
import {IconButton, Tooltip} from '@jet-pie/react';
import {
  LightningSmall,
  DineInSmall,
  PoliciesSmall,
} from '@jet-pie/react/dist/icons';

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
      <Tooltip content="FP-TS docs">
        <IconButton
          size="medium"
          onClick={() => {
            window.open('https://gcanti.github.io/fp-ts/modules/');
          }}
          variant="primary"
          icon={<LightningSmall />}
        />
      </Tooltip>
      <Tooltip content="Slides">
        <IconButton
          size="medium"
          onClick={() => {
            window.open('');
          }}
          variant="primary"
          icon={<PoliciesSmall />}
        />
      </Tooltip>

      <Tooltip content="Max Willmott's FP resources">
        <IconButton
          size="medium"
          onClick={() => {
            window.open(
              'https://www.notion.so/Frontend-Functional-Programming-workshop-4feeb03d9bef4d98802f036d4ddc7e28',
            );
          }}
          variant="primary"
          icon={<DineInSmall />}
        />
      </Tooltip>
    </SourceWrapper>
  );
}
