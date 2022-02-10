import styled from 'styled-components/macro';
import { SwiperSlide } from 'swiper/react';

export const StyledSlideSection = styled.section`
  position: relative;
  margin-top: 50px;
`;

export const StyledSlideWrapper = styled.div`
  position: relative;
  z-index: 1;
  max-width: 980px;
  padding: 0;
  margin: 15px auto 0;
  overflow: hidden;
`;

export const StyledSlideList = styled(SwiperSlide)`
  flex-shrink: 0;
  width: 433.5px;
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
  position: absolute;
  bottom: 0;
  left: 0;
  box-sizing: border-box;
  display: block;
  width: 100%;
  height: 50%;
  background-image: linear-gradient(
    to top,
    rgb(0 0 0 / 60%),
    rgb(84 84 84 / 0%)
  );
`;

export const StyledSlideFlame = styled.div`
  position: absolute;
  bottom: 15px;
  left: 0;
  padding-right: 20px;
  margin-left: 1.93vw;
  color: #fff;
`;

export const StyledSlideFlameTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

export const StyledSlideFlameText = styled.div`
  margin-top: 6px;
  font-size: 14px;
  line-height: 1.33;
`;
