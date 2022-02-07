import styled from 'styled-components/macro';
import Color from '../../../../styles/const/Color';

export const StyledInfoWrapper = styled.div`
  margin: 5rem auto 2rem;
  border: 1px solid #e9e9e9;
`;

export const StyledInfoContainer = styled.div`
  display: flex;
  margin: 24px;
  padding: 0 0.57vw;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const StyledInfoContents = styled.div`
  display: table;
  padding-top: 24px;
  width: 100%;
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
  border: 1px solid #82ad24;
  background-color: #82ad24;
  box-shadow: 0 0 2px 0 rgb(0 0 0 / 43%);
  font-weight: 600;
  font-size: 11px;
  color: #fff;
  width: 130px;
  line-height: 2.1;
  display: inline-block;
  position: relative;
  cursor: pointer;
  margin: 0;
  border-radius: 3px;
  text-align: center;
  vertical-align: middle;
  appearance: none;
  padding: 2.5px 12px;
  &:hover {
    border: 1px solid #92c228;
    background-color: #92c228;
  }
`;

export const StyledInfoList = styled.li`
  padding: 24px 0;
  border-bottom: 1px solid #e9e9e9;
  width: 100%;
  line-height: 1.5;
  font-size: 12px;
  &:last-child {
    padding-bottom: 0;
    border-bottom: none;
  }
`;

export const StyledInfoSubject = styled.p`
  font-weight: 600;
  font-size: 12px;
  &:hover {
    > a {
      color: ${Color.HOVER};
      text-decoration: underline;
    }
  }
`;

export const StyledInfoListLink = styled.a`
  &:hover{
    color: #ff9600;
    text-decoration: underline;
  }
`;

export const StyledInfoListImageWrapper = styled.div`
      display: table-cell;
    padding-right: 15px;
    width: 45px;
    height: 45px;
`;

export const StyledInfoListDetail = styled.p`
      display: table-cell;
    font-weight: 600;
    vertical-align: middle;
`;