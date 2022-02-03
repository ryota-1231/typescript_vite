import AreaSearch from '../areaSearch';
import AreaSearchDetail from '../areaSearchDetail';

import {
  StyledContainer,
  StyledTopColumn,
  StyledTopColumnMain,
  StyledTopColumnSide,
  StyledWrapper,
} from './style';

const Presenter = () => (
  <StyledWrapper>
    <StyledContainer>
      <StyledTopColumn>
        <StyledTopColumnMain>
          <AreaSearch />
          <AreaSearchDetail />
        </StyledTopColumnMain>
        <StyledTopColumnSide />
      </StyledTopColumn>
    </StyledContainer>
  </StyledWrapper>
);

export default Presenter;
