import styled from 'styled-components/macro';

import H2Component from '../../../uiParts/h2Component';

export const StyledH2Component = styled(H2Component)`
  padding: 2px 3px 5px;
  font-size: 17px;
  font-weight: 600;
  color: #13131e;
  letter-spacing: 0.3px;
`;

export const StyledLimitedContents = styled.div`
  padding: 10px 0;
  font-size: 12px;
  text-align: left;
  border-bottom: 1px solid #eeece4;
`;

export const StyledLimitedLink = styled.a`
  display: table;
  width: 100%;
  text-decoration: none;
`;

export const StyledLimitedBanner = styled.div`
  display: table-cell;
  width: 60px;
  vertical-align: top;
`;

export const StyledLimitedBannerImageWrapper = styled.div`
  position: relative;
  width: 60px;
  height: 60px;

  > img {
    border: 1px solid transparent;
    ${StyledLimitedLink}:hover & {
      border: 1px solid #ff9600;
      opacity: 0.8;
    }
  }
`;

export const StyledLimitedInfo = styled.div`
  display: table-cell;
  padding-left: 11px;
  vertical-align: top;
`;

export const StyledLimitedInfoTitle = styled.p`
  margin: 0 0 5px;
  font-weight: bold;
  line-height: 1.2;
  color: #06c;
  ${StyledLimitedLink}:hover & {
    color: #ff9600;
    text-decoration: underline;
  }
`;

export const StyledLimitedInfoLead = styled.p`
  margin: 0;
  line-height: 1.4;
  color: #595960;
`;

export const StyledMoreLinkWrapper = styled.p`
  margin-top: 10px;
  font-size: 12px;
  line-height: 1;
  text-align: right;

  > a {
    display: inline-block;
    cursor: pointer;
  }
`;
