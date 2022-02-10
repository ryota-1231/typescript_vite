import { Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import H2Component from '../../../uiParts/h2Component';
import SwiperButtonComponent from '../../../uiParts/swiperButtonComponent';

import {
  StyledSlideFlame,
  StyledSlideFlameText,
  StyledSlideFlameTitle,
  StyledSlideImage,
  StyledSlideLink,
  StyledSlideMask,
  StyledSlideSection,
  StyledSlideWrapper,
} from './style';

const Presenter = () => (
  <StyledSlideSection>
    <H2Component>特集</H2Component>
    <StyledSlideWrapper>
      <Swiper
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={{
          prevEl: '.swiper_prev',
          nextEl: '.swiper_next',
        }}
        modules={[Autoplay, Navigation]}
        slidesPerView={2}
        slidesPerGroup={2}
        loop
      >
        {/* TODO:DB実装後、データ取得により実装すること */}
        <SwiperSlide>
          <StyledSlideLink href="/">
            <StyledSlideImage
              src="https://tblg.k-img.com/images/restaurant/image/contents_bnr_feature_480x300_T2.jpg"
              alt="ネット予約でTポイントが使えるお店"
            />
            <StyledSlideMask />
            <StyledSlideFlame>
              <StyledSlideFlameTitle>
                ネット予約でTポイントが使えるお店
              </StyledSlideFlameTitle>
              <StyledSlideFlameText>
                ネット予約で貯まるTポイントが使えてお得な割引が受けられるお店をご紹介します。
              </StyledSlideFlameText>
            </StyledSlideFlame>
          </StyledSlideLink>
        </SwiperSlide>
        <SwiperSlide>
          <StyledSlideLink href="/">
            <StyledSlideImage
              src="https://tblg.k-img.com/images/restaurant/image/contents_bnr_feature_480x300_T2.jpg"
              alt="ネット予約でTポイントが使えるお店"
            />
            <StyledSlideMask />
            <StyledSlideFlame>
              <StyledSlideFlameTitle>
                ネット予約でTポイントが使えるお店
              </StyledSlideFlameTitle>
              <StyledSlideFlameText>
                ネット予約で貯まるTポイントが使えてお得な割引が受けられるお店をご紹介します。
              </StyledSlideFlameText>
            </StyledSlideFlame>
          </StyledSlideLink>
        </SwiperSlide>
        <SwiperSlide>
          <StyledSlideLink href="/">
            <StyledSlideImage
              src="https://tblg.k-img.com/images/restaurant/image/contents_bnr_feature_480x300_T2.jpg"
              alt="ネット予約でTポイントが使えるお店"
            />
            <StyledSlideMask />
            <StyledSlideFlame>
              <StyledSlideFlameTitle>
                ネット予約でTポイントが使えるお店
              </StyledSlideFlameTitle>
              <StyledSlideFlameText>
                ネット予約で貯まるTポイントが使えてお得な割引が受けられるお店をご紹介します。
              </StyledSlideFlameText>
            </StyledSlideFlame>
          </StyledSlideLink>
        </SwiperSlide>
        <SwiperSlide>
          <StyledSlideLink href="/">
            <StyledSlideImage
              src="https://tblg.k-img.com/images/restaurant/image/contents_bnr_feature_480x300_T2.jpg"
              alt="ネット予約でTポイントが使えるお店"
            />
            <StyledSlideMask />
            <StyledSlideFlame>
              <StyledSlideFlameTitle>
                ネット予約でTポイントが使えるお店
              </StyledSlideFlameTitle>
              <StyledSlideFlameText>
                ネット予約で貯まるTポイントが使えてお得な割引が受けられるお店をご紹介します。
              </StyledSlideFlameText>
            </StyledSlideFlame>
          </StyledSlideLink>
        </SwiperSlide>
        <SwiperSlide>
          <StyledSlideLink href="/">
            <StyledSlideImage
              src="https://tblg.k-img.com/images/restaurant/image/contents_bnr_feature_480x300_T2.jpg"
              alt="ネット予約でTポイントが使えるお店"
            />
            <StyledSlideMask />
            <StyledSlideFlame>
              <StyledSlideFlameTitle>
                ネット予約でTポイントが使えるお店
              </StyledSlideFlameTitle>
              <StyledSlideFlameText>
                ネット予約で貯まるTポイントが使えてお得な割引が受けられるお店をご紹介します。
              </StyledSlideFlameText>
            </StyledSlideFlame>
          </StyledSlideLink>
        </SwiperSlide>
        <SwiperSlide>
          <StyledSlideLink href="/">
            <StyledSlideImage
              src="https://tblg.k-img.com/images/restaurant/image/contents_bnr_feature_480x300_T2.jpg"
              alt="ネット予約でTポイントが使えるお店"
            />
            <StyledSlideMask />
            <StyledSlideFlame>
              <StyledSlideFlameTitle>
                ネット予約でTポイントが使えるお店
              </StyledSlideFlameTitle>
              <StyledSlideFlameText>
                ネット予約で貯まるTポイントが使えてお得な割引が受けられるお店をご紹介します。
              </StyledSlideFlameText>
            </StyledSlideFlame>
          </StyledSlideLink>
        </SwiperSlide>
        <SwiperSlide>
          <StyledSlideLink href="/">
            <StyledSlideImage
              src="https://tblg.k-img.com/images/restaurant/image/contents_bnr_feature_480x300_T2.jpg"
              alt="ネット予約でTポイントが使えるお店"
            />
            <StyledSlideMask />
            <StyledSlideFlame>
              <StyledSlideFlameTitle>
                ネット予約でTポイントが使えるお店
              </StyledSlideFlameTitle>
              <StyledSlideFlameText>
                ネット予約で貯まるTポイントが使えてお得な割引が受けられるお店をご紹介します。
              </StyledSlideFlameText>
            </StyledSlideFlame>
          </StyledSlideLink>
        </SwiperSlide>
      </Swiper>
    </StyledSlideWrapper>
    <SwiperButtonComponent buttonType="prevButton" className="swiper_prev" />
    <SwiperButtonComponent buttonType="nextButton" className="swiper_next" />
  </StyledSlideSection>
);

export default Presenter;
