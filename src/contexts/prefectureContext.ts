import { createContext, useCallback, useState } from 'react';

export type PrefectureContextType = {
  prefectures: string;
  isDisplay: boolean;
  isRemove: boolean;
  handleClickPrefecture: (prefecture: string) => void;
  handleClickIsDisplay: () => void;
};

const PREFECTURE_CONTEXT_DEFAULT: PrefectureContextType = {
  prefectures: '',
  isDisplay: false,
  isRemove: true,
  handleClickPrefecture: () => {},
  handleClickIsDisplay: () => {},
};

export const PrefectureContext = createContext(PREFECTURE_CONTEXT_DEFAULT);

export const usePrefectureContext = (): PrefectureContextType => {
  const [prefectures, setPrefectures] = useState('');
  const [isDisplay, setIsDisplay] = useState(false);
  const [isRemove, setIsRemove] = useState(true);

  /** クリックした都道府県をセットする */
  const handleClickPrefecture = useCallback((prefecture: string) => {
    setPrefectures(prefecture);
  }, []);

  /** コンポーネント切り替えフラグ */
  const handleClickIsDisplay = useCallback(() => {
    if (isDisplay) {
      setTimeout(() => {
        setIsRemove(true);
      }, 300);
    } else {
      setIsRemove(false);
    }
    setIsDisplay(!isDisplay);
  }, [isDisplay]);

  return {
    prefectures,
    isDisplay,
    isRemove,
    handleClickPrefecture,
    handleClickIsDisplay,
  };
};
