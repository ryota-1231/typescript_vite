import {
  StyledUserInfoWrapper,
  StyledUserInfoTopContainer,
  StyledUserInfoBottomContainer,
  StyledUserInfoAlertLabel,
  StyledUserInfoHeader,
  StyledUserInfoImageWrapper,
  StyledUserInfoLink,
  StyledUserInfoNameWrapper,
  StyledUserInfoName,
  StyledUserInfoNameDecoration,
  StyledUserInfoList,
  StyledUserInfoDataLink,
  StyledUserInfoDataCount,
  StyledUserInfoDataSpan,
  StyledUserInfoDataCountCustom,
  StyledUserInfoRow,
  StyledUserInfoRowLink,
  StyledUserInfoRowTitle,
  StyledUserInfoRowSpan,
  StyledUserInfoRowReviewArea,
  StyledUserInfoPremiumText,
  StyledUserInfoPremiumLink,
  StyledH3Component,
  StyledUserInfoNoData,
  StyledUserInfoNoDataEm,
  StyledUserInfoCollection,
  StyledUserInfoCollectionInput,
  StyledUserInfoCollectionButton,
  StyledUserInfoTargetLink,
  StyledUserInfoTargetMain,
  StyledUserInfoTargetName,
  StyledUserInfoTargetGenre,
  StyledUserInfoTargetRating,
  StyledUserInfoTargetStar,
  StyledUserInfoTargetStrong,
} from './style';

const Presenter = () => (
  <StyledUserInfoWrapper>
    <StyledUserInfoTopContainer>
      <StyledUserInfoHeader>
        <div css="margin-top: 16px;">
          <StyledUserInfoImageWrapper>
            <StyledUserInfoLink href="/">
              <img
                width="55"
                height="55"
                alt="4074fc"
                src="images/top/top_sidebar_nophoto.png"
              />
            </StyledUserInfoLink>
          </StyledUserInfoImageWrapper>
        </div>
        <div css="margin: 16px 0 0 12px;">
          <StyledUserInfoNameWrapper>
            <StyledUserInfoLink href="/">
              <StyledUserInfoName>田中 太郎</StyledUserInfoName>
              <StyledUserInfoNameDecoration>さん</StyledUserInfoNameDecoration>
            </StyledUserInfoLink>
          </StyledUserInfoNameWrapper>
        </div>
      </StyledUserInfoHeader>
      <StyledUserInfoAlertLabel>
        <a href="/">携帯電話番号認証にご協力ください</a>
      </StyledUserInfoAlertLabel>
      <div css="padding: 10px 20px 20px;">
        <ul>
          <StyledUserInfoList>
            <StyledUserInfoDataLink
              isDisabled={false}
              data-analytics-btn=":tpoint_history_side"
              data-analytics-add-page-prefix="true"
              href="/"
            >
              <StyledUserInfoDataSpan>
                <i css="display: none;">Tpoint</i>
              </StyledUserInfoDataSpan>
              <span>保有Tポイント</span>
              <StyledUserInfoDataCountCustom>
                <span>0</span>pt
              </StyledUserInfoDataCountCustom>
            </StyledUserInfoDataLink>
          </StyledUserInfoList>
          <StyledUserInfoList>
            <StyledUserInfoDataLink isDisabled href="/">
              <span>行ったお店</span>
              <StyledUserInfoDataCount>0</StyledUserInfoDataCount>
            </StyledUserInfoDataLink>
          </StyledUserInfoList>
          <StyledUserInfoList>
            <StyledUserInfoDataLink isDisabled href="/">
              <span>公開中口コミ一覧</span>
              <StyledUserInfoDataCount>0</StyledUserInfoDataCount>
            </StyledUserInfoDataLink>
          </StyledUserInfoList>
          <StyledUserInfoList>
            <StyledUserInfoDataLink isDisabled={false} href="/">
              <span>フォロー中</span>
              <StyledUserInfoDataCount>4</StyledUserInfoDataCount>
            </StyledUserInfoDataLink>
          </StyledUserInfoList>
          <StyledUserInfoList>
            <StyledUserInfoDataLink isDisabled href="/">
              <span>フォロワー</span>
              <StyledUserInfoDataCount>0</StyledUserInfoDataCount>
            </StyledUserInfoDataLink>
          </StyledUserInfoList>
          <StyledUserInfoList>
            <StyledUserInfoDataLink isDisabled href="/">
              <span>下書き一覧</span>
              <StyledUserInfoDataCount>0</StyledUserInfoDataCount>
            </StyledUserInfoDataLink>
          </StyledUserInfoList>
          <StyledUserInfoList>
            <StyledUserInfoDataLink isDisabled href="/">
              <span>保存済み</span>
              <StyledUserInfoDataCount>0</StyledUserInfoDataCount>
            </StyledUserInfoDataLink>
          </StyledUserInfoList>
          <StyledUserInfoList>
            <StyledUserInfoRow>
              <StyledUserInfoRowTitle>
                ランキング設定地域
              </StyledUserInfoRowTitle>
              <StyledUserInfoRowLink href="https://tabelog.com/setting/ranking_area/edit" />
              <div css="width: 100%;">
                <StyledUserInfoRowSpan>未設定</StyledUserInfoRowSpan>
              </div>
              <StyledUserInfoRowReviewArea>
                <div>口コミ数</div>
                <div css="display: inline-block;">
                  <span>
                    2022年2月：<b css="font-weight: 600;">0</b>件
                  </span>
                  <span css="margin-left: 4px;">
                    (<b css="font-weight: 600;">TOP100位圏外</b>)
                  </span>
                </div>
                <div css="display: inline-block;">
                  <span>
                    年間：<b css="font-weight: 600;">0</b>件
                  </span>
                  <span css="margin-left: 4px;">
                    (<b css="font-weight: 600;">TOP100位圏外</b>)
                  </span>
                </div>
              </StyledUserInfoRowReviewArea>
            </StyledUserInfoRow>
          </StyledUserInfoList>
        </ul>
        <div css="margin-top: 20px;">
          <StyledUserInfoPremiumText>
            クレジットカードで初月無料
          </StyledUserInfoPremiumText>
          <StyledUserInfoPremiumLink href="https://tabelog.com/rst/premium_service_guide?tid=ps_top_uib">
            プレミアムサービス
          </StyledUserInfoPremiumLink>
        </div>
      </div>
    </StyledUserInfoTopContainer>
    <StyledUserInfoBottomContainer>
      <div>
        <StyledH3Component>保存したお店</StyledH3Component>
        <StyledUserInfoNoData>
          <StyledUserInfoNoDataEm>
            気になるお店を保存しませんか？
          </StyledUserInfoNoDataEm>
          <span>
            保存したお店は一覧で表示され
            <br />
            いつでも確認できます。
            <br />
            コレクションを作成してお店をわかりやすく分類・管理することもできます。
          </span>
        </StyledUserInfoNoData>
      </div>
      <div css="margin-top: 25px;">
        <StyledH3Component>コレクション</StyledH3Component>
        <StyledUserInfoNoData>
          <StyledUserInfoNoDataEm>
            あなたのお店コレクションを作りませんか？
          </StyledUserInfoNoDataEm>
          <span>
            コレクションを作成することで、
            <br />
            お店を管理することができます。
          </span>
          <StyledUserInfoCollection>
            <StyledUserInfoCollectionInput
              type="text"
              name="memo_label"
              placeholder="コレクション名"
            />
            <StyledUserInfoCollectionButton type="button">
              作成
            </StyledUserInfoCollectionButton>
          </StyledUserInfoCollection>
        </StyledUserInfoNoData>
      </div>
      <div css="margin-top: 25px;">
        <StyledH3Component>閲覧履歴</StyledH3Component>
        <ul>
          <li>
            <StyledUserInfoTargetLink href="https://tabelog.com/tokyo/A1306/A130603/13102319/">
              <img
                alt="OVE"
                height="50"
                src="https://tabelog.com/restaurant/images/Rvw/138504/100x100_square_138504697.jpg"
                width="50"
              />
              <StyledUserInfoTargetMain>
                <StyledUserInfoTargetName>OVE</StyledUserInfoTargetName>
                <StyledUserInfoTargetGenre>カフェ</StyledUserInfoTargetGenre>
                <StyledUserInfoTargetRating>
                  <StyledUserInfoTargetStar />
                  <StyledUserInfoTargetStrong>3.09</StyledUserInfoTargetStrong>
                </StyledUserInfoTargetRating>
              </StyledUserInfoTargetMain>
            </StyledUserInfoTargetLink>
          </li>
        </ul>
      </div>
    </StyledUserInfoBottomContainer>
  </StyledUserInfoWrapper>
);

export default Presenter;
