import styled from 'styled-components/macro';

export const StyledWrapper = styled.div`
  margin: 30px auto 0;
  padding-bottom: 40px;
  min-width: 980px;
  background: #ffffff;
`;

export const StyledTabelogNavigateUl = styled.ul`
  width: 100%;
  min-width: 1260px;
  max-width: 1540px;
  margin: auto;
  display: flex;
  justify-content: center;
  -webkit-box-pack: center;
`;

export const StyledTabelogNavigateList = styled.li`
  width: 33%;
  display: block;
  float: left;
  padding: 20px 0;
  text-align: center;
  > :first-child a {
    border-left: none;
  }
`;

export const StyledNavigateLink = styled.a`
  display: block;
  border-left: solid 1px #eeece4;
  text-decoration: none;
  > strong {
    display: block;
    padding: 3px 0 0 13px;
    color: #959599;
    font-style: normal;
    font-weight: normal;
    font-size: 86%;
  }
`;

export const StyledNavigateUl = styled.ul`
  min-width: 1260px;
  padding: 22px 0;
  width: 100%;
  font-size: 86%;
  text-align: center;
  background-color: #faf8f5;
`;

export const StyledNavigateList = styled.li`
  display: inline;
  line-height: 2;
  font-size: 11px;
  > span {
    margin: 0 4px;
    color: #d0d0d0;
  }
`;

export const StyledCopyright = styled.div`
  padding: 0 70px;
  width: 100%;
  min-width: 1260px;
  max-width: 1540px;
  position: relative;
  margin: 15px auto 0;
  min-height: 20px;
`;
