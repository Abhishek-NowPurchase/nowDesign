import React from 'react';
import Button from './Button';
import SystemExportLine from '@now-design/icons/src/react/now-design/packages/icons/raw/SystemExportLine';

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'transparent'],
      defaultValue: 'primary',
    },
    state: {
      control: { type: 'select' },
      options: ['default', 'hover', 'disabled', 'focus', 'error', 'success'],
      defaultValue: 'default',
    },
    iconLeft: { control: false },
    iconRight: { control: false },
    children: { control: 'text', defaultValue: 'Button' },
    disabled: { control: 'boolean', defaultValue: false },
  },
};

const states = ['default', 'hover', 'disabled', 'focus', 'error', 'success'];
const variants = ['primary', 'secondary', 'transparent'];

const icon = <SystemExportLine />;

export const AllVariants = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
    {variants.map(variant => (
      <div key={variant} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <div style={{ width: 100, textAlign: 'right', marginRight: 16 }}>{variant}</div>
        {states.map(state => (
          <Button
            key={state}
            variant={variant}
            state={state}
            iconLeft={icon}
            iconRight={icon}
            disabled={state === 'disabled'}
            style={{ margin: 4 }}
          >
            Button
          </Button>
        ))}
      </div>
    ))}
  </div>
);

export const IconOnly = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
    {variants.map(variant => (
      <div key={variant} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <div style={{ width: 100, textAlign: 'right', marginRight: 16 }}>{variant}</div>
        {states.map(state => (
          <Button
            key={state}
            variant={variant}
            state={state}
            iconLeft={icon}
            disabled={state === 'disabled'}
            style={{ margin: 4 }}
          />
        ))}
      </div>
    ))}
  </div>
);

const Template = (args) => <Button {...args} />;

export const Playground = Template.bind({});
Playground.args = {
  children: 'Button',
  variant: 'primary',
  state: 'default',
  iconLeft: icon,
  iconRight: icon,
  disabled: false,
}; 