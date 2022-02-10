import { Tab, TabList } from 'react-tabs';
import styled from 'styled-components/macro';

import Color from '../../../../styles/const/Color';
import H2Component from '../../../uiParts/h2Component';

export const StyledSection = styled.section`
  position: relative;
  width: 100%;
`;

export const StyledHeading = styled(H2Component)`
  position: absolute;
  top: 7px;
  margin-bottom: 20px;
`;

export const StyledTabList = styled(TabList)`
  margin-bottom: 20px;
  text-align: right;
  border-bottom: 1px solid #eeece4;
`;

const changeStyle = (props?: boolean) => {
  if (props) {
    return `
    font-weight: bold;
    &::after {
      height: 3px;
    }
    &:hover {
      color: inherit;
    }
  `;
  }
  return ``;
};

/** Tab：selected = trueの場合、選択状態 */
export const StyledTab = styled(Tab)<{ selected?: boolean }>`
  position: relative;
  display: inline-block;
  width: 75px;
  padding: 10px 0;
  font-size: 16px;
  color: inherit;
  text-align: center;
  transition: 0.2s cubic-bezier(0, 0, 0.2, 1);

  &:nth-child(2)::before,
  &:nth-child(3)::before {
    position: absolute;
    top: 1em;
    bottom: 1em;
    left: 0;
    display: block;
    width: 1px;
    content: '';
    background-color: #eeece4;
  }

  &::after {
    position: absolute;
    right: 1em;
    bottom: 0;
    left: 1em;
    display: block;
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

  ${(props) => changeStyle(props.selected)}
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
