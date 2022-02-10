import { OTHER_CONDITIONS } from '../../../../utils/commitmentConditions';
import { SUB_COOKING_GENRE } from '../../../../utils/cookingGenre';
import H2Component from '../../../uiParts/h2Component';

import {
  StyledListComponent,
  StyledMoreLink,
  StyledMoreLinkWrapper,
  StyledSearchSection,
} from './style';

const Presenter = () => (
  <StyledSearchSection>
    <div css="width: 48%;">
      <H2Component>ジャンル別ランキングから探す</H2Component>
      <ul css="margin-top: 15px;">
        {SUB_COOKING_GENRE.map((genre) => (
          <StyledListComponent
            key={genre.id}
            text={genre.name}
            link={genre.link}
          />
        ))}
      </ul>
      <StyledMoreLinkWrapper>
        <StyledMoreLink href="/">
          <span>全国 総合ランキングTOP20へ</span>
        </StyledMoreLink>
      </StyledMoreLinkWrapper>
    </div>
    <div css="width: 48%;">
      <H2Component>その他条件、目的から探す</H2Component>
      <ul css="margin-top: 15px;">
        {OTHER_CONDITIONS.map((genre) => (
          <StyledListComponent
            key={genre.id}
            text={genre.name}
            link={genre.link}
          />
        ))}
      </ul>
    </div>
  </StyledSearchSection>
);

export default Presenter;
