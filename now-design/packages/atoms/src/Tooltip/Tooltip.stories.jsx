import React from 'react';
import Tooltip from './Tooltip';

export default {
  title: 'Atoms/Tooltip',
  component: Tooltip,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'information', 'error', 'warning'],
      defaultValue: 'information',
    },
    children: { control: 'text', defaultValue: 'Enter Tooltip Text' },
    size: { control: 'object', defaultValue: { width: 200, maxWidth: 240 } },
  },
};

export const Playground = (args) => (
  <div style={{ background: '#fff', padding: 64, minHeight: 300, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <Tooltip {...args} />
  </div>
);
Playground.args = {
  variant: 'information',
  children: 'Enter Tooltip Text',
  size: { width: 200, maxWidth: 240 },
};
Playground.parameters = {
  docs: {
    description: {
      story: 'Hover over the icon to reveal the tooltip text. Icon is above, text is below. Use the size prop to adjust width, height, maxWidth, maxHeight.'
    }
  }
};

export const AllVariants = () => (
  <div style={{ background: '#fff', padding: 64, minHeight: 400, display: 'flex', gap: 48 }}>
    <Tooltip variant="information" size={{ width: 160, maxWidth: 180 }}>Information Tooltip</Tooltip>
    <Tooltip variant="error" size={{ width: 200, maxWidth: 220 }}>Error Tooltip</Tooltip>
    <Tooltip variant="warning" size={{ width: 240, maxWidth: 260 }}>Warning Tooltip</Tooltip>
  </div>
);
AllVariants.parameters = {
  docs: {
    description: {
      story: 'Hover over each icon to see the tooltip text appear. Each tooltip has a different size.'
    }
  }
}; 