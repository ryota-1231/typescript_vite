import styled, { keyframes } from 'styled-components/macro';

import Color from '../../../../styles/const/Color';
import loader from '../../../../styles/const/LoaderKeyframes';

export const StyledBannerWrapper = styled.p`
  display: block;
  width: 100%;
  margin: 15px 0 18px;
  padding: 10px;
  background: #f3f3f3;
  border: 1px solid #e9e9e9;
  text-align: center;
  box-sizing: border-box;
  cursor: pointer;
`;

export const StyledBannerContainer = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledBannerIcon = styled.span`
  display: inline-block;
  padding-right: 15px;
  vertical-align: middle;
`;

export const StyledBannerTitle = styled.span`
  display: inline-block;
  color: ${Color.LINK};
  font-weight: bold;
  text-align: left;
  text-decoration: none;
  vertical-align: middle;
  font-size: 14px;
`;

export const StyledTimelineContents = styled.div`
  display: flex;
  margin-top: 12px;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const timelineOpen = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const StyledTimelineBox = styled.div`
  animation: ${timelineOpen} 3s cubic-bezier(0, 0, 0.2, 1) forwards;
  animation-delay: 0.3s;
  position: relative;
  margin: 14px 0;
  border: 1px solid #e0dccc;
  border-radius: 5px;
  width: 49%;
  height: auto;
  box-shadow: 0 1px 2px -2px rgb(0 0 0 / 70%);
  opacity: 0;
`;

export const StyledTimelineBoxInner = styled.div`
  position: relative;
  z-index: 1;
  padding: 16px 1.3vw 20px;
  width: 100%;
  height: 100%;
`;

export const StyledTimelineBoxMenu = styled.div`
  position: absolute;
  top: 22px;
  right: 20px;
  z-index: 3;
`;

export const StyledTimelineBoxButton = styled.div`
  position: relative;
  display: inline-block;
`;

export const StyledTimelineBoxButtonItem = styled.p`
  position: relative;
  width: 28px;
  height: 28px;
`;

export const StyledTimelineBoxButtonLink = styled.a`
  display: block;
  cursor: pointer;
  margin: 0;
  outline: none;
  border: 1px solid transparent;
  border-radius: 3px;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  font-weight: bold;
  text-indent: -9999px;
  text-align: center;
  line-height: normal;
  appearance: none;
  &::before {
    font-family: 'Tabelog Glyph';
    -webkit-font-smoothing: antialiased;
    text-transform: none;
    content: '\f67a';
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -0.5em 0 0 -0.5em;
    width: 1em;
    height: 1em;
    color: #999;
    font-size: 1.6rem;
    text-indent: 0;
    vertical-align: middle;
    line-height: 1;
  }
`;

export const StyledTimelineBoxData = styled.div`
  padding-right: 70px;
  padding-bottom: 14px;
  border-bottom: solid 1px #e1e1e1;
`;

export const StyledTimelineBoxImageWrapper = styled.span`
  display: block;
  padding: 3px;
  border: 1px solid #e1e1e1;
  border-radius: 6px;
  width: 50px;
  height: 50px;
  box-sizing: border-box;
  background-color: #fff;
  transition: 0.1s ease-in-out;
`;

export const StyledTimelineBoxImage = styled.img`
  border-radius: 3px;
  width: 100%;
  height: auto;
`;

export const StyledTimelineBoxTitle = styled.span`
  color: #13131e;
  font-weight: 600;
  font-size: 0.975vw;
  line-height: 1.53;
  transition: 0.1s ease-in-out;
`;

export const StyledTimelineBoxUpdate = styled.span`
  display: block;
  margin-top: 1px;
  font-size: 0.71vw;
  color: #595960;
`;

export const StyledTimelineBoxInfo = styled.div`
  position: relative;
  padding-top: 2px;
  min-height: 3em;
`;

export const StyledTimelineBoxInfoLink = styled.a`
  display: block;
  margin-top: 8px;
`;

export const StyledTimelineBoxInfoTitle = styled.p`
  font-size: 1.17vw;
  line-height: 1.75;
  display: inline;
  position: relative;
  z-index: 2;
  margin-top: 14px;
  color: #13131e;
  font-weight: 600;
  ${StyledTimelineBoxInfoLink}:hover & {
    border-bottom: 1px solid #ff9600;
    color: #ff9600;
  }
`;

export const StyledTimelineBoxInfoComment = styled.p`
  margin-top: 10px;
  font-size: 0.975vw;
  color: #13131e;
  line-height: 1.58;
`;

export const StyledTimelineBoxInfoDetail = styled.p`
  display: block;
  cursor: pointer;
  margin: 2px 0 0;
  color: ${Color.LINK};
  font-weight: 600;
  font-size: 0.786vw;
  text-align: right;
  ${StyledTimelineBoxInfoLink}:hover & {
    color: #ff9600;
  }
`;

export const StyledTimelineBoxInfoPhoto = styled.div`
  position: relative;
  margin-top: 15px;
`;

export const StyledTimelineBoxInfoList = styled.li`
  padding-bottom: 50%;
  width: 100%;
  position: relative;
  overflow: hidden;
`;

export const StyledTimelineBoxInfoImage = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: auto;
`;

export const StyledTimelineReadMore = styled.div`
  display: inline-block;
  margin: 20px auto 0;
`;

export const StyledTimelineText = styled.span`
  color: ${Color.LINK};
  font-weight: 600;
  font-size: 15px;
  &:hover {
    cursor: pointer;
    color: #ff9600;
    text-decoration: underline;
  }
`;

export const StyledTimelineLoading = styled.div`
  display: none;
  padding-top: 10px;
  text-align: center;
`;

export const StyledTimelineLoadingSpan = styled.span`
  display: inline-block;
  position: relative;
  width: 5rem;
  height: 5rem;
  &::before {
    line-height: 1.53846;
    width: 5rem;
    height: 5rem rem;
    font-size: 3rem;
    display: block;
    position: relative;
    color: rgba(89, 89, 96, 0.85);
    text-align: center;
    font-family: 'Tabelog Glyph';
    -webkit-font-smoothing: antialiased;
    text-transform: none;
    content: '\f6b0';
  }
  &::after {
    margin: 2.25rem;
    width: 0.5rem;
    height: 0.5rem;
    font-size: 2.15rem;
    position: absolute;
    top: 0;
    left: 0;
    content: '';
    border-radius: 50%;
    animation: ${loader} 0.8s infinite ease;
  }
`;

export const StyledMoreLinkWrapper = styled.div`
  text-align: right;
  margin: 20px 15px 0;
  font-size: 13px;
`;

export const StyledMoreLink = styled.a`
  display: inline-block;
  cursor: pointer;
  &:hover {
    color: #ff9600;
  }
`;
