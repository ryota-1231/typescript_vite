import styled from 'styled-components/macro';

import Color from '../../../../styles/const/Color';
import H2Component from '../../../uiParts/h2Component';

export const StyledSection = styled.section`
  position: relative;
  width: 100%;
  margin-top: 50px;
`;

export const StyledH2 = styled(H2Component)`
  display: inline-block;
  margin-bottom: 0;
  vertical-align: middle;
`;

export const StyledFormWrapper = styled.div`
  display: inline-block;
  margin-left: 34px;
  vertical-align: middle;
`;

export const StyledFormInput = styled.input`
  position: relative;
  display: inline-block;
  width: 100%;
  height: 30px;
  padding: 4px 5px 3px;
  font-size: 13px;
  vertical-align: middle;
  background-color: #fff;
  border: 1px solid #d2d2d2;
  border-radius: 0;
  outline: 0;
  box-shadow: none;
  appearance: none;
`;

export const StyledFormSubmitInput = styled.input`
  position: relative;
  display: inline-block;
  min-width: 60px;
  height: 30px;
  padding: 6px 12px;
  margin: 0;
  margin-left: -1px;
  font-size: 12px;
  font-weight: bold;
  line-height: normal;
  color: #fff;
  text-align: center;
  text-decoration: none;
  text-shadow: none;
  vertical-align: middle;
  cursor: pointer;
  background: #949499;
  border: none;
  border-radius: 0;
  outline: none;
  box-shadow: none;
  appearance: none;
`;

export const StyledDescriptionSpan = styled.span`
  display: inline-block;
  margin-bottom: 20px;
  font-size: 12px;
  color: #949499;
`;

export const StyledSwiperSlideLink = styled.a`
  position: relative;
  box-sizing: border-box;
  display: block;
  width: 100%;
  height: 100%;
  color: #595960;
  border: 1px solid #e1e1e1;
  border-radius: 6px;
`;

export const StyledSwiperSlideTopContainer = styled.div`
  position: relative;
  height: 3.95vw;
  overflow: hidden;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

export const StyledSlideImageWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -37.2959px;
  margin-left: -107.5px;
  transform: scale(0.2194);
  transform-origin: 0 0;
`;

export const StyledSlideImageInner = styled.div`
  position: relative;
  width: 980px;
  height: 340px;
  overflow: hidden;
`;

export const StyledSlideImage = styled.img`
  position: absolute;
  top: -108px;
  left: 0;
  width: 980px;
  height: auto;
  ${StyledSwiperSlideLink}:hover & {
    opacity: 0.8;
  }
`;

export const StyledSwiperSlideMain = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: start;
  margin: -2.05vw 0 9px;
  -webkit-box-align: start;
  -ms-flex-align: start;
`;

export const StyledCassetteImageWrapper = styled.div`
  box-sizing: border-box;
  display: inline-block;
  min-width: 40px;
  max-width: 52px;
  padding: 3px;
  background-color: #fff;
  border-radius: 7px;
`;

export const StyledCassetteImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 7px;
  ${StyledSwiperSlideLink}:hover & {
    opacity: 0.8;
  }
`;

export const StyledCassetteName = styled.strong`
  display: inline-block;
  margin: 1.93vw 0 3px 6px;
  font-size: 14px;
  font-weight: 600;
  word-break: break-all;

  > span::before {
    display: inline-block;
    margin-left: 3px;
    font-family: 'Tabelog Glyph', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    line-height: 1;
    color: #d3b41e;
    text-transform: none;
    vertical-align: middle;
    content: '\f6c8';
    -webkit-font-smoothing: antialiased;
  }
`;

export const StyledSwiperSlideFrame = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledSwiperSlideCount = styled.div`
  font-size: 10px;
  font-weight: 600;
`;

export const StyledSwiperSlideCountLog = styled.p`
  &::after {
    margin: 0 4px;
    font-weight: normal;
    color: #e1e1e1;
    content: '|';
  }
`;

export const StyledSwiperSlideFollow = styled.div`
  z-index: 1;
  font-size: 12px;
  text-align: center;
`;

export const StyledSwiperSlideFollowButton = styled.div`
  position: relative;
  display: inline-block;
`;

export const StyledSwiperSlideFollowTarget = styled.p`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  width: 37px;
  height: 30px;
  margin: 0;
  font-weight: bold;
  line-height: normal;
  color: #87a5c2;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  cursor: pointer;
  background-color: #fff;
  background-image: linear-gradient(to bottom, #fff, #f4f4f4);
  border: 1px solid #d2d2d2;
  border-radius: 3px;
  outline: none;
  box-shadow: 0 1px 0 rgb(0 0 0 / 10%);
  appearance: none;

  &::before {
    position: absolute;
    top: 50%;
    left: 50%;
    display: inline-block;
    width: 1em;
    height: 1em;
    margin: -0.5em 0 0 -0.5em;
    font-family: 'Tabelog Glyph', sans-serif;
    font-size: 28px;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    line-height: normal;
    text-transform: none;
    vertical-align: middle;
    content: '\f667';
    -webkit-font-smoothing: antialiased;
  }

  > span {
    display: none;
    color: #13131e;
    text-shadow: 0 1px 0 #fff;
  }
`;

export const StyledSwiperSlideSubProf = styled.p`
  margin: 7px 0;
  font-size: 11px;
  font-weight: 600;
  line-height: 1.6;
`;

export const StyledSwiperSlideProf = styled.p`
  margin: 7px 0;
  font-size: 12px;
  line-height: 1.6;
`;

export const StyledSwiperSlideMoreLink = styled.span`
  display: block;
  font-size: 0.78vw;
  color: #06c;
  text-align: right;
  ${StyledSwiperSlideLink}:hover & {
    color: ${Color.HOVER};
    text-decoration: underline;
  }
`;

export const StyledSearchLinkWrapper = styled.div`
  margin-top: 19px;
  font-size: 13px;
  text-align: right;
`;

export const StyledSearchLink = styled.a`
  display: inline-block;
  cursor: pointer;

  &:hover {
    color: ${Color.HOVER};
    text-decoration: underline;
  }
`;
