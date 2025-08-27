import React, { useState } from 'react';
import AccordionSelectableList from './AccordionSelectableList';
import { 
  MetalcloudMeltingFurnaceLine, 
  SystemAddFill, 
  ArrowsArrowDownSLine,
  WeatherSunLine,
  UserFacesUserLine
} from 'now-design-icons';

/**
 * Storybook stories for `AccordionSelectableList` molecule.
 * Demonstrates default, expanded, selection, disabled, interactive, multiple, icon variations, and long-label scenarios.
 */
export default {
  title: 'Molecules/AccordionSelectableList',
  component: AccordionSelectableList,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A molecule component that combines AccordionTrigger with SelectableListItem to create expandable lists with selectable items.'
      }
    }
  },
  argTypes: {
    id: {
      control: { type: 'text' },
      description: 'Unique identifier for the accordion'
    },
    triggerLabel: {
      control: { type: 'text' },
      description: 'Label for the accordion trigger'
    },
    triggerIcon: {
      control: { type: 'select' },
      options: ['MetalcloudMeltingFurnaceLine', 'SystemAddFill', 'ArrowsArrowDownSLine', 'WeatherSunLine', 'UserFacesUserLine'],
      mapping: {
        MetalcloudMeltingFurnaceLine,
        SystemAddFill,
        ArrowsArrowDownSLine,
        WeatherSunLine,
        UserFacesUserLine
      },
      description: 'Icon for the accordion trigger'
    },
    items: {
      control: { type: 'object' },
      description: 'Array of selectable items'
    },
    selectedItemId: {
      control: { type: 'text' },
      description: 'ID of the currently selected item'
    },
    onItemSelect: {
      action: 'itemSelected',
      description: 'Callback when an item is selected'
    },
    expanded: {
      control: { type: 'boolean' },
      description: 'Whether the accordion is expanded'
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the accordion is disabled'
    },
    className: {
      control: { type: 'text' },
      description: 'Additional CSS classes'
    }
  }
};

const Template = (args) => <AccordionSelectableList {...args} />;

const sampleItems = [
  { id: 'item-1', label: 'First Item', icon: SystemAddFill },
  { id: 'item-2', label: 'Second Item', icon: WeatherSunLine },
  { id: 'item-3', label: 'Third Item', icon: UserFacesUserLine },
  { id: 'item-4', label: 'Disabled Item', icon: SystemAddFill, disabled: true }
];

export const Default = Template.bind({});
Default.args = {
  id: 'accordion-1',
  triggerLabel: 'Sample Accordion',
  triggerIcon: MetalcloudMeltingFurnaceLine,
  items: sampleItems,
  selectedItemId: null,
  expanded: false,
  disabled: false
};

export const Expanded = Template.bind({});
Expanded.args = {
  id: 'accordion-2',
  triggerLabel: 'Expanded Accordion',
  triggerIcon: MetalcloudMeltingFurnaceLine,
  items: sampleItems,
  selectedItemId: 'item-1',
  expanded: true,
  disabled: false
};

export const WithSelectedItem = Template.bind({});
WithSelectedItem.args = {
  id: 'accordion-3',
  triggerLabel: 'With Selected Item',
  triggerIcon: SystemAddFill,
  items: sampleItems,
  selectedItemId: 'item-2',
  expanded: true,
  disabled: false
};

export const Disabled = Template.bind({});
Disabled.args = {
  id: 'accordion-4',
  triggerLabel: 'Disabled Accordion',
  triggerIcon: MetalcloudMeltingFurnaceLine,
  items: sampleItems,
  selectedItemId: null,
  expanded: false,
  disabled: true
};

export const Interactive = () => {
  const [expanded, setExpanded] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);
  
  const handleItemSelect = (itemId) => {
    setSelectedItemId(itemId);
  };

  return (
    <div style={{ minWidth: '300px' }}>
      <AccordionSelectableList
        id="interactive-accordion"
        triggerLabel="Interactive Accordion"
        triggerIcon={MetalcloudMeltingFurnaceLine}
        items={sampleItems}
        selectedItemId={selectedItemId}
        onItemSelect={handleItemSelect}
        expanded={expanded}
        onToggle={() => setExpanded(!expanded)}
      />
      <div style={{ marginTop: '16px', padding: '12px', backgroundColor: '#f5f5f5', borderRadius: '4px' }}>
        <p><strong>Selected Item:</strong> {selectedItemId || 'None'}</p>
        <p><strong>Expanded:</strong> {expanded ? 'Yes' : 'No'}</p>
      </div>
    </div>
  );
};

export const MultipleAccordions = () => {
  const [accordionStates, setAccordionStates] = useState({
    'accordion-1': { expanded: false, selectedItemId: null },
    'accordion-2': { expanded: true, selectedItemId: 'item-2' },
    'accordion-3': { expanded: false, selectedItemId: null }
  });

  const accordionData = [
    {
      id: 'accordion-1',
      triggerLabel: 'Production',
      triggerIcon: MetalcloudMeltingFurnaceLine,
      items: [
        { id: 'prod-1', label: 'Melting Furnace', icon: MetalcloudMeltingFurnaceLine },
        { id: 'prod-2', label: 'Casting Line', icon: SystemAddFill },
        { id: 'prod-3', label: 'Quality Check', icon: WeatherSunLine }
      ]
    },
    {
      id: 'accordion-2',
      triggerLabel: 'Management',
      triggerIcon: UserFacesUserLine,
      items: [
        { id: 'mgmt-1', label: 'User Management', icon: UserFacesUserLine },
        { id: 'mgmt-2', label: 'Settings', icon: SystemAddFill },
        { id: 'mgmt-3', label: 'Reports', icon: WeatherSunLine }
      ]
    },
    {
      id: 'accordion-3',
      triggerLabel: 'System',
      triggerIcon: SystemAddFill,
      items: [
        { id: 'sys-1', label: 'Configuration', icon: SystemAddFill },
        { id: 'sys-2', label: 'Maintenance', icon: MetalcloudMeltingFurnaceLine },
        { id: 'sys-3', label: 'Backup', icon: WeatherSunLine }
      ]
    }
  ];

  const handleItemSelect = (accordionId, itemId) => {
    setAccordionStates(prev => ({
      ...prev,
      [accordionId]: {
        ...prev[accordionId],
        selectedItemId: itemId
      }
    }));
  };

  const handleToggle = (accordionId) => {
    setAccordionStates(prev => ({
      ...prev,
      [accordionId]: {
        ...prev[accordionId],
        expanded: !prev[accordionId].expanded
      }
    }));
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', minWidth: '300px' }}>
      {accordionData.map((accordion) => (
        <AccordionSelectableList
          key={accordion.id}
          id={accordion.id}
          triggerLabel={accordion.triggerLabel}
          triggerIcon={accordion.triggerIcon}
          items={accordion.items}
          selectedItemId={accordionStates[accordion.id].selectedItemId}
          onItemSelect={(itemId) => handleItemSelect(accordion.id, itemId)}
          expanded={accordionStates[accordion.id].expanded}
          onToggle={() => handleToggle(accordion.id)}
        />
      ))}
    </div>
  );
};

export const DifferentIcons = () => {
  const accordions = [
    {
      id: 'icons-1',
      triggerLabel: 'Melting Furnace',
      triggerIcon: MetalcloudMeltingFurnaceLine,
      items: [
        { id: 'icon-1', label: 'Item 1', icon: SystemAddFill },
        { id: 'icon-2', label: 'Item 2', icon: WeatherSunLine }
      ]
    },
    {
      id: 'icons-2',
      triggerLabel: 'System Operations',
      triggerIcon: SystemAddFill,
      items: [
        { id: 'icon-3', label: 'Item 3', icon: UserFacesUserLine },
        { id: 'icon-4', label: 'Item 4', icon: ArrowsArrowDownSLine }
      ]
    },
    {
      id: 'icons-3',
      triggerLabel: 'User Management',
      triggerIcon: UserFacesUserLine,
      items: [
        { id: 'icon-5', label: 'Item 5', icon: MetalcloudMeltingFurnaceLine },
        { id: 'icon-6', label: 'Item 6', icon: SystemAddFill }
      ]
    }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', minWidth: '300px' }}>
      {accordions.map((accordion) => (
        <AccordionSelectableList
          key={accordion.id}
          id={accordion.id}
          triggerLabel={accordion.triggerLabel}
          triggerIcon={accordion.triggerIcon}
          items={accordion.items}
          selectedItemId={null}
          expanded={false}
        />
      ))}
    </div>
  );
};

export const LongLabels = () => {
  const longItems = [
    { id: 'long-1', label: 'This is a very long item label that might wrap to multiple lines', icon: SystemAddFill },
    { id: 'long-2', label: 'Another long label with different content to test text wrapping behavior', icon: WeatherSunLine },
    { id: 'long-3', label: 'Short label', icon: UserFacesUserLine }
  ];

  return (
    <div style={{ minWidth: '400px' }}>
      <AccordionSelectableList
        id="long-labels"
        triggerLabel="This is a very long accordion trigger label that might wrap to multiple lines"
        triggerIcon={MetalcloudMeltingFurnaceLine}
        items={longItems}
        selectedItemId={null}
        expanded={true}
      />
    </div>
  );
}; 