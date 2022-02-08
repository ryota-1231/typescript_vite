import styled from 'styled-components/macro';

import H2 from '../../../uiParts/h2Component/style';

export const StyledSection = styled.section`
  margin-top: 50px;
  position: relative;
  width: 100%;
`;

export const StyledHeading = styled(H2)`
  margin-bottom: 20px;
  > span {
    margin-left: 20px;
    color: #949499;
    font-weight: 400;
    font-size: 16px;
  }
`;

export const StyledSlideImageWrapper = styled.div`
  position: relative;
  padding-top: 60.46%;
  width: 100%;
  overflow: hidden;
`;

export const StyledSlideImage = styled.img`
  position: absolute;
  top: 50%;
  right: 0;
  left: 0;
  height: auto;
  width: 100%;
  transform: translateY(-50%);
`;

export const StyledSlideText = styled.p`
  display: inline-block;
  position: relative;
  margin-top: 9px;
  color: #13131e;
  font-weight: 600;
  font-size: 15px;
`;

export const StyledMoreLinkWrapper = styled.div`
  margin-top: 20px;
  font-size: 13px;
  text-align: right;
`;

export const StyledMoreLink = styled.a`
  display: inline-block;
  cursor: pointer;
  > span {
    vertical-align: middle;
  }
`;
