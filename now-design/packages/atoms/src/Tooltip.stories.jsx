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
};
Playground.parameters = {
  docs: {
    description: {
      story: 'Hover over the icon to reveal the tooltip text. Icon is above and outside the text area.'
    }
  }
};

export const AllVariants = () => (
  <div style={{ background: '#fff', padding: 64, minHeight: 400, display: 'flex', gap: 48 }}>
    <Tooltip variant="information">Information Tooltip</Tooltip>
    <Tooltip variant="error">Error Tooltip</Tooltip>
    <Tooltip variant="warning">Warning Tooltip</Tooltip>
  </div>
);
AllVariants.parameters = {
  docs: {
    description: {
      story: 'Hover over each icon to see the tooltip text appear below the icon.'
    }
  }
}; 