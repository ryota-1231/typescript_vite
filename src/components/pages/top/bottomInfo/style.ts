import styled from 'styled-components/macro';

import Color from '../../../../styles/const/Color';

export const StyledInfoWrapper = styled.div`
  margin: 5rem auto 2rem;
  border: 1px solid #e9e9e9;
`;

export const StyledInfoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 0.57vw;
  margin: 24px;
`;

export const StyledInfoContents = styled.div`
  display: table;
  width: 100%;
  padding-top: 24px;
  line-height: 1.5;
`;

export const StyledInfoEntryGuide = styled.p`
  font-size: 12px;
  letter-spacing: 0.8px;
`;

export const StyledInfoEntryButton = styled.div`
  display: table-cell;
  padding-left: 18px;
  text-align: right;
  vertical-align: middle;
`;

export const StyledInfoEntryLink = styled.a`
  position: relative;
  display: inline-block;
  width: 130px;
  padding: 2.5px 12px;
  margin: 0;
  font-size: 11px;
  font-weight: 600;
  line-height: 2.1;
  color: #fff;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  background-color: #82ad24;
  border: 1px solid #82ad24;
  border-radius: 3px;
  box-shadow: 0 0 2px 0 rgb(0 0 0 / 43%);
  appearance: none;

  &:hover {
    background-color: #92c228;
    border: 1px solid #92c228;
  }
`;

export const StyledInfoList = styled.li`
  width: 100%;
  padding: 24px 0;
  font-size: 12px;
  line-height: 1.5;
  border-bottom: 1px solid #e9e9e9;

  &:last-child {
    padding-bottom: 0;
    border-bottom: none;
  }
`;

export const StyledInfoSubject = styled.p`
  font-size: 12px;
  font-weight: 600;

  &:hover {
    > a {
      color: ${Color.HOVER};
      text-decoration: underline;
    }
  }
`;

export const StyledInfoListLink = styled.a`
  &:hover {
    color: #ff9600;
    text-decoration: underline;
  }
`;

export const StyledInfoListImageWrapper = styled.div`
  display: table-cell;
  width: 45px;
  height: 45px;
  padding-right: 15px;
`;

export const StyledInfoListDetail = styled.p`
  display: table-cell;
  font-weight: 600;
  vertical-align: middle;
`;
