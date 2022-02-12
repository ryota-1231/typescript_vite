type PrimaryCookingGenreType = {
  id: number;
  name: string;
  imageSrc: string;
  link: string;
  number: number;
};

type SubCookingGenreType = {
  id: number;
  name: string;
  link: string;
  primary: boolean;
};

// TODO:DBにデータ移行
export const PRIMARY_COOKING_GENRE: PrimaryCookingGenreType[] = [
  {
    id: 1,
    name: '焼肉',
    imageSrc: 'images/top/top_genre_yakiniku.png',
    link: '/',
    number: 28775,
  },
  {
    id: 2,
    name: '寿司',
    imageSrc: 'images/top/top_genre_sushi.png',
    link: '/',
    number: 32119,
  },
  {
    id: 3,
    name: '居酒屋',
    imageSrc: 'images/top/top_genre_izakaya.png',
    link: '/',
    number: 121950,
  },
  {
    id: 4,
    name: 'イタリアン',
    imageSrc: 'images/top/top_genre_italian.png',
    link: '/',
    number: 22572,
  },
  {
    id: 5,
    name: 'ラーメン',
    imageSrc: 'images/top/top_genre_ramen.png',
    link: '/',
    number: 49859,
  },
  {
    id: 6,
    name: 'カフェ',
    imageSrc: 'images/top/top_genre_cafe.png',
    link: '/',
    number: 112178,
  },
];

export const SUB_COOKING_GENRE: SubCookingGenreType[] = [
  { id: 1, name: '和食', link: '/', primary: false },
  { id: 2, name: '日本料理', link: '/', primary: false },
  { id: 3, name: '寿司', link: '/', primary: true },
  { id: 4, name: '魚介・海鮮料理', link: '/', primary: false },
  { id: 5, name: 'そば（蕎麦）', link: '/', primary: false },
  { id: 6, name: 'うどん', link: '/', primary: false },
  { id: 7, name: 'うなぎ', link: '/', primary: false },
  { id: 8, name: '焼き鳥', link: '/', primary: false },
  { id: 9, name: 'とんかつ', link: '/', primary: false },
  { id: 10, name: '串揚げ', link: '/', primary: false },
  { id: 11, name: '天ぷら', link: '/', primary: false },
  { id: 12, name: 'お好み焼き', link: '/', primary: false },
  { id: 13, name: 'もんじゃ焼き', link: '/', primary: false },
  { id: 14, name: 'しゃぶしゃぶ', link: '/', primary: false },
  { id: 16, name: '沖縄料理', link: '/', primary: false },
  { id: 17, name: '洋食', link: '/', primary: false },
  { id: 18, name: 'フレンチ', link: '/', primary: false },
  { id: 19, name: 'イタリアン', link: '/', primary: true },
  { id: 20, name: 'スペイン料理', link: '/', primary: false },
  { id: 21, name: 'パスタ', link: '/', primary: false },
  { id: 22, name: 'ピザ', link: '/', primary: false },
  { id: 23, name: 'ステーキ', link: '/', primary: false },
  { id: 24, name: 'ハンバーグ', link: '/', primary: false },
  { id: 25, name: 'ハンバーガー', link: '/', primary: false },
  { id: 26, name: '中華料理', link: '/', primary: false },
  { id: 27, name: '餃子', link: '/', primary: false },
  { id: 28, name: '韓国料理', link: '/', primary: false },
  { id: 29, name: 'タイ料理', link: '/', primary: false },
  { id: 30, name: 'ラーメン', link: '/', primary: true },
  { id: 31, name: 'カレー', link: '/', primary: false },
  { id: 32, name: '焼肉', link: '/', primary: true },
  { id: 33, name: 'ホルモン', link: '/', primary: false },
  { id: 34, name: '鍋', link: '/', primary: false },
  { id: 35, name: 'もつ鍋', link: '/', primary: false },
  { id: 36, name: '居酒屋', link: '/', primary: true },
  { id: 37, name: 'バイキング', link: '/', primary: false },
  { id: 38, name: 'カフェ', link: '/', primary: true },
  { id: 39, name: 'パン', link: '/', primary: false },
  { id: 40, name: 'スイーツ', link: '/', primary: false },
  { id: 41, name: 'ケーキ', link: '/', primary: false },
  { id: 42, name: 'バー・お酒', link: '/', primary: false },
  { id: 43, name: '旅館', link: '/', primary: false },
  { id: 44, name: '定食・食堂', link: '/', primary: false },
  { id: 45, name: '喫茶店', link: '/', primary: false },
  { id: 46, name: 'ビストロ', link: '/', primary: false },
  { id: 47, name: 'タピオカ', link: '/', primary: false },
];
