import styled from 'styled-components/macro';

export const StyledWrapper = styled.div`
  padding-top: 100px;
  min-width: 1260px;
  width: 100%;
`;

export const StyledContainer = styled.div`
  position: relative;
  z-index: 1;
  padding: 0;
  min-width: 1120px;
  margin: 0 auto;
  width: 100%;
`;

export const StyledTopColumn = styled.div`
  display: flex;
  margin: 0 auto 0;
  padding: 0 70px;
  min-width: 1260px;
  max-width: 1540px;
  justify-content: space-between;
`;

export const StyledTopColumnMain = styled.div`
  width: 100%;
  min-width: 800px;
  max-width: 980px;
`;

export const StyledTopColumnSide = styled.div`
  margin-left: 5.2vw;
  width: 33vw;
  min-width: 270px;
  max-width: 340px;
  overflow: hidden;
  /* TODO: 仮設定 */
  background-color: red;
  height: 500px;
  /* END 仮設定 */
`;
