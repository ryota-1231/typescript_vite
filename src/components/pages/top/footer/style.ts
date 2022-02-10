import styled from 'styled-components/macro';

export const StyledWrapper = styled.div`
  min-width: 980px;
  padding-bottom: 40px;
  margin: 30px auto 0;
  background: #fff;
`;

export const StyledTabelogNavigateUl = styled.ul`
  display: flex;
  justify-content: center;
  width: 100%;
  min-width: 1260px;
  max-width: 1540px;
  margin: auto;
  -webkit-box-pack: center;
`;

export const StyledTabelogNavigateList = styled.li`
  display: block;
  float: left;
  width: 33%;
  padding: 20px 0;
  text-align: center;
`;

export const StyledNavigateLink = styled.a`
  display: block;
  text-decoration: none;
  border-left: solid 1px #eeece4;

  ${StyledTabelogNavigateList}:first-child & {
    border-left: none;
  }

  > strong {
    display: block;
    padding: 3px 0 0 13px;
    font-size: 86%;
    font-style: normal;
    font-weight: normal;
    color: #959599;
  }
`;

export const StyledNavigateUl = styled.ul`
  width: 100%;
  min-width: 1260px;
  padding: 22px 0;
  font-size: 86%;
  text-align: center;
  background-color: #faf8f5;
`;

export const StyledNavigateList = styled.li`
  display: inline;
  font-size: 11px;
  line-height: 2;

  > span {
    margin: 0 4px;
    color: #d0d0d0;
  }
`;

export const StyledCopyright = styled.div`
  position: relative;
  width: 100%;
  min-width: 1260px;
  max-width: 1540px;
  min-height: 20px;
  padding: 0 70px;
  margin: 15px auto 0;
`;
