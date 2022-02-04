import Presenter from './presenter';

type PropsType = React.ComponentProps<typeof Presenter>;

const ListPhotoComponent = ({
  text,
  imageSrc,
  link,
  number,
  className,
}: PropsType) => (
  <Presenter
    text={text}
    imageSrc={imageSrc}
    link={link}
    number={number}
    className={className}
  />
);
export default ListPhotoComponent;
