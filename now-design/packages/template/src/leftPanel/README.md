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
- ✅ **CSS Classes Only**: No inline styles, all styling through CSS classes
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

### Advanced Usage

```jsx
<LeftPanel
  accordionData={accordionData}
  onItemSelect={handleItemSelect}
  logoWidth={80}
  logoHeight={40}
  className="custom-left-panel"
  style={{ marginTop: '20px' }}
/>
```

## Props

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| `accordionData` | `array` | `[]` | ✅ | Array of accordion configurations |
| `onItemSelect` | `function` | - | ❌ | Callback when any item is selected |
| `onSelectionChange` | `function` | - | ❌ | Enhanced callback with parent and item info |
| `defaultSelectedItemId` | `string` | - | ❌ | ID of item to be selected by default |
| `width` | `number\|string` | - | ❌ | Width of the left panel |
| `minWidth` | `number\|string` | - | ❌ | Minimum width |
| `maxWidth` | `number\|string` | - | ❌ | Maximum width |
| `height` | `number\|string` | - | ❌ | Height of the left panel |
| `minHeight` | `number\|string` | - | ❌ | Minimum height |
| `maxHeight` | `number\|string` | - | ❌ | Maximum height |
| `logoWidth` | `number` | `64` | ❌ | Width of the logo |
| `logoHeight` | `number` | `32` | ❌ | Height of the logo |
| `logoComponent` | `element` | - | ❌ | Custom logo component |
| `logoProps` | `object` | `{}` | ❌ | Additional props for logo component |
| `logoPosition` | `string` | `'top'` | ❌ | Logo position: 'top', 'bottom', 'left', 'right' |
| `logoMargin` | `number\|string` | - | ❌ | Margin around logo |
| `logoPadding` | `number\|string` | - | ❌ | Padding around logo |
| `logoContainerClassName` | `string` | `''` | ❌ | CSS classes for logo container |
| `logoContainerStyle` | `object` | `{}` | ❌ | Inline styles for logo container |
| `contentClassName` | `string` | `''` | ❌ | CSS classes for content container |
| `contentStyle` | `object` | `{}` | ❌ | Inline styles for content container |
| `accordionContainerProps` | `object` | `{}` | ❌ | Props to pass to AccordionSelectableListContainer |
| `backgroundColor` | `string` | - | ❌ | Background color |
| `borderRadius` | `number\|string` | - | ❌ | Border radius |
| `border` | `string` | - | ❌ | Border style |
| `padding` | `number\|string` | - | ❌ | Padding |
| `margin` | `number\|string` | - | ❌ | Margin |
| `flexDirection` | `string` | `'column'` | ❌ | Flex direction |
| `justifyContent` | `string` | - | ❌ | Justify content |
| `alignItems` | `string` | - | ❌ | Align items |
| `gap` | `number\|string` | - | ❌ | Gap between elements |
| `isCollapsible` | `boolean` | `false` | ❌ | Whether panel is collapsible |
| `collapsedWidth` | `number\|string` | - | ❌ | Width when collapsed |
| `onLogoClick` | `function` | - | ❌ | Callback when logo is clicked |
| `onContainerClick` | `function` | - | ❌ | Callback when container is clicked |
| `isLoading` | `boolean` | `false` | ❌ | Loading state |
| `isDisabled` | `boolean` | `false` | ❌ | Disabled state |
| `animationDuration` | `number` | `300` | ❌ | Animation duration in ms |
| `enableAnimations` | `boolean` | `true` | ❌ | Whether to enable animations |
| `isSticky` | `boolean` | `false` | ❌ | Whether to make panel sticky |
| `stickyTop` | `number\|string` | `0` | ❌ | Top position when sticky |
| `stickyZIndex` | `number` | `1000` | ❌ | Z-index when sticky |
| `shadowStyle` | `string` | `'none'` | ❌ | Box shadow style |
| `enableShadow` | `boolean` | `false` | ❌ | Whether to enable shadow |
| `className` | `string` | `''` | ❌ | Additional CSS classes |
| `style` | `object` | `{}` | ❌ | Additional inline styles |

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
  logoWidth={80}
  logoHeight={40}
/>
```

### With Custom Styling

```jsx
<LeftPanel 
  accordionData={accordionData}
  className="my-custom-left-panel"
  style={{ 
    width: '250px',
    marginLeft: '20px'
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

## Integration with Design System

This component integrates with the design system by:

1. **Using Molecules**: Leverages `AccordionSelectableListContainer` from molecules package
2. **Using Atoms**: Uses `LogoMetalCloud` from atoms package
3. **Design Tokens**: All colors, spacing, and typography use design tokens
4. **Consistent Theming**: Supports theme switching seamlessly

## Performance Considerations

- **Minimal Re-renders**: Uses React.memo for optimization
- **Efficient Styling**: CSS classes instead of inline styles
- **Lazy Loading**: Can be code-split if needed

## Browser Support

- **Modern Browsers**: Chrome, Firefox, Safari, Edge (latest 2 versions)
- **CSS Features**: CSS Grid, Flexbox, CSS Custom Properties
- **JavaScript**: ES6+ features

## Contributing

When contributing to this component:

1. **Follow CSS Class Pattern**: No inline styles
2. **Use Design Tokens**: All colors and spacing from tokens
3. **Test Responsiveness**: Verify all breakpoints
4. **Check Accessibility**: Ensure keyboard navigation works
5. **Update Documentation**: Keep README current

## License

This component is part of the design system and follows the same licensing terms. 