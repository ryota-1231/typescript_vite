import Presenter from './presenter';

type PropsType = React.ComponentProps<typeof Presenter>;

const ListSubComponent = ({ text, link, className }: PropsType) => (
  <Presenter text={text} link={link} className={className} />
);
export default ListSubComponent;
