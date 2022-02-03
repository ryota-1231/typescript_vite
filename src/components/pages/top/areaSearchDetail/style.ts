import styled from 'styled-components/macro';

import Color from '../../../../styles/const/Color';
import SpanNumber from '../../../uiParts/spanNumberComponent/style';

export const StyledSection = styled.section`
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  /* opacity: 0; */
  background-color: #fff;
  transform: translateX(30px);
  animation: topAreaFadeIn 0.4s ease-out 0.4s 1 normal forwards;
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
  font-size: 1.56vw;
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

export const StyledFrameSubUl = styled(StyledFrameUl)`
  margin-top: 22px;
`;
