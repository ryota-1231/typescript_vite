import {
  StyledHeading,
  StyledMoreLink,
  StyledMoreLinkWrapper,
  StyledSection,
  StyledSlideImage,
  StyledSlideImageWrapper,
  StyledSlideText,
} from './style';

import 'swiper/css';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperButtonComponent from '../../../uiParts/swiperButtonComponent';
import { HYAKUMEITEN_CONDITIONS } from '../../../../utils/commitmentConditions';

const Presenter = () => (
  <StyledSection>
    <StyledHeading>
      百名店
      <span>うまいもの、いま食べるなら、このお店。</span>
    </StyledHeading>
    <div css="position: relative;">
      <Swiper
        spaceBetween={20}
        navigation={{
          prevEl: '.swiper_hyakumeiten_prev',
          nextEl: '.swiper_hyakumeiten_next',
        }}
        modules={[Navigation]}
        slidesPerView={6}
        slidesPerGroup={6}
      >
        {HYAKUMEITEN_CONDITIONS.map((value) => (
          <SwiperSlide key={value.id}>
            <a css={'display: block;'} href={value.link} rel="noopener">
              <StyledSlideImageWrapper>
                <StyledSlideImage src={value.imageSrc} alt={value.name} />
              </StyledSlideImageWrapper>
              <StyledSlideText>
                <span>{value.name}</span>
              </StyledSlideText>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
      <SwiperButtonComponent
      css={'top: 31%'}
        buttonType={'prevButton'}
        className="swiper_hyakumeiten_prev"
      />
      <SwiperButtonComponent
      css={'top: 31%'}
        buttonType={'nextButton'}
        className="swiper_hyakumeiten_next"
      />
    </div>
    <StyledMoreLinkWrapper>
      <p css={'display: inline-block;'}>
        <StyledMoreLink
          href="https://award.tabelog.com/hyakumeiten/"
          target="_blank"
        >
          <span>百名店 発表ページへ</span>
        </StyledMoreLink>
      </p>
    </StyledMoreLinkWrapper>
  </StyledSection>
);

export default Presenter;
