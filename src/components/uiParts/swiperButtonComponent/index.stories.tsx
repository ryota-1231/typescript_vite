import { ComponentStory, ComponentMeta } from '@storybook/react';

import SwiperButtonComponent from './index';

export default {
  title: 'Component/SwiperButtonComponent',
  component: SwiperButtonComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof SwiperButtonComponent>;

const Template: ComponentStory<typeof SwiperButtonComponent> = (args) => {
  const { buttonType, className } = args;
  return (
    <SwiperButtonComponent buttonType={buttonType} className={className} />
  );
};

export const NextButton = Template.bind({});
NextButton.args = {
  buttonType: 'nextButton',
  className: 'className',
};

export const PrevButton = Template.bind({});
PrevButton.args = {
  buttonType: 'prevButton',
  className: 'className',
};
