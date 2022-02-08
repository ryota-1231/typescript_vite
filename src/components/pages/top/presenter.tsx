import { useContext } from 'react';

import { PrefectureContext } from '../../../contexts/prefectureContext';

import AreaSearch from './areaSearch';
import AreaSearchDetail from './areaSearchDetail';
import BottomHyakumeiten from './bottomHyakumeiten';
import BottomInfo from './bottomInfo';
import BottomSearch from './bottomSearch';
import CommitmentConditions from './commitmentConditions';
import CookingGenre from './cookingGenre';
import FeaturedGourmet from './featuredGourmet';
import Footer from './footer';
import Header from './header';
import Scene from './scene';
import SidebarColumn from './sidebarColumn';
import SpecialFeature from './specialFeature';
import {
  StyledAreaSearchContainer,
  StyledBottomContainer,
  StyledBottomWrapper,
  StyledMainColumn,
  StyledMainContainer,
  StyledMainContents,
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
          <SidebarColumn />
        </StyledMainContents>
      </StyledMainContainer>
      <StyledBottomWrapper>
        <StyledBottomContainer>
          <div css="width: 100%;">
            <BottomHyakumeiten />
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
