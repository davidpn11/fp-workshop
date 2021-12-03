import React, {useEffect, useState} from 'react';
import {SidenavWrapper} from './styles';
import {SegmentedControl, SegmentProps} from '@jet-pie/react';
import Logo from '../../assets/logo.svg';
import {Link, useLocation} from 'react-router-dom';
import {Day, selectDayTag} from './utils';
import {MenuList, Sources} from './Menu';

const segments: SegmentProps[] = [
  {
    label: 'DAY 1',
  },
  {
    label: 'DAY 2',
  },
];

export function Sidenav() {
  const [day, setDay] = useState<Day>('DAY 1');

  const location = useLocation();

  useEffect(() => {
    setDay(selectDayTag(location.pathname));
  }, [location.pathname]);

  return (
    <SidenavWrapper>
      <Link to="/">
        <Logo />
      </Link>
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
