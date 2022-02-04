import styled from 'styled-components/macro';

import Color from '../../../../styles/const/Color';
import SpanNumber from '../../../uiParts/spanNumberComponent/style';

const changeStyle = (props: boolean) => {
  if (props) {
    return `
    opacity: 0;
    transition: 0.3s;
    transition-delay: 0s;
    transform: translateX(-30px);
    pointer-events: none;
  `;
  }
  return `
    opacity: 1;
    transition: 0.5s;
    transition-delay: 0.3s;
  `;
};

export const StyledSection = styled.section<{ isDisplay: boolean }>`
  position: relative;
  width: 100%;
  ${(props) => changeStyle(props.isDisplay)}
`;

export const StyledHeading = styled.div`
  align-items: center;
  width: 100%;
`;

export const StyledAreaUl = styled.ul`
  margin-top: 22px;
  display: flex;
  justify-content: space-between;
`;

export const StyledAreaList = styled.li`
  cursor: pointer;
  border: solid 1px #e1e1e1;
  border-radius: 3px;
  width: 18.18vw;
  width: calc(100% / 3);
  height: 70px;
  box-sizing: border-box;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 16%);
  overflow: hidden;
  line-height: 70px;
`;

export const StyledAreaTarget = styled.div`
  display: flex;
  height: 100%;
`;

export const StyledAreaTargetImage = styled.div`
  width: 70px;
  height: 70px;
  transition: 0.1s ease-out;
  > img {
    ${StyledAreaList}:hover & {
      opacity: 0.8;
    }
  }
`;

export const StyledAreaTargetText = styled.div`
  position: relative;
  margin-left: 20px;
  height: 100%;
  color: #13131e;
  font-weight: 600;
  font-size: 20px;
  letter-spacing: 0.8px;
  &::after {
    position: absolute;
    bottom: 25px;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: ${Color.HOVER};
  }
  ${StyledAreaList}:hover & {
    color: ${Color.HOVER};
    &::after {
      content: '';
    }
  }
`;

export const StyledAreaTargetNum = styled(SpanNumber)`
  ${StyledAreaList}:hover & {
    color: ${Color.HOVER};
  }
`;

export const StyledAreaTargetNumUnit = styled(SpanNumber)`
  font-weight: normal;
  font-size: 12px;
  margin: 0;
  ${StyledAreaList}:hover & {
    color: ${Color.HOVER};
  }
`;

export const StyledPrefContents = styled.div`
  margin-top: 9px;
  width: 100%;
  height: 187px;
  column-count: 2;
  column-gap: 50px;
`;

export const StyledPrefSet = styled.div`
  margin-top: 20px;
  min-width: 390px;
  line-height: 1;
  font-size: 1.3rem;
  display: inline-block;
`;

export const StyledPrefUl = styled.ul`
  margin-top: 10px;
  display: flex;
`;

export const StyledPrefList = styled.li`
  padding-right: 11px;
  font-size: 13px;
  line-height: 1.3;
`;

export const StyledPrefLink = styled.a`
  color: #06c;
  &:hover {
    color: ${Color.HOVER};
    cursor: pointer;
  }
`;

export const StyledMoreLinkUl = styled.ul`
  margin-top: 26px;
  display: flex;
`;

export const StyledMoreLink = styled(StyledPrefLink)`
  font-size: 12px;
`;
