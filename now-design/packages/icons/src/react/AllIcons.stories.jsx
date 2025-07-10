// This story is temporarily disabled to fix Storybook build issues with missing icon files.
// Remove or fix the import of missing icon files before re-enabling.

import React from 'react';
import * as Icons from './index';

export default {
  title: 'Icons/All',
};

export const AllIcons = () => {
  const iconNames = Object.keys(Icons).sort();
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, 80px)', gap: 24 }}>
      {iconNames.map((name) => {
        const Icon = Icons[name];
        return (
          <div key={name} style={{ textAlign: 'center', fontSize: 12 }}>
            <Icon width={32} height={32} />
            <div style={{ marginTop: 8 }}>{name}</div>
          </div>
        );
      })}
    </div>
  );
}; 