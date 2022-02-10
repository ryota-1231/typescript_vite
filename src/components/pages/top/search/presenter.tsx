import H2Component from '../../../uiParts/h2Component';

import {
  StyledContents,
  StyledDateContents,
  StyledForm,
  StyledSearch,
  StyledTitle,
  StyledWrapper,
  StyledFormButton,
  StyledInput,
  StyledAreaContents,
  StyledKeywordContents,
  StyledAreaInput,
} from './style';

const Presenter = () => (
  <StyledWrapper>
    <StyledContents>
      <StyledTitle>
        <H2Component>日時、人数から探す</H2Component>
      </StyledTitle>
      <StyledSearch>
        <StyledForm>
          <StyledAreaContents>
            <StyledAreaInput
              placeholder="エリア・駅 [例:銀座、渋谷]"
              autoComplete="off"
              maxLength={50}
            />
          </StyledAreaContents>
          <StyledKeywordContents>
            <StyledInput
              placeholder="キーワード [例:焼肉、店名、個室]"
              autoComplete="off"
              maxLength={50}
            />
          </StyledKeywordContents>
          <StyledDateContents />
          <StyledFormButton>
            <i>検索</i>
          </StyledFormButton>
        </StyledForm>
      </StyledSearch>
    </StyledContents>
  </StyledWrapper>
);

export default Presenter;
