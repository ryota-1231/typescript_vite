import styled from 'styled-components/macro';

import Color from '../../../../styles/const/Color';
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

export const StyledMoreLinkWrapper = styled.div`
  margin-top: 20px;
  font-size: 13px;
  text-align: right;
`;

export const StyledMoreLink = styled.a`
  display: inline-block;
  cursor: pointer;
  &:hover {
    color: ${Color.HOVER};
  }
  > span {
    vertical-align: middle;
  }
`;
