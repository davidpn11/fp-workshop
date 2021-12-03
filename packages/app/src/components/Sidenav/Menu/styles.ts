import {Card, getColorAlias, getDarkenColor} from '@jet-pie/react';
import styled, {css} from 'styled-components';

export const Item = styled.li<{active?: boolean}>`
  padding: ${props => props.theme.spacing.default};
  margin: 0;
  ${props =>
    props.active &&
    css`
      background: ${getDarkenColor('active02', 'backgroundDefault')};
    `}

  :hover {
    background: ${getDarkenColor('hover02', 'backgroundDefault')};
  }
`;

export const SidenavCard = styled(Card)`
  color: ${getColorAlias('contentDefault')};
  background: ${getColorAlias('backgroundDefault')};
  padding: 0;
  min-width: 320px;
`;

export const MenuListCard = styled(SidenavCard)`
  ul {
    padding: 12px 0;
  }
`;

export const SourceWrapper = styled(SidenavCard)`
  padding: 14px 24px;
`;
