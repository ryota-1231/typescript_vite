import styled from 'styled-components/macro';

export const StyledWrapper = styled.div`
  position: relative;
  height: 450px;
  background-image: url('images/top/top_header_01.png');
  background-repeat: repeat-x;
  background-position: calc(50% + 8px) 0;
  background-size: auto 450px;
`;

export const StyledHeader = styled.header`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: 3;
  min-width: 1260px;
  transition: 0.2s ease;
`;

export const StyledHeaderInner = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  width: 100%;
  min-width: 1260px;
  max-width: 1540px;
  height: 28.5px;
  max-height: 28.5px;
  padding: 0 70px;
  margin: 15px auto;
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
    background: url('https://tblg.k-img.com/images/restaurant/logo/logo_tabelog_white.svg?1643702080')
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
  position: relative;
  display: inline-block;
  margin-top: -5px;
  font-family: inherit;
  font-size: 12.5px;
  font-weight: 600;

  > a {
    padding: 0 8px;
    color: #fff;
  }

  &::before {
    position: absolute;
    top: 50%;
    left: -2px;
    z-index: 1;
    width: 1px;
    height: 1em;
    margin-top: -0.5em;
    content: '';
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
  width: 1120px;
  height: 450px;
  margin: 0 auto;
`;

export const StyledTitleImage = styled.div`
  position: absolute;
  width: 100%;
  height: auto;
  min-height: 450px;
  background-image: url('images/top/top_header_02.png');
  background-repeat: no-repeat;
  background-position: 50% 0;
  background-size: 1260px 450px;
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
