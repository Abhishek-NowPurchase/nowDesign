import React, { useState } from 'react';
import Input from './Input';
import { SystemSearchLine } from 'now-design-icons';

export default {
  title: 'Atoms/Input',
  component: Input,
};

const Template = (args) => {
  const [value, setValue] = useState(args.value || '');
  return <Input {...args} value={value} onChange={(e)=>setValue(e.target.value)} />;
};

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Type here',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  placeholder: 'Search',
  icon: <SystemSearchLine />,
};

export const Statuses = () => (
  <div style={{ display: 'grid', gap: 12 }}>
    <Input placeholder="Normal" />
    <Input placeholder="Success" status="success" />
    <Input placeholder="Warning" status="warning" />
    <Input placeholder="Error" status="error" />
  </div>
);


