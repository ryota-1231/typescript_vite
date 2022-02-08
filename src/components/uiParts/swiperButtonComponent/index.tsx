import Presenter from './presenter';

type PropsType = React.ComponentProps<typeof Presenter>;

/**
 * Swiperのprev/nextボタンのコンポーネント
 * @param buttonType <'nextButton' or 'prevButton'>
 * @param className <:string>
 * @returns SwiperNextButtonComponent or SwiperPrevButtonComponent
 */
const SwiperButtonComponent = ({ buttonType, className }: PropsType) => (
  <Presenter buttonType={buttonType} className={className} />
);

export default SwiperButtonComponent;
