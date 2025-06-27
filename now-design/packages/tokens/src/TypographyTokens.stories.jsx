import React from 'react';
import fontFamilies from '../typography/font-families.json';
import fontSizes from '../typography/font-sizes.json';
import fontWeights from '../typography/font-weights.json';

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

const families = extractTokens(fontFamilies);
const sizes = extractTokens(fontSizes);
const weights = extractTokens(fontWeights);

export default {
  title: 'Tokens/Typography',
};

export const FontFamilies = () => (
  <div>
    {families.map(({ name, value }) => (
      <div key={name} style={{ fontFamily: value, fontSize: 24, marginBottom: 16 }}>
        {name}: <span style={{ fontFamily: value }}>{value}</span>
      </div>
    ))}
  </div>
);

export const FontSizes = () => (
  <div>
    {sizes.map(({ name, value }) => (
      <div key={name} style={{ fontSize: value, marginBottom: 16 }}>
        {name}: <span style={{ fontSize: value }}>{value}px</span>
      </div>
    ))}
  </div>
);

export const FontWeights = () => (
  <div>
    {weights.map(({ name, value }) => (
      <div key={name} style={{ fontWeight: value, fontSize: 24, marginBottom: 16 }}>
        {name}: <span style={{ fontWeight: value }}>{value}</span>
      </div>
    ))}
  </div>
); 