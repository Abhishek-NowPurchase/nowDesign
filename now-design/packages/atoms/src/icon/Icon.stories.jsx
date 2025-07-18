import React from 'react';
import Icon from './Icon';
import { SystemAddFill, WeatherSunLine } from 'now-design-icons';

export default {
  title: 'Atoms/Icon',
  component: Icon,
  parameters: {
    docs: {
      description: {
        component: 'A universal icon atom supporting tokens, accessibility, and all icon use cases.'
      }
    }
  },
  argTypes: {
    icon: { control: false, description: 'Icon component to render (required)' },
    color: { control: 'text', description: 'Token name for color (e.g., icon-primary)' },
    size: { control: 'text', description: 'Token name or value for size (e.g., icon-md, 24)' },
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