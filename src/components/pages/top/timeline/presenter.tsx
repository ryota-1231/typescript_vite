import H2Component from '../../../uiParts/h2Component';

import {
  StyledBannerContainer,
  StyledBannerIcon,
  StyledBannerTitle,
  StyledBannerWrapper,
  StyledMoreLink,
  StyledMoreLinkWrapper,
  StyledTimelineBox,
  StyledTimelineBoxButton,
  StyledTimelineBoxButtonItem,
  StyledTimelineBoxButtonLink,
  StyledTimelineBoxData,
  StyledTimelineBoxImage,
  StyledTimelineBoxImageWrapper,
  StyledTimelineBoxInfo,
  StyledTimelineBoxInfoComment,
  StyledTimelineBoxInfoDetail,
  StyledTimelineBoxInfoImage,
  StyledTimelineBoxInfoLink,
  StyledTimelineBoxInfoList,
  StyledTimelineBoxInfoPhoto,
  StyledTimelineBoxInfoTitle,
  StyledTimelineBoxInner,
  StyledTimelineBoxMenu,
  StyledTimelineBoxTitle,
  StyledTimelineBoxUpdate,
  StyledTimelineContents,
  StyledTimelineLoading,
  StyledTimelineLoadingSpan,
  StyledTimelineReadMore,
  StyledTimelineText,
} from './style';

type PropsType = {
  array: number[];
  handleClickReadMore: () => void;
};

const Presenter = ({ array, handleClickReadMore }: PropsType) => (
  <section css="margin-top: 50px;">
    <H2Component>口コミから探す</H2Component>
    <div>
      <StyledBannerWrapper>
        <StyledBannerContainer>
          <StyledBannerIcon>
            <img
              alt="icon"
              src="src/assets/images/top/top_banner_icons.png"
              width="106"
              height="42"
            />
          </StyledBannerIcon>
          <StyledBannerTitle>
            好みのあう人をフォローすると、その人のオススメのお店から探せます。
          </StyledBannerTitle>
        </StyledBannerContainer>
      </StyledBannerWrapper>
    </div>
    <StyledTimelineContents>
      {/* TODO: DBまたはバッチ実装後に修正 */}
      {array.map((i, _) => (
        <StyledTimelineBox key={`array_${i}`}>
          <StyledTimelineBoxInner>
            <StyledTimelineBoxMenu>
              <StyledTimelineBoxButton>
                <StyledTimelineBoxButtonItem>
                  <StyledTimelineBoxButtonLink />
                </StyledTimelineBoxButtonItem>
              </StyledTimelineBoxButton>
            </StyledTimelineBoxMenu>
            <StyledTimelineBoxData>
              <a
                href="https://magazine.tabelog.com/"
                rel="noopener noreferrer"
                target="_blank"
                css="display: inline-block;"
              >
                <div css="display: flex;">
                  <p>
                    <StyledTimelineBoxImageWrapper>
                      <StyledTimelineBoxImage
                        alt="食べログマガジン"
                        src="src/assets/images/top/top_tabelog_magazine_logo.svg"
                        width="50"
                        height="50"
                      />
                    </StyledTimelineBoxImageWrapper>
                  </p>
                  <p css="margin: 5px 0 0 8px;">
                    <span css="block">
                      <StyledTimelineBoxTitle>
                        食べログマガジン
                      </StyledTimelineBoxTitle>
                    </span>
                    <StyledTimelineBoxUpdate>
                      <time dateTime="2022-02-06">6時間前</time> 更新
                    </StyledTimelineBoxUpdate>
                  </p>
                </div>
              </a>
            </StyledTimelineBoxData>
            <StyledTimelineBoxInfo>
              <StyledTimelineBoxInfoLink
                href="https://magazine.tabelog.com/articles/188012"
                rel="noopener"
                target="_blank"
              >
                <StyledTimelineBoxInfoTitle>
                  <strong>
                    2022年流行る店を食通が予想！
                    鎌倉から世界へ発信する注目レストラン
                  </strong>
                </StyledTimelineBoxInfoTitle>
                <StyledTimelineBoxInfoComment>
                  食通たちが選ぶ、2022年にブレイクしそうな飲食店とは？
                  食べロググルメ著名人・山本憲資さんに、おすすめのレストランを教えていただきました。
                </StyledTimelineBoxInfoComment>
                <StyledTimelineBoxInfoDetail>
                  詳細を見る
                </StyledTimelineBoxInfoDetail>
              </StyledTimelineBoxInfoLink>
              <StyledTimelineBoxInfoPhoto>
                <ul>
                  <StyledTimelineBoxInfoList>
                    <StyledTimelineBoxInfoImage
                      width="140"
                      height="140"
                      alt="食べログマガジン"
                      src="https://magazine.tabelog.com/uploads/2022/01/640x640_rect_151884156.jpg"
                    />
                  </StyledTimelineBoxInfoList>
                </ul>
              </StyledTimelineBoxInfoPhoto>
            </StyledTimelineBoxInfo>
          </StyledTimelineBoxInner>
        </StyledTimelineBox>
      ))}
      <StyledTimelineReadMore onClick={handleClickReadMore}>
        <div>
          <StyledTimelineText>もっと見る</StyledTimelineText>
        </div>
        <StyledTimelineLoading>
          <StyledTimelineLoadingSpan />
        </StyledTimelineLoading>
      </StyledTimelineReadMore>
    </StyledTimelineContents>
    <StyledMoreLinkWrapper>
      <StyledMoreLink href="">
        <span>すべての口コミ一覧へ</span>
      </StyledMoreLink>
    </StyledMoreLinkWrapper>
  </section>
);
export default Presenter;
