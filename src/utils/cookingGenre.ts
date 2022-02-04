type CookingGenreType = {
  id: number;
  name: string;
  link: string;
};

// TODO:DBにデータ移行
export const PRIMARY_COOKING_GENRE = [
  {
    id: 1,
    name: '焼肉',
    imageSrc: 'src/assets/images/top/top_genre_yakiniku.png',
    link: '/',
    number: 28775,
  },
  {
    id: 2,
    name: '寿司',
    imageSrc: 'src/assets/images/top/top_genre_sushi.png',
    link: '/',
    number: 32119,
  },
  {
    id: 3,
    name: '居酒屋',
    imageSrc: 'src/assets/images/top/top_genre_izakaya.png',
    link: '/',
    number: 121950,
  },
  {
    id: 4,
    name: 'イタリアン',
    imageSrc: 'src/assets/images/top/top_genre_italian.png',
    link: '/',
    number: 22572,
  },
  {
    id: 5,
    name: 'ラーメン',
    imageSrc: 'src/assets/images/top/top_genre_ramen.png',
    link: '/',
    number: 49859,
  },
  {
    id: 6,
    name: 'カフェ',
    imageSrc: 'src/assets/images/top/top_genre_cafe.png',
    link: '/',
    number: 112178,
  },
];

export const COOKING_GENRE: CookingGenreType[] = [
  { id: 1, name: '和食', link: '/' },
  { id: 2, name: '日本料理', link: '/' },
  { id: 3, name: '魚介・海鮮料理', link: '/' },
  { id: 4, name: 'そば（蕎麦）', link: '/' },
  { id: 5, name: 'うどん', link: '/' },
  { id: 6, name: 'うなぎ', link: '/' },
  { id: 7, name: '焼き鳥', link: '/' },
  { id: 8, name: 'とんかつ', link: '/' },
  { id: 9, name: '串揚げ', link: '/' },
  { id: 10, name: '天ぷら', link: '/' },
  { id: 11, name: 'お好み焼き', link: '/' },
  { id: 12, name: 'もんじゃ焼き', link: '/' },
  { id: 13, name: 'しゃぶしゃぶ', link: '/' },
  { id: 14, name: '沖縄料理', link: '/' },
  { id: 15, name: '洋食', link: '/' },
  { id: 16, name: 'フレンチ', link: '/' },
  { id: 17, name: 'スペイン料理', link: '/' },
  { id: 18, name: 'パスタ', link: '/' },
  { id: 19, name: 'ピザ', link: '/' },
  { id: 20, name: 'ステーキ', link: '/' },
  { id: 21, name: 'ハンバーグ', link: '/' },
  { id: 22, name: 'ハンバーガー', link: '/' },
  { id: 23, name: '中華料理', link: '/' },
  { id: 24, name: '餃子', link: '/' },
  { id: 25, name: '韓国料理', link: '/' },
  { id: 26, name: 'タイ料理', link: '/' },
  { id: 27, name: 'カレー', link: '/' },
  { id: 28, name: 'ホルモン', link: '/' },
  { id: 29, name: '鍋', link: '/' },
  { id: 30, name: 'もつ鍋', link: '/' },
  { id: 31, name: 'バイキング', link: '/' },
  { id: 32, name: 'パン', link: '/' },
  { id: 33, name: 'スイーツ', link: '/' },
  { id: 34, name: 'ケーキ', link: '/' },
  { id: 35, name: 'バー・お酒', link: '/' },
  { id: 36, name: '旅館', link: '/' },
  { id: 37, name: '定食・食堂', link: '/' },
  { id: 38, name: '喫茶店', link: '/' },
  { id: 39, name: 'ビストロ', link: '/' },
  { id: 40, name: 'タピオカ', link: '/' },
];
