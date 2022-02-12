import { ComponentStory, ComponentMeta } from '@storybook/react';

import H2Component from './index';

export default {
  title: 'Component/H2Component',
  component: H2Component,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof H2Component>;

const Template: ComponentStory<typeof H2Component> = (args) => {
  const { children } = args;
  return <H2Component>{children}</H2Component>;
};

export const H2 = Template.bind({});
H2.args = {
  children: 'H2',
};
