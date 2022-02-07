import { useContext } from 'react';

import { PrefectureContext } from '../../../contexts/prefectureContext';

import AreaSearch from './areaSearch';
import AreaSearchDetail from './areaSearchDetail';
import CommitmentConditions from './commitmentConditions';
import CookingGenre from './cookingGenre';
import FeaturedGourmet from './featuredGourmet';
import Header from './header';
import Scene from './scene';
import SidebarColumn from './sidebarColumn';
import SpecialFeature from './specialFeature';
import {
  StyledAreaSearchContainer,
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

      {/* word of mouth */}
      {/* main */}
      {/* sidebar */}
      {/* counter */}
      {/* myself info */}
      {/* history */}
      {/* information */}
      {/* limited plan */}
      {/* pr */}
      {/* contents */}
      {/* sidebar */}
      {/* mainWrapper */}
      {/* bottomWrapper */}
      {/* tabelog award */}
      {/* hyaku meiten */}
      {/* search */}
      {/* top */}
      {/* user search */}
      {/* top */}
      {/* bottom */}
      {/* genre ranging search */}
      {/* others */}
      {/* bottom */}
      {/* search */}
      {/* bottom contents */}
      {/* footer */}
      {/* bottomWrapper */}
    </div>
  );
};

export default Presenter;
