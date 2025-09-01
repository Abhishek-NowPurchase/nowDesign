import React, { useState } from 'react';
import RadioGroup from './RadioGroup';

export default {
  title: 'Molecules/RadioGroup',
  component: RadioGroup,
};

export const Default = () => {
  const [val, setVal] = useState('a');
  return (
    <RadioGroup
      id="choices"
      label="Pick one"
      value={val}
      onChange={setVal}
      options={[
        { value: 'a', label: 'Alpha' },
        { value: 'b', label: 'Bravo' },
        { value: 'c', label: 'Charlie' },
      ]}
    />
  );
};

export const HorizontalWrap = () => {
  const [val, setVal] = useState('1');
  return (
    <RadioGroup
      id="nums"
      label="Numbers"
      orientation="horizontal"
      wrap
      value={val}
      onChange={setVal}
      options={Array.from({ length: 8 }, (_, i) => ({ value: String(i + 1), label: `Option ${i + 1}` }))}
    />
  );
};
