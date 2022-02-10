import Presenter from './presenter';

type PropsType = React.ComponentProps<typeof Presenter>;

/**
 * h3のコンポーネント
 * @param <children: string>
 * @returns <h3></h3>
 */
const H3Component = ({ className, children }: PropsType) => (
  <Presenter className={className}>{children}</Presenter>
);

export default H3Component;
