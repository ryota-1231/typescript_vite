import styled from 'styled-components/macro';

import Color from '../../../styles/const/Color';

import ListComponent from '.';

export const List = styled.li`
  display: inline-flex;
  margin: 1.2rem 1.2rem 0 0;
  border: 1px solid #e1e1e1;
  border-radius: 2px;
  font-size: 1.2rem;
  line-height: 1;
  &:hover {
    border: 1px solid ${Color.HOVER};
  }
`;

export const Link = styled.a`
  padding: 0.7rem 1.4rem;
  color: #595960;
  ${List} &:hover {
    color: ${Color.HOVER};
  }
`;

export const StyledListComponent = styled(ListComponent)`
  margin: 10px 8px 0 0;
  padding: 0 12px;
  min-height: 42px;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 16%);
  font-weight: bold;
  font-size: 13.2px;
  align-items: center;
  > a {
    color: #13131e;
    padding: 0;
  }
  &:hover {
    border: solid 1px #e1e1e1;
    cursor: pointer;
    > a {
      color: ${Color.HOVER};
    }
  }
`;
