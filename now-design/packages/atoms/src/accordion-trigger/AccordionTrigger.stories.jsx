import React, { useState } from 'react';
import AccordionTrigger from './AccordionTrigger';
import { MetalcloudMeltingFurnaceLine, SystemAddFill, ArrowsArrowDownSLine } from 'now-design-icons';

export default {
  title: 'Atoms/AccordionTrigger',
  component: AccordionTrigger,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'An accordion trigger component that can be used to expand/collapse content sections.'
      }
    }
  },
  argTypes: {
    label: {
      control: { type: 'text' },
      description: 'Text label for the trigger'
    },
    icon: {
      control: { type: 'select' },
      options: ['MetalcloudMeltingFurnaceLine', 'SystemAddFill', 'ArrowsArrowDownSLine'],
      mapping: {
        MetalcloudMeltingFurnaceLine,
        SystemAddFill,
        ArrowsArrowDownSLine
      },
      description: 'Icon to display with the trigger'
    },
    expanded: {
      control: { type: 'boolean' },
      description: 'Whether the accordion is expanded'
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the trigger is disabled'
    },
    onClick: {
      action: 'clicked',
      description: 'Callback when trigger is clicked'
    },
    className: {
      control: { type: 'text' },
      description: 'Additional CSS classes'
    }
  }
};

const Template = (args) => <AccordionTrigger {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Default Trigger',
  icon: MetalcloudMeltingFurnaceLine,
  expanded: false,
  disabled: false
};

export const Expanded = Template.bind({});
Expanded.args = {
  label: 'Expanded Trigger',
  icon: MetalcloudMeltingFurnaceLine,
  expanded: true,
  disabled: false
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled Trigger',
  icon: MetalcloudMeltingFurnaceLine,
  expanded: false,
  disabled: true
};

export const WithoutIcon = Template.bind({});
WithoutIcon.args = {
  label: 'Trigger without icon',
  expanded: false,
  disabled: false
};

export const Interactive = () => {
  const [expanded, setExpanded] = useState(false);
  
  return (
    <div style={{ minWidth: '300px' }}>
      <AccordionTrigger
        label="Interactive Trigger"
        icon={MetalcloudMeltingFurnaceLine}
        expanded={expanded}
        onClick={() => setExpanded(!expanded)}
      />
      {expanded && (
        <div style={{ 
          padding: '16px', 
          backgroundColor: '#f5f5f5', 
          marginTop: '8px',
          borderRadius: '4px'
        }}>
          <p>This is the expanded content that appears when the trigger is clicked.</p>
        </div>
      )}
    </div>
  );
};

export const DifferentIcons = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', minWidth: '300px' }}>
    <AccordionTrigger
      label="Melting Furnace Icon"
      icon={MetalcloudMeltingFurnaceLine}
      expanded={false}
    />
    <AccordionTrigger
      label="Add Icon"
      icon={SystemAddFill}
      expanded={true}
    />
    <AccordionTrigger
      label="Arrow Icon"
      icon={ArrowsArrowDownSLine}
      expanded={false}
    />
    <AccordionTrigger
      label="No Icon"
      expanded={true}
    />
  </div>
);

export const States = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', minWidth: '300px' }}>
    <AccordionTrigger
      label="Normal State"
      icon={MetalcloudMeltingFurnaceLine}
      expanded={false}
      disabled={false}
    />
    <AccordionTrigger
      label="Expanded State"
      icon={MetalcloudMeltingFurnaceLine}
      expanded={true}
      disabled={false}
    />
    <AccordionTrigger
      label="Disabled State"
      icon={MetalcloudMeltingFurnaceLine}
      expanded={false}
      disabled={true}
    />
    <AccordionTrigger
      label="Expanded & Disabled"
      icon={MetalcloudMeltingFurnaceLine}
      expanded={true}
      disabled={true}
    />
  </div>
);

export const LongLabels = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', minWidth: '400px' }}>
    <AccordionTrigger
      label="This is a very long label that might wrap to multiple lines in the component"
      icon={MetalcloudMeltingFurnaceLine}
      expanded={false}
    />
    <AccordionTrigger
      label="Another long label with different content to test text wrapping behavior"
      icon={SystemAddFill}
      expanded={true}
    />
    <AccordionTrigger
      label="Short label"
      icon={ArrowsArrowDownSLine}
      expanded={false}
    />
  </div>
);

export const MultipleInteractive = () => {
  const [expandedStates, setExpandedStates] = useState({
    'section-1': false,
    'section-2': false,
    'section-3': false
  });

  const handleToggle = (sectionId) => {
    setExpandedStates(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const sections = [
    { id: 'section-1', label: 'Section 1', icon: MetalcloudMeltingFurnaceLine },
    { id: 'section-2', label: 'Section 2', icon: SystemAddFill },
    { id: 'section-3', label: 'Section 3', icon: ArrowsArrowDownSLine }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', minWidth: '300px' }}>
      {sections.map((section) => (
        <div key={section.id}>
          <AccordionTrigger
            label={section.label}
            icon={section.icon}
            expanded={expandedStates[section.id]}
            onClick={() => handleToggle(section.id)}
          />
          {expandedStates[section.id] && (
            <div style={{ 
              padding: '16px', 
              backgroundColor: '#f5f5f5', 
              marginTop: '8px',
              borderRadius: '4px'
            }}>
              <p>Content for {section.label}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}; 