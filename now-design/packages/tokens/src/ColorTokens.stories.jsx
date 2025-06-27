import React from 'react';
import brand from '../color/brand.json';
import alias from '../color/alias.json';
// import effect from '../color/effect-styles.json'; // skip effects for now

// Recursively extract color tokens with a value property that looks like a color
function extractColors(obj, prefix = '') {
  let colors = [];
  for (const key in obj) {
    const value = obj[key];
    if (value && typeof value === 'object') {
      if (typeof value.value === 'string' && value.value.match(/^#|rgba?\(|hsla?\(/)) {
        colors.push({ name: prefix + key, value: value.value });
      } else {
        colors = colors.concat(extractColors(value, prefix + key + '.'));
      }
    }
  }
  return colors;
}

const colorTokens = [
  ...extractColors(brand),
  ...extractColors(alias),
  // ...extractColors(effect), // skip for now
];

export default {
  title: 'Tokens/Colors',
};

export const AllColors = () => (
  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24 }}>
    {colorTokens.map(({ name, value }) => (
      <div key={name} style={{ textAlign: 'center' }}>
        <div style={{ width: 64, height: 64, background: value, border: '1px solid #eee', borderRadius: 8 }} />
        <div style={{ marginTop: 8, fontSize: 12 }}>{name}</div>
        <div style={{ fontSize: 10, color: '#888' }}>{value}</div>
      </div>
    ))}
  </div>
); 