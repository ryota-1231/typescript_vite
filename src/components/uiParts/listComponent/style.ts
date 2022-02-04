import styled from 'styled-components/macro';

import Color from '../../../styles/const/Color';

export const List = styled.li`
  display: inline-flex;
  margin: 12px 12px 0 0;
  border: 1px solid #e1e1e1;
  border-radius: 2px;
  font-size: 12px;
  line-height: 1;
  &:hover {
    border: 1px solid ${Color.HOVER};
  }
`;

export const Link = styled.a`
  padding: 7px 14px;
  color: #595960;
  ${List} &:hover {
    color: ${Color.HOVER};
  }
`;
