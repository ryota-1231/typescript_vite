import Presenter from './presenter';

type PropsType = React.ComponentProps<typeof Presenter>;

const ListPhotoComponent = ({
  text,
  imageSrc,
  link,
  number,
  fontsize,
  className,
}: PropsType) => (
  <Presenter
    text={text}
    imageSrc={imageSrc}
    link={link}
    number={number}
    fontsize={fontsize}
    className={className}
  />
);
export default ListPhotoComponent;
