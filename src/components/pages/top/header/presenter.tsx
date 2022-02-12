import Search from '../search';

import {
  StyledDownload,
  StyledH1,
  StyledHeader,
  StyledHeaderInner,
  StyledList,
  StyledLiMessage,
  StyledTitleImage,
  StyledTitleUl,
  StyledTitleWrapper,
  StyledUl,
  StyledUserMenu,
  StyledWrapper,
} from './style';

const Presenter = () => (
  <StyledWrapper>
    <StyledHeader>
      <StyledHeaderInner>
        <StyledH1>
          <span>全国のグルメ・レストランガイド 食べログ</span>
        </StyledH1>
        <StyledUserMenu>
          <StyledUl>
            <StyledLiMessage>
              <a href="/top">
                <span>メッセージ</span>
              </a>
            </StyledLiMessage>
            <StyledList>
              <a href="/top">
                <span>お知らせ</span>
              </a>
            </StyledList>
            <StyledList>
              <a href="/top">
                <span>0pt</span>
              </a>
            </StyledList>
            <StyledList>
              <a href="/top">
                <span>予約確認</span>
              </a>
            </StyledList>
            <StyledList>
              <a href="/top">
                <span>行ったお店</span>
              </a>
            </StyledList>
            <StyledList>
              <a href="/top">
                <span>保存済み</span>
              </a>
            </StyledList>
            <StyledList>
              <a href="/top">
                <span>マイページ</span>
              </a>
            </StyledList>
          </StyledUl>
        </StyledUserMenu>
      </StyledHeaderInner>
    </StyledHeader>
    <StyledTitleWrapper>
      <StyledTitleImage />
      <StyledDownload>
        <StyledTitleUl>
          <li>
            <a href="https://itunes.apple.com/jp/app/id763377066?mt=8">
              <img
                alt="Download on the App Store"
                src="images/download_appstore.png"
              />
            </a>
          </li>
          <li css="margin-left: 17px">
            <a href="https://play.google.com/store/apps/details?id=com.kakaku.tabelog">
              <img
                alt="GET IT ON Google Play"
                src="images/download_googleplay.png"
              />
            </a>
          </li>
        </StyledTitleUl>
      </StyledDownload>
    </StyledTitleWrapper>
    <Search />
  </StyledWrapper>
);

export default Presenter;
