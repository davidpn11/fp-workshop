import React, {useState} from 'react';
import {SidenavWrapper} from './styles';
import {
  Card,
  getColorAlias,
  getDarkenColor,
  SegmentedControl,
  SegmentProps,
} from '@jet-pie/react';
import styled from 'styled-components';

const taskListDay2 = [
  {
    id: 'task6',
    title: 'Type Classes: Eq, Sort, Array, Record',
  },
  {
    id: 'task7',
    title: 'Advanced Type Classes: Semigroups',
  },
  {
    id: 'task8',
    title: 'Advanced Type Classes: Monoids',
  },
  {
    id: 'task9',
    title: 'Advanced Type Classes: Monads',
  },
];

const taskListDay1 = [
  {
    id: 'task1',
    title: 'Currying and composition',
  },
  {
    id: 'task2',
    title: 'Sum Types',
  },
  {
    id: 'task3',
    title: 'Pipe and Flow',
  },
  {
    id: 'task4',
    title: 'Options and Eithers',
  },
  {
    id: 'task5',
    title: 'Remote Data',
  },
];

const Item = styled.li`
  padding: ${props => props.theme.spacing.default};

  :hover {
    background: ${getDarkenColor('hover02', 'backgroundDefault')};
  }
`;

const MenuListCard = styled(Card)`
  color: ${getColorAlias('contentDefault')};
  background: ${getColorAlias('backgroundDefault')};
  padding: 0;
  min-width: 300px;
  ul {
    padding: 12px 0;
  }
`;

type Day = 'DAY 1' | 'DAY 2';

function MenuList({showList}: {showList: Day}) {
  return (
    <MenuListCard outline inverse>
      <ul>
        {(showList === 'DAY 1' ? taskListDay1 : taskListDay2).map(t => (
          <Item key={t.id}>{t.title}</Item>
        ))}
      </ul>
    </MenuListCard>
  );
}

function Sources() {
  return <div>Sources</div>;
}

const segments: SegmentProps[] = [
  {
    label: 'DAY 1',
    // icon: <BrandLogo />,
  },
  {
    label: 'DAY 2',
    // icon: <List />,
  },
];

export function Sidenav() {
  const [day, setDay] = useState<Day>('DAY 1');
  return (
    <SidenavWrapper>
      <div>
        <SegmentedControl
          segmentList={segments}
          active={day}
          onClick={selected => setDay(selected.label as Day)}
        />
      </div>
      <MenuList showList={day} />

      <Sources />
    </SidenavWrapper>
  );
}
