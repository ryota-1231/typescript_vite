import Presenter from './presenter';

type PropsType = React.ComponentProps<typeof Presenter>;

/**
 * h2のコンポーネント
 * @param <children: string>
 * @returns <h2></h2>
 */
const H2Component = ({ className, children }: PropsType) => (
  <Presenter className={className}>{children}</Presenter>
);

export default H2Component;
