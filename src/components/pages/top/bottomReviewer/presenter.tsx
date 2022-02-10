import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import SwiperButtonComponent from '../../../uiParts/swiperButtonComponent';

import {
  StyledCassetteImage,
  StyledCassetteImageWrapper,
  StyledCassetteName,
  StyledDescriptionSpan,
  StyledFormInput,
  StyledFormSubmitInput,
  StyledFormWrapper,
  StyledH2,
  StyledSearchLink,
  StyledSearchLinkWrapper,
  StyledSection,
  StyledSlideImage,
  StyledSlideImageInner,
  StyledSlideImageWrapper,
  StyledSwiperSlideCount,
  StyledSwiperSlideCountLog,
  StyledSwiperSlideFollow,
  StyledSwiperSlideFollowButton,
  StyledSwiperSlideFollowTarget,
  StyledSwiperSlideFrame,
  StyledSwiperSlideLink,
  StyledSwiperSlideMain,
  StyledSwiperSlideMoreLink,
  StyledSwiperSlideProf,
  StyledSwiperSlideSubProf,
  StyledSwiperSlideTopContainer,
} from './style';

const Presenter = () => {
  const array = [1, 2, 3, 4, 5, 6];

  return (
    <StyledSection>
      <div css="margin-bottom: 30px;">
        <StyledH2>ユーザーを探す</StyledH2>
        <StyledFormWrapper>
          <form
            css="display: flex;"
            name=""
            action=""
            acceptCharset="UTF-8"
            method="get"
          >
            <div css="width: 200px;">
              <StyledFormInput
                type="text"
                name=""
                id=""
                placeholder="ユーザー名"
              />
            </div>
            <StyledFormSubmitInput type="submit" name="" value="検索" />
          </form>
        </StyledFormWrapper>
      </div>
      <div>
        <div css="position: relative;">
          <StyledDescriptionSpan>
            食べログを使って、おすすめのお店を紹介している有名人をご紹介します。
          </StyledDescriptionSpan>
          <div css="position: relative;">
            <Swiper
              spaceBetween={20}
              navigation={{
                prevEl: `.swiper_reviewer_prev`,
                nextEl: `.swiper_reviewer_next`,
              }}
              modules={[Navigation]}
              slidesPerView={6}
              slidesPerGroup={6}
            >
              {array.map((i) => (
                <SwiperSlide key={i}>
                  <StyledSwiperSlideLink href="/" rel="noopener">
                    <StyledSwiperSlideTopContainer>
                      <StyledSlideImageWrapper>
                        <StyledSlideImageInner>
                          <StyledSlideImage
                            src="https://tabelog.com/user/images/Cover/2778/2778702.jpg?1616161611"
                            alt=""
                          />
                        </StyledSlideImageInner>
                      </StyledSlideImageWrapper>
                    </StyledSwiperSlideTopContainer>
                    <div css="padding: 10px 10px 14px 10px;">
                      <StyledSwiperSlideMain>
                        <StyledCassetteImageWrapper>
                          <StyledCassetteImage
                            alt="斉藤アリス"
                            src="https://tabelog.com/user/images/Profile/2778/120x120_2778702.jpg?1616658448"
                          />
                        </StyledCassetteImageWrapper>
                        <StyledCassetteName>
                          斉藤アリス
                          <span
                            data-link-url="https://tabelog.com/celebrity/"
                            data-ol-has-click-handler=""
                          >
                            <i css="display: none;">グルメ著名人</i>
                          </span>
                        </StyledCassetteName>
                      </StyledSwiperSlideMain>
                      <StyledSwiperSlideFrame>
                        <StyledSwiperSlideCount>
                          <StyledSwiperSlideCountLog>
                            1556ログ
                          </StyledSwiperSlideCountLog>
                          <p css="margin-top: 2px;">
                            フォロワー：<span>22151人</span>
                          </p>
                        </StyledSwiperSlideCount>
                        <StyledSwiperSlideFollow>
                          <StyledSwiperSlideFollowButton>
                            <div>
                              <StyledSwiperSlideFollowTarget>
                                <span>フォローする</span>
                              </StyledSwiperSlideFollowTarget>
                            </div>
                            <div
                              className="js-follow-balloon p-follow-btn__balloon rsttop-rvwr-cassette__follow-balloon"
                              data-ol-has-click-handler=""
                            />
                          </StyledSwiperSlideFollowButton>
                        </StyledSwiperSlideFollow>
                      </StyledSwiperSlideFrame>
                      <StyledSwiperSlideSubProf>
                        モデル&ライター
                      </StyledSwiperSlideSubProf>
                      <StyledSwiperSlideProf>
                        インスタグラム @cafeali 著書「斉藤アリ...
                      </StyledSwiperSlideProf>
                      <StyledSwiperSlideMoreLink>
                        もっとみる
                      </StyledSwiperSlideMoreLink>
                    </div>
                  </StyledSwiperSlideLink>
                </SwiperSlide>
              ))}
            </Swiper>
            <SwiperButtonComponent
              css="top: 31%"
              buttonType="prevButton"
              className="swiper_reviewer_prev"
            />
            <SwiperButtonComponent
              css="top: 31%"
              buttonType="nextButton"
              className="swiper_reviewer_next"
            />
          </div>
          <StyledSearchLinkWrapper>
            <p css="display: inline-block;">
              <StyledSearchLink
                target="_blank"
                rel="noopener noreferrer"
                href="https://tabelog.com/celebrity/"
              >
                <span>グルメ著名人一覧へ</span>
              </StyledSearchLink>
            </p>
          </StyledSearchLinkWrapper>
        </div>
      </div>
    </StyledSection>
  );
};

export default Presenter;
