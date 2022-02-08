import { SwiperNextButtonComponent, SwiperPrevButtonComponent } from './style';

type PropsType = {
  buttonType: 'nextButton' | 'prevButton';
  className: string;
};

const Presenter = ({ buttonType, className }: PropsType) => {
  switch (buttonType) {
    case 'nextButton':
      return <SwiperNextButtonComponent className={className} />;

    case 'prevButton':
      return <SwiperPrevButtonComponent className={className} />;

    default:
      throw new Error(
        'No matched cases. Please specify "nextButton" or "prevButton" for the buttonType of props.',
      );
  }
};

export default Presenter;
