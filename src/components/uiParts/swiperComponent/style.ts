import styled from 'styled-components/macro';

export const StyledSlideImageWrapper = styled.div`
  position: relative;
  padding-top: 60.46%;
  width: 100%;
  overflow: hidden;
`;

export const StyledSlideImage = styled.img`
  position: absolute;
  top: 50%;
  right: 0;
  left: 0;
  height: auto;
  width: 100%;
  transform: translateY(-50%);
`;

export const StyledSlideText = styled.p`
  display: inline-block;
  position: relative;
  margin-top: 9px;
  color: #13131e;
  font-weight: 600;
  font-size: 15px;
`;

export const StyledSlideSpan = styled.span`
  position: absolute;
  top: 7px;
  right: 8px;
  padding: 2px 6px;
  line-height: 0;
  > i {
    display: none;
  }
  &::before {
    display: inline-block;
    height: 13px;
    vertical-align: middle;
    content: '';
    background-size: cover;
  }
  &.is_gold {
    background-color: #9d834e;
    &::before {
      width: 34px;
      background: url(src/assets/images/top/top_award_gold.svg) center center
        no-repeat;
    }
  }
  &.is_silver {
    background-color: #8c8c8c;
    &::before {
      width: 41px;
      background: url(src/assets/images/top/top_award_silver.svg) center center
        no-repeat;
    }
  }
  &.is_bronze {
    background-color: #866a56;
    &::before {
      width: 47px;
      background: url(src/assets/images/top/top_award_bronze.svg) center center
        no-repeat;
    }
  }
`;

export const StyledSlideAreaSpan = styled.span`
  margin-top: 1px;
  color: #949499;
  font-size: 11px;
`;

export const StyledSlideGenreSpan = styled.span`
  margin: 1px 0 0 3px;
  color: #949499;
  font-size: 11px;
  &::before {
    padding-right: 3px;
    content: '/';
  }
`;

export const StyledSlideRating = styled.p`
  font-size: 16px;
  margin-top: 4px;
  display: inline-block;
  overflow-wrap: normal;
  white-space: nowrap;
  vertical-align: text-bottom;
  line-height: 1;
`;

export const StyledSlideRatingStar = styled.i`
  display: block;
  position: relative;
  float: left;
  margin-top: -1px;
  margin-right: 0.2em;
  &::before,
  &::after {
    display: block;
    top: 0;
    left: 0;
    letter-spacing: 1px;
    font-family: 'Tabelog Glyph';
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    -webkit-font-smoothing: antialiased;
    text-transform: none;
  }
  &::before {
    position: relative;
    color: #e1e1e1;
    text-shadow: 0 0 1px #fff;
    content: '\f603\f603\f603\f603\f603';
  }
  &::after {
    position: absolute;
    color: #e64c30;
    content: '\f603\f603\f603\f603\f604';
  }
`;

export const StyledSlideRatingValue = styled.b`
  font-size: 1.08em;
  color: #e10000;
  font-weight: bold;
  display: block;
  float: left;
  font-family: Arial;
`;
