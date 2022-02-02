import styled from 'styled-components/macro';

import Color from '../../../styles/const/Color';
import Size from '../../../styles/const/Size';

export const StyledWrapper = styled.div`
  background-color: ${Color.SECONDLY};
  height: 100vh;
`;
export const StyledMainContents = styled.div`
  width: 60%;
  margin: 0 auto;
  padding-top: 24px;
`;
export const StyledContent = styled.div`
  background-color: #fff;
  width: 100%;
  margin: 0 auto;
`;
export const StyledP = styled.p`
  font-size: '${Size.FONT.L}px';
  font-weight: bold;
  word-spacing: 2rem;
  text-align: center;
`;
