import React, { useState } from 'react';
import SelectableListItem from './SelectableListItem';

export default {
  title: 'Atoms/SelectableListItem',
  component: SelectableListItem,
  parameters: {
    docs: {
      description: {
        component: 'SelectableListItem atom: icon + label + selection indicator, single select action, token-driven and accessible.'
      }
    }
  },
  argTypes: {
    icon: { control: 'text', description: 'Icon name (from now-design-icons)' },
    label: { control: 'text', description: 'Item label' },
    selected: { control: 'boolean', description: 'Is selected?' },
    disabled: { control: 'boolean', description: 'Is disabled?' },
    onSelect: { action: 'selected', description: 'Select handler' },
  },
};

const Template = (args) => <SelectableListItem {...args} />;

export const Unselected = Template.bind({});
Unselected.args = {
  icon: 'User',
  label: 'Item Name',
  selected: false,
};

export const Selected = Template.bind({});
Selected.args = {
  icon: 'User',
  label: 'Item Name',
  selected: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  icon: 'User',
  label: 'Item Name',
  selected: false,
  disabled: true,
};

export const Interactive = () => {
  const [selected, setSelected] = useState(false);
  return (
    <SelectableListItem
      icon="User"
      label="Interactive Item"
      selected={selected}
      onSelect={() => setSelected((prev) => !prev)}
    />
  );
}; 