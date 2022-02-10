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
  display: flex;
  justify-content: space-between;
  margin-top: 22px;
`;

export const StyledAreaList = styled.li`
  box-sizing: border-box;
  width: 18.18vw;
  width: calc(100% / 3);
  height: 70px;
  overflow: hidden;
  line-height: 70px;
  cursor: pointer;
  border: solid 1px #e1e1e1;
  border-radius: 3px;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 16%);
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
  height: 100%;
  margin-left: 20px;
  font-size: 20px;
  font-weight: 600;
  color: #13131e;
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
  margin: 0;
  font-size: 12px;
  font-weight: normal;
  ${StyledAreaList}:hover & {
    color: ${Color.HOVER};
  }
`;

export const StyledPrefContents = styled.div`
  column-gap: 50px;
  width: 100%;
  height: 187px;
  margin-top: 9px;
  column-count: 2;
`;

export const StyledPrefSet = styled.div`
  display: inline-block;
  min-width: 390px;
  margin-top: 20px;
  font-size: 1.3rem;
  line-height: 1;
`;

export const StyledPrefUl = styled.ul`
  display: flex;
  margin-top: 10px;
`;

export const StyledPrefList = styled.li`
  padding-right: 11px;
  font-size: 13px;
  line-height: 1.3;
`;

export const StyledPrefLink = styled.a`
  &:hover {
    color: ${Color.HOVER};
    cursor: pointer;
  }
`;

export const StyledMoreLinkUl = styled.ul`
  display: flex;
  margin-top: 26px;
`;

export const StyledMoreLink = styled(StyledPrefLink)`
  font-size: 12px;
`;
