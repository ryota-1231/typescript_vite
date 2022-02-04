import {
  PrefectureContext,
  usePrefectureContext,
} from '../../../../contexts/prefectureContext';

import Presenter from './presenter';

const MainContainer = () => {
  const initialPrefectureContext = usePrefectureContext();
  return (
    <PrefectureContext.Provider value={initialPrefectureContext}>
      <Presenter />
    </PrefectureContext.Provider>
  );
};

export default MainContainer;
