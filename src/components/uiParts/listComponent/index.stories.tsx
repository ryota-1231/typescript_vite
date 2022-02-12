import { ComponentStory, ComponentMeta } from '@storybook/react';

import ListComponent from './index';

export default {
  title: 'Component/ListComponent',
  component: ListComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ListComponent>;

const Template: ComponentStory<typeof ListComponent> = (args) => {
  const { text, link, className } = args;
  return <ListComponent text={text} link={link} className={className} />;
};

export const List = Template.bind({});
List.args = {
  text: 'test',
  link: '/',
  className: 'className',
};
