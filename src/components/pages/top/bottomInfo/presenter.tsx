import H2Component from '../../../uiParts/h2Component';

import {
  StyledInfoContainer,
  StyledInfoContents,
  StyledInfoEntryButton,
  StyledInfoEntryGuide,
  StyledInfoEntryLink,
  StyledInfoList,
  StyledInfoListDetail,
  StyledInfoListImageWrapper,
  StyledInfoListLink,
  StyledInfoSubject,
  StyledInfoWrapper,
} from './style';

const Presenter = () => (
  <StyledInfoWrapper>
    <StyledInfoContainer>
      <div css="width: 30%;">
        <H2Component>レストラン新規登録</H2Component>
        <StyledInfoContents>
          <StyledInfoEntryGuide>
            お店が登録されていない場合はレストラン新規登録ページから登録を行うことができます。
          </StyledInfoEntryGuide>
          <StyledInfoEntryButton>
            <StyledInfoEntryLink href="https://tabelog.com/rst/auth_rst_entry">
              新しくお店を登録
            </StyledInfoEntryLink>
          </StyledInfoEntryButton>
        </StyledInfoContents>
      </div>
      <div css="width: 30%;">
        <H2Component>店舗運営者の方へ</H2Component>
        <ul>
          <StyledInfoList>
            <StyledInfoSubject>
              <a href="https://ssl.tabelog.com/owner_account/login?lid=ownerlogin_rsttop_side">
                食べログ店舗会員ログイン
              </a>
            </StyledInfoSubject>
            <p css="margin-top: 2px;">
              既に会員登録が完了している方はこちらからログインできます。
            </p>
          </StyledInfoList>
          <StyledInfoList>
            <StyledInfoSubject>
              <a href="https://owner.tabelog.com/owner_info/top?lid=ownerinfo_rsttop_side">
                無料で食べログに登録してお店をPRしましょう！
              </a>
            </StyledInfoSubject>
            <p css="margin-top: 2px;">
              店舗会員になると、無駄な広告費をかけずに効果的なPRができます。
            </p>
          </StyledInfoList>
        </ul>
      </div>
      <div css="width: 30%;">
        <H2Component>お得なキャンペーン&プレゼント</H2Component>
        <ul>
          <StyledInfoList>
            <StyledInfoListLink href="https://campaign.tabelog.com/points/tpoint/">
              <StyledInfoListImageWrapper>
                <img
                  css="vertical-align: bottom;"
                  alt=""
                  src="images/top/top_banner_tpoint.png"
                  height="45"
                  width="45"
                />
              </StyledInfoListImageWrapper>
              <StyledInfoListDetail>
                口コミ投稿・新規店舗登録でTポイントが貯まる！
              </StyledInfoListDetail>
            </StyledInfoListLink>
          </StyledInfoList>
        </ul>
      </div>
    </StyledInfoContainer>
  </StyledInfoWrapper>
);

export default Presenter;
