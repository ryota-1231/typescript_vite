import { useContext } from 'react';

import { PrefectureContext } from '../../../../contexts/prefectureContext';

import Presenter from './presenter';

const AreaSearchDetail = () => {
  const prefectureContext = useContext(PrefectureContext);

  return (
    <Presenter
      prefectures={prefectureContext.prefectures}
      isDisplay={prefectureContext.isDisplay}
      handleClickIsDisplay={prefectureContext.handleClickIsDisplay}
    />
  );
};

export default AreaSearchDetail;
