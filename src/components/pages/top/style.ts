import styled from 'styled-components/macro';

export const StyledMainContainer = styled.div`
  width: 100%;
  min-width: 1260px;
  padding-top: 100px;
`;

export const StyledMainContents = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 1260px;
  max-width: 1540px;
  padding: 0 70px;
  margin: 0 auto;
`;

export const StyledMainColumn = styled.div`
  width: 735px;
  min-width: 800px;
  max-width: 980px;
`;

export const StyledAreaSearchContainer = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  min-height: 485px;
`;

export const StyledSidebarColumn = styled.div`
  box-sizing: border-box;
  width: 33vw;
  min-width: 270px;
  max-width: 340px;
  margin-left: 5.2vw;
  overflow: hidden;
`;

export const StyledBottomWrapper = styled.div`
  margin-top: 5rem;
  border-top: 1px solid #f4f4f4;
`;

export const StyledBottomContainer = styled.div`
  min-width: 1260px;
  max-width: 1540px;
  padding: 35px 70px 0;
  margin: 0 auto;
`;
