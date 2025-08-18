import React from 'react';
import { Button } from './Button';

export default {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component: 'A flexible and accessible button component with multiple variants, states, and interactive behaviors.'
      }
    }
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'transparent'],
      description: 'Button visual variant'
    },
    state: {
      control: { type: 'select' },
      options: ['default', 'error', 'success'],
      description: 'Button semantic state'
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether button is disabled'
    },
    children: {
      control: { type: 'text' },
      description: 'Button text content'
    }
  }
};

// Template for interactive stories
const Template = (args) => <Button {...args} />;

// Basic button stories
export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  children: 'Primary Button'
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  children: 'Secondary Button'
};

export const Transparent = Template.bind({});
Transparent.args = {
  variant: 'transparent',
  children: 'Transparent Button'
};

// State variations
export const Error = Template.bind({});
Error.args = {
  variant: 'primary',
  state: 'error',
  children: 'Error Button'
};

export const Success = Template.bind({});
Success.args = {
  variant: 'primary',
  state: 'success',
  children: 'Success Button'
};

export const Disabled = Template.bind({});
Disabled.args = {
  variant: 'primary',
  disabled: true,
  children: 'Disabled Button'
};

// Icon examples - temporarily disabled due to Storybook displayName issue
// export const WithLeftIcon = Template.bind({});
// WithLeftIcon.args = {
//   variant: 'primary',
//   leftIcon: '←',
//   children: 'Back'
// };

// export const WithRightIcon = Template.bind({});
// WithRightIcon.args = {
//   variant: 'primary',
//   rightIcon: '→',
//   children: 'Next'
// };

// export const WithBothIcons = Template.bind({});
// WithBothIcons.args = {
//   variant: 'primary',
//   leftIcon: '📁',
//   rightIcon: '→',
//   children: 'Open File'
// };

// All variants showcase
export const AllVariants = () => (
  <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
    <Button variant="primary">Primary</Button>
    <Button variant="secondary">Secondary</Button>
    <Button variant="transparent">Transparent</Button>
  </div>
);

// All states showcase
export const AllStates = () => (
  <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
    <Button variant="primary" state="default">Default</Button>
    <Button variant="primary" state="error">Error</Button>
    <Button variant="primary" state="success">Success</Button>
    <Button variant="primary" disabled>Disabled</Button>
  </div>
);

// Interactive states showcase
export const InteractiveStates = () => (
  <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
    <Button variant="primary">Hover me</Button>
    <Button variant="secondary">Focus me</Button>
    <Button variant="transparent">Click me</Button>
  </div>
);

InteractiveStates.parameters = {
  docs: {
    description: {
      story: 'Try hovering, focusing (Tab key), and clicking these buttons to see the interactive states.'
    }
  }
};
