import React from 'react';
import { Typo } from './Typo';


export default {
  title: 'Example/Typo', 
  component: Typo,
  argTypes: {
    size: {
      control: {
        type: 'text', 
      },
    },
    bold: {
      control: {
        type: 'boolean',
      },
    },
  },
};

const Template = (args) => <Typo {...args}>Заголовок</Typo>;

export const Default = Template.bind({});
Default.args = {
  size: '16px', 
  bold: false,
};

export const Bold = Template.bind({});
Bold.args = {
  size: '20px',
  bold: true,
};

