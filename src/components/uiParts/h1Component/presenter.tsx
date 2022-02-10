import { ReactNode } from 'react';

import H1 from './style';

type PropsType = {
  className?: string;
  children: ReactNode;
};

const Presenter = ({ className, children }: PropsType) => (
  <H1 className={className}>{children}</H1>
);

Presenter.defaultProps = {
  className: '',
};
export default Presenter;
