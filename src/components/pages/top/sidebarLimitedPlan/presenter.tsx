import { LIMITED_PLAN } from '../../../../utils/sidebarContents';

import {
  StyledH2Component,
  StyledLimitedBanner,
  StyledLimitedBannerImageWrapper,
  StyledLimitedContents,
  StyledLimitedInfo,
  StyledLimitedInfoLead,
  StyledLimitedInfoTitle,
  StyledLimitedLink,
  StyledMoreLinkWrapper,
} from './style';

const Presenter = () => (
  <section css="margin-top: 40px;">
    <StyledH2Component>食べログ限定企画</StyledH2Component>
    <div>
      {LIMITED_PLAN.map((plan) => (
        <StyledLimitedContents key={plan.id}>
          <StyledLimitedLink href={plan.link} target="_blank">
            <StyledLimitedBanner>
              <StyledLimitedBannerImageWrapper>
                <img
                  src={plan.imageSrc}
                  alt={plan.title}
                  width="60"
                  height="60"
                />
              </StyledLimitedBannerImageWrapper>
            </StyledLimitedBanner>
            <StyledLimitedInfo>
              <StyledLimitedInfoTitle>{plan.title}</StyledLimitedInfoTitle>
              <StyledLimitedInfoLead>{plan.lead}</StyledLimitedInfoLead>
            </StyledLimitedInfo>
          </StyledLimitedLink>
        </StyledLimitedContents>
      ))}
    </div>
    <StyledMoreLinkWrapper>
      <StyledLimitedLink href="https://tabelog.com/tieup/all/">
        <span>食べログ限定企画一覧へ</span>
      </StyledLimitedLink>
    </StyledMoreLinkWrapper>
  </section>
);

export default Presenter;
