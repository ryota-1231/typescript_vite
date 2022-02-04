import { CITY, PRIMARY_CITY } from '../../../../utils/area';
import ListSubComponent from '../../../uiParts/listSubComponent';

import {
  StyledFrame,
  StyledFrameSubUl,
  StyledFrameTitleLink,
  StyledFrameTitleNum,
  StyledFrameTitleNumUnit,
  StyledFrameUl,
  StyledListComponent,
  StyledP,
  StyledSection,
  StyledSpan,
} from './style';

type PrefectureType = {
  prefectures: string;
  isDisplay: boolean;
  handleClickIsDisplay: () => void;
};

const Presenter = ({
  prefectures,
  isDisplay,
  handleClickIsDisplay,
}: PrefectureType) => (
  <StyledSection isDisplay={isDisplay}>
    <StyledP onClick={handleClickIsDisplay}>
      <StyledSpan>都道府県一覧に戻る</StyledSpan>
    </StyledP>
    <StyledFrame>
      <p>
        <StyledFrameTitleLink href="/">{prefectures}</StyledFrameTitleLink>
        <StyledFrameTitleNum>128,475</StyledFrameTitleNum>
        <StyledFrameTitleNumUnit>件</StyledFrameTitleNumUnit>
      </p>
      <StyledFrameUl>
        {/* TODO:propsを受けとって動的に実装する */}
        {PRIMARY_CITY[0]['東京'].map((area) => (
          <StyledListComponent
            key={`primary_city_${area.id}`}
            text={area.name}
            link={area.link}
          />
        ))}
      </StyledFrameUl>
      <StyledFrameSubUl>
        {CITY[0]['東京'].map((area) => (
          <ListSubComponent
            key={`city_${area.id}`}
            text={area.name}
            link={area.link}
          />
        ))}
      </StyledFrameSubUl>
    </StyledFrame>
  </StyledSection>
);

export default Presenter;
