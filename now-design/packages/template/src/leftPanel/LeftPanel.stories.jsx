import React, { useState } from 'react';
import LeftPanel from './LeftPanel';
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
  title: 'Templates/LeftPanel',
  component: LeftPanel,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A template component that provides a complete left panel navigation layout with logo and accordion navigation.'
      }
    }
  },
  argTypes: {
    accordionData: {
      control: { type: 'object' },
      description: 'Array of accordion configurations'
    },
    onItemSelect: {
      action: 'itemSelected',
      description: 'Callback when any item is selected'
    },
    onSelectionChange: {
      action: 'selectionChanged',
      description: 'Enhanced callback with parent and item info'
    },
    width: {
      control: { type: 'text' },
      description: 'Width of the left panel'
    },
    height: {
      control: { type: 'text' },
      description: 'Height of the left panel'
    },
    logoWidth: {
      control: { type: 'number', min: 16, max: 200 },
      description: 'Width of the logo'
    },
    logoHeight: {
      control: { type: 'number', min: 16, max: 200 },
      description: 'Height of the logo'
    },
    logoPosition: {
      control: { type: 'select' },
      options: ['top', 'bottom', 'left', 'right'],
      description: 'Position of the logo'
    },
    backgroundColor: {
      control: { type: 'color' },
      description: 'Background color of the panel'
    },
    className: {
      control: { type: 'text' },
      description: 'Additional CSS classes'
    }
  }
};

const Template = (args) => <LeftPanel {...args} />;

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
  width: '250px',
  height: '100vh',
  logoWidth: 64,
  logoHeight: 32,
  logoPosition: 'top',
  backgroundColor: '#ffffff'
};

export const Compact = Template.bind({});
Compact.args = {
  accordionData: sampleAccordionData,
  width: '200px',
  height: '100vh',
  logoWidth: 48,
  logoHeight: 24,
  logoPosition: 'top',
  backgroundColor: '#f8f9fa'
};

export const Wide = Template.bind({});
Wide.args = {
  accordionData: sampleAccordionData,
  width: '300px',
  height: '100vh',
  logoWidth: 80,
  logoHeight: 40,
  logoPosition: 'top',
  backgroundColor: '#ffffff'
};

export const LogoBottom = Template.bind({});
LogoBottom.args = {
  accordionData: sampleAccordionData,
  width: '250px',
  height: '100vh',
  logoWidth: 64,
  logoHeight: 32,
  logoPosition: 'bottom',
  backgroundColor: '#ffffff'
};

export const Interactive = () => {
  const [selectedItemId, setSelectedItemId] = useState(null);
  
  const handleItemSelect = (itemId) => {
    setSelectedItemId(itemId);
  };

  const handleSelectionChange = (selectionInfo) => {
    console.log('Selection changed:', selectionInfo);
  };

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <LeftPanel
        accordionData={sampleAccordionData}
        onItemSelect={handleItemSelect}
        onSelectionChange={handleSelectionChange}
        width="250px"
        height="100vh"
        logoWidth={64}
        logoHeight={32}
        logoPosition="top"
        backgroundColor="#ffffff"
      />
      <div style={{ flex: 1, padding: '20px', backgroundColor: '#f5f5f5' }}>
        <h2>Main Content Area</h2>
        <p>This is the main content area that would be displayed when items are selected from the left panel.</p>
        <p><strong>Selected Item:</strong> {selectedItemId || 'None'}</p>
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
    <div style={{ display: 'flex', height: '100vh' }}>
      <LeftPanel
        accordionData={complexAccordionData}
        width="280px"
        height="100vh"
        logoWidth={72}
        logoHeight={36}
        logoPosition="top"
        backgroundColor="#ffffff"
      />
      <div style={{ flex: 1, padding: '20px', backgroundColor: '#f5f5f5' }}>
        <h2>Complex Navigation Example</h2>
        <p>This example shows a more complex navigation structure with multiple accordions and items.</p>
      </div>
    </div>
  );
};

export const CustomStyling = () => {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <LeftPanel
        accordionData={sampleAccordionData}
        width="260px"
        height="100vh"
        logoWidth={70}
        logoHeight={35}
        logoPosition="top"
        backgroundColor="#2c3e50"
        borderRadius="0 8px 8px 0"
        boxShadow="2px 0 10px rgba(0,0,0,0.1)"
        padding="16px"
        className="custom-left-panel"
      />
      <div style={{ flex: 1, padding: '20px', backgroundColor: '#ecf0f1' }}>
        <h2>Custom Styled Panel</h2>
        <p>This example shows the left panel with custom styling including background color, border radius, and shadow.</p>
      </div>
    </div>
  );
};

export const Responsive = () => {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <LeftPanel
        accordionData={sampleAccordionData}
        width="250px"
        minWidth="200px"
        maxWidth="300px"
        height="100vh"
        logoWidth={64}
        logoHeight={32}
        logoPosition="top"
        backgroundColor="#ffffff"
        isCollapsible={true}
        collapsedWidth="60px"
      />
      <div style={{ flex: 1, padding: '20px', backgroundColor: '#f5f5f5' }}>
        <h2>Responsive Panel</h2>
        <p>This example shows a responsive left panel that can be collapsed and has minimum/maximum width constraints.</p>
      </div>
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
    <div style={{ display: 'flex', height: '100vh' }}>
      <LeftPanel
        accordionData={accordionDataWithDisabled}
        width="250px"
        height="100vh"
        logoWidth={64}
        logoHeight={32}
        logoPosition="top"
        backgroundColor="#ffffff"
      />
      <div style={{ flex: 1, padding: '20px', backgroundColor: '#f5f5f5' }}>
        <h2>Panel with Disabled Items</h2>
        <p>This example shows the left panel with some disabled items that cannot be selected.</p>
      </div>
    </div>
  );
}; 