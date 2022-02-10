import H2Component from '../../../uiParts/h2Component';

import {
  StyledNoticeDateSpan,
  StyledNoticeLink,
  StyledNoticeList,
  StyledNoticeSpan,
} from './style';

const Presenter = () => (
  <div css="width: 100%">
    <div css="margin-top: 40px;">
      <H2Component>食べログからのお知らせ</H2Component>
      <ul>
        <StyledNoticeList>
          <StyledNoticeSpan>お知らせ</StyledNoticeSpan>
          <StyledNoticeDateSpan>2022.02.07</StyledNoticeDateSpan>
          <StyledNoticeLink href="/">利用規約改定のお知らせ</StyledNoticeLink>
        </StyledNoticeList>
        <StyledNoticeList>
          <StyledNoticeSpan>お知らせ</StyledNoticeSpan>
          <StyledNoticeDateSpan>2022.01.13</StyledNoticeDateSpan>
          <StyledNoticeLink href="/">
            Go To
            Eatキャンペーンで付与されたポイントのご利用について（2022/1/13更新）
          </StyledNoticeLink>
        </StyledNoticeList>
        <StyledNoticeList>
          <StyledNoticeSpan>お知らせ</StyledNoticeSpan>
          <StyledNoticeDateSpan>2020.11.09</StyledNoticeDateSpan>
          <StyledNoticeLink href="/">
            新型コロナウイルス拡大における対応のお願い（2022/1/20更新）
          </StyledNoticeLink>
        </StyledNoticeList>
      </ul>
    </div>
  </div>
);

export default Presenter;
