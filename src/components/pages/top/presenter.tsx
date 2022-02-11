import { useContext } from 'react';

import { PrefectureContext } from '../../../contexts/prefectureContext';

import AreaSearch from './areaSearch';
import AreaSearchDetail from './areaSearchDetail';
import BottomAward from './bottomAward';
import BottomHyakumeiten from './bottomHyakumeiten';
import BottomInfo from './bottomInfo';
import BottomReviewer from './bottomReviewer';
import BottomSearch from './bottomSearch';
import CommitmentConditions from './commitmentConditions';
import CookingGenre from './cookingGenre';
import FeaturedGourmet from './featuredGourmet';
import Footer from './footer';
import Header from './header';
import Scene from './scene';
import SidebarCount from './sidebarCount';
import SidebarLimitedPlan from './sidebarLimitedPlan';
import SidebarNotice from './sidebarNotice';
import SidebarPromotion from './sidebarPromotion';
import SidebarRecommended from './sidebarRecommended';
import SidebarUserInfo from './sidebarUserInfo';
import SpecialFeature from './specialFeature';
import {
  StyledAreaSearchContainer,
  StyledBottomContainer,
  StyledBottomWrapper,
  StyledMainColumn,
  StyledMainContainer,
  StyledMainContents,
  StyledSidebarColumn,
} from './style';
import Timeline from './timeline';

const Presenter = () => {
  const prefectureContext = useContext(PrefectureContext);
  return (
    <div>
      <Header />
      <StyledMainContainer>
        <StyledMainContents>
          <StyledMainColumn>
            <StyledAreaSearchContainer>
              <AreaSearch />
              {!prefectureContext.isRemove ? <AreaSearchDetail /> : ''}
            </StyledAreaSearchContainer>
            <CookingGenre />
            <SpecialFeature />
            <Scene />
            <CommitmentConditions />
            <FeaturedGourmet />
            <Timeline />
          </StyledMainColumn>
          <StyledSidebarColumn>
            <SidebarCount />
            <SidebarUserInfo />
            <SidebarNotice />
            <SidebarLimitedPlan />
            <SidebarPromotion />
            <SidebarRecommended />
          </StyledSidebarColumn>
        </StyledMainContents>
      </StyledMainContainer>
      <StyledBottomWrapper>
        <StyledBottomContainer>
          <div css="width: 100%;">
            <BottomAward />
            <BottomHyakumeiten />
            <BottomReviewer />
            <BottomSearch />
            <BottomInfo />
          </div>
        </StyledBottomContainer>
      </StyledBottomWrapper>
      <Footer />
    </div>
  );
};

export default Presenter;
