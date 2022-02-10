import { ReactNode } from 'react';

import H2 from './style';

type PropsType = {
  className?: string;
  children: ReactNode;
};

const Presenter = ({ className, children }: PropsType) => (
  <H2 className={className}>{children}</H2>
);

Presenter.defaultProps = {
  className: '',
};

export default Presenter;
