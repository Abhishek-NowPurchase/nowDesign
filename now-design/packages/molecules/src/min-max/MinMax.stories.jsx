import React, { useState } from 'react';
import MinMax from './MinMax';

export default {
  title: 'Molecules/MinMax',
  component: MinMax,
};

export const Default = () => {
  const [value, setValue] = useState({ min: '', max: '' });
  return (
    <div style={{ width: 420 }}>
      <MinMax id="range" label="Range" value={value} onChange={setValue} required info="Enter a min and max" />
    </div>
  );
};

export const WithDomain = () => {
  const [value, setValue] = useState({ min: 5, max: 10 });
  return (
    <div style={{ width: 420 }}>
      <MinMax id="domain" label="Domain-limited" value={value} onChange={setValue} domain={{ min: 0, max: 100 }} />
    </div>
  );
};
