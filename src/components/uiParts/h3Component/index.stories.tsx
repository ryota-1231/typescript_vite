import { ComponentStory, ComponentMeta } from '@storybook/react';

import H3Component from './index';

export default {
  title: 'Component/H3Component',
  component: H3Component,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof H3Component>;

const Template: ComponentStory<typeof H3Component> = (args) => {
  const { children } = args;
  return <H3Component>{children}</H3Component>;
};

export const H3 = Template.bind({});
H3.args = {
  children: 'H3',
};
