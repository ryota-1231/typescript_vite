import Presenter from './presenter';

type PropsType = React.ComponentProps<typeof Presenter>;

const ListComponent = ({ text, link, className }: PropsType) => (
  <Presenter text={text} link={link} className={className} />
);
export default ListComponent;
