import { Area } from '../../../../utils/area';
import { StyledListComponent } from '../../../uiParts/listComponent/style';

import {
  StyledFrame,
  StyledFrameSubUl,
  StyledFrameTitleLink,
  StyledFrameTitleNum,
  StyledFrameTitleNumUnit,
  StyledFrameUl,
  StyledP,
  StyledSection,
  StyledSpan,
} from './style';

const Presenter = () => (
  <StyledSection>
    <StyledP>
      <StyledSpan>都道府県一覧に戻る</StyledSpan>
    </StyledP>
    <StyledFrame>
      <p>
        <StyledFrameTitleLink href="/">東京</StyledFrameTitleLink>
        <StyledFrameTitleNum>128,475</StyledFrameTitleNum>
        <StyledFrameTitleNumUnit>件</StyledFrameTitleNumUnit>
      </p>
      <StyledFrameUl>
        {/* TODO:propsを受けとって動的に実装する */}
        {Area.PRIMARY_CITY[0]['東京'].map((area) => (
          <StyledListComponent
            key={area.id}
            text={area.name}
            link={area.link}
          />
        ))}
      </StyledFrameUl>
      <StyledFrameSubUl>
        {/* {Area.CITY[0]['東京'].map((area) => (
          <StyledListComponent
            key={area.id}
            text={area.name}
            link={area.link}
          />
        ))} */}
      </StyledFrameSubUl>
    </StyledFrame>
  </StyledSection>
);

export default Presenter;
