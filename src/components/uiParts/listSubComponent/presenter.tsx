import { Link, List } from './style';

type PropsType = {
  text: string;
  link: string;
  className?: string;
};

/**
 * リストサブコンポーネント
 * @param text <テキスト>
 * @param link <aタグlink>
 * @param className <null許可/SC拡張用>
 * @returns <li><a href=link>text</a></li>
 */
const Presenter = (props: PropsType) => {
  const { text, link, className } = props;
  return (
    <List className={className}>
      <Link href={link}>{text}</Link>
    </List>
  );
};

Presenter.defaultProps = {
  className: null,
};

export default Presenter;
