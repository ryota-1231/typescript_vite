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
