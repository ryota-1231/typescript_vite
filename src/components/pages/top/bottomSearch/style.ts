import styled from 'styled-components/macro';

import ListComponent from '../../../uiParts/listComponent';

export const StyledSearchSection = styled.section`
  display: flex;
  margin-top: 5rem;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const StyledListComponent = styled(ListComponent)`
  border: none;
  margin: 0;
  padding: 15px 20px 0 0;
  &:hover {
    border: none;
  }
  > a {
    padding: 0;
    &:hover {
      color: #ff9600;
      text-decoration: underline;
    }
  }
`;

export const StyledMoreLinkWrapper = styled.div`
  margin-top: 20px;
  text-align: right;
`;

export const StyledMoreLink = styled.a`
  display: inline-block;
  cursor: pointer;
  font-size: 12px;
`;
