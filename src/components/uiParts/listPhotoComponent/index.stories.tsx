import { ComponentStory, ComponentMeta } from '@storybook/react';

import src from '../../../assets/images/top/top_scene_joshikai.png';

import ListPhotoComponent from './index';

export default {
  title: 'Component/ListPhotoComponent',
  component: ListPhotoComponent,
} as ComponentMeta<typeof ListPhotoComponent>;

const Template: ComponentStory<typeof ListPhotoComponent> = (args) => {
  const { text, imageSrc, link, number, fontsize, className } = args;
  return (
    <ListPhotoComponent
      text={text}
      imageSrc={imageSrc}
      link={link}
      number={number}
      fontsize={fontsize}
      className={className}
    />
  );
};

export const ListPhoto = Template.bind({});
ListPhoto.args = {
  text: 'test',
  imageSrc: src,
  link: '/',
  number: 123456,
  fontsize: '17',
  className: 'className',
};
