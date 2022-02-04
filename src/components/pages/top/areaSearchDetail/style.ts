import styled, { css, keyframes } from 'styled-components/macro';

import Color from '../../../../styles/const/Color';
import ListComponent from '../../../uiParts/listComponent';
import SpanNumber from '../../../uiParts/spanNumberComponent/style';

const topAreaFadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateX(30px);
  }
  70% {
    opacity: 1;
  }
  100% {
      opacity: 1;
      transform: translateX(0);
  }
`;

const topAreaFadeOut = keyframes`
  0% {
    opacity: 1;
    transform: translateX(0px);
  }
  70% {
    opacity: 1;
  }
  100% {
      opacity: 0;
      transform: translateX(30px);
  }
`;

const animation = (props: boolean) => {
  if (props) {
    return css`
      animation: ${topAreaFadeIn} 0.4s ease-out 0.4s 1 normal forwards;
    `;
  }
  return css`
    animation: ${topAreaFadeOut} 0.3s ease-out 0s 1 normal forwards;
    pointer-events: none;
  `;
};

export const StyledSection = styled.section<{ isDisplay: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  background-color: #fff;
  transform: translateX(30px);
  ${(props) => animation(props.isDisplay)}
`;

export const StyledP = styled.p`
  font-size: 17px;
  display: inline-block;
  position: relative;
  color: #06c;
  font-weight: 600;
  letter-spacing: 0.4px;
  &::before {
    margin: -1px 2px 0 0;
    color: #999;
    font-size: 1.2rem;
    font-family: 'Tabelog Glyph';
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    -webkit-font-smoothing: antialiased;
    text-transform: none;
    content: '\f640';
  }
`;

export const StyledSpan = styled.span`
  display: inline-block;
  position: relative;
  height: 20px;
  &::after {
    display: block;
    position: absolute;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    content: '';
    background-color: transparent;
  }
  &:hover {
    cursor: pointer;
    color: ${Color.HOVER};
    &::after {
      background-color: ${Color.HOVER};
    }
  }
`;

export const StyledFrame = styled.div`
  margin-top: 22px;
  padding: 22px 0 10px 31px;
  border: solid 1px #e1e1e1;
  border-radius: 6px;
  min-height: 347px;
`;

export const StyledFrameTitleLink = styled.a`
  display: inline-block;
  position: relative;
  height: 1.15em;
  color: #000;
  font-weight: 600;
  font-size: 22px;
  &::after {
    display: block;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1px;
    content: '';
    background-color: #000;
  }
  &:hover {
    cursor: pointer;
    color: ${Color.HOVER};
    &::after {
      background-color: ${Color.HOVER};
    }
  }
`;

export const StyledFrameTitleNum = styled(SpanNumber)`
  margin-left: 30px;
  font-size: 16px;
  font-weight: normal;
`;

export const StyledFrameTitleNumUnit = styled(SpanNumber)`
  margin-left: 0;
  font-size: 14px;
  font-weight: normal;
`;

export const StyledFrameUl = styled.ul`
  margin-top: 8px;
  flex-wrap: wrap;
  display: flex;
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

export const StyledFrameSubUl = styled(StyledFrameUl)`
  margin-top: 22px;
`;
