import styled from 'styled-components/macro';

export const StyledSlideSection = styled.section`
  margin-top: 50px;
  position: relative;
`;

export const StyledSlideWrapper = styled.div`
  margin-top: 24px;
  position: relative;
`;

export const StyledSlideHeading = styled.div`
  display: flex;
  margin-bottom: 10px;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const StyledSwiperWrapper = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: 980px;
`;

export const StyledSlideHeadingLogoLink = styled.a`
  width: 77px;
  height: 24px;
  background: url('src/assets/images/top/top_hot_news_logo.svg') no-repeat 0 0 /
    contain;
  overflow: hidden;
  text-indent: 100%;
  word-wrap: normal;
  overflow-wrap: normal;
  white-space: nowrap;
`;

export const StyledSlideHeadingMatomeLogoLink = styled(
  StyledSlideHeadingLogoLink,
)`
  width: 150px;
  height: 21px;
  background: url('src/assets/images/top/top_logo_tabelog_matome.png') no-repeat
    0 0 / contain;
`;

export const StyledSlideContainer = styled.div`
  width: 100%;
  display: flex;
  height: auto;
`;

export const StyledSlideLink = styled.a`
  border: solid 1px #e1e1e1;
  border-radius: 6px;
  width: 100%;
`;

export const StyledSlideImageWrapper = styled.div`
  position: relative;
  border-radius: 5px 5px 0 0;
  height: 7.13vw;
  overflow: hidden;
  background-color: #f4f4f4;
`;

export const StyledSlideImage = styled.img`
  position: relative;
  top: 50%;
  left: 50%;
  min-width: 120%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: auto;
  vertical-align: bottom;
`;

export const StyledSlideText = styled.div`
  padding: 0.86vw 1.2rem 1.2rem;
  color: #595960;
  font-size: 0.91vw;
  line-height: 1.5;
`;
