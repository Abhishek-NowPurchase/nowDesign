import React, { useState } from 'react';
import LeftPanel from './LeftPanel';
import { 
  MetalcloudMeltingFurnaceLine, 
  SystemAddFill, 
  ArrowsArrowDownSLine,
  WeatherSunLine,
  UserLine,
  SettingsLine,
  FileTextLine,
  HomeLine,
  ChartLine,
  NotificationLine,
  ShieldLine,
  DatabaseLine,
  CloudLine,
  ToolsLine,
  AlertLine,
  CheckLine
} from 'now-design-icons';

export default {
  title: 'Organisms/LeftPanel',
  component: LeftPanel,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
# LeftPanel Organism Component

A comprehensive left panel navigation organism that provides a complete layout for filtering and navigation using the AccordionSelectableListContainer.

## Features
- **Organism-Level Component**: Combines multiple molecules for complex UI patterns
- **Clean API**: Minimal props focused on functionality
- **Flexible Styling**: All layout and visual properties via \`style\` prop
- **Responsive Design**: Mobile-first approach with breakpoints
- **Theme Integration**: Uses design tokens for consistent theming
- **Accessibility**: Proper focus states and semantic markup
- **Developer Friendly**: Helpful warnings for missing data

## Usage
\`\`\`jsx
import { LeftPanel } from 'now-design-organisms';

<LeftPanel
  accordionData={accordionData}
  onItemSelect={(itemId, parentAccordionId, selectedItemLabel) => {
    console.log('Selected:', itemId, parentAccordionId, selectedItemLabel);
  }}
  defaultSelectedItemId="melting-furnace"
  style={{ width: '280px', backgroundColor: '#ffffff' }}
/>
\`\`\`
        `
      }
    }
  },
  argTypes: {
    accordionData: {
      control: { type: 'object' },
      description: 'Array of accordion configurations (required)',
      table: {
        type: { summary: 'Array<AccordionConfig>' },
        defaultValue: { summary: '[]' },
        category: 'Data'
      }
    },
    onItemSelect: {
      action: 'itemSelected',
      description: 'Enhanced callback when any item is selected. Receives: (itemId, parentAccordionId, selectedItemLabel)',
      table: {
        type: { summary: 'function' },
        category: 'Events'
      }
    },
    defaultSelectedItemId: {
      control: { type: 'text' },
      description: 'Default selected item ID to highlight on initial render',
      table: {
        type: { summary: 'string' },
        category: 'Data'
      }
    },
    logo: {
      control: { type: 'object' },
      description: 'Custom logo component or element to replace LogoMetalCloud',
      table: {
        type: { summary: 'ReactElement|Component' },
        category: 'Customization'
      }
    },
    logoSize: {
      control: { type: 'object' },
      description: 'Logo dimensions {width, height}',
      table: {
        type: { summary: '{width: number, height: number}' },
        defaultValue: { summary: '{width: 64, height: 32}' },
        category: 'Customization'
      }
    },
    onLogoClick: {
      action: 'logoClicked',
      description: 'Callback when logo is clicked',
      table: {
        type: { summary: 'function' },
        category: 'Events'
      }
    },
    contentClassName: {
      control: { type: 'text' },
      description: 'Additional CSS classes for content container',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "''" },
        category: 'Styling'
      }
    },
    contentStyle: {
      control: { type: 'object' },
      description: 'Additional inline styles for content container',
      table: {
        type: { summary: 'object' },
        defaultValue: { summary: '{}' },
        category: 'Styling'
      }
    },
    className: {
      control: { type: 'text' },
      description: 'Additional CSS classes for the main container',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "''" },
        category: 'Styling'
      }
    },
    style: {
      control: { type: 'object' },
      description: 'Additional inline styles (includes layout, visual, and positioning styles)',
      table: {
        type: { summary: 'object' },
        defaultValue: { summary: '{}' },
        category: 'Styling'
      }
    }
  }
};

// Sample accordion data for stories
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

const Template = (args) => (
  <div style={{ display: 'flex', height: '100vh' }}>
    <LeftPanel {...args} />
    <div style={{ flex: 1, padding: '20px', backgroundColor: '#f5f5f5' }}>
      <h2>Main Content Area</h2>
      <p>This is the main content area that would be displayed when items are selected from the left panel.</p>
    </div>
  </div>
);

// Default story with basic configuration
export const Default = Template.bind({});
Default.args = {
  accordionData: sampleAccordionData,
  style: {
    width: '280px',
    backgroundColor: '#ffffff',
    borderRight: '1px solid #e0e0e0'
  }
};

// Compact version
export const Compact = Template.bind({});
Compact.args = {
  accordionData: sampleAccordionData,
  logoSize: { width: 48, height: 24 },
  style: {
    width: '220px',
    backgroundColor: '#f8f9fa',
    borderRight: '1px solid #dee2e6'
  }
};

// Wide version
export const Wide = Template.bind({});
Wide.args = {
  accordionData: sampleAccordionData,
  logoSize: { width: 80, height: 40 },
  style: {
    width: '320px',
    backgroundColor: '#ffffff',
    borderRight: '1px solid #e0e0e0'
  }
};

// With default selection
export const WithDefaultSelection = Template.bind({});
WithDefaultSelection.args = {
  accordionData: sampleAccordionData,
  defaultSelectedItemId: 'melting-furnace',
  style: {
    width: '280px',
    backgroundColor: '#ffffff',
    borderRight: '1px solid #e0e0e0'
  }
};

// Interactive with state management
export const Interactive = () => {
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [selectedAccordionId, setSelectedAccordionId] = useState(null);
  const [selectedItemLabel, setSelectedItemLabel] = useState(null);
  
  const handleItemSelect = (itemId, parentAccordionId, selectedItemLabel) => {
    setSelectedItemId(itemId);
    setSelectedAccordionId(parentAccordionId);
    setSelectedItemLabel(selectedItemLabel);
  };

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <LeftPanel
        accordionData={sampleAccordionData}
        onItemSelect={handleItemSelect}
        defaultSelectedItemId="melting-furnace"
        style={{
          width: '280px',
          backgroundColor: '#ffffff',
          borderRight: '1px solid #e0e0e0'
        }}
      />
      <div style={{ flex: 1, padding: '20px', backgroundColor: '#f5f5f5' }}>
        <h2>Interactive Example</h2>
        <p>This example shows the left panel with interactive state management.</p>
        <div style={{ marginTop: '20px', padding: '16px', backgroundColor: '#ffffff', borderRadius: '8px' }}>
          <h3>Selection Details:</h3>
          <p><strong>Selected Item ID:</strong> {selectedItemId || 'None'}</p>
          <p><strong>Parent Accordion ID:</strong> {selectedAccordionId || 'None'}</p>
          <p><strong>Selected Item Label:</strong> {selectedItemLabel || 'None'}</p>
        </div>
      </div>
    </div>
  );
};

// Complex data structure
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
      triggerIcon: ChartLine,
      items: [
        { id: 'reports', label: 'Reports', icon: FileTextLine },
        { id: 'dashboards', label: 'Dashboards', icon: ChartLine },
        { id: 'metrics', label: 'Metrics', icon: WeatherSunLine },
        { id: 'alerts', label: 'Alerts', icon: AlertLine }
      ]
    },
    {
      id: 'system',
      triggerLabel: 'System',
      triggerIcon: SystemAddFill,
      items: [
        { id: 'config', label: 'Configuration', icon: SystemAddFill },
        { id: 'maintenance', label: 'Maintenance', icon: ToolsLine },
        { id: 'backup', label: 'Backup & Restore', icon: DatabaseLine },
        { id: 'updates', label: 'System Updates', icon: CloudLine },
        { id: 'logs', label: 'System Logs', icon: FileTextLine },
        { id: 'security', label: 'Security', icon: ShieldLine }
      ]
    }
  ];

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <LeftPanel
        accordionData={complexAccordionData}
        defaultSelectedItemId="furnace-1"
        style={{
          width: '300px',
          backgroundColor: '#ffffff',
          borderRight: '1px solid #e0e0e0'
        }}
      />
      <div style={{ flex: 1, padding: '20px', backgroundColor: '#f5f5f5' }}>
        <h2>Complex Navigation Example</h2>
        <p>This example shows a more complex navigation structure with multiple accordions and items.</p>
        <p>The data structure includes 4 accordions with 6 items each, demonstrating the component's ability to handle complex navigation hierarchies.</p>
      </div>
    </div>
  );
};

// Custom styling examples
export const CustomStyling = () => {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <LeftPanel
        accordionData={sampleAccordionData}
        style={{
          width: '280px',
          backgroundColor: '#2c3e50',
          borderRight: '2px solid #34495e',
          borderRadius: '0 8px 8px 0',
          boxShadow: '2px 0 10px rgba(0,0,0,0.1)',
          padding: '16px'
        }}
        contentStyle={{
          backgroundColor: 'transparent'
        }}
      />
      <div style={{ flex: 1, padding: '20px', backgroundColor: '#ecf0f1' }}>
        <h2>Custom Styled Panel</h2>
        <p>This example shows the left panel with custom styling including:</p>
        <ul>
          <li>Dark background color (#2c3e50)</li>
          <li>Custom border radius</li>
          <li>Box shadow for depth</li>
          <li>Custom padding</li>
        </ul>
      </div>
    </div>
  );
};

// With disabled items
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
        style={{
          width: '280px',
          backgroundColor: '#ffffff',
          borderRight: '1px solid #e0e0e0'
        }}
      />
      <div style={{ flex: 1, padding: '20px', backgroundColor: '#f5f5f5' }}>
        <h2>Panel with Disabled Items</h2>
        <p>This example shows the left panel with some disabled items that cannot be selected.</p>
        <p>Disabled items are visually distinct and non-interactive.</p>
      </div>
    </div>
  );
};

// With custom logo component (FIXED)
export const WithCustomLogo = () => {
  const CustomLogo = ({ width, height }) => (
    <div style={{
      width: width,
      height: height,
      backgroundColor: '#3498db',
      borderRadius: '8px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontSize: '12px',
      fontWeight: 'bold',
      fontFamily: 'Arial, sans-serif'
    }}>
      CUSTOM
    </div>
  );

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <LeftPanel
        accordionData={sampleAccordionData}
        logo={CustomLogo}
        logoSize={{ width: 80, height: 40 }}
        onLogoClick={() => alert('Custom logo clicked!')}
        style={{
          width: '280px',
          backgroundColor: '#ffffff',
          borderRight: '1px solid #e0e0e0'
        }}
      />
      <div style={{ flex: 1, padding: '20px', backgroundColor: '#f5f5f5' }}>
        <h2>Custom Logo Example</h2>
        <p>This example shows the left panel with a custom logo component instead of the default LogoMetalCloud.</p>
        <p>The custom logo is clickable and demonstrates the flexibility of the logo prop.</p>
      </div>
    </div>
  );
};

// With logo click handler
export const WithLogoClick = () => {
  const [logoClickCount, setLogoClickCount] = useState(0);

  const handleLogoClick = () => {
    setLogoClickCount(prev => prev + 1);
  };

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <LeftPanel
        accordionData={sampleAccordionData}
        onLogoClick={handleLogoClick}
        style={{
          width: '280px',
          backgroundColor: '#ffffff',
          borderRight: '1px solid #e0e0e0'
        }}
      />
      <div style={{ flex: 1, padding: '20px', backgroundColor: '#f5f5f5' }}>
        <h2>Logo Click Handler</h2>
        <p>This example demonstrates the logo click functionality.</p>
        <div style={{ marginTop: '20px', padding: '16px', backgroundColor: '#ffffff', borderRadius: '8px' }}>
          <p><strong>Logo Click Count:</strong> {logoClickCount}</p>
          <p>Click the logo in the left panel to increment the counter.</p>
        </div>
      </div>
    </div>
  );
};

// Empty state (no accordion data)
export const EmptyState = () => {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <LeftPanel
        accordionData={[]}
        style={{
          width: '280px',
          backgroundColor: '#ffffff',
          borderRight: '1px solid #e0e0e0'
        }}
      />
      <div style={{ flex: 1, padding: '20px', backgroundColor: '#f5f5f5' }}>
        <h2>Empty State</h2>
        <p>This example shows the left panel with no accordion data.</p>
        <p>Check the browser console for the warning message about empty accordionData.</p>
      </div>
    </div>
  );
};

// Responsive example with font family
export const Responsive = () => {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <LeftPanel
        accordionData={sampleAccordionData}
        style={{
          width: '280px',
          minWidth: '200px',
          maxWidth: '320px',
          backgroundColor: '#ffffff',
          borderRight: '1px solid #e0e0e0',
          fontFamily: 'Oxanium, Arial, sans-serif'
        }}
      />
      <div style={{ flex: 1, padding: '20px', backgroundColor: '#f5f5f5', fontFamily: 'Oxanium, Arial, sans-serif' }}>
        <h2>Responsive Panel</h2>
        <p>This example shows a responsive left panel with minimum and maximum width constraints.</p>
        <p>Try resizing the browser window to see how the panel adapts.</p>
        <p>Font family is set to Oxanium for consistent theming.</p>
      </div>
    </div>
  );
};

// With content styling
export const WithContentStyling = () => {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <LeftPanel
        accordionData={sampleAccordionData}
        contentClassName="custom-content"
        contentStyle={{
          backgroundColor: '#f8f9fa',
          padding: '8px',
          borderRadius: '4px'
        }}
        style={{
          width: '280px',
          backgroundColor: '#ffffff',
          borderRight: '1px solid #e0e0e0',
          padding: '16px'
        }}
      />
      <div style={{ flex: 1, padding: '20px', backgroundColor: '#f5f5f5' }}>
        <h2>Content Styling Example</h2>
        <p>This example demonstrates custom styling for the content container.</p>
        <p>The content area has a light background, custom padding, and border radius.</p>
      </div>
    </div>
  );
};

// Interactive testing with actions
export const InteractiveTesting = () => {
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [selectedAccordionId, setSelectedAccordionId] = useState(null);
  const [selectedItemLabel, setSelectedItemLabel] = useState(null);
  const [logoClickCount, setLogoClickCount] = useState(0);
  const [currentData, setCurrentData] = useState(sampleAccordionData);

  const handleItemSelect = (itemId, parentAccordionId, selectedItemLabel) => {
    setSelectedItemId(itemId);
    setSelectedAccordionId(parentAccordionId);
    setSelectedItemLabel(selectedItemLabel);
  };

  const handleLogoClick = () => {
    setLogoClickCount(prev => prev + 1);
  };

  const toggleData = () => {
    setCurrentData(currentData === sampleAccordionData ? [] : sampleAccordionData);
  };

  const resetSelection = () => {
    setSelectedItemId(null);
    setSelectedAccordionId(null);
    setSelectedItemLabel(null);
  };

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <LeftPanel
        accordionData={currentData}
        onItemSelect={handleItemSelect}
        onLogoClick={handleLogoClick}
        style={{
          width: '280px',
          backgroundColor: '#ffffff',
          borderRight: '1px solid #e0e0e0',
          fontFamily: 'Oxanium, Arial, sans-serif'
        }}
      />
      <div style={{ flex: 1, padding: '20px', backgroundColor: '#f5f5f5', fontFamily: 'Oxanium, Arial, sans-serif' }}>
        <h2>Interactive Testing Panel</h2>
        <p>Test all interactions and responsive behavior here.</p>
        
        <div style={{ marginTop: '20px', padding: '16px', backgroundColor: '#ffffff', borderRadius: '8px' }}>
          <h3>Selection Details:</h3>
          <p><strong>Selected Item ID:</strong> {selectedItemId || 'None'}</p>
          <p><strong>Parent Accordion ID:</strong> {selectedAccordionId || 'None'}</p>
          <p><strong>Selected Item Label:</strong> {selectedItemLabel || 'None'}</p>
          <p><strong>Logo Click Count:</strong> {logoClickCount}</p>
        </div>

        <div style={{ marginTop: '20px', padding: '16px', backgroundColor: '#e8f5e8', borderRadius: '8px' }}>
          <h3>Test Controls:</h3>
          <button 
            onClick={toggleData}
            style={{ marginRight: '10px', padding: '8px 16px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
          >
            {currentData.length > 0 ? 'Clear Data' : 'Load Data'}
          </button>
          <button 
            onClick={resetSelection}
            style={{ padding: '8px 16px', backgroundColor: '#6c757d', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
          >
            Reset Selection
          </button>
        </div>

        <div style={{ marginTop: '20px', padding: '16px', backgroundColor: '#fff3cd', borderRadius: '8px' }}>
          <h3>Responsive Testing:</h3>
          <p>• Try resizing the browser window</p>
          <p>• Test on different screen sizes</p>
          <p>• Check font rendering with Oxanium</p>
          <p>• Verify all interactions work properly</p>
        </div>
      </div>
    </div>
  );
}; 