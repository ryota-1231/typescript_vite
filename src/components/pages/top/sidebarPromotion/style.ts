import styled from 'styled-components/macro';

import Color from '../../../../styles/const/Color';

export const StyledPromotionList = styled.li`
  display: table;
  width: 100%;
  padding: 24px 0;
  line-height: 1.5;
  border-bottom: 1px solid #e9e9e9;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
    border-bottom: none;
  }
`;

export const StyledPromotionLink = styled.a`
  display: block;
`;

export const StyledPromotionImageWrapper = styled.div`
  display: table-cell;
  width: 60px;
  padding-right: 15px;

  > img {
    border: 1px solid transparent;
    ${StyledPromotionLink}:hover & {
      border: 1px solid ${Color.HOVER};
      opacity: 0.8;
    }
  }
`;

export const StyledPromotionInfo = styled.div`
  display: table-cell;
  vertical-align: top;
`;

export const StyledPromotionInfoName = styled.p`
  font-size: 14px;
  font-weight: 600;
  ${StyledPromotionLink}:hover & {
    color: ${Color.HOVER};
    text-decoration: underline;
  }
`;

export const StyledPromotionInfoAreaGenre = styled.p`
  margin-top: 2px;
  font-size: 11px;
  color: #949499;
`;

export const StyledPromotionInfoComment = styled.p`
  display: block;
  margin-top: 6px;
  font-size: 12px;
  color: #595960;

  &:hover {
    color: ${Color.HOVER};
  }
`;
