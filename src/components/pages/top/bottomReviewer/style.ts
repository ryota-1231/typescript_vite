import styled from 'styled-components/macro';

import Color from '../../../../styles/const/Color';
import H2 from '../../../uiParts/h2Component/style';

export const StyledSection = styled.section`
  margin-top: 50px;
  position: relative;
  width: 100%;
`;

export const StyledH2 = styled(H2)`
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
  width: 100%;
  box-shadow: none;
  border-radius: 0;
  height: 30px;
  display: inline-block;
  position: relative;
  outline: 0;
  border: 1px solid #d2d2d2;
  vertical-align: middle;
  background-color: #fff;
  appearance: none;
  padding: 4px 5px 3px;
  font-size: 13px;
`;

export const StyledFormSubmitInput = styled.input`
  border: none;
  background: #949499;
  margin-left: -1px;
  min-width: 60px;
  box-shadow: none;
  color: #fff;
  text-shadow: none;
  border-radius: 0;
  height: 30px;
  display: inline-block;
  position: relative;
  cursor: pointer;
  margin: 0;
  outline: none;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  line-height: normal;
  appearance: none;
  padding: 6px 12px;
  font-size: 12px;
`;

export const StyledDescriptionSpan = styled.span`
  display: inline-block;
  margin-bottom: 20px;
  color: #949499;
  font-size: 12px;
`;

export const StyledSwiperSlideLink = styled.a`
  display: block;
  position: relative;
  border: 1px solid #e1e1e1;
  border-radius: 6px;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  color: #595960;
`;

export const StyledSwiperSlideTopContainer = styled.div`
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  height: 3.95vw;
  position: relative;
  overflow: hidden;
`;

export const StyledSlideImageWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -37.29592px;
  margin-left: -107.5px;
  transform: scale(0.21939);
  transform-origin: 0 0;
`;

export const StyledSlideImageInner = styled.div`
  overflow: hidden;
  position: relative;
  width: 980px;
  height: 340px;
`;

export const StyledSlideImage = styled.img`
  position: absolute;
  width: 980px;
  left: 0px;
  top: -108px;
  height: auto;
  ${StyledSwiperSlideLink}:hover & {
    opacity: 0.8;
  }
`;

export const StyledSwiperSlideMain = styled.div`
  display: flex;
  position: relative;
  z-index: 1;
  margin: -2.05vw 0 9px;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: start;
`;

export const StyledCassetteImageWrapper = styled.div`
  display: inline-block;
  padding: 3px;
  border-radius: 7px;
  min-width: 40px;
  max-width: 52px;
  box-sizing: border-box;
  background-color: #fff;
`;

export const StyledCassetteImage = styled.img`
  border-radius: 7px;
  width: 100%;
  height: auto;
  ${StyledSwiperSlideLink}:hover & {
    opacity: 0.8;
  }
`;

export const StyledCassetteName = styled.strong`
  display: inline-block;
  margin: 1.93vw 0 3px 6px;
  font-weight: 600;
  font-size: 14px;
  word-break: break-all;
  > span::before {
    margin-left: 3px;
    font-size: 14px;
    display: inline-block;
    color: #d3b41e;
    line-height: 1;
    vertical-align: middle;
    font-family: 'Tabelog Glyph';
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    -webkit-font-smoothing: antialiased;
    text-transform: none;
    content: '\f6c8';
  }
`;

export const StyledSwiperSlideFrame = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledSwiperSlideCount = styled.div`
  font-weight: 600;
  font-size: 10px;
`;

export const StyledSwiperSlideCountLog = styled.p`
  &::after {
    margin: 0 4px;
    color: #e1e1e1;
    font-weight: normal;
    content: '|';
  }
`;

export const StyledSwiperSlideFollow = styled.div`
  z-index: 1;
  font-size: 12px;
  text-align: center;
`;

export const StyledSwiperSlideFollowButton = styled.div`
  display: inline-block;
  position: relative;
`;

export const StyledSwiperSlideFollowTarget = styled.p`
  width: 37px;
  height: 30px;
  display: inline-block;
  position: relative;
  cursor: pointer;
  margin: 0;
  outline: none;
  border: 1px solid #d2d2d2;
  border-radius: 3px;
  box-sizing: border-box;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  line-height: normal;
  box-shadow: 0 1px 0 rgb(0 0 0 / 10%);
  color: #87a5c2;
  appearance: none;
  background-color: #fff;
  background-image: linear-gradient(to bottom, #fff, #f4f4f4);
  &::before {
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -0.5em 0 0 -0.5em;
    width: 1em;
    height: 1em;
    display: inline-block;
    vertical-align: middle;
    line-height: normal;
    font-family: 'Tabelog Glyph';
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    -webkit-font-smoothing: antialiased;
    text-transform: none;
    content: '\f667';
    font-size: 28px;
  }
  > span {
    display: none;
    color: #13131e;
    text-shadow: 0 1px 0 #fff;
  }
`;

export const StyledSwiperSlideSubProf = styled.p`
  margin: 7px 0;
  font-weight: 600;
  font-size: 11px;
  line-height: 1.6;
`;

export const StyledSwiperSlideProf = styled.p`
  margin: 7px 0;
  font-size: 12px;
  line-height: 1.6;
`;

export const StyledSwiperSlideMoreLink = styled.span`
  display: block;
  color: #06c;
  font-size: 0.78vw;
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
