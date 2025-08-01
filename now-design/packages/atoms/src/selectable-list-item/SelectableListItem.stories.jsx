import React, { useState } from 'react';
import SelectableListItem from './SelectableListItem';
import { SystemAddFill, MetalcloudMeltingFurnaceLine, ArrowsArrowDownSLine } from 'now-design-icons';

export default {
  title: 'Atoms/SelectableListItem',
  component: SelectableListItem,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A selectable list item component that can be used in navigation menus, dropdowns, and other interactive lists.'
      }
    }
  },
  argTypes: {
    id: {
      control: { type: 'text' },
      description: 'Unique identifier for the item'
    },
    label: {
      control: { type: 'text' },
      description: 'Text label for the item'
    },
    icon: {
      control: { type: 'select' },
      options: ['SystemAddFill', 'MetalcloudMeltingFurnaceLine', 'ArrowsArrowDownSLine'],
      mapping: {
        SystemAddFill,
        MetalcloudMeltingFurnaceLine,
        ArrowsArrowDownSLine
      },
      description: 'Icon to display with the item'
    },
    selected: {
      control: { type: 'boolean' },
      description: 'Whether the item is selected'
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the item is disabled'
    },
    onClick: {
      action: 'clicked',
      description: 'Callback when item is clicked'
    },
    className: {
      control: { type: 'text' },
      description: 'Additional CSS classes'
    }
  }
};

const Template = (args) => <SelectableListItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: 'item-1',
  label: 'Default Item',
  icon: SystemAddFill,
  selected: false,
  disabled: false
};

export const Selected = Template.bind({});
Selected.args = {
  id: 'item-2',
  label: 'Selected Item',
  icon: SystemAddFill,
  selected: true,
  disabled: false
};

export const Disabled = Template.bind({});
Disabled.args = {
  id: 'item-3',
  label: 'Disabled Item',
  icon: SystemAddFill,
  selected: false,
  disabled: true
};

export const WithoutIcon = Template.bind({});
WithoutIcon.args = {
  id: 'item-4',
  label: 'Item without icon',
  selected: false,
  disabled: false
};

export const Interactive = () => {
  const [selectedId, setSelectedId] = useState('item-1');
  
  const items = [
    { id: 'item-1', label: 'First Item', icon: SystemAddFill },
    { id: 'item-2', label: 'Second Item', icon: MetalcloudMeltingFurnaceLine },
    { id: 'item-3', label: 'Third Item', icon: ArrowsArrowDownSLine },
    { id: 'item-4', label: 'Disabled Item', icon: SystemAddFill, disabled: true }
  ];

  const handleItemClick = (id) => {
    if (!items.find(item => item.id === id)?.disabled) {
      setSelectedId(id);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', minWidth: '300px' }}>
      {items.map((item) => (
        <SelectableListItem
          key={item.id}
          id={item.id}
          label={item.label}
          icon={item.icon}
          selected={selectedId === item.id}
          disabled={item.disabled}
          onClick={handleItemClick}
        />
      ))}
    </div>
  );
};

export const DifferentIcons = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', minWidth: '300px' }}>
    <SelectableListItem
      id="icon-1"
      label="Add Item"
      icon={SystemAddFill}
      selected={false}
    />
    <SelectableListItem
      id="icon-2"
      label="Melting Furnace"
      icon={MetalcloudMeltingFurnaceLine}
      selected={true}
    />
    <SelectableListItem
      id="icon-3"
      label="Arrow Down"
      icon={ArrowsArrowDownSLine}
      selected={false}
    />
    <SelectableListItem
      id="icon-4"
      label="No Icon"
      selected={false}
    />
  </div>
);

export const States = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', minWidth: '300px' }}>
    <SelectableListItem
      id="normal"
      label="Normal State"
      icon={SystemAddFill}
      selected={false}
      disabled={false}
    />
    <SelectableListItem
      id="selected"
      label="Selected State"
      icon={SystemAddFill}
      selected={true}
      disabled={false}
    />
    <SelectableListItem
      id="disabled"
      label="Disabled State"
      icon={SystemAddFill}
      selected={false}
      disabled={true}
    />
    <SelectableListItem
      id="selected-disabled"
      label="Selected & Disabled"
      icon={SystemAddFill}
      selected={true}
      disabled={true}
    />
  </div>
);

export const LongLabels = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', minWidth: '400px' }}>
    <SelectableListItem
      id="long-1"
      label="This is a very long label that might wrap to multiple lines in the component"
      icon={SystemAddFill}
      selected={false}
    />
    <SelectableListItem
      id="long-2"
      label="Another long label with different content to test text wrapping behavior"
      icon={MetalcloudMeltingFurnaceLine}
      selected={true}
    />
    <SelectableListItem
      id="long-3"
      label="Short label"
      icon={ArrowsArrowDownSLine}
      selected={false}
    />
  </div>
); 