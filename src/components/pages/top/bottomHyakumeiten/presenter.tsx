import 'swiper/css';
import { HYAKUMEITEN_CONDITIONS } from '../../../../utils/commitmentConditions';
import SwiperComponent from '../../../uiParts/swiperComponent';

import {
  StyledHeading,
  StyledMoreLink,
  StyledMoreLinkWrapper,
  StyledSection,
} from './style';

const Presenter = () => (
  <StyledSection>
    <StyledHeading>
      百名店
      <span>うまいもの、いま食べるなら、このお店。</span>
    </StyledHeading>
    <SwiperComponent
      componentType="hyakumeiten"
      data={HYAKUMEITEN_CONDITIONS}
    />
    <StyledMoreLinkWrapper>
      <p css="display: inline-block;">
        <StyledMoreLink
          href="https://award.tabelog.com/hyakumeiten/"
          target="_blank"
        >
          <span>百名店 発表ページへ</span>
        </StyledMoreLink>
      </p>
    </StyledMoreLinkWrapper>
  </StyledSection>
);

export default Presenter;
