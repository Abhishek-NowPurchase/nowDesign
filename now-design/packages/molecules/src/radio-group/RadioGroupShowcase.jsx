import React, { useState } from 'react';
import RadioGroup from './RadioGroup';

const RadioGroupShowcase = () => {
  const [shipping, setShipping] = useState('standard');
  const [color, setColor] = useState('red');

  return (
    <div style={{ padding: 16 }}>
      <h2>Radio Group</h2>

      <div style={{ display: 'grid', gap: 16 }}>
        <div>
          <h4>Vertical (default)</h4>
          <RadioGroup
            id="rg-1"
            label="Shipping speed"
            value={shipping}
            onChange={setShipping}
            helperText="Choose one"
            options={[
              { value: 'standard', label: 'Standard (3–5 days)' },
              { value: 'express', label: 'Express (1–2 days)' },
              { value: 'overnight', label: 'Overnight', disabled: false },
            ]}
          />
        </div>

        <div>
          <h4>Horizontal, wrapped</h4>
          <RadioGroup
            id="rg-2"
            label="Color"
            value={color}
            onChange={setColor}
            orientation="horizontal"
            wrap
            options={[
              { value: 'red', label: 'Red' },
              { value: 'green', label: 'Green' },
              { value: 'blue', label: 'Blue' },
              { value: 'yellow', label: 'Yellow' },
              { value: 'purple', label: 'Purple' },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default RadioGroupShowcase;


