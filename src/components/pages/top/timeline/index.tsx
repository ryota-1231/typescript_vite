import { useState } from 'react';

import Presenter from './presenter';

/** 口コミから探すコンポーネント */
const Timeline = () => {
  // TODO: DB実装後データ取得に切り替える
  const [array, setArray] = useState([1, 2, 3, 4]);
  /** 口コミ記事の追加読み込み */
  const handleClickReadMore = () => {
    const num = array.length;
    const ary: number[] = [];
    for (let i = 0; i < num + 2; i += 1) {
      ary.push(i);
    }
    // データを取得
    setArray(ary);
  };

  return <Presenter array={array} handleClickReadMore={handleClickReadMore} />;
};

export default Timeline;
