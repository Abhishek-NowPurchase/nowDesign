import React from 'react';
// Use require to import from CommonJS index.js
const { UserFacesTeamFill } = require('./index.js');

export default {
  title: 'Icons/Single',
  component: UserFacesTeamFill,
  argTypes: {
    width: { control: 'number', defaultValue: 32 },
    height: { control: 'number', defaultValue: 32 },
    style: { control: 'object', defaultValue: { color: '#000' } },
  },
};

const Template = (args) => <UserFacesTeamFill {...args} />;

export const Playground = Template.bind({});
Playground.args = {
  width: 32,
  height: 32,
  style: { color: '#000' },
}; 