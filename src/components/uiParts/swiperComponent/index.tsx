import Presenter from './presenter';

type PropsType = React.ComponentProps<typeof Presenter>;

/**
 * Swiperのコンポーネント
 * @param componentType 'award' | 'hyakumeiten'
 * @param data { id: number, link: string, imageSrc: string, name: string}
 * @param className <:string>
 * @returns SwiperAwardComponent or SwiperHyakumeitenComponent
 */
const SwiperComponent = ({ componentType, data, className }: PropsType) => (
  <Presenter componentType={componentType} data={data} className={className} />
);

export default SwiperComponent;
