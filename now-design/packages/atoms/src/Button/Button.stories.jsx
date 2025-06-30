import React from 'react';
import Button from './Button';

export default {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component: 'A simple Button component that uses design tokens for styling and responsiveness.'
      }
    }
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'success', 'danger'],
      description: 'Button variant'
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Button size'
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disabled state'
    }
  }
};

// Default story
export const Default = {
  args: {
    children: 'Click me',
    variant: 'primary',
    size: 'medium'
  }
};

// Variants story
export const Variants = () => (
  <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
    <Button variant="primary">Primary</Button>
    <Button variant="secondary">Secondary</Button>
    <Button variant="success">Success</Button>
    <Button variant="danger">Danger</Button>
  </div>
);

// Sizes story
export const Sizes = () => (
  <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
    <Button size="small">Small</Button>
    <Button size="medium">Medium</Button>
    <Button size="large">Large</Button>
  </div>
);

// States story
export const States = () => (
  <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
    <Button>Normal</Button>
    <Button disabled>Disabled</Button>
  </div>
);

// Responsive test story
export const ResponsiveTest = () => (
  <div style={{ padding: '20px' }}>
    <h3>Resize your browser to see responsive behavior</h3>
    <p>This button uses responsive tokens that change based on screen size:</p>
    <ul>
      <li><strong>Desktop:</strong> Larger padding and font size</li>
      <li><strong>Tablet (≤1024px):</strong> Medium padding</li>
      <li><strong>Mobile (≤600px):</strong> Smaller padding and font size</li>
    </ul>
    <div style={{ marginTop: '20px' }}>
      <Button size="large" variant="primary">
        Responsive Button
      </Button>
    </div>
  </div>
);

// Token demonstration story
export const TokenDemonstration = () => (
  <div style={{ padding: '20px' }}>
    <h3>Design Token Usage</h3>
    <p>This button demonstrates various design tokens:</p>
    <ul>
      <li><strong>Colors:</strong> Uses brand color tokens (--brand-blue-600, --brand-grey-100, etc.)</li>
      <li><strong>Spacing:</strong> Uses responsive spacing tokens (--gap-spacing-300-desktop, etc.)</li>
      <li><strong>Typography:</strong> Uses font family and weight tokens (--font-family-body, --font-weight-medium)</li>
      <li><strong>Border Radius:</strong> Uses border radius tokens (--border-corner-radius-m)</li>
    </ul>
    <div style={{ marginTop: '20px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <Button variant="primary" size="medium">Primary Token Button</Button>
      <Button variant="secondary" size="medium">Secondary Token Button</Button>
    </div>
  </div>
); 