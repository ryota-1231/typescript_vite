import styled from 'styled-components/macro';

import ListComponent from '../../../uiParts/listComponent';

export const StyledSearchSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 5rem;
`;

export const StyledListComponent = styled(ListComponent)`
  padding: 15px 20px 0 0;
  margin: 0;
  border: none;

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
  font-size: 12px;
  cursor: pointer;
`;
