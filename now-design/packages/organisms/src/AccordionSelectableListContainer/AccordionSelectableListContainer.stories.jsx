import React, { useState } from 'react';
import AccordionSelectableListContainer from './AccordionSelectableListContainer';
import { 
  MetalcloudMeltingFurnaceLine, 
  SystemAddFill, 
  ArrowsArrowDownSLine,
  WeatherSunLine,
  UserLine,
  SettingsLine,
  FileTextLine
} from 'now-design-icons';

export default {
  title: 'Organisms/AccordionSelectableListContainer',
  component: AccordionSelectableListContainer,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'An organism component that manages multiple AccordionSelectableList components with state management and selection handling.'
      }
    }
  },
  argTypes: {
    accordionData: {
      control: { type: 'object' },
      description: 'Array of accordion configurations'
    },
    selectedItemId: {
      control: { type: 'text' },
      description: 'ID of the currently selected item across all accordions'
    },
    onItemSelect: {
      action: 'itemSelected',
      description: 'Callback when any item is selected'
    },
    allowMultipleSelection: {
      control: { type: 'boolean' },
      description: 'Whether multiple items can be selected simultaneously'
    },
    className: {
      control: { type: 'text' },
      description: 'Additional CSS classes'
    }
  }
};

const Template = (args) => <AccordionSelectableListContainer {...args} />;

const sampleAccordionData = [
  {
    id: 'production',
    triggerLabel: 'Production',
    triggerIcon: MetalcloudMeltingFurnaceLine,
    items: [
      { id: 'melting-furnace', label: 'Melting Furnace', icon: MetalcloudMeltingFurnaceLine },
      { id: 'casting-line', label: 'Casting Line', icon: SystemAddFill },
      { id: 'quality-check', label: 'Quality Check', icon: WeatherSunLine }
    ]
  },
  {
    id: 'management',
    triggerLabel: 'Management',
    triggerIcon: UserLine,
    items: [
      { id: 'user-management', label: 'User Management', icon: UserLine },
      { id: 'settings', label: 'Settings', icon: SettingsLine },
      { id: 'reports', label: 'Reports', icon: FileTextLine }
    ]
  },
  {
    id: 'system',
    triggerLabel: 'System',
    triggerIcon: SystemAddFill,
    items: [
      { id: 'configuration', label: 'Configuration', icon: SystemAddFill },
      { id: 'maintenance', label: 'Maintenance', icon: MetalcloudMeltingFurnaceLine },
      { id: 'backup', label: 'Backup', icon: WeatherSunLine }
    ]
  }
];

export const Default = Template.bind({});
Default.args = {
  accordionData: sampleAccordionData,
  selectedItemId: null,
  allowMultipleSelection: false
};

export const WithSelectedItem = Template.bind({});
WithSelectedItem.args = {
  accordionData: sampleAccordionData,
  selectedItemId: 'melting-furnace',
  allowMultipleSelection: false
};

export const MultipleSelection = Template.bind({});
MultipleSelection.args = {
  accordionData: sampleAccordionData,
  selectedItemId: null,
  allowMultipleSelection: true
};

export const Interactive = () => {
  const [selectedItemId, setSelectedItemId] = useState(null);
  
  const handleItemSelect = (itemId) => {
    setSelectedItemId(itemId);
  };

  return (
    <div style={{ minWidth: '300px' }}>
      <AccordionSelectableListContainer
        accordionData={sampleAccordionData}
        selectedItemId={selectedItemId}
        onItemSelect={handleItemSelect}
        allowMultipleSelection={false}
      />
      <div style={{ marginTop: '16px', padding: '12px', backgroundColor: '#f5f5f5', borderRadius: '4px' }}>
        <p><strong>Selected Item:</strong> {selectedItemId || 'None'}</p>
      </div>
    </div>
  );
};

export const MultipleSelectionInteractive = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  
  const handleItemSelect = (itemId) => {
    setSelectedItems(prev => {
      if (prev.includes(itemId)) {
        return prev.filter(id => id !== itemId);
      } else {
        return [...prev, itemId];
      }
    });
  };

  return (
    <div style={{ minWidth: '300px' }}>
      <AccordionSelectableListContainer
        accordionData={sampleAccordionData}
        selectedItemId={selectedItems}
        onItemSelect={handleItemSelect}
        allowMultipleSelection={true}
      />
      <div style={{ marginTop: '16px', padding: '12px', backgroundColor: '#f5f5f5', borderRadius: '4px' }}>
        <p><strong>Selected Items:</strong> {selectedItems.length > 0 ? selectedItems.join(', ') : 'None'}</p>
      </div>
    </div>
  );
};

export const ComplexData = () => {
  const complexAccordionData = [
    {
      id: 'manufacturing',
      triggerLabel: 'Manufacturing',
      triggerIcon: MetalcloudMeltingFurnaceLine,
      items: [
        { id: 'furnace-1', label: 'Furnace Line 1', icon: MetalcloudMeltingFurnaceLine },
        { id: 'furnace-2', label: 'Furnace Line 2', icon: MetalcloudMeltingFurnaceLine },
        { id: 'casting-1', label: 'Casting Unit 1', icon: SystemAddFill },
        { id: 'casting-2', label: 'Casting Unit 2', icon: SystemAddFill },
        { id: 'quality-1', label: 'Quality Station 1', icon: WeatherSunLine },
        { id: 'quality-2', label: 'Quality Station 2', icon: WeatherSunLine }
      ]
    },
    {
      id: 'operations',
      triggerLabel: 'Operations',
      triggerIcon: UserLine,
      items: [
        { id: 'users', label: 'User Management', icon: UserLine },
        { id: 'roles', label: 'Role Management', icon: UserLine },
        { id: 'permissions', label: 'Permissions', icon: SettingsLine },
        { id: 'audit', label: 'Audit Logs', icon: FileTextLine }
      ]
    },
    {
      id: 'analytics',
      triggerLabel: 'Analytics',
      triggerIcon: FileTextLine,
      items: [
        { id: 'reports', label: 'Reports', icon: FileTextLine },
        { id: 'dashboards', label: 'Dashboards', icon: FileTextLine },
        { id: 'metrics', label: 'Metrics', icon: WeatherSunLine },
        { id: 'alerts', label: 'Alerts', icon: SystemAddFill }
      ]
    },
    {
      id: 'system',
      triggerLabel: 'System',
      triggerIcon: SystemAddFill,
      items: [
        { id: 'config', label: 'Configuration', icon: SystemAddFill },
        { id: 'maintenance', label: 'Maintenance', icon: MetalcloudMeltingFurnaceLine },
        { id: 'backup', label: 'Backup & Restore', icon: WeatherSunLine },
        { id: 'updates', label: 'System Updates', icon: SystemAddFill },
        { id: 'logs', label: 'System Logs', icon: FileTextLine }
      ]
    }
  ];

  return (
    <div style={{ minWidth: '350px' }}>
      <AccordionSelectableListContainer
        accordionData={complexAccordionData}
        selectedItemId={null}
        allowMultipleSelection={false}
      />
    </div>
  );
};

export const WithDisabledItems = () => {
  const accordionDataWithDisabled = [
    {
      id: 'production',
      triggerLabel: 'Production',
      triggerIcon: MetalcloudMeltingFurnaceLine,
      items: [
        { id: 'melting-furnace', label: 'Melting Furnace', icon: MetalcloudMeltingFurnaceLine },
        { id: 'casting-line', label: 'Casting Line (Disabled)', icon: SystemAddFill, disabled: true },
        { id: 'quality-check', label: 'Quality Check', icon: WeatherSunLine }
      ]
    },
    {
      id: 'management',
      triggerLabel: 'Management',
      triggerIcon: UserLine,
      items: [
        { id: 'user-management', label: 'User Management', icon: UserLine },
        { id: 'settings', label: 'Settings (Disabled)', icon: SettingsLine, disabled: true },
        { id: 'reports', label: 'Reports', icon: FileTextLine }
      ]
    }
  ];

  return (
    <div style={{ minWidth: '300px' }}>
      <AccordionSelectableListContainer
        accordionData={accordionDataWithDisabled}
        selectedItemId={null}
        allowMultipleSelection={false}
      />
    </div>
  );
};

export const LongLabels = () => {
  const longLabelData = [
    {
      id: 'long-accordion-1',
      triggerLabel: 'This is a very long accordion trigger label that might wrap to multiple lines in the component',
      triggerIcon: MetalcloudMeltingFurnaceLine,
      items: [
        { id: 'long-item-1', label: 'This is a very long item label that might wrap to multiple lines', icon: SystemAddFill },
        { id: 'long-item-2', label: 'Another long label with different content to test text wrapping behavior', icon: WeatherSunLine },
        { id: 'long-item-3', label: 'Short label', icon: UserLine }
      ]
    },
    {
      id: 'long-accordion-2',
      triggerLabel: 'Another long accordion label for testing purposes',
      triggerIcon: UserLine,
      items: [
        { id: 'long-item-4', label: 'Fourth long item with extensive text content', icon: SettingsLine },
        { id: 'long-item-5', label: 'Fifth item with medium length text', icon: FileTextLine }
      ]
    }
  ];

  return (
    <div style={{ minWidth: '450px' }}>
      <AccordionSelectableListContainer
        accordionData={longLabelData}
        selectedItemId={null}
        allowMultipleSelection={false}
      />
    </div>
  );
}; 