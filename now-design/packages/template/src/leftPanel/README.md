# LeftPanel Template Component

A reusable left panel navigation template component that provides a consistent layout for filtering and navigation using the AccordionSelectableListContainer from the molecules package.

## Overview

The `LeftPanel` component is a template-level component that combines:
- **Logo Section**: Centered METAL Cloud logo
- **Accordion Navigation**: Using AccordionSelectableListContainer for complex navigation
- **Responsive Design**: Adapts to different screen sizes
- **Theme Support**: Supports light/dark theme switching
- **Accessibility**: Proper focus states and keyboard navigation

## Features

- ✅ **Template-Level Component**: Reusable across different applications
- ✅ **Clean API**: Minimal props focused on functionality
- ✅ **Flexible Styling**: All layout and visual properties via `style` prop
- ✅ **Responsive Design**: Mobile-first approach with breakpoints
- ✅ **Theme Integration**: Uses design tokens for consistent theming
- ✅ **Accessibility**: Proper focus states and semantic markup
- ✅ **TypeScript Ready**: Full PropTypes validation
- ✅ **Customizable**: Flexible props for different use cases

## Installation

```bash
npm install now-design-template
```

## Usage

### Basic Usage

```jsx
import { LeftPanel } from 'now-design-template';
import { SystemAddFill, MetalcloudMeltingFurnaceLine } from 'now-design-icons';

const accordionData = [
  {
    id: 'accordion-1',
    triggerLabel: 'ChargeMix',
    triggerIcon: MetalcloudMeltingFurnaceLine,
    items: [
      { id: 'charge-mix-item-1', label: 'Charge Mix Item 1', icon: SystemAddFill },
      { id: 'charge-mix-item-2', label: 'Charge Mix Item 2', icon: SystemAddFill },
    ]
  },
  // ... more accordions
];

function App() {
  const handleItemSelect = (itemId) => {
    console.log('Selected:', itemId);
  };

  return (
    <LeftPanel
      accordionData={accordionData}
      onItemSelect={handleItemSelect}
    />
  );
}
```

### Advanced Usage with Styling

```jsx
<LeftPanel
  accordionData={accordionData}
  onItemSelect={handleItemSelect}
  logoSize={{ width: 80, height: 40 }}
  className="custom-left-panel"
  style={{ 
    width: '250px',
    height: '100vh',
    backgroundColor: '#f5f5f5',
    borderRadius: '8px',
    padding: '20px',
    margin: '10px',
    flexDirection: 'column',
    gap: '16px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
  }}
/>
```

## Props

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| `accordionData` | `array` | `[]` | ✅ | Array of accordion configurations |
| `onItemSelect` | `function` | - | ❌ | Callback when any item is selected |
| `onSelectionChange` | `function` | - | ❌ | Enhanced callback with parent and item info |
| `defaultSelectedItemId` | `string` | - | ❌ | ID of item to be selected by default |
| `logo` | `element` | - | ❌ | Custom logo component to replace LogoMetalCloud |
| `logoSize` | `object` | `{width: 64, height: 32}` | ❌ | Logo dimensions {width, height} |
| `onLogoClick` | `function` | - | ❌ | Callback when logo is clicked |
| `logoContainerClassName` | `string` | `''` | ❌ | CSS classes for logo container |
| `logoContainerStyle` | `object` | `{}` | ❌ | Inline styles for logo container |
| `contentClassName` | `string` | `''` | ❌ | CSS classes for content container |
| `contentStyle` | `object` | `{}` | ❌ | Inline styles for content container |
| `className` | `string` | `''` | ❌ | Additional CSS classes |
| `style` | `object` | `{}` | ❌ | Inline styles (layout, visual, and positioning properties) |

### Style Prop Properties

The `style` prop accepts all standard CSS properties. Common use cases include:

#### Layout Properties
- `width`, `minWidth`, `maxWidth`
- `height`, `minHeight`, `maxHeight`
- `flexDirection`, `justifyContent`, `alignItems`
- `gap`, `padding`, `margin`

#### Visual Properties
- `backgroundColor`, `color`
- `borderRadius`, `border`
- `boxShadow`, `opacity`

#### Positioning Properties
- `position`, `top`, `left`, `right`, `bottom`
- `zIndex`, `transform`

### AccordionData Structure

```jsx
const accordionData = [
  {
    id: 'unique-accordion-id',
    triggerLabel: 'Accordion Title',
    triggerIcon: IconComponent,
    items: [
      {
        id: 'unique-item-id',
        label: 'Item Label',
        icon: IconComponent,
        disabled: false // optional
      }
    ]
  }
];
```

## CSS Classes

### Main Classes

- `.left-panel` - Main container
- `.left-panel-logo` - Logo section wrapper
- `.left-panel-content` - Content section wrapper

### Responsive Breakpoints

- **Desktop**: Default (200px width)
- **Tablet**: `@media (max-width: 768px)` (280px max-width)
- **Mobile**: `@media (max-width: 480px)` (100% width)

### Theme Support

- **Light Theme**: Uses `var(--normal-surface-page, #FFF)`
- **Dark Theme**: Uses `var(--dark-surface-page, #1a1a1a)`
- **Auto-detection**: `@media (prefers-color-scheme: dark)`

## Accessibility

- **Focus States**: Proper outline on focus-within
- **Keyboard Navigation**: Full keyboard support through AccordionSelectableListContainer
- **Semantic Markup**: Proper HTML structure
- **Screen Reader Support**: ARIA labels and roles

## Examples

### Basic Left Panel

```jsx
<LeftPanel accordionData={accordionData} />
```

### Custom Logo Size

```jsx
<LeftPanel 
  accordionData={accordionData}
  logoSize={{ width: 80, height: 40 }}
/>
```

### With Layout Styling

```jsx
<LeftPanel 
  accordionData={accordionData}
  style={{ 
    width: '250px',
    height: '100vh',
    flexDirection: 'column',
    gap: '16px',
    padding: '20px'
  }}
/>
```

### With Visual Styling

```jsx
<LeftPanel 
  accordionData={accordionData}
  style={{ 
    backgroundColor: '#f8f9fa',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
    border: '1px solid #e9ecef'
  }}
/>
```

### With Responsive Styling

```jsx
<LeftPanel 
  accordionData={accordionData}
  style={{ 
    width: '200px',
    minWidth: '180px',
    maxWidth: '300px',
    height: '100%',
    minHeight: '400px'
  }}
/>
```

### With Selection Handler

```jsx
<LeftPanel 
  accordionData={accordionData}
  onItemSelect={(itemId) => {
    console.log('User selected:', itemId);
    // Handle navigation or filtering
  }}
/>
```

### With Default Selection

```jsx
<LeftPanel 
  accordionData={accordionData}
  defaultSelectedItemId="charge-mix-item-1"
  onItemSelect={(itemId) => {
    console.log('User selected:', itemId);
  }}
/>
```

### With Enhanced Selection Callback

```jsx
<LeftPanel 
  accordionData={accordionData}
  defaultSelectedItemId="charge-mix-item-1"
  onItemSelect={(itemId) => {
    console.log('Selected item:', itemId);
  }}
  onSelectionChange={(selectionInfo) => {
    console.log('Selection changed:', {
      itemId: selectionInfo.itemId,
      parentAccordion: selectionInfo.parentAccordion,
      selectedItem: selectionInfo.selectedItem,
      timestamp: selectionInfo.timestamp
    });
  }}
/>
```

### With Custom Logo

```jsx
<LeftPanel 
  accordionData={accordionData}
  logo={CustomLogo}
  logoSize={{ width: 100, height: 50 }}
  onLogoClick={() => console.log('Logo clicked!')}
/>
```

### With Custom Styling Classes

```jsx
<LeftPanel 
  accordionData={accordionData}
  className="my-custom-left-panel"
  logoContainerClassName="custom-logo-container"
  contentClassName="custom-content"
  style={{ 
    width: '280px',
    backgroundColor: 'var(--primary-color)',
    color: 'white'
  }}
/>
```

## Integration with Design System

This component integrates with the design system by:

1. **Using Molecules**: Leverages `AccordionSelectableListContainer` from molecules package
2. **Using Atoms**: Uses `LogoMetalCloud` from atoms package
3. **Design Tokens**: All colors, spacing, and typography use design tokens
4. **Consistent Theming**: Supports theme switching seamlessly

## Performance Considerations

- **Minimal Re-renders**: Uses React.memo for optimization
- **Efficient Styling**: CSS classes with optional inline styles
- **Lazy Loading**: Can be code-split if needed

## Browser Support

- **Modern Browsers**: Chrome, Firefox, Safari, Edge (latest 2 versions)
- **CSS Features**: CSS Grid, Flexbox, CSS Custom Properties
- **JavaScript**: ES6+ features

## Contributing

When contributing to this component:

1. **Keep Props Minimal**: Focus on functionality, use `style` prop for styling
2. **Use Design Tokens**: All colors and spacing from tokens
3. **Test Responsiveness**: Verify all breakpoints
4. **Check Accessibility**: Ensure keyboard navigation works
5. **Update Documentation**: Keep README current

## License

This component is part of the design system and follows the same licensing terms. 