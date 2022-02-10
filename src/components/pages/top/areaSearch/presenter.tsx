import { PREFECTURES } from '../../../../utils/area';
import H1Component from '../../../uiParts/h1Component';
import H3Component from '../../../uiParts/h3Component';

import {
  StyledAreaList,
  StyledAreaTarget,
  StyledAreaTargetImage,
  StyledAreaTargetNum,
  StyledAreaTargetNumUnit,
  StyledAreaTargetText,
  StyledAreaUl,
  StyledHeading,
  StyledMoreLink,
  StyledMoreLinkUl,
  StyledPrefContents,
  StyledPrefLink,
  StyledPrefList,
  StyledPrefSet,
  StyledPrefUl,
  StyledSection,
} from './style';

type PrefectureType = {
  isDisplay: boolean;
  handleClickPrefecture: (arg: string) => void;
  handleClickIsDisplay: () => void;
};

const Presenter = ({
  isDisplay,
  handleClickPrefecture,
  handleClickIsDisplay,
}: PrefectureType) => (
  <StyledSection isDisplay={isDisplay}>
    <StyledHeading>
      <H1Component>エリアから探す</H1Component>
    </StyledHeading>
    <StyledAreaUl>
      <StyledAreaList
        onClick={() => {
          handleClickPrefecture('東京');
          handleClickIsDisplay();
        }}
      >
        <StyledAreaTarget>
          <StyledAreaTargetImage>
            <img
              alt="東京"
              src="src/assets/images/top/top_area_search_tokyo.png"
            />
          </StyledAreaTargetImage>
          <StyledAreaTargetText>
            東京
            <StyledAreaTargetNum>128,475</StyledAreaTargetNum>
            <StyledAreaTargetNumUnit>件</StyledAreaTargetNumUnit>
          </StyledAreaTargetText>
        </StyledAreaTarget>
      </StyledAreaList>
      <StyledAreaList
        css="margin-left: 30px"
        onClick={() => {
          handleClickPrefecture('神奈川');
          handleClickIsDisplay();
        }}
      >
        <StyledAreaTarget>
          <StyledAreaTargetImage>
            <img
              alt="神奈川"
              src="src/assets/images/top/top_area_search_kanagawa.png"
            />
          </StyledAreaTargetImage>
          <StyledAreaTargetText>
            神奈川
            <StyledAreaTargetNum>45,138</StyledAreaTargetNum>
            <StyledAreaTargetNumUnit>件</StyledAreaTargetNumUnit>
          </StyledAreaTargetText>
        </StyledAreaTarget>
      </StyledAreaList>
      <StyledAreaList
        css="margin-left: 30px"
        onClick={() => {
          handleClickPrefecture('愛知');
          handleClickIsDisplay();
        }}
      >
        <StyledAreaTarget>
          <StyledAreaTargetImage>
            <img
              alt="愛知"
              src="src/assets/images/top/top_area_search_aichi.png"
            />
          </StyledAreaTargetImage>
          <StyledAreaTargetText>
            愛知
            <StyledAreaTargetNum>43,989</StyledAreaTargetNum>
            <StyledAreaTargetNumUnit>件</StyledAreaTargetNumUnit>
          </StyledAreaTargetText>
        </StyledAreaTarget>
      </StyledAreaList>
    </StyledAreaUl>
    <StyledAreaUl>
      <StyledAreaList
        onClick={() => {
          handleClickPrefecture('大阪');
          handleClickIsDisplay();
        }}
      >
        <StyledAreaTarget>
          <StyledAreaTargetImage>
            <img
              alt="大阪"
              src="src/assets/images/top/top_area_search_osaka.png"
            />
          </StyledAreaTargetImage>
          <StyledAreaTargetText>
            大阪
            <StyledAreaTargetNum>64,287</StyledAreaTargetNum>
            <StyledAreaTargetNumUnit>件</StyledAreaTargetNumUnit>
          </StyledAreaTargetText>
        </StyledAreaTarget>
      </StyledAreaList>
      <StyledAreaList
        css="margin-left: 30px"
        onClick={() => {
          handleClickPrefecture('京都');
          handleClickIsDisplay();
        }}
      >
        <StyledAreaTarget>
          <StyledAreaTargetImage>
            <img
              alt="京都"
              src="src/assets/images/top/top_area_search_kyoto.png"
            />
          </StyledAreaTargetImage>
          <StyledAreaTargetText>
            京都
            <StyledAreaTargetNum>21,073</StyledAreaTargetNum>
            <StyledAreaTargetNumUnit>件</StyledAreaTargetNumUnit>
          </StyledAreaTargetText>
        </StyledAreaTarget>
      </StyledAreaList>
      <StyledAreaList
        css="margin-left: 30px"
        onClick={() => {
          handleClickPrefecture('福岡');
          handleClickIsDisplay();
        }}
      >
        <StyledAreaTarget>
          <StyledAreaTargetImage>
            <img
              alt="福岡"
              src="src/assets/images/top/top_area_search_fukuoka.png"
            />
          </StyledAreaTargetImage>
          <StyledAreaTargetText>
            福岡
            <StyledAreaTargetNum>32,241</StyledAreaTargetNum>
            <StyledAreaTargetNumUnit>件</StyledAreaTargetNumUnit>
          </StyledAreaTargetText>
        </StyledAreaTarget>
      </StyledAreaList>
    </StyledAreaUl>
    <StyledPrefContents>
      {PREFECTURES.map((obj) => {
        const localKey: string = Object.keys(obj)[0];
        return (
          <StyledPrefSet key={localKey}>
            <H3Component>{localKey}</H3Component>
            <StyledPrefUl>
              {obj[localKey].map((prefecture) => (
                <StyledPrefList key={prefecture.id}>
                  <StyledPrefLink href={prefecture.link}>
                    {prefecture.name}
                  </StyledPrefLink>
                </StyledPrefList>
              ))}
            </StyledPrefUl>
          </StyledPrefSet>
        );
      })}
    </StyledPrefContents>
    <StyledMoreLinkUl>
      <li>
        <StyledMoreLink>注目エリア</StyledMoreLink>
      </li>
      <li css="margin-left: 15px;">
        <StyledMoreLink>全国の居酒屋</StyledMoreLink>
      </li>
      <li css="margin-left: 15px;">
        <StyledMoreLink>全国のお店</StyledMoreLink>
      </li>
      <li css="margin-left: 15px;">
        <StyledMoreLink>海外のお店</StyledMoreLink>
      </li>
    </StyledMoreLinkUl>
  </StyledSection>
);

export default Presenter;
