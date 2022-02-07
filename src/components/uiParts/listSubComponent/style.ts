import styled from 'styled-components/macro';

import Color from '../../../styles/const/Color';

export const List = styled.li`
  margin: 0 10px 12px 0;
  min-width: 175px;
  font-size: 12px;
`;

export const Link = styled.a`
  display: inline-block;
  cursor: pointer;
  ${List} &:hover {
    color: ${Color.HOVER};
  }
`;
