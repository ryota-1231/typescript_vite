type AreaType = {
  [key: string]: { id: number; name: string; link: string }[];
};

/** 都道府県 */
export const PREFECTURES: AreaType[] = [
  {
    '北海道・東北': [
      { id: 1, name: '北海道', link: '/' },
      { id: 2, name: '青森', link: '/' },
      { id: 3, name: '秋田', link: '/' },
      { id: 4, name: '山形', link: '/' },
      { id: 5, name: '岩手', link: '/' },
      { id: 6, name: '宮城', link: '/' },
      { id: 7, name: '福島', link: '/' },
    ],
  },
  {
    中部: [
      { id: 8, name: '愛知', link: '/' },
      { id: 9, name: '岐阜', link: '/' },
      { id: 10, name: '静岡', link: '/' },
      { id: 11, name: '三重', link: '/' },
      { id: 12, name: '新潟', link: '/' },
      { id: 13, name: '山梨', link: '/' },
      { id: 14, name: '長野', link: '/' },
      { id: 15, name: '石川', link: '/' },
      { id: 16, name: '富山', link: '/' },
      { id: 17, name: '福井', link: '/' },
    ],
  },
  {
    '中国・四国': [
      { id: 18, name: '岡山', link: '/' },
      { id: 19, name: '広島', link: '/' },
      { id: 20, name: '鳥取', link: '/' },
      { id: 21, name: '島根', link: '/' },
      { id: 22, name: '山口', link: '/' },
      { id: 23, name: '香川', link: '/' },
      { id: 24, name: '徳島', link: '/' },
      { id: 25, name: '愛媛', link: '/' },
      { id: 26, name: '高知', link: '/' },
    ],
  },
  {
    関東: [
      { id: 27, name: '東京', link: '/' },
      { id: 28, name: '神奈川', link: '/' },
      { id: 29, name: '埼玉', link: '/' },
      { id: 30, name: '千葉', link: '/' },
      { id: 31, name: '栃木', link: '/' },
      { id: 32, name: '茨城', link: '/' },
      { id: 33, name: '群馬', link: '/' },
    ],
  },
  {
    関西: [
      { id: 34, name: '大阪', link: '/' },
      { id: 35, name: '兵庫', link: '/' },
      { id: 36, name: '京都', link: '/' },
      { id: 37, name: '滋賀', link: '/' },
      { id: 38, name: '奈良', link: '/' },
      { id: 39, name: '和歌山', link: '/' },
    ],
  },
  {
    '九州・沖縄': [
      { id: 40, name: '福岡', link: '/' },
      { id: 41, name: '佐賀', link: '/' },
      { id: 42, name: '長崎', link: '/' },
      { id: 43, name: '熊本', link: '/' },
      { id: 44, name: '大分', link: '/' },
      { id: 45, name: '宮崎', link: '/' },
      { id: 46, name: '鹿児島', link: '/' },
      { id: 47, name: '沖縄', link: '/' },
    ],
  },
];

/** 主要都市 */
export const PRIMARY_CITY: AreaType[] = [
  {
    東京: [
      { id: 1, name: '銀座', link: '/' },
      { id: 2, name: '有楽町', link: '/' },
      { id: 3, name: '新橋', link: '/' },
      { id: 4, name: '東京駅', link: '/' },
      { id: 5, name: '渋谷', link: '/' },
      { id: 6, name: '恵比寿', link: '/' },
      { id: 7, name: '新宿', link: '/' },
      { id: 8, name: '池袋', link: '/' },
      { id: 9, name: '六本木', link: '/' },
      { id: 10, name: '赤坂', link: '/' },
      { id: 11, name: '秋葉原', link: '/' },
      { id: 12, name: '上野', link: '/' },
      { id: 13, name: '浅草', link: '/' },
      { id: 14, name: '錦糸町', link: '/' },
      { id: 15, name: '品川', link: '/' },
      { id: 16, name: '吉祥寺', link: '/' },
      { id: 17, name: '北千住', link: '/' },
      { id: 18, name: '町田', link: '/' },
      { id: 19, name: '立川', link: '/' },
      { id: 20, name: '八王子', link: '/' },
    ],
  },
  {
    神奈川: [
      { id: 1, name: '横浜', link: '/' },
      { id: 2, name: '横浜駅', link: '/' },
      { id: 3, name: '桜木町', link: '/' },
      { id: 4, name: 'みなとみらい', link: '/' },
      { id: 5, name: '関内', link: '/' },
      { id: 6, name: '元町・中華街', link: '/' },
      { id: 7, name: '新横浜', link: '/' },
      { id: 8, name: '上大岡', link: '/' },
      { id: 9, name: '大船', link: '/' },
      { id: 10, name: '鎌倉', link: '/' },
      { id: 11, name: '藤沢', link: '/' },
      { id: 12, name: '平塚', link: '/' },
      { id: 13, name: '川崎', link: '/' },
      { id: 14, name: '武蔵小杉', link: '/' },
      { id: 15, name: '溝の口', link: '/' },
      { id: 16, name: '登戸', link: '/' },
      { id: 17, name: '相模大野', link: '/' },
      { id: 18, name: '海老名', link: '/' },
      { id: 19, name: '本厚木', link: '/' },
      { id: 20, name: '小田原', link: '/' },
    ],
  },
  {
    愛知: [
      { id: 1, name: '名古屋', link: '/' },
      { id: 2, name: '名古屋駅', link: '/' },
      { id: 3, name: '伏見', link: '/' },
      { id: 4, name: '栄', link: '/' },
      { id: 5, name: '新栄', link: '/' },
      { id: 6, name: '金山', link: '/' },
      { id: 7, name: '大須', link: '/' },
      { id: 8, name: '今池', link: '/' },
      { id: 9, name: '大曽根', link: '/' },
      { id: 10, name: '豊田市駅', link: '/' },
      { id: 11, name: '岡崎', link: '/' },
      { id: 12, name: '刈谷', link: '/' },
      { id: 13, name: '安城', link: '/' },
      { id: 14, name: '知立', link: '/' },
      { id: 15, name: '豊橋', link: '/' },
      { id: 16, name: '豊川', link: '/' },
      { id: 17, name: '一宮', link: '/' },
      { id: 18, name: '半田', link: '/' },
      { id: 19, name: '春日井', link: '/' },
      { id: 20, name: '小牧', link: '/' },
    ],
  },
  {
    大阪: [
      { id: 1, name: '梅田', link: '/' },
      { id: 2, name: '北新地', link: '/' },
      { id: 3, name: '茶屋町', link: '/' },
      { id: 4, name: '淀屋橋', link: '/' },
      { id: 5, name: '北浜', link: '/' },
      { id: 6, name: '天満', link: '/' },
      { id: 7, name: '本町', link: '/' },
      { id: 8, name: '京橋', link: '/' },
      { id: 9, name: '心斎橋', link: '/' },
      { id: 10, name: '難波', link: '/' },
      { id: 11, name: '天王寺', link: '/' },
      { id: 12, name: '鶴橋', link: '/' },
      { id: 13, name: '上本町', link: '/' },
      { id: 14, name: '新大阪', link: '/' },
      { id: 15, name: '十三', link: '/' },
      { id: 16, name: '福島', link: '/' },
      { id: 17, name: '堺', link: '/' },
      { id: 18, name: '高槻', link: '/' },
      { id: 19, name: '江坂', link: '/' },
      { id: 20, name: '枚方', link: '/' },
    ],
  },
  {
    京都: [
      { id: 1, name: '京都駅', link: '/' },
      { id: 2, name: '河原町', link: '/' },
      { id: 3, name: '四条烏丸', link: '/' },
      { id: 4, name: '烏丸御池', link: '/' },
      { id: 5, name: '四条大宮', link: '/' },
      { id: 6, name: '二条駅', link: '/' },
      { id: 7, name: '祗園', link: '/' },
      { id: 8, name: '出町柳', link: '/' },
      { id: 9, name: '百万遍', link: '/' },
      { id: 10, name: '西院', link: '/' },
      { id: 11, name: '嵐山', link: '/' },
      { id: 12, name: '北大路', link: '/' },
      { id: 13, name: '山科', link: '/' },
      { id: 14, name: '宇治', link: '/' },
      { id: 15, name: '長岡京', link: '/' },
      { id: 16, name: '京田辺', link: '/' },
      { id: 17, name: '松井山手', link: '/' },
      { id: 18, name: '亀岡', link: '/' },
      { id: 19, name: '福知山', link: '/' },
      { id: 20, name: '舞鶴', link: '/' },
    ],
  },
  {
    福岡: [
      { id: 1, name: '福岡市', link: '/' },
      { id: 2, name: '博多', link: '/' },
      { id: 3, name: '中洲', link: '/' },
      { id: 4, name: '天神', link: '/' },
      { id: 5, name: '大名', link: '/' },
      { id: 6, name: '春吉', link: '/' },
      { id: 7, name: '平尾', link: '/' },
      { id: 8, name: '六本松', link: '/' },
      { id: 9, name: '大橋', link: '/' },
      { id: 10, name: '西新', link: '/' },
      { id: 11, name: '宗像', link: '/' },
      { id: 12, name: '北九州', link: '/' },
      { id: 13, name: '小倉', link: '/' },
      { id: 14, name: '黒崎', link: '/' },
      { id: 15, name: '行橋', link: '/' },
      { id: 16, name: '飯塚', link: '/' },
      { id: 17, name: '久留米', link: '/' },
      { id: 18, name: '柳川', link: '/' },
      { id: 19, name: '大牟田', link: '/' },
      { id: 20, name: '糸島', link: '/' },
    ],
  },
];

/** その他都市 */
export const CITY: AreaType[] = [
  {
    東京: [
      { id: 1, name: '銀座・新橋・有楽町', link: '/' },
      { id: 2, name: '東京・日本橋', link: '/' },
      { id: 3, name: '渋谷・恵比寿・代官山', link: '/' },
      { id: 4, name: '新宿・代々木・大久保', link: '/' },
      { id: 5, name: '池袋～高田馬場・早稲田', link: '/' },
      { id: 6, name: '原宿・表参道・青山', link: '/' },
      { id: 7, name: '六本木・麻布・広尾', link: '/' },
      { id: 8, name: '赤坂・永田町・溜池', link: '/' },
      { id: 9, name: '四ツ谷・市ヶ谷・飯田橋', link: '/' },
      { id: 10, name: '秋葉原・神田・水道橋', link: '/' },
      { id: 11, name: '上野・浅草・日暮里', link: '/' },
      { id: 12, name: '両国・錦糸町・小岩', link: '/' },
      { id: 13, name: '築地・湾岸・お台場', link: '/' },
      { id: 14, name: '浜松町・田町・品川', link: '/' },
      { id: 15, name: '大井・蒲田', link: '/' },
      { id: 16, name: '目黒・白金・五反田', link: '/' },
      { id: 17, name: '東急沿線', link: '/' },
      { id: 18, name: '京王・小田急沿線', link: '/' },
      { id: 19, name: '中野～西荻窪', link: '/' },
      { id: 20, name: '吉祥寺・三鷹・武蔵境', link: '/' },
      { id: 21, name: '西武沿線', link: '/' },
      { id: 22, name: '板橋・東武沿線', link: '/' },
      { id: 23, name: '大塚・巣鴨・駒込・赤羽', link: '/' },
      { id: 24, name: '千住・綾瀬・葛飾', link: '/' },
      { id: 25, name: '小金井・国分寺・国立', link: '/' },
      { id: 26, name: '調布・府中・狛江', link: '/' },
      { id: 27, name: '町田・稲城・多摩', link: '/' },
      { id: 28, name: '西東京市周辺', link: '/' },
      { id: 29, name: '立川市・八王子市周辺', link: '/' },
      { id: 30, name: '福生・青梅周辺', link: '/' },
      { id: 31, name: '伊豆諸島・小笠原', link: '/' },
    ],
  },
  {
    神奈川: [
      { id: 1, name: '横浜市', link: '/' },
      { id: 2, name: '鎌倉・湘南', link: '/' },
      { id: 3, name: '川崎市', link: '/' },
      { id: 4, name: '横須賀・逗子・葉山・三浦', link: '/' },
      { id: 5, name: '相模原・大和周辺', link: '/' },
      { id: 6, name: '海老名・厚木周辺', link: '/' },
      { id: 7, name: '小田原周辺', link: '/' },
      { id: 8, name: '箱根・湯河原', link: '/' },
    ],
  },
  {
    愛知: [
      { id: 1, name: '名古屋市', link: '/' },
      { id: 2, name: '一宮・稲沢・愛西', link: '/' },
      { id: 3, name: '犬山・瀬戸・愛知郡', link: '/' },
      { id: 4, name: '大府・常滑・知多', link: '/' },
      { id: 5, name: '豊田・岡崎・西尾', link: '/' },
      { id: 6, name: '田原・豊橋・新城', link: '/' },
    ],
  },
  {
    大阪: [
      { id: 1, name: '大阪市', link: '/' },
      { id: 2, name: '堺・泉南', link: '/' },
      { id: 3, name: '豊中・池田・高槻', link: '/' },
      { id: 4, name: '北河内・東大阪', link: '/' },
      { id: 5, name: '南河内', link: '/' },
    ],
  },
  {
    京都: [
      { id: 1, name: '京都市', link: '/' },
      { id: 2, name: '宇治・南山城', link: '/' },
      { id: 3, name: '亀岡・丹波・福知山', link: '/' },
      { id: 4, name: '天橋立・丹後半島', link: '/' },
    ],
  },
  {
    福岡: [
      { id: 1, name: '福岡市', link: '/' },
      { id: 1, name: '太宰府・宗像・糟屋郡', link: '/' },
      { id: 1, name: '北九州市', link: '/' },
      { id: 1, name: '北九州市周辺', link: '/' },
      { id: 1, name: '筑豊', link: '/' },
      { id: 1, name: '久留米・筑後', link: '/' },
      { id: 1, name: '糸島', link: '/' },
    ],
  },
];
