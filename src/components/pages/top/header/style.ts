import styled from 'styled-components/macro';

export const StyledWrapper = styled.div`
  background-image: url('src/assets/images/top/top_header_01.png');
  background-repeat: repeat-x;
  background-position: calc(50% + 8px) 0;
  background-size: auto 450px;
  height: 450px;
  position: relative;
`;

export const StyledHeader = styled.header`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: 3;
  min-width: 1260px;
  -webkit-transition: 0.2s ease;
  -moz-transition: 0.2s ease;
  transition: 0.2s ease;
`;

export const StyledHeaderInner = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 15px auto;
  padding: 0 70px;
  height: 28.5px;
  max-height: 28.5px;
  width: 100%;
  min-width: 1260px;
  max-width: 1540px;
  box-sizing: border-box;
`;

export const StyledH1 = styled.h1`
  width: 132px;
  > span {
    display: inline-block;
    width: 132px;
    height: 28px;
    overflow: hidden;
    text-indent: 100%;
    word-wrap: normal;
    overflow-wrap: normal;
    white-space: nowrap;
    vertical-align: top;
    background: url(https://tblg.k-img.com/images/restaurant/logo/logo_tabelog_white.svg?1643702080)
      no-repeat 0 0 / contain;
  }
`;

export const StyledUserMenu = styled.div`
  text-align: right;
`;

export const StyledUl = styled.ul`
  display: inline-block;
  white-space: nowrap;
`;

export const StyledList = styled.li`
  display: inline-block;
  position: relative;
  font-size: 12.5px;
  font-weight: 600;
  font-family: inherit;
  margin-top: -5px;
  > a {
    color: #fff;
    padding: 0 8px;
  }
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: -2px;
    z-index: 1;
    width: 1px;
    margin-top: -0.5em;
    height: 1em;
    background: #fff;
  }
`;

export const StyledLiMessage = styled(StyledList)`
  &::before {
    content: none;
  }
`;

export const StyledTitleWrapper = styled.div`
  position: relative;
  margin: 0 auto;
  width: 1120px;
  height: 450px;
`;

export const StyledTitleImage = styled.div`
  background-image: url('src/assets/images/top/top_header_02.png');
  position: absolute;
  background-position: 50% 0;
  background-size: 1260px 450px;
  width: 100%;
  height: auto;
  min-height: 450px;
  background-repeat: no-repeat;
`;

export const StyledDownload = styled.div`
  position: absolute;
  bottom: 105px;
  left: 98px;
`;

export const StyledTitleUl = styled.ul`
  display: flex;
  width: 317px;
  height: 47px;
`;
