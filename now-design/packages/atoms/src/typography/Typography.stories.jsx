import React from 'react';
import Typography from './Typography';

export default {
  title: 'Atoms/Typography',
  component: Typography,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Typography component that provides consistent text styling using design tokens.'
      }
    }
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'body', 'body-sm', 'body-lg', 'caption', 'overline'],
      description: 'Typography variant to apply'
    },
    children: {
      control: { type: 'text' },
      description: 'Text content to display'
    },
    color: {
      control: { type: 'color' },
      description: 'Text color'
    },
    align: {
      control: { type: 'select' },
      options: ['left', 'center', 'right', 'justify'],
      description: 'Text alignment'
    },
    weight: {
      control: { type: 'select' },
      options: ['normal', 'bold', 'lighter', 'bolder'],
      description: 'Font weight'
    },
    className: {
      control: { type: 'text' },
      description: 'Additional CSS classes'
    }
  }
};

const Template = (args) => <Typography {...args} />;

export const Default = Template.bind({});
Default.args = {
  variant: 'body',
  children: 'This is default typography text'
};

export const AllVariants = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', textAlign: 'left' }}>
    <Typography variant="h1">Heading 1 - Main Title</Typography>
    <Typography variant="h2">Heading 2 - Section Title</Typography>
    <Typography variant="h3">Heading 3 - Subsection Title</Typography>
    <Typography variant="h4">Heading 4 - Minor Title</Typography>
    <Typography variant="h5">Heading 5 - Small Title</Typography>
    <Typography variant="h6">Heading 6 - Tiny Title</Typography>
    <Typography variant="body-lg">Body Large - Important content</Typography>
    <Typography variant="body">Body - Regular content</Typography>
    <Typography variant="body-sm">Body Small - Secondary content</Typography>
    <Typography variant="caption">Caption - Supporting text</Typography>
    <Typography variant="overline">Overline - Small labels</Typography>
  </div>
);

export const Colors = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
    <Typography variant="h3" color="#FF0000">Red Text</Typography>
    <Typography variant="h3" color="#00FF00">Green Text</Typography>
    <Typography variant="h3" color="#0000FF">Blue Text</Typography>
    <Typography variant="h3" color="#FFA500">Orange Text</Typography>
    <Typography variant="h3" color="#800080">Purple Text</Typography>
  </div>
);

export const Alignment = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%' }}>
    <Typography variant="h3" align="left">Left Aligned Text</Typography>
    <Typography variant="h3" align="center">Center Aligned Text</Typography>
    <Typography variant="h3" align="right">Right Aligned Text</Typography>
    <Typography variant="body" align="justify">
      Justified text that spreads across the full width of the container. This creates a clean, aligned appearance on both sides of the text block.
    </Typography>
  </div>
);

export const FontWeights = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
    <Typography variant="body" weight="normal">Normal Weight Text</Typography>
    <Typography variant="body" weight="bold">Bold Weight Text</Typography>
    <Typography variant="body" weight="lighter">Lighter Weight Text</Typography>
    <Typography variant="body" weight="bolder">Bolder Weight Text</Typography>
  </div>
);

export const Interactive = Template.bind({});
Interactive.args = {
  variant: 'body',
  children: 'Interactive typography - use controls below to change properties',
  color: '#333333',
  align: 'left',
  weight: 'normal'
};

export const LongText = () => (
  <div style={{ maxWidth: '600px' }}>
    <Typography variant="h2" align="center" style={{ marginBottom: '16px' }}>
      Article Title
    </Typography>
    <Typography variant="body" align="justify" style={{ marginBottom: '16px' }}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </Typography>
    <Typography variant="body" align="justify" style={{ marginBottom: '16px' }}>
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </Typography>
    <Typography variant="caption" align="center" color="#666666">
      Published on July 31, 2024
    </Typography>
  </div>
); 