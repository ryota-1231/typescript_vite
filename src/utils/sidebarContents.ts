type CommonType = {
  id: number;
  imageSrc: string;
  link: string;
};

type LimitedPlanType = CommonType & {
  title: string;
  lead: string;
};

type PromotionStoreType = CommonType & {
  name: string;
  areaGenre: string;
  comment: string;
};

type ReccomendedContentsType = CommonType & {
  title: string;
  text: string;
  imageStyle: {
    height: string;
    backgroundStyle: string;
  };
};

export const LIMITED_PLAN: LimitedPlanType[] = [
  {
    id: 1,
    title: '色んなお店で使えるカード',
    lead: 'アメリカン・エキスプレスなら、様々なお店で幅広く利用が可能！',
    imageSrc:
      'https://img1.kakaku.k-img.com/images/ad/adadmin/adimage/202110/20211021_americanexpress_001.jpg',
    link: 'https://adclick.g.doubleclick.net/pcs/click%253Fxai%253DAKAOjst-9oycQbHAF1arZYfMY7S_drf_pcGnLH5YBngczSWqZYqK7AAqB9pM84P-Dsip-hD8qRuNUsY0bOnDXOWcoTC74Y9uRmjGigJLPcpD49vznu_V97GUNjL3hdM5BPQ4-pCGECzO2dIe0JEtNzQwhIKBu7FKCFfzo7P65cbB6wbD0VaXBtm3EUtzOk3WeECZT8S9C80hItuSyoRC3kPmR0Lz2OYycs2Q86PypKA2U3UEev5NB7fZ1GOQqyWWx1iYXKtVN-oPh6RinIuQcUZUziPXm9wfi3wu8vCvRt_igA%2526sai%253DAMfl-YS6xIJhY-BbatV_1ZVMC5mbYcgyd26OTgb7FkMb7KA1zDBR0-IxSnjfr9fvfRr2TyrxyJL13gj07W7Kky451nD2n-vcrdRj2brLbzi0GfWMf8z_YENETzbAc9UAjtb0Qalf%2526sig%253DCg0ArKJSzKaCy_DdJiTPEAE%2526fbs_aeid%253D%255Bgw_fbsaeid%255D%2526urlfix%253D1%2526adurl%253Dhttps://tabelog.com/tieup/main/americanexpress/%3Flid%3Dtieup_americanexpress_PC_top_a',
  },
  {
    id: 2,
    title: 'イタリアン EAST 百名店 2021',
    lead: 'グルメが選ぶ、いま食べるべき、イタリアンの名店。',
    imageSrc:
      'https://img1.kakaku.k-img.com/images/ad/adadmin/adimage/202103/italian_east_60x60.png',
    link: 'https://adclick.g.doubleclick.net/pcs/click%253Fxai%253DAKAOjssv5P6j8mJpi2_UYCC0NXB9wxQUtpC7p4Gg5q1NhWYbYb0RFmVxiu57dZ6OQwMqrRU0hAdmSRj6oztI_mQcYjRWZM4QqXLo1HoO9yvLraGkmHadNjEDaZLmtnuvQKOm7mWqyN6uF9KiBy13aNcd5tZc9dIlXFEKNXTTn7QYJ9iEN2utKShIAbi3wFp6G0qCYcSA8aU0iyUaQAmt_CKIPtToFHeSH1F-yrgGFVDrN8nscNoA0xTjpQQGS2v0oV1qAIGiTl1X-Sz5x7eSGIKgEU5Ni-nykjhznR9x5kEDfw%2526sai%253DAMfl-YSRwZ1UwlxAEEI8gfhLk8MC1RYI_ClCEjkWsEYeTUJPBj8-QWVDRj8s76rzNGNbbxUNZpgyaP-jvqz_zKHJTRZEfi-tFzG510UQcxGfXvHlauEecGO6rTS344V0D1lNEf1I%2526sig%253DCg0ArKJSzFTYZOFn0ac4EAE%2526fbs_aeid%253D%255Bgw_fbsaeid%255D%2526urlfix%253D1%2526adurl%253Dhttps://award.tabelog.com/hyakumeiten/italian_east',
  },
  {
    id: 3,
    title: '定食 百名店 2021',
    lead: 'グルメが選ぶ、いま食べるべき、定食の名店。',
    imageSrc:
      'https://img1.kakaku.k-img.com/images/ad/adadmin/adimage/202108/teishoku_60x60.png',
    link: 'https://adclick.g.doubleclick.net/pcs/click%253Fxai%253DAKAOjssfSVZ5XOGG1mA9CgzNucwU0QUbRBjMjiBx27oQLD2isPX9WHeRkKyX39bUVLmmFRk0MEOpfAdQHeyebBNEiPUbQ34qG7w4quqBOdA2lhxYtfYJ2t8YoNZJA8RiNd_QmKJ2PV2U9Q91QnG7nhsZN85PIQ3UXsTfb7ZLXmEQoMpwGCrec4rn3OrhCFE57oH_6-UuuOwdpJl0EFHXvD3tKSh-wpEKcUokoCDeNQbb5HnmKOtw2nsORJshMseM8Rm8VOaD3Ph7EsHSIDBcGWzbv5TVxQ3RkRzIueZcWLrNmw%2526sai%253DAMfl-YTny8rsZRJBjg_5lSEW5ZRBHC_CxUNPWA0GGUZSS5mvXBe0bhosJpt8dtIeyoZVkDKBm-pKZvTqbjZzpzPWNk-nHPTMSHhEwEXllZJuEeHfMfw4VZ1FTzNbkGOBEpWy7CG8%2526sig%253DCg0ArKJSzP60Yf41PEx4EAE%2526fbs_aeid%253D%255Bgw_fbsaeid%255D%2526urlfix%253D1%2526adurl%253Dhttps://award.tabelog.com/hyakumeiten/teishoku',
  },
  {
    id: 4,
    title: 'イタリアン TOKYO 百名店 2021',
    lead: 'グルメが選ぶ、いま食べるべき、イタリアンの名店。',
    imageSrc:
      'https://img1.kakaku.k-img.com/images/ad/adadmin/adimage/202103/italian_tokyo_60x60.png',
    link: 'https://adclick.g.doubleclick.net/pcs/click%253Fxai%253DAKAOjstj2mCmUi3QcOIWM_fgVPdPuFXttVM3AkVqtcU4HKMFqpfiA0PfnhYH3MvNJecOZWdql0b1eTpTdHwiiSOp-JoNKWXxo1YPEUclPI00kHBV-skPcMl1jSbqfacKTxSttmI_gO6F2cj6pbxhQgdN_9apNexBoSxYWVFHm0Ux51ctRCZ4cvtXQI94U6-K_Cq2vDzvGU8e-xjgXMzxFAlZbwVwU-5BtfCnafQSyWBCtYQxfMdjRAoH8k0TbedyynMZkRIO5zCWGcwOQ8tTz1YLY81810uAYnmIq1JHPF_SXw%2526sai%253DAMfl-YSVjLCTw64HfGGyNRfk-fMSFz8BqdX0l08dxic4Ld6hq59NQtWxdIIMWiLr9Y5dxXmqnOa37GklEvc4Eos9hv09aJFoL-x0zePRfDs3L-OQg9DAxMcV88LGUOBTspm6I58R%2526sig%253DCg0ArKJSzMAhMHycIy__EAE%2526fbs_aeid%253D%255Bgw_fbsaeid%255D%2526urlfix%253D1%2526adurl%253Dhttps://award.tabelog.com/hyakumeiten/italian_tokyo',
  },
  {
    id: 5,
    title: 'スイーツ TOKYO&nbsp;百名店 2020',
    lead: 'グルメが選ぶ、いま食べるべき、スイーツの名店。',
    imageSrc:
      'https://img1.kakaku.k-img.com/images/ad/adadmin/adimage/202002/sweets_tokyo_60x60.jpg',
    link: 'https://adclick.g.doubleclick.net/pcs/click%253Fxai%253DAKAOjss1_CJXzzIohw3EJfb4MJDIAGFTcif8KaKNJphXD543FOeNZ1UvBQkpgOmVlnfsc3pXN3UGuE2IwBGwkbFuiwR21qpPjD27QdD1jQuYMhTjZ2f94wCrF-k1a_Y5Xfl7ub9fxb0IigXiaxOLSaSvw-x_4L4AnjgqHHp3taxYTbflDdw_O88LQ-pInQJuX9IE6u6KLD97aBes7Qv7S2Z9ZaT4B5JBcoYH0E7TIvvYTbcUO5EWNDbmrme2xdO51ZSd8eIak2CskcAZ_aBllE49w6GZNVJNMmClK467sr7OOw%2526sai%253DAMfl-YRtXRQXQGOgokPOCCoBDDBxSU6PcaK1oagWmPcywLCJHNkojro6ZuqRM_nZhUBCy8De48Dz2Uvnb9Vt2_rT1eSQkFbuTararizl77Nm1scCNwJLeghTcYVNfDNJieuOUYBU%2526sig%253DCg0ArKJSzHEv_bjZUwpZEAE%2526fbs_aeid%253D%255Bgw_fbsaeid%255D%2526urlfix%253D1%2526adurl%253Dhttps://award.tabelog.com/hyakumeiten/sweets_tokyo',
  },
  {
    id: 6,
    title: 'そば 百名店 2021',
    lead: 'グルメが選ぶ、いま食べるべき、そばの名店。',
    imageSrc:
      'https://img1.kakaku.k-img.com/images/ad/adadmin/adimage/202103/soba_60x60.png',
    link: 'https://adclick.g.doubleclick.net/pcs/click%253Fxai%253DAKAOjsukl-j15I7RQC70gmN9exUxUHuhsotz4kjIOt_5CGMC-tjxAyfXr1wlgT-IrzPtv5nXVXcZVf3KGidsTmtau7cnlBpsmX34NNqvsAx4TcOCtIiJv9_Dsb6gfGRBV8Mqts0JTJH7tofqVvPIXHG6TXz46AtO-GptUsxSFmIz2zMfik0y9RcxPirMiSQA8oYj7I5orGaJP_Q-wh8RDIlLsd2vlx1wYtUZMGWSjJyjAqhF4YSty_9jrpr0tEtmAvME-4MzJpm6WHue_EGylcI0WvzheFRgvbDm4nVzAR6TSQ%2526sai%253DAMfl-YQfN12Hw3XT_dxa8pN3buwoorMGDZXVpTA7IqWO0GL9jjV4-7pnPWGr3AxVWxyYdlA5whVjwn4gBxQCFknC8DSseqJxGkNIi1jS0zke865HxobEme11eTElkjaX_K3TqrMf%2526sig%253DCg0ArKJSzOBJLtHrBIJjEAE%2526fbs_aeid%253D%255Bgw_fbsaeid%255D%2526urlfix%253D1%2526adurl%253Dhttps://award.tabelog.com/hyakumeiten/soba',
  },
  {
    id: 7,
    title: 'スイーツ EAST 百名店 2020',
    lead: 'グルメが選ぶ、いま食べるべき、スイーツの名店。',
    imageSrc:
      'https://img1.kakaku.k-img.com/images/ad/adadmin/adimage/202002/sweets_east_60x60.jpg',
    link: 'https://adclick.g.doubleclick.net/pcs/click%253Fxai%253DAKAOjss2i-g5xt0aZtFbTeG2ChlrCaecz2v13LuHdQ7ZmiiIfqUnd9KdPVQt7Og2aUwfPq8i7rV-QIty_esDtsjrPaGL5W4H316jNzzdGYOvTFoBHYFNchq39Tf1dKz-5zp0ynKxmtq7aTwVhYj67FM_cKID7hAGG2uQ6draOSL_UD_2nD2wGabJPMa12Z40k-Hbqi9T8viSFm1wIXpMF623k9j_DNuTZcEmG5VWLe4jdtnpciLPdUFym5LllI5AjXEc0vF1xE0B3XiRlwPIaNSnd3Jxo5xWEDrJTwYTjHmrZw%2526sai%253DAMfl-YSd6iL6gQ391tzMdPEvJfafdTuw2iC5AIzecEZ9D9euqltICb6a69Fhx_lIarGZ8VPsWCy85K_pq5nU3Stm6yv6EImbri5ymQIf4xEsOiNWBN-MW5N7XlGKGMxYYRUwu1K7%2526sig%253DCg0ArKJSzAq_bH4pkd6EEAE%2526fbs_aeid%253D%255Bgw_fbsaeid%255D%2526urlfix%253D1%2526adurl%253Dhttps://award.tabelog.com/hyakumeiten/sweets_east',
  },
];

export const PROMOTION_STORE: PromotionStoreType[] = [
  {
    id: 1,
    name: '横浜中華街広東料理飲茶食べ放題専門店 龍興飯店',
    areaGenre: '元町・中華街、日本大通り、石川町 / 中華料理',
    comment:
      '「路地裏にこそ旨い店あり」★香港通り★【時間無制限】厳選料理130品食べ放題1,980円■',
    imageSrc:
      'https://tblg.k-img.com/restaurant/images/Rvw/92213/50x50_square_92213980.jpg',
    link: '/',
  },
  {
    id: 2,
    name: 'コマツ 今泉店',
    areaGenre: '西鉄福岡（天神）、天神南、薬院 / ダイニングバー',
    comment:
      '【西鉄福岡徒歩4分/ドンキホーテさんの裏の二階に佇む本格イタリアンのお店】',
    imageSrc:
      'https://tblg.k-img.com/restaurant/images/Rvw/124752/50x50_square_124752544.jpg',
    link: '/',
  },
];

export const RECOMMENDED_CONTENTS: ReccomendedContentsType[] = [
  {
    id: 1,
    imageSrc: 'images/top/top_award_logo.svg',
    link: '/',
    title: 'THE TABELOG AWARD 2022',
    text: '今、一番美味しいお店を決定する表彰イベント「The Tabelog Award 2022」ついに発表！',
    imageStyle: {
      height: '50',
      backgroundStyle: 'no-repeat center center',
    },
  },
  {
    id: 2,
    imageSrc: 'images/top/top_hyakumeiten_logo.svg',
    link: '/',
    title: '食べログ百名店',
    text: 'うまいもの、いま食べるなら、このお店。カテゴリ別のランキングTOP100店舗を発表。',
    imageStyle: {
      height: '63',
      backgroundStyle: 'no-repeat 0 0/contain',
    },
  },
  {
    id: 3,
    imageSrc: 'images/top/top_tabelog_magazine_logo_02.svg',
    link: '/',
    title: '食べログマガジン',
    text: 'いますぐ行ってみたいお店、食べたいひと皿を、編集部渾身の記事でご紹介！',
    imageStyle: {
      height: '37',
      backgroundStyle: 'no-repeat 0 0/contain',
    },
  },
];
