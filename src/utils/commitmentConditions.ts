type HyakumeitenConditionsType = {
  id: number;
  name: string;
  imageSrc: string;
  link: string;
};

type PrimaryCommitmentConditionsType = HyakumeitenConditionsType & {
  number: number;
};

type ConditionsType = { id: number; name: string; link: string };

// TODO:DBにデータ移行
export const PRIMARY_COMMITMENT_CONDITIONS: PrimaryCommitmentConditionsType[] =
  [
    {
      id: 1,
      name: '感染症対策',
      imageSrc: 'images/top/top_kodawari_kansenshotaisaku.png',
      link: '/',
      number: 77836,
    },
    {
      id: 2,
      name: '個室',
      imageSrc: 'images/top/top_kodawari_koshitu.png',
      link: '/',
      number: 86374,
    },
    {
      id: 3,
      name: '食べ放題',
      imageSrc: 'images/top/top_kodawari_tabeho.png',
      link: '/',
      number: 10092,
    },
    {
      id: 4,
      name: '飲み放題',
      imageSrc: 'images/top/top_kodawari_nomiho.png',
      link: '/',
      number: 59848,
    },
    {
      id: 5,
      name: 'オシャレな空間',
      imageSrc: 'images/top/top_kodawari_oshare.png',
      link: '/',
      number: 105258,
    },
    {
      id: 6,
      name: 'ネット予約可',
      imageSrc: 'images/top/top_kodawari_netyoyaku.png',
      link: '/',
      number: 72017,
    },
  ];

export const SUB_COMMITMENT_CONDITIONS: ConditionsType[] = [
  { id: 1, name: '大人数の宴会', link: '/' },
  { id: 2, name: 'ワインあり', link: '/' },
  { id: 3, name: '日本酒あり', link: '/' },
  { id: 4, name: '座敷', link: '/' },
  { id: 5, name: 'カップルシート', link: '/' },
  { id: 6, name: 'カウンター席', link: '/' },
  { id: 7, name: 'ソファー席', link: '/' },
  { id: 8, name: 'オープンテラス', link: '/' },
  { id: 9, name: '掘りごたつ', link: '/' },
  { id: 10, name: '禁煙', link: '/' },
  { id: 11, name: '喫煙可', link: '/' },
  { id: 12, name: '落ち着いた空間', link: '/' },
  { id: 13, name: 'ライブ・生演奏', link: '/' },
  { id: 14, name: 'カラオケ', link: '/' },
  { id: 15, name: '駐車場', link: '/' },
  { id: 16, name: '朝食', link: '/' },
  { id: 17, name: 'ランチ', link: '/' },
  { id: 18, name: '夜10時以降入店可', link: '/' },
  { id: 19, name: '夜12時以降入店可', link: '/' },
  { id: 20, name: '始発まで営業', link: '/' },
  { id: 21, name: '日曜営業あり', link: '/' },
  { id: 22, name: '隠れ家レストラン', link: '/' },
  { id: 23, name: '夜景が見える', link: '/' },
  { id: 24, name: '景色がきれい', link: '/' },
  { id: 25, name: '海が見える', link: '/' },
  { id: 26, name: '一軒家レストラン', link: '/' },
  { id: 27, name: 'ホテルのレストラン', link: '/' },
  { id: 28, name: 'カクテルあり', link: '/' },
  { id: 29, name: '焼酎あり', link: '/' },
  { id: 30, name: '野菜料理にこだわる', link: '/' },
  { id: 31, name: '魚料理にこだわる', link: '/' },
  { id: 32, name: '健康・美容メニューあり', link: '/' },
  { id: 34, name: 'ベジタリアンメニューあり', link: '/' },
  { id: 35, name: 'テイクアウト', link: '/' },
  { id: 36, name: '子供可', link: '/' },
  { id: 37, name: 'カード可', link: '/' },
  { id: 38, name: 'ペット可', link: '/' },
  { id: 39, name: 'クーポン', link: '/' },
  { id: 40, name: '貸切可', link: '/' },
  { id: 41, name: '3時間以上の飲み放題コース', link: '/' },
  { id: 42, name: '2,000円以下の飲み放題', link: '/' },
  { id: 43, name: '3,000円以下の飲み放題', link: '/' },
  { id: 44, name: '4,000円以下の飲み放題', link: '/' },
  { id: 45, name: '5,000円以下の飲み放題', link: '/' },
  { id: 46, name: '5,000円以上の飲み放題', link: '/' },
  { id: 47, name: '予約可', link: '/' },
  { id: 48, name: 'ドリンク持込可', link: '/' },
  { id: 49, name: 'お祝い・サプライズ可', link: '/' },
];

export const OTHER_CONDITIONS: ConditionsType[] = [
  { id: 1, name: '全国のランチランキング', link: '/' },
  { id: 2, name: '～ 1,000円のランチ', link: '/' },
  { id: 3, name: '1,000円 ～ 2,000円のランチ', link: '/' },
  { id: 4, name: '2,000円 ～ のランチ', link: '/' },
  { id: 5, name: '飲食チェーン・ブランド', link: '/' },
  { id: 6, name: '全国のニューオープン・レストラン', link: '/' },
  { id: 7, name: '新宿×カフェ', link: '/' },
  { id: 8, name: '渋谷×焼肉', link: '/' },
  { id: 9, name: '恵比寿×ランチ', link: '/' },
  { id: 10, name: '三軒茶屋×ランチ', link: '/' },
  { id: 11, name: '表参道×カフェ', link: '/' },
  { id: 12, name: '池袋×居酒屋', link: '/' },
  { id: 13, name: '京都駅×ランチ', link: '/' },
  { id: 14, name: '銀座×イタリアン', link: '/' },
  { id: 15, name: '博多×ラーメン', link: '/' },
  { id: 16, name: '梅田×居酒屋', link: '/' },
  { id: 17, name: 'みなとみらい×ランチ', link: '/' },
  { id: 18, name: '原宿×パンケーキ', link: '/' },
];

export const HYAKUMEITEN_CONDITIONS: HyakumeitenConditionsType[] = [
  {
    id: 7,
    name: 'とんかつ 百名店',
    imageSrc: 'images/top/top_hyakumeiten_07.png',
    link: '/',
  },
  {
    id: 10,
    name: 'カフェ 百名店',
    imageSrc: 'images/top/top_hyakumeiten_10.png',
    link: '/',
  },
  {
    id: 6,
    name: 'うどん 百名店',
    imageSrc: 'images/top/top_hyakumeiten_06.png',
    link: '/',
  },
  {
    id: 13,
    name: '寿司 百名店',
    imageSrc: 'images/top/top_hyakumeiten_13.png',
    link: '/',
  },
  {
    id: 20,
    name: 'スイーツ 百名店',
    imageSrc: 'images/top/top_hyakumeiten_20.png',
    link: '/',
  },
  {
    id: 1,
    name: 'ハンバーガー 百名店',
    imageSrc: 'images/top/top_hyakumeiten_01.png',
    link: '/',
  },
  {
    id: 25,
    name: '定食 百名店',
    imageSrc: 'images/top/top_hyakumeiten_25.png',
    link: '/',
  },
  {
    id: 12,
    name: '焼鳥 百名店',
    imageSrc: 'images/top/top_hyakumeiten_12.png',
    link: '/',
  },
  {
    id: 19,
    name: 'イタリアン 百名店',
    imageSrc: 'images/top/top_hyakumeiten_19.png',
    link: '/',
  },
  {
    id: 11,
    name: '中国料理 百名店',
    imageSrc: 'images/top/top_hyakumeiten_11.png',
    link: '/',
  },
  {
    id: 18,
    name: 'カレー 百名店',
    imageSrc: 'images/top/top_hyakumeiten_18.png',
    link: '/',
  },
  {
    id: 4,
    name: '焼肉 百名店',
    imageSrc: 'images/top/top_hyakumeiten_04.png',
    link: '/',
  },
  {
    id: 2,
    name: '喫茶店 百名店',
    imageSrc: 'images/top/top_hyakumeiten_02.png',
    link: '/',
  },
  {
    id: 15,
    name: '居酒屋 百名店',
    imageSrc: 'images/top/top_hyakumeiten_15.png',
    link: '/',
  },
  {
    id: 26,
    name: 'そば 百名店',
    imageSrc: 'images/top/top_hyakumeiten_26.png',
    link: '/',
  },
  {
    id: 23,
    name: 'ビストロ 百名店',
    imageSrc: 'images/top/top_hyakumeiten_23.png',
    link: '/',
  },
  {
    id: 24,
    name: '日本料理 百名店',
    imageSrc: 'images/top/top_hyakumeiten_24.png',
    link: '/',
  },
  {
    id: 8,
    name: 'お好み焼き 百名店',
    imageSrc: 'images/top/top_hyakumeiten_08.png',
    link: '/',
  },
  {
    id: 22,
    name: 'ラーメン 百名店',
    imageSrc: 'images/top/top_hyakumeiten_22.png',
    link: '/',
  },
  {
    id: 16,
    name: 'うなぎ 百名店',
    imageSrc: 'images/top/top_hyakumeiten_16.png',
    link: '/',
  },
  {
    id: 9,
    name: 'フレンチ 百名店',
    imageSrc: 'images/top/top_hyakumeiten_09.png',
    link: '/',
  },
  {
    id: 5,
    name: 'パン 百名店',
    imageSrc: 'images/top/top_hyakumeiten_05.png',
    link: '/',
  },
  {
    id: 17,
    name: '餃子 百名店',
    imageSrc: 'images/top/top_hyakumeiten_17.png',
    link: '/',
  },
  {
    id: 21,
    name: 'ステーキ 百名店',
    imageSrc: 'images/top/top_hyakumeiten_21.png',
    link: '/',
  },
  {
    id: 14,
    name: 'ピザ 百名店',
    imageSrc: 'images/top/top_hyakumeiten_14.png',
    link: '/',
  },
  {
    id: 3,
    name: '洋食 百名店',
    imageSrc: 'images/top/top_hyakumeiten_03.png',
    link: '/',
  },
];
