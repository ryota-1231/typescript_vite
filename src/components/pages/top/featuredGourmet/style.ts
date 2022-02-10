import styled from 'styled-components/macro';

export const StyledSlideSection = styled.section`
  position: relative;
  margin-top: 50px;
`;

export const StyledSlideWrapper = styled.div`
  position: relative;
  margin-top: 24px;
`;

export const StyledSlideHeading = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const StyledSwiperWrapper = styled.div`
  position: relative;
  max-width: 980px;
  margin: 0 auto;
`;

export const StyledSlideHeadingLogoLink = styled.a`
  width: 77px;
  height: 24px;
  overflow: hidden;
  text-indent: 100%;
  word-wrap: normal;
  overflow-wrap: normal;
  white-space: nowrap;
  background: url('src/assets/images/top/top_hot_news_logo.svg') no-repeat 0 0 /
    contain;
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
  display: flex;
  width: 100%;
  height: auto;
`;

export const StyledSlideLink = styled.a`
  width: 100%;
  border: solid 1px #e1e1e1;
  border-radius: 6px;
`;

export const StyledSlideImageWrapper = styled.div`
  position: relative;
  height: 7.13vw;
  overflow: hidden;
  background-color: #f4f4f4;
  border-radius: 5px 5px 0 0;
`;

export const StyledSlideImage = styled.img`
  position: relative;
  top: 50%;
  left: 50%;
  width: 100%;
  min-width: 120%;
  height: auto;
  vertical-align: bottom;
  transform: translate(-50%, -50%);
`;

export const StyledSlideText = styled.div`
  padding: 0.86vw 1.2rem 1.2rem;
  font-size: 0.91vw;
  line-height: 1.5;
  color: #595960;
`;
