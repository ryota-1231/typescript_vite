import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import H2 from '../../../uiParts/h2Component/style';
import H3 from '../../../uiParts/h3Component/style';
import SwiperButtonComponent from '../../../uiParts/swiperButtonComponent';

import {
  StyledSlideContainer,
  StyledSlideHeading,
  StyledSlideHeadingLogoLink,
  StyledSlideHeadingMatomeLogoLink,
  StyledSlideImage,
  StyledSlideImageWrapper,
  StyledSlideLink,
  StyledSlideSection,
  StyledSlideText,
  StyledSlideWrapper,
  StyledSwiperWrapper,
} from './style';

const Presenter = () => {
  // TODO:DB実装完了次第削除
  const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <StyledSlideSection>
      <H2>注目のグルメ記事</H2>
      <StyledSlideWrapper>
        <StyledSlideHeading>
          <H3>食べログマガジン 新着記事</H3>
          <StyledSlideHeadingLogoLink
            href="https://magazine.tabelog.com/"
            target="_blank"
          >
            食べログ magazine
          </StyledSlideHeadingLogoLink>
        </StyledSlideHeading>
        <StyledSwiperWrapper>
          <Swiper
            spaceBetween={20}
            navigation={{
              prevEl: '.swiper_top_prev',
              nextEl: '.swiper_top_next',
              hideOnClick: true,
            }}
            modules={[Navigation]}
            slidesPerView={5}
            slidesPerGroup={5}
          >
            {/* TODO:DB実装後、データ取得により実装すること。仮で10回繰り返し */}
            {array.map((i) => (
              <SwiperSlide key={i}>
                <StyledSlideContainer>
                  <StyledSlideLink href="/" rel="noopener">
                    <StyledSlideImageWrapper>
                      <StyledSlideImage
                        src="https://tblg.k-img.com/images/restaurant/image/contents_bnr_feature_480x300_T2.jpg"
                        alt="ネット予約でTポイントが使えるお店"
                      />
                    </StyledSlideImageWrapper>
                    <StyledSlideText>
                      2022年流行る店を食通が予想！
                      鎌倉から世界へ発信する注目レストラン __{i}__
                    </StyledSlideText>
                  </StyledSlideLink>
                </StyledSlideContainer>
              </SwiperSlide>
            ))}
          </Swiper>
        </StyledSwiperWrapper>
        <SwiperButtonComponent
          buttonType="prevButton"
          className="swiper_top_prev"
        />
        <SwiperButtonComponent
          buttonType="nextButton"
          className="swiper_top_next"
        />
      </StyledSlideWrapper>
      <StyledSlideWrapper css="margin-top: 35px;">
        <StyledSlideHeading>
          <H3>
            <span css="font-weight: bold;">東京都</span>の食べログまとめ
            アクセスランキング
          </H3>
          <StyledSlideHeadingMatomeLogoLink
            href="https://tabelog.com/matome/"
            target="_blank"
          >
            食べログまとめ
          </StyledSlideHeadingMatomeLogoLink>
        </StyledSlideHeading>
        <StyledSwiperWrapper>
          <Swiper
            spaceBetween={20}
            navigation={{
              prevEl: '.swiper_bottom_prev',
              nextEl: '.swiper_bottom_next',
              hideOnClick: true,
            }}
            modules={[Navigation]}
            slidesPerView={5}
            slidesPerGroup={5}
          >
            {/* TODO:DB実装後、データ取得により実装すること。仮で10回繰り返し */}
            {array.map((i) => (
              <SwiperSlide key={i}>
                <StyledSlideContainer>
                  <StyledSlideLink href="/" rel="noopener">
                    <StyledSlideImageWrapper>
                      <StyledSlideImage
                        src="https://tblg.k-img.com/images/restaurant/image/contents_bnr_feature_480x300_T2.jpg"
                        alt="ネット予約でTポイントが使えるお店"
                      />
                    </StyledSlideImageWrapper>
                    <StyledSlideText>
                      2022年流行る店を食通が予想！
                      鎌倉から世界へ発信する注目レストラン __{i}__
                    </StyledSlideText>
                  </StyledSlideLink>
                </StyledSlideContainer>
              </SwiperSlide>
            ))}
          </Swiper>
        </StyledSwiperWrapper>
        <SwiperButtonComponent
          buttonType="prevButton"
          className="swiper_bottom_prev"
        />
        <SwiperButtonComponent
          buttonType="nextButton"
          className="swiper_bottom_next"
        />
      </StyledSlideWrapper>
    </StyledSlideSection>
  );
};

export default Presenter;
