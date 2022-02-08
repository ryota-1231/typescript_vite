import styled from 'styled-components/macro';

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

export const SwiperPrevButtonComponent = styled(SwiperButton)`
  right: auto;
  left: -31px;
  &.swiper-button-disabled {
    opacity: 0;
  }
`;

export const SwiperNextButtonComponent = styled(SwiperButton)`
  right: -31px;
  left: auto;
  &.swiper-button-disabled {
    opacity: 0;
  }
`;
