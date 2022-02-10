import styled from 'styled-components/macro';

import Color from '../../../../styles/const/Color';
import H2Component from '../../../uiParts/h2Component';

export const StyledSection = styled.section`
  position: relative;
  width: 100%;
  margin-top: 50px;
`;

export const StyledHeading = styled(H2Component)`
  margin-bottom: 20px;

  > span {
    margin-left: 20px;
    font-size: 16px;
    font-weight: 400;
    color: #949499;
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
