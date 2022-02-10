import styled from 'styled-components/macro';

const SwiperButton = styled.div`
  position: absolute;
  top: 50%;
  z-index: 10;
  width: 44px;
  height: 44px;
  margin-top: -6px;
  cursor: pointer;
  background-color: #fff;
  background-image: none;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 27px 44px;
  border-radius: 50%;
  box-shadow: 0 0 3px 0 rgb(0 0 0 / 25%);
  opacity: 0.9;
  transition: 0.2s;

  &::after {
    position: absolute;
    top: 50%;
    right: auto;
    left: 50%;
    font-family: 'Tabelog Glyph', sans-serif;
    font-size: 22px;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    color: #999;
    text-transform: none;
    content: '\f641';
    transform: translate(-50%, -50%);
    -webkit-font-smoothing: antialiased;
  }
`;

export const SwiperPrevButtonComponent = styled(SwiperButton)`
  right: auto;
  left: -31px;

  &.swiper-button-disabled {
    display: none;
  }
`;

export const SwiperNextButtonComponent = styled(SwiperButton)`
  right: -31px;
  left: auto;

  &.swiper-button-disabled {
    display: none;
  }
`;
