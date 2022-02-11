import styled from 'styled-components/macro';

import Color from '../../../../styles/const/Color';

export const StyledRecommendedList = styled.li`
  padding: 24px 0;
  line-height: 1.5;
  border-top: 1px solid #e9e9e9;
`;

export const StyledRecommendedLink = styled.a`
  display: flex;
  align-items: center;

  &:hover {
    opacity: 0.8;
  }
`;

export const StyledRecommendedImage = styled.div<{
  imageSrc: string;
  imagestyle: { height: string; backgroundStyle: string };
}>`
  min-width: 8vw;
  height: ${(props) => props.imagestyle.height}px;
  text-indent: -9999px;
  background: ${(props) =>
    `url(${props.imageSrc}) ${props.imagestyle.backgroundStyle}`};
`;

export const StyledRecommendedText = styled.p`
  font-size: 13px;
  color: #595960;
`;

export const StyledRecommendedInfoName = styled.p`
  font-size: 14px;
  font-weight: 600;
  ${StyledRecommendedLink}:hover & {
    color: ${Color.HOVER};
    text-decoration: underline;
  }
`;

export const StyledRecommendedInfoAreaGenre = styled.p`
  margin-top: 2px;
  font-size: 11px;
  color: #949499;
`;

export const StyledRecommendedInfoComment = styled.p`
  display: block;
  margin-top: 6px;
  font-size: 12px;
  color: #595960;

  &:hover {
    color: ${Color.HOVER};
  }
`;
