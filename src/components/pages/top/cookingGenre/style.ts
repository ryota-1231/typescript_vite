import styled from 'styled-components/macro';

export const StyledPhotoUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const StyledMoreLink = styled.div`
  margin-top: 20px;
  font-size: 13px;
  text-align: right;
  > a {
    color: #06c;
    display: inline-block;
    height: 17px;
    cursor: pointer;
    &:hover {
      color: #ff9600;
      border-bottom: 1px solid #ff9600;
    }
  }
`;
