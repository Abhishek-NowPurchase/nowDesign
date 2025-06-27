import React from 'react';
import scale from '../scale/scale.json';

function extractTokens(obj, prefix = '') {
  let tokens = [];
  for (const key in obj) {
    const value = obj[key];
    if (value && typeof value === 'object') {
      if (typeof value.value !== 'undefined') {
        tokens.push({ name: prefix + key, value: value.value });
      } else {
        tokens = tokens.concat(extractTokens(value, prefix + key + '.'));
      }
    }
  }
  return tokens;
}

const spacingTokens = extractTokens(scale);

export default {
  title: 'Tokens/Spacing',
};

export const SpacingScale = () => (
  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24 }}>
    {spacingTokens.map(({ name, value }) => (
      <div key={name} style={{ textAlign: 'center' }}>
        <div style={{ width: value * 2, height: 24, background: '#eee', border: '1px solid #ccc', margin: '0 auto' }} />
        <div style={{ marginTop: 8, fontSize: 12 }}>{name}</div>
        <div style={{ fontSize: 10, color: '#888' }}>{value}px</div>
      </div>
    ))}
  </div>
); 