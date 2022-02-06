import { Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import H2 from '../../../uiParts/h2Component/style';

import {
  StyledSlideFlame,
  StyledSlideFlameText,
  StyledSlideFlameTitle,
  StyledSlideImage,
  StyledSlideLink,
  StyledSlideMask,
  StyledSlideNextButton,
  StyledSlidePrevButton,
  StyledSlideSection,
  StyledSlideWrapper,
} from './style';

const Presenter = () => (
  <StyledSlideSection>
    <H2>特集</H2>
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
    <StyledSlidePrevButton className="swiper_prev" />
    <StyledSlideNextButton className="swiper_next" />
  </StyledSlideSection>
);

export default Presenter;
