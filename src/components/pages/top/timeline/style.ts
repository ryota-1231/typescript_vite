import styled, { keyframes } from 'styled-components/macro';

import Color from '../../../../styles/const/Color';
import loader from '../../../../styles/const/LoaderKeyframes';

export const StyledBannerWrapper = styled.p`
  box-sizing: border-box;
  display: block;
  width: 100%;
  padding: 10px;
  margin: 15px 0 18px;
  text-align: center;
  cursor: pointer;
  background: #f3f3f3;
  border: 1px solid #e9e9e9;
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
  font-size: 14px;
  font-weight: bold;
  color: ${Color.LINK};
  text-align: left;
  text-decoration: none;
  vertical-align: middle;
`;

export const StyledTimelineContents = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  margin-top: 12px;
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
  position: relative;
  width: 49%;
  height: auto;
  margin: 14px 0;
  border: 1px solid #e0dccc;
  border-radius: 5px;
  box-shadow: 0 1px 2px -2px rgb(0 0 0 / 70%);
  opacity: 0;
  animation: ${timelineOpen} 3s cubic-bezier(0, 0, 0.2, 1) forwards;
  animation-delay: 0.3s;
`;

export const StyledTimelineBoxInner = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  padding: 16px 1.3vw 20px;
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
  box-sizing: border-box;
  display: block;
  width: 100%;
  height: 100%;
  margin: 0;
  font-weight: bold;
  line-height: normal;
  text-align: center;
  text-indent: -9999px;
  cursor: pointer;
  border: 1px solid transparent;
  border-radius: 3px;
  outline: none;
  appearance: none;

  &::before {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 1em;
    height: 1em;
    margin: -0.5em 0 0 -0.5em;
    font-family: 'Tabelog Glyph', sans-serif;
    font-size: 1.6rem;
    line-height: 1;
    color: #999;
    text-indent: 0;
    text-transform: none;
    vertical-align: middle;
    content: '\f67a';
    -webkit-font-smoothing: antialiased;
  }
`;

export const StyledTimelineBoxData = styled.div`
  padding-right: 70px;
  padding-bottom: 14px;
  border-bottom: solid 1px #e1e1e1;
`;

export const StyledTimelineBoxImageWrapper = styled.span`
  box-sizing: border-box;
  display: block;
  width: 50px;
  height: 50px;
  padding: 3px;
  background-color: #fff;
  border: 1px solid #e1e1e1;
  border-radius: 6px;
  transition: 0.1s ease-in-out;
`;

export const StyledTimelineBoxImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 3px;
`;

export const StyledTimelineBoxTitle = styled.span`
  font-size: 0.975vw;
  font-weight: 600;
  line-height: 1.53;
  color: #13131e;
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
  min-height: 3em;
  padding-top: 2px;
`;

export const StyledTimelineBoxInfoLink = styled.a`
  display: block;
  margin-top: 8px;
`;

export const StyledTimelineBoxInfoTitle = styled.p`
  position: relative;
  z-index: 2;
  display: inline;
  margin-top: 14px;
  font-size: 1.17vw;
  font-weight: 600;
  line-height: 1.75;
  color: #13131e;
  ${StyledTimelineBoxInfoLink}:hover & {
    color: #ff9600;
    border-bottom: 1px solid #ff9600;
  }
`;

export const StyledTimelineBoxInfoComment = styled.p`
  margin-top: 10px;
  font-size: 0.975vw;
  line-height: 1.58;
  color: #13131e;
`;

export const StyledTimelineBoxInfoDetail = styled.p`
  display: block;
  margin: 2px 0 0;
  font-size: 0.786vw;
  font-weight: 600;
  color: ${Color.LINK};
  text-align: right;
  cursor: pointer;
  ${StyledTimelineBoxInfoLink}:hover & {
    color: #ff9600;
  }
`;

export const StyledTimelineBoxInfoPhoto = styled.div`
  position: relative;
  margin-top: 15px;
`;

export const StyledTimelineBoxInfoList = styled.li`
  position: relative;
  width: 100%;
  padding-bottom: 50%;
  overflow: hidden;
`;

export const StyledTimelineBoxInfoImage = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: auto;
  transform: translate(-50%, -50%);
`;

export const StyledTimelineReadMore = styled.div`
  display: inline-block;
  margin: 20px auto 0;
`;

export const StyledTimelineText = styled.span`
  font-size: 15px;
  font-weight: 600;
  color: ${Color.LINK};

  &:hover {
    color: #ff9600;
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const StyledTimelineLoading = styled.div`
  display: none;
  padding-top: 10px;
  text-align: center;
`;

export const StyledTimelineLoadingSpan = styled.span`
  position: relative;
  display: inline-block;
  width: 5rem;
  height: 5rem;

  &::before {
    position: relative;
    display: block;
    width: 5rem;
    height: 5rem rem;
    font-family: 'Tabelog Glyph', sans-serif;
    font-size: 3rem;
    line-height: 1.5385;
    color: rgb(89 89 96 / 85%);
    text-align: center;
    text-transform: none;
    content: '\f6b0';
    -webkit-font-smoothing: antialiased;
  }

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 0.5rem;
    height: 0.5rem;
    margin: 2.25rem;
    font-size: 2.15rem;
    content: '';
    border-radius: 50%;
    animation: ${loader} 0.8s infinite ease;
  }
`;

export const StyledMoreLinkWrapper = styled.div`
  margin: 20px 15px 0;
  font-size: 13px;
  text-align: right;
`;

export const StyledMoreLink = styled.a`
  display: inline-block;
  cursor: pointer;

  &:hover {
    color: #ff9600;
  }
`;
