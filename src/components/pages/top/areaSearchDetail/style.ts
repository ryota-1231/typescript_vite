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
    transform: translateX(0);
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
    pointer-events: none;
    animation: ${topAreaFadeOut} 0.3s ease-out 0s 1 normal forwards;
  `;
};

export const StyledSection = styled.section<{ isDisplay: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  opacity: 0;
  transform: translateX(30px);
  ${(props) => animation(props.isDisplay)}
`;

export const StyledP = styled.p`
  position: relative;
  display: inline-block;
  font-size: 17px;
  font-weight: 600;
  color: ${Color.LINK};
  letter-spacing: 0.4px;

  &::before {
    margin: -1px 2px 0 0;
    font-family: 'Tabelog Glyph', sans-serif;
    font-size: 1.2rem;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    color: #999;
    text-transform: none;
    content: '\f640';
    -webkit-font-smoothing: antialiased;
  }
`;

export const StyledSpan = styled.span`
  position: relative;
  display: inline-block;
  height: 20px;

  &::after {
    position: absolute;
    right: 0;
    bottom: 0;
    display: block;
    width: 100%;
    height: 1px;
    content: '';
    background-color: transparent;
  }

  &:hover {
    color: ${Color.HOVER};
    cursor: pointer;

    &::after {
      background-color: ${Color.HOVER};
    }
  }
`;

export const StyledFrame = styled.div`
  min-height: 347px;
  padding: 22px 0 10px 31px;
  margin-top: 22px;
  border: solid 1px #e1e1e1;
  border-radius: 6px;
`;

export const StyledFrameTitleLink = styled.a`
  position: relative;
  display: inline-block;
  height: 1.15em;
  font-size: 22px;
  font-weight: 600;
  color: #000;

  &::after {
    position: absolute;
    bottom: 0;
    display: block;
    width: 100%;
    height: 1px;
    content: '';
    background-color: #000;
  }

  &:hover {
    color: ${Color.HOVER};
    cursor: pointer;

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
  display: flex;
  flex-wrap: wrap;
  margin-top: 8px;
`;

export const StyledListComponent = styled(ListComponent)`
  align-items: center;
  min-height: 42px;
  padding: 0 12px;
  margin: 10px 8px 0 0;
  font-size: 13.2px;
  font-weight: bold;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 16%);

  > a {
    padding: 0;
    color: #13131e;
  }

  &:hover {
    cursor: pointer;
    border: solid 1px #e1e1e1;

    > a {
      color: ${Color.HOVER};
    }
  }
`;

export const StyledFrameSubUl = styled(StyledFrameUl)`
  margin-top: 22px;
`;
