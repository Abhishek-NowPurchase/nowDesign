import React from 'react';
import Button from './Button';

export default {
  title: 'Atoms/Button',
  component: Button
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  children: 'Primary Button'
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  children: 'Secondary Button'
};

export const Transparent = Template.bind({});
Transparent.args = {
  variant: 'transparent',
  children: 'Transparent Button'
};
