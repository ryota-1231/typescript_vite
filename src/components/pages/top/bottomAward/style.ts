import { Tab, TabList } from 'react-tabs';
import styled from 'styled-components/macro';
import Color from '../../../../styles/const/Color';

import H2 from '../../../uiParts/h2Component/style';

export const StyledSection = styled.section`
  position: relative;
  width: 100%;
`;

export const StyledHeading = styled(H2)`
  position: absolute;
  top: 7px;
  margin-bottom: 20px;
`;

export const StyledTabList = styled(TabList)`
  border-bottom: 1px solid #eeece4;
  margin-bottom: 20px;
  text-align: right;
`;

export const StyledTab = styled(Tab)`
  font-size: 16px;
  display: inline-block;
  width: 75px;
  padding: 10px 0;
  text-align: center;
  position: relative;
  transition: 0.2s cubic-bezier(0, 0, 0.2, 1);
  color: inherit;
  &:nth-child(2)::before,
  &:nth-child(3)::before {
    display: block;
    position: absolute;
    top: 1em;
    bottom: 1em;
    left: 0;
    width: 1px;
    content: '';
    background-color: #eeece4;
  }
  &::after {
    display: block;
    position: absolute;
    right: 1em;
    bottom: 0;
    left: 1em;
    height: 0;
    content: '';
    background-color: #ff9600;
    transition: 0.2s cubic-bezier(0, 0, 0.2, 1);
  }
  &:hover {
    color: ${Color.HOVER};
    cursor: pointer;
    &::after {
      height: 3px;
      background-color: ${Color.HOVER};
    }
  }
  &.react-tabs__tab--selected {
    font-weight: bold;
    &::after {
      height: 3px;
    }
    &:hover {
      color: inherit;
    }
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
