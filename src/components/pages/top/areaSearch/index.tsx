import { useContext } from 'react';

import { PrefectureContext } from '../../../../contexts/prefectureContext';

import Presenter from './presenter';

/** エリアから探すコンポーネント */
const AreaSearch = () => {
  const prefectureContext = useContext(PrefectureContext);

  return (
    <Presenter
      isDisplay={prefectureContext.isDisplay}
      handleClickPrefecture={prefectureContext.handleClickPrefecture}
      handleClickIsDisplay={prefectureContext.handleClickIsDisplay}
    />
  );
};

export default AreaSearch;
