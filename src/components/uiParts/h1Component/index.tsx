import Presenter from './presenter';

type PropsType = React.ComponentProps<typeof Presenter>;

/**
 * h1のコンポーネント
 * @param <children: string>
 * @returns <h1></h1>
 */
const H1Component = ({ className, children }: PropsType) => (
  <Presenter className={className}>{children}</Presenter>
);

export default H1Component;
