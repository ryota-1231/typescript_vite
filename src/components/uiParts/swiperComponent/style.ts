import styled from 'styled-components';

export const StyledSlideImageWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-top: 60.46%;
  overflow: hidden;
`;

export const StyledSlideImage = styled.img`
  position: absolute;
  top: 50%;
  right: 0;
  left: 0;
  width: 100%;
  height: auto;
  transform: translateY(-50%);
`;

export const StyledSlideText = styled.p`
  position: relative;
  display: inline-block;
  margin-top: 9px;
  font-size: 15px;
  font-weight: 600;
  color: #13131e;
`;

const changeStyle = (props: string) => {
  if (props === 'isGold') {
    return `
      background-color: #9d834e;
      &::before {
        width: 34px;
        background: url('images/top/top_award_gold.svg') center center
          no-repeat;
      }
    `;
  }
  if (props === 'isSilver') {
    return `
      background-color: #8c8c8c;
      &::before {
        width: 41px;
        background: url('images/top/top_award_silver.svg') center center
          no-repeat;
      }
    `;
  }
  if (props === 'isBronze') {
    return `
      background-color: #866a56;
      &::before {
        width: 47px;
        background: url('images/top/top_award_bronze.svg') center center
          no-repeat;
      }
    `;
  }
  throw Error(
    'Error Invalid value. Props are expected to be isGold, isSilver or isBronze strings',
  );
};

export const StyledSlideSpan = styled.span<{ className: string }>`
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

  ${(props) => changeStyle(props.className)}
`;

export const StyledSlideAreaSpan = styled.span`
  margin-top: 1px;
  font-size: 11px;
  color: #949499;
`;

export const StyledSlideGenreSpan = styled.span`
  margin: 1px 0 0 3px;
  font-size: 11px;
  color: #949499;

  &::before {
    padding-right: 3px;
    content: '/';
  }
`;

export const StyledSlideRating = styled.p`
  display: inline-block;
  margin-top: 4px;
  font-size: 16px;
  line-height: 1;
  overflow-wrap: normal;
  white-space: nowrap;
  vertical-align: text-bottom;
`;

export const StyledSlideRatingStar = styled.i`
  position: relative;
  display: block;
  float: left;
  margin-top: -1px;
  margin-right: 0.2em;

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
    color: #e64c30;
    content: '\f603\f603\f603\f603\f604';
  }
`;

export const StyledSlideRatingValue = styled.b`
  display: block;
  float: left;
  font-family: Arial, sans-serif;
  font-size: 1.08em;
  font-weight: bold;
  color: #e10000;
`;
