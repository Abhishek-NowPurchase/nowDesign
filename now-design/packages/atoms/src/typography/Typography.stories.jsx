import React from 'react';
import Typography from './Typography';

export default {
  title: 'Atoms/Typography',
  component: Typography,
  parameters: {
    docs: {
      description: {
        component: 'A universal text atom for all text, label, heading, and caption needs. Token-driven and accessible. Now uses direct className for variant styling.'
      }
    }
  },
  argTypes: {
    className: { control: 'text', description: 'CSS class for typography variant (e.g., bold-h5, regular-bodyMedium)' },
    color: { control: 'text', description: 'Token name for color (e.g., text-primary)' },
    as: { control: 'text', description: 'HTML tag to render (e.g., span, label, h1)' },
    align: { control: 'select', options: ['left', 'center', 'right', 'justify'] },
    truncate: { control: 'boolean', description: 'Single-line ellipsis for overflow' },
    style: { control: 'object' },
    children: { control: 'text' },
  },
};

const Template = (args) => <Typography {...args} />;

export const BoldH5 = Template.bind({});
BoldH5.args = {
  className: 'bold-h5',
  children: 'Heading 5 Bold',
};

export const RegularBodyMedium = Template.bind({});
RegularBodyMedium.args = {
  className: 'regular-bodyMedium',
  children: 'Regular body medium text',
  color: 'text-secondary',
  align: 'center',
};

export const TruncatedCustom = Template.bind({});
TruncatedCustom.args = {
  className: 'bold-h3',
  children: 'This is a long H3 that will be truncated and custom styled.',
  truncate: true,
  style: { letterSpacing: '2px' },
};

export const AllAlignments = () => (
  <>
    <Typography className="bold-h6" align="left">Left aligned</Typography>
    <Typography className="bold-h6" align="center">Center aligned</Typography>
    <Typography className="bold-h6" align="right">Right aligned</Typography>
    <Typography className="bold-h6" align="justify">Justified text for demonstration purposes only.</Typography>
  </>
); 