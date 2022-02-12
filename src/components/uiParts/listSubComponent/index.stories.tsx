import { ComponentStory, ComponentMeta } from '@storybook/react';

import ListSubComponent from './index';

export default {
  title: 'Component/ListSubComponent',
  component: ListSubComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ListSubComponent>;

const Template: ComponentStory<typeof ListSubComponent> = (args) => {
  const { text, link, className } = args;
  return <ListSubComponent text={text} link={link} className={className} />;
};

export const ListSub = Template.bind({});
ListSub.args = {
  text: 'test',
  link: '/',
  className: 'className',
};
