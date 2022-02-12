import { ComponentStory, ComponentMeta } from '@storybook/react';

import H1Component from './index';

export default {
  title: 'Component/H1Component',
  component: H1Component,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof H1Component>;

const Template: ComponentStory<typeof H1Component> = (args) => {
  const { children } = args;
  return <H1Component>{children}</H1Component>;
};

export const H1 = Template.bind({});
H1.args = {
  children: 'H1',
};
