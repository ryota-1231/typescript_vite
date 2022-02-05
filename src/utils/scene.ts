type PrimarySceneType = {
  id: number;
  name: string;
  imageSrc: string;
  link: string;
  number: number;
};

type SubSceneType = {
  id: number;
  name: string;
  link: string;
};

// TODO:DBにデータ移行
export const PRIMARY_SCENE: PrimarySceneType[] = [
  {
    id: 1,
    name: 'お一人様',
    imageSrc: 'src/assets/images/top/top_scene_hitori.png',
    link: '/',
    number: 124353,
  },
  {
    id: 2,
    name: '家族・子どもと',
    imageSrc: 'src/assets/images/top/top_scene_family.png',
    link: '/',
    number: 209185,
  },
  {
    id: 3,
    name: '接待',
    imageSrc: 'src/assets/images/top/top_scene_settai.png',
    link: '/',
    number: 7894,
  },
  {
    id: 4,
    name: 'デート',
    imageSrc: 'src/assets/images/top/top_scene_date.png',
    link: '/',
    number: 12377,
  },
  {
    id: 5,
    name: '女子会',
    imageSrc: 'src/assets/images/top/top_scene_joshikai.png',
    link: '/',
    number: 3471,
  },
  {
    id: 6,
    name: '合コン',
    imageSrc: 'src/assets/images/top/top_scene_goukon.png',
    link: '/',
    number: 622,
  },
];

export const SUB_SCENE: SubSceneType[] = [
  { id: 1, name: '大人数の宴会', link: '/' },
];
