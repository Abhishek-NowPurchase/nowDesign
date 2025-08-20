import React, { useState } from 'react';
import Checkbox from './Checkbox';

export default {
  title: 'Atoms/Checkbox',
  component: Checkbox
};

export const Uncontrolled = () => (
  <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
    <Checkbox>Label</Checkbox>
  </div>
);

export const Controlled = () => {
  const [checked, setChecked] = useState(false);
  return (
    <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
      <Checkbox checked={checked} onChange={(e) => setChecked(e.target.checked)}>Toggle me</Checkbox>
      <span>Checked: {String(checked)}</span>
    </div>
  );
};
