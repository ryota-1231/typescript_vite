import { ComponentStory, ComponentMeta } from '@storybook/react';

import SpanNumberComponent from './index';

export default {
  title: 'Component/SpanNumberComponent',
  component: SpanNumberComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof SpanNumberComponent>;

const Template: ComponentStory<typeof SpanNumberComponent> = () => (
  <SpanNumberComponent />
);

export const Span = Template.bind({});
