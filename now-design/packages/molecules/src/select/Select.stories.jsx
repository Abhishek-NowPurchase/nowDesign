import React, { useState } from 'react';
import Select from './Select';

export default {
  title: 'Molecules/Select',
  component: Select,
};

const options = [
  { value: 'apple', label: 'Apple', description: 'A fruit' },
  { value: 'banana', label: 'Banana', description: 'Yellow fruit' },
  { value: 'carrot', label: 'Carrot', description: 'Orange veggie' },
  { value: 'dates', label: 'Dates', description: 'Sweet and chewy' },
];

export const Default = () => {
  const [value, setValue] = useState(null);
  return (
    <div style={{ width: 320 }}>
      <Select id="fruit" label="Fruit" value={value} onChange={setValue} options={options} />
    </div>
  );
};

export const SearchInPanel = () => {
  const [value, setValue] = useState(null);
  return (
    <div style={{ width: 320 }}>
      <Select id="fruit2" label="Fruit (panel search)" value={value} onChange={setValue} options={options} searchInPanel />
    </div>
  );
};
