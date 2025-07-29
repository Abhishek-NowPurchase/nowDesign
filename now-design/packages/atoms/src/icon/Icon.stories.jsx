import React from 'react';
import Icon from './Icon';
import { SystemAddFill, WeatherSunLine } from 'now-design-icons';

export default {
  title: 'Atoms/Icon',
  component: Icon,
  parameters: {
    docs: {
      description: {
        component: 'A universal icon atom supporting tokens, accessibility, and all icon use cases. Now supports both token names and direct values for size and color.'
      }
    }
  },
  argTypes: {
    icon: { control: false, description: 'Icon component to render (required)' },
    color: { control: 'text', description: 'Token name or direct color value (e.g., icon-primary, #FF0000, rgb(255,0,0))' },
    size: { control: 'text', description: 'Token name or direct size value (e.g., icon-md, 24, 32px)' },
    ariaLabel: { control: 'text', description: 'Accessibility label for screen readers' },
    title: { control: 'text', description: 'Tooltip or accessible title' },
    className: { control: 'text' },
    style: { control: 'object' },
    onClick: { action: 'clicked' },
    tabIndex: { control: 'number' },
    role: { control: 'text' },
    spin: { control: 'boolean' },
    disabled: { control: 'boolean' },
    direction: { control: 'select', options: ['up', 'right', 'down', 'left', undefined] },
    strokeWidth: { control: 'text' },
    fill: { control: 'text' },
    focusable: { control: 'boolean' },
  },
};

const Template = (args) => <Icon {...args} />;

export const Default = Template.bind({});
Default.args = {
  icon: SystemAddFill,
  color: 'icon-primary',
  size: 'icon-md',
  ariaLabel: 'Add',
};

export const AllDirections = () => (
  <div style={{ display: 'flex', gap: 24 }}>
    <Icon icon={WeatherSunLine} direction="up" ariaLabel="Up" />
    <Icon icon={WeatherSunLine} direction="right" ariaLabel="Right" />
    <Icon icon={WeatherSunLine} direction="down" ariaLabel="Down" />
    <Icon icon={WeatherSunLine} direction="left" ariaLabel="Left" />
  </div>
);

export const Spinning = Template.bind({});
Spinning.args = {
  icon: SystemAddFill,
  spin: true,
  ariaLabel: 'Loading',
};

export const Disabled = Template.bind({});
Disabled.args = {
  icon: SystemAddFill,
  disabled: true,
  ariaLabel: 'Disabled',
};

export const CustomSizeColor = Template.bind({});
CustomSizeColor.args = {
  icon: SystemAddFill,
  color: 'icon-danger',
  size: '32px',
  ariaLabel: 'Danger',
};

export const DirectValues = () => (
  <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
    <Icon icon={SystemAddFill} size={16} color="#FF0000" ariaLabel="Small red" />
    <Icon icon={SystemAddFill} size={24} color="rgb(0,255,0)" ariaLabel="Medium green" />
    <Icon icon={SystemAddFill} size={32} color="#0000FF" ariaLabel="Large blue" />
    <Icon icon={SystemAddFill} size={48} color="hsl(60,100%,50%)" ariaLabel="Extra large yellow" />
  </div>
);

export const MixedUsage = () => (
  <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
    <Icon icon={WeatherSunLine} size="icon-sm" color="icon-primary" ariaLabel="Token size and color" />
    <Icon icon={WeatherSunLine} size={20} color="icon-success" ariaLabel="Direct size, token color" />
    <Icon icon={WeatherSunLine} size="24px" color="#FF6B35" ariaLabel="Direct size and color" />
    <Icon icon={WeatherSunLine} size="icon-lg" color="#8B5CF6" ariaLabel="Token size, direct color" />
  </div>
); 