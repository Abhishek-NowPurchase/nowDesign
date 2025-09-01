import React, { useState } from 'react';
import TextInput from './TextInput';
import { SystemSearchLine } from 'now-design-icons';

export default {
  title: 'Molecules/TextInput',
  component: TextInput,
};

export const Default = () => {
  const [value, setValue] = useState('');
  return (
    <div style={{ width: 360 }}>
      <TextInput id="ti-1" label="Your name" value={value} onChange={(e)=>setValue(e.target.value)} />
    </div>
  );
};

export const WithIconAndValidation = () => {
  const [value, setValue] = useState('');
  return (
    <div style={{ width: 360 }}>
      <TextInput
        id="ti-2"
        label="Search"
        value={value}
        onChange={(e)=>setValue(e.target.value)}
        icon={<SystemSearchLine />}
        placeholder="Start typing..."
        minLength={3}
        helperText="Enter at least 3 characters"
      />
    </div>
  );
};

export const ErrorState = () => (
  <div style={{ width: 360 }}>
    <TextInput id="ti-3" label="Email" value="oops" onChange={()=>{}} status="error" helperText="Invalid email" />
  </div>
);


