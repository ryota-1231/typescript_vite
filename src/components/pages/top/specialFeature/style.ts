import styled from 'styled-components/macro';
import { SwiperSlide } from 'swiper/react';

export const StyledSlideSection = styled.section`
  margin-top: 50px;
  position: relative;
`;

export const StyledSlideWrapper = styled.div`
  margin: 15px auto 0;
  position: relative;
  overflow: hidden;
  max-width: 980px;
  padding: 0;
  z-index: 1;
`;

export const StyledSlideList = styled(SwiperSlide)`
  width: 433.5px;
  flex-shrink: 0;
  height: 100%;
`;

export const StyledSlideLink = styled.a`
  display: block;
  color: #fff;
  transition: 0.3s ease-out;
`;

export const StyledSlideImage = styled.img`
  width: 100%;
  height: auto;
  backface-visibility: hidden;
  vertical-align: bottom;
`;

export const StyledSlideMask = styled.div`
  display: block;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50%;
  box-sizing: border-box;
  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.6),
    rgba(84, 84, 84, 0)
  );
`;

export const StyledSlideFlame = styled.div`
  position: absolute;
  bottom: 15px;
  left: 0;
  margin-left: 1.93vw;
  padding-right: 20px;
  color: #fff;
`;

export const StyledSlideFlameTitle = styled.div`
  font-weight: bold;
  font-size: 20px;
`;

export const StyledSlideFlameText = styled.div`
  margin-top: 6px;
  font-size: 14px;
  line-height: 1.33;
`;

const SwiperButton = styled.div`
  position: absolute;
  top: 50%;
  border-radius: 50%;
  width: 44px;
  height: 44px;
  box-shadow: 0 0 3px 0 rgb(0 0 0 / 25%);
  opacity: 0.9;
  background-color: #fff;
  background-image: none;
  transition: 0.2s;
  margin-top: -6px;
  z-index: 10;
  cursor: pointer;
  background-size: 27px 44px;
  background-position: center;
  background-repeat: no-repeat;
  &::after {
    right: auto;
    left: 50%;
    color: #999;
    font-family: 'Tabelog Glyph';
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    -webkit-font-smoothing: antialiased;
    text-transform: none;
    content: '\f641';
    position: absolute;
    top: 50%;
    font-size: 22px;
    transform: translate(-50%, -50%);
  }
`;

export const StyledSlidePrevButton = styled(SwiperButton)`
  right: auto;
  left: -31px;
`;

export const StyledSlideNextButton = styled(SwiperButton)`
  right: -31px;
  left: auto;
`;
