import { ComponentStory, ComponentMeta } from '@storybook/react';

import { HYAKUMEITEN_CONDITIONS } from '../../../utils/commitmentConditions';

import SwiperComponent from './index';

export default {
  title: 'Component/SwiperComponent',
  component: SwiperComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof SwiperComponent>;

const Template: ComponentStory<typeof SwiperComponent> = (args) => {
  const { componentType, data, className } = args;
  return (
    <SwiperComponent
      componentType={componentType}
      data={data}
      className={className}
    />
  );
};

export const AwardIsGold = Template.bind({});
AwardIsGold.args = {
  componentType: 'award',
  data: HYAKUMEITEN_CONDITIONS,
  className: 'isGold',
};

export const AwardIsSilver = Template.bind({});
AwardIsSilver.args = {
  componentType: 'award',
  data: HYAKUMEITEN_CONDITIONS,
  className: 'isSilver',
};

export const AwardIsBronze = Template.bind({});
AwardIsBronze.args = {
  componentType: 'award',
  data: HYAKUMEITEN_CONDITIONS,
  className: 'isBronze',
};

export const Hyakumeiten = Template.bind({});
Hyakumeiten.args = {
  componentType: 'hyakumeiten',
  data: HYAKUMEITEN_CONDITIONS,
  className: undefined,
};
