import styled from 'styled-components/macro';

import Color from '../../../../styles/const/Color';
import H3Component from '../../../uiParts/h3Component';

export const StyledUserInfoWrapper = styled.div`
  padding: 20px;
  background-color: #faf8f5;
`;

export const StyledUserInfoTopContainer = styled.div`
  background-color: #fff;
  border: 1px solid #e1e1e1;
`;

export const StyledUserInfoBottomContainer = styled(StyledUserInfoTopContainer)`
  padding: 20px;
  margin-top: 15px;
`;

export const StyledUserInfoHeader = styled.div`
  display: flex;
  padding: 0 16px;
`;

export const StyledUserInfoImageWrapper = styled.span`
  position: relative;
  display: block;
  width: 63px;
  padding: 3px;
  background-color: #fff;
  border: 1px solid #e1e1e1;
  border-radius: 6px;
`;

export const StyledUserInfoLink = styled.a`
  z-index: 1;
  display: inline;
  width: 100%;
  color: #13131e;
`;

export const StyledUserInfoNameWrapper = styled.p`
  display: block;
  margin-bottom: -1px;
  font-weight: 600;
  line-height: 1.5;
  color: #13131e;
`;

export const StyledUserInfoName = styled.span`
  margin-right: 4px;
  font-size: 14px;
`;

export const StyledUserInfoNameDecoration = styled.span`
  display: inline-block;
  margin: 2px 0 0;
  font-size: 11px;
`;

export const StyledUserInfoAlertLabel = styled.div`
  position: relative;
  padding: 6px 12px;
  margin: 13px 18px 0;
  font-size: 11px;
  color: #797152;
  text-align: center;
  background-color: #fcf4ce;
  border: 1px solid #fae486;

  > a {
    &:hover {
      color: ${Color.HOVER};
      text-decoration: underline;
    }
  }
`;

export const StyledUserInfoList = styled.li`
  padding: 15px 0;
  font-size: 12px;
  line-height: 1;
  border-top: 1px dotted #e9e9e9;

  &:first-child {
    padding: 14px 0 10px;
    line-height: 1.5;
  }

  &:last-child {
    padding-bottom: 0;
  }
`;

export const StyledUserInfoDataCount = styled.div`
  margin-right: 10px;
  margin-left: auto;
  font-size: 12px;
  color: #949499;
`;

const changeStyle = (props: boolean) => {
  if (props) {
    return `
      color: #b4b4b4;
      text-decoration: none;
      pointer-events: none;
      cursor: default;
    `;
  }
  return ``;
};

export const StyledUserInfoDataLink = styled.a<{ isDisabled: boolean }>`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;

  &:hover {
    color: ${Color.HOVER};

    > span {
      text-decoration: underline;
    }
  }
  ${(props) => changeStyle(props.isDisabled)}
`;

export const StyledUserInfoDataSpan = styled.span`
  margin-right: 6px;

  &::before {
    display: inline-block;
    width: 13.7px;
    height: 13.7px;
    vertical-align: -8%;
    content: '';
    background: url('images/top/top_tpoint_logo.svg');
    background-size: cover;
  }
`;

export const StyledUserInfoDataCountCustom = styled(StyledUserInfoDataCount)`
  font-family: Arial, sans-serif;
  font-size: 14px;
  line-height: 1.3;

  > span {
    padding-right: 4px;
    font-size: 16px;
    font-weight: 600;
    color: #949499;
  }
`;

export const StyledUserInfoRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
`;

export const StyledUserInfoRowTitle = styled.div`
  padding-bottom: 5px;
  margin-right: auto;
  line-height: 1.8;
`;

export const StyledUserInfoRowLink = styled.a`
  padding: 6px;
  margin: -6px -5px 0 0;
  font-size: 1.4rem;
  color: #949499;
  border: 1px solid #fff;
  border-radius: 3px;

  &::before {
    font-family: 'Tabelog Glyph', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    vertical-align: middle;
    content: '\f675';
    -webkit-font-smoothing: antialiased;
  }

  &:hover {
    color: #416a83;
    text-decoration: none;
    border-color: #d2d2d2;
  }
`;

export const StyledUserInfoRowSpan = styled.span`
  font-weight: 600;
  line-height: 1.4;
  color: #707070;
`;

export const StyledUserInfoRowReviewArea = styled.div`
  width: 100%;
  padding: 12px 14px;
  margin-top: 18px;
  font-size: 12px;
  font-feature-settings: 'palt';
  line-height: 1.7;
  background: #f4f4f4;
`;

export const StyledUserInfoPremiumText = styled.p`
  display: block;
  margin-bottom: 14px;
  font-size: 12px;
  text-align: center;
`;

export const StyledUserInfoPremiumLink = styled.a`
  position: relative;
  display: block;
  width: 77.6%;
  min-width: 182px;
  padding: 6px 12px 6px 31px;
  padding-left: 3.1rem;
  margin: 0 auto;
  font-size: 12px;
  font-weight: 600;
  line-height: normal;
  color: #fff;
  text-align: center;
  text-shadow: none;
  cursor: pointer;
  background-color: #a7013b;
  border: 1px solid #a7013b;
  border-radius: 3px;
  outline: none;
  box-shadow: 0 0 2px 0 rgb(0 0 0 / 43%);
  appearance: none;

  &:hover {
    background-color: #c41d58;
    border: 1px solid #c41d58;
  }

  &::before {
    position: absolute;
    top: 50%;
    left: 12px;
    width: 14px;
    height: 14px;
    margin-top: -7px;
    font-family: 'Tabelog Glyph', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    color: #bf9f3f;
    text-shadow: none;
    text-transform: none;
    content: '\f6b1';
    -webkit-font-smoothing: antialiased;
  }
`;

export const StyledH3Component = styled(H3Component)`
  margin-bottom: 14px;
  color: #13131e;
`;

export const StyledUserInfoNoData = styled.div`
  padding: 18px;
  font-size: 11px;
  line-height: 1.6;
  text-align: center;
  border: 1px dashed #e1e1e1;
`;

export const StyledUserInfoNoDataEm = styled.em`
  display: block;
  margin-bottom: 10px;
  font-style: normal;
  font-weight: bold;
`;

export const StyledUserInfoCollection = styled.div`
  display: flex;
  margin: 20px 0 7px;
`;

export const StyledUserInfoCollectionInput = styled.input`
  position: relative;
  display: inline-block;
  width: calc(100% - 55px);
  height: 30px;
  padding: 4px 5px 3px;
  font-size: 11px;
  vertical-align: middle;
  background-color: #fff;
  border: 1px solid #d2d2d2;
  outline: 0;
  box-shadow: none;
  appearance: none;
`;

export const StyledUserInfoCollectionButton = styled.button`
  display: block;
  width: 50px;
  padding: 0;
  margin-left: 5px;
  font-size: 11px;
  font-weight: 600;
  line-height: normal;
  color: #fff;
  text-shadow: none;
  cursor: pointer;
  background-color: #82ad24;
  border: 1px solid #82ad24;
  border-radius: 3px;
  box-shadow: 0 0 2px 0 rgb(0 0 0 / 43%);
`;

export const StyledUserInfoTargetLink = styled.a`
  display: flex;
`;

export const StyledUserInfoTargetMain = styled.div`
  width: calc(100% - 60px);
  margin-left: 10px;
  overflow: hidden;
  vertical-align: top;
`;

export const StyledUserInfoTargetName = styled.p`
  height: 16px;
  font-size: 13px;
  font-weight: 600;
`;

export const StyledUserInfoTargetGenre = styled.p`
  height: 14px;
  margin-top: 1px;
  overflow: hidden;
  font-size: 10px;
  color: #949499;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const StyledUserInfoTargetRating = styled.p`
  display: inline-block;
  margin-top: 2px;
  font-size: 14px;
  line-height: 1;
  overflow-wrap: normal;
  white-space: nowrap;
  vertical-align: text-bottom;

  &::before,
  &::after {
    display: block;
    overflow: hidden;
    content: '';
  }
`;

export const StyledUserInfoTargetStar = styled.i`
  position: relative;
  display: block;
  float: left;
  margin-top: 0;
  margin-right: 2px;

  &::before,
  &::after {
    top: 0;
    left: 0;
    display: block;
    font-family: 'Tabelog Glyph', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    letter-spacing: 1px;
    -webkit-font-smoothing: antialiased;
  }

  &::before {
    position: relative;
    color: #e1e1e1;
    text-shadow: 0 0 1px #fff;
    content: '\f603\f603\f603\f603\f603';
  }

  &::after {
    position: absolute;
    color: #fa0;
    content: '\f603\f603\f603';
  }
`;

export const StyledUserInfoTargetStrong = styled.b`
  font-family: Arial, sans-serif;
  font-size: 15px;
  font-weight: bold;
  color: #e10000;
`;
