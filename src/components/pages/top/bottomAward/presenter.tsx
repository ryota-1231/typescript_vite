import 'swiper/css';
import { Tabs, TabPanel } from 'react-tabs';

import 'react-tabs/style/react-tabs.css';
import { HYAKUMEITEN_CONDITIONS } from '../../../../utils/commitmentConditions';
import SwiperComponent from '../../../uiParts/swiperComponent';

import {
  StyledHeading,
  StyledMoreLink,
  StyledMoreLinkWrapper,
  StyledSection,
  StyledTab,
  StyledTabList,
} from './style';

const Presenter = () => (
  <StyledSection>
    <StyledHeading>The Tabelog Award 2022</StyledHeading>
    <Tabs>
      <StyledTabList>
        <StyledTab>Gold</StyledTab>
        <StyledTab>Silver</StyledTab>
        <StyledTab>Bronze</StyledTab>
      </StyledTabList>
      {/* Gold */}
      <TabPanel>
        <SwiperComponent
          componentType="award"
          data={HYAKUMEITEN_CONDITIONS}
          className="isGold"
        />
      </TabPanel>
      {/* Silver */}
      <TabPanel>
        <SwiperComponent
          componentType="award"
          data={HYAKUMEITEN_CONDITIONS}
          className="isSilver"
        />
      </TabPanel>
      {/* Bronze */}
      <TabPanel>
        <SwiperComponent
          componentType="award"
          data={HYAKUMEITEN_CONDITIONS}
          className="isBronze"
        />
      </TabPanel>
    </Tabs>
    <StyledMoreLinkWrapper>
      <StyledMoreLink
        href="https://award.tabelog.com"
        rel="noopener"
        target="_blank"
      >
        <span>The Tabelog Award 2022 発表ページへ</span>
      </StyledMoreLink>
      <StyledMoreLink
        css="margin-left: 24px;"
        data-analytics-btn="TOP_award_awardlist"
        href="/rstLst/?award_prize%5B%5D=3"
      >
        <span>受賞店一覧へ</span>
      </StyledMoreLink>
    </StyledMoreLinkWrapper>
  </StyledSection>
);

export default Presenter;
