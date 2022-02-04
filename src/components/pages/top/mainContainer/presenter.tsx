import { useContext } from 'react';

import { PrefectureContext } from '../../../../contexts/prefectureContext';
import AreaSearch from '../areaSearch';
import AreaSearchDetail from '../areaSearchDetail';

import {
  StyledContainer,
  StyledTopColumn,
  StyledTopColumnMain,
  StyledTopColumnSide,
  StyledWrapper,
} from './style';

const Presenter = () => {
  const prefectureContext = useContext(PrefectureContext);
  return (
    <StyledWrapper>
      <StyledContainer>
        <StyledTopColumn>
          <StyledTopColumnMain>
            <AreaSearch />
            {/* <AreaSearchDetail /> */}
            {!prefectureContext.isRemove ? <AreaSearchDetail /> : ''}
          </StyledTopColumnMain>
          <StyledTopColumnSide />
        </StyledTopColumn>
      </StyledContainer>
    </StyledWrapper>
  );
};
export default Presenter;
