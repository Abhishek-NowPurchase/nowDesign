import React, { useState } from 'react';
import AccordionTrigger from './AccordionTrigger';

export default {
  title: 'Atoms/AccordionTrigger',
  component: AccordionTrigger,
  parameters: {
    docs: {
      description: {
        component: 'AccordionTrigger atom: label + chevron + icon, single expand/collapse action, token-driven and accessible.'
      }
    }
  },
  argTypes: {
    label: { control: 'text', description: 'Accordion label' },
    expanded: { control: 'boolean', description: 'Is expanded?' },
    onToggle: { action: 'toggled', description: 'Expand/collapse handler' },
    icon: { control: 'text', description: 'Icon name (from now-design-icons)' },
  },
};

const Template = (args) => <AccordionTrigger {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Item Name',
  expanded: false,
  onToggle: () => {},
  icon: 'SystemAddFill',
};

export const Expanded = Template.bind({});
Expanded.args = {
  label: 'Item Name',
  expanded: true,
  onToggle: () => {},
  icon: 'SystemAddFill',
};

export const Interactive = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <AccordionTrigger
      label="Interactive Accordion"
      expanded={expanded}
      onToggle={() => setExpanded((prev) => !prev)}
    />
  );
}; 