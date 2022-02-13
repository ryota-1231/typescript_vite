import styled from 'styled-components';

import Color from '../../../styles/const/Color';

export const List = styled.li`
  min-width: 175px;
  margin: 0 10px 12px 0;
  font-size: 12px;
`;

export const Link = styled.a`
  display: inline-block;
  cursor: pointer;
  ${List}

  &:hover {
    color: ${Color.HOVER};
  }
`;
