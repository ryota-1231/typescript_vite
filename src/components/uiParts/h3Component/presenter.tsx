import { ReactNode } from 'react';

import H3 from './style';

type PropsType = {
  className?: string;
  children: ReactNode;
};

const Presenter = ({ className, children }: PropsType) => (
  <H3 className={className}>{children}</H3>
);

Presenter.defaultProps = {
  className: '',
};

export default Presenter;
