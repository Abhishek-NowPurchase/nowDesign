import React, { useState } from 'react';
import Radio from './Radio';

export default {
  title: 'Atoms/Radio',
  component: Radio,
};

export const Default = () => {
  const [value, setValue] = useState('a');
  return (
    <div style={{ display: 'grid', gap: 12 }}>
      <Radio name="demo" value="a" checked={value==='a'} onChange={()=>setValue('a')} label="Option A" />
      <Radio name="demo" value="b" checked={value==='b'} onChange={()=>setValue('b')} label="Option B" />
      <Radio name="demo" value="c" checked={value==='c'} onChange={()=>setValue('c')} label="Option C" />
    </div>
  );
};

export const Sizes = () => (
  <div style={{ display: 'flex', gap: 16 }}>
    <Radio name="sizes" value="s" size="s" label="Small" />
    <Radio name="sizes" value="m" size="m" label="Medium" />
    <Radio name="sizes" value="l" size="l" label="Large" />
  </div>
);

export const Disabled = () => (
  <div style={{ display: 'grid', gap: 12 }}>
    <Radio name="d" value="1" disabled label="Disabled" />
    <Radio name="d" value="2" readOnly label="Read-only" />
  </div>
);


