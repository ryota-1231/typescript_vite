import Presenter from './presenter';

type PropsType = React.ComponentProps<typeof Presenter>;

const ListPhotoComponent = ({
  text,
  imageSrc,
  link,
  number,
  fontSize,
  className,
}: PropsType) => (
  <Presenter
    text={text}
    imageSrc={imageSrc}
    link={link}
    number={number}
    fontSize={fontSize}
    className={className}
  />
);
export default ListPhotoComponent;
