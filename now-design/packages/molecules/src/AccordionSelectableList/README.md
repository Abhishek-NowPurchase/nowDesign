# AccordionSelectableList Component

A React molecule component that combines an accordion trigger with selectable list items, featuring dynamic positioning, visual indicators, and smooth animations.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [API Reference](#api-reference)
- [Usage Examples](#usage-examples)
- [State Management](#state-management)
- [Visual Elements](#visual-elements)
- [Styling](#styling)
- [Accessibility](#accessibility)
- [Performance](#performance)
- [Troubleshooting](#troubleshooting)

## 🎯 Overview

The `AccordionSelectableList` component is a molecule that combines:
- **AccordionTrigger**: Expandable/collapsible trigger with icon, label, and chevron
- **SelectableListItem**: Interactive list items with selection states
- **Visual Indicators**: Blue selection indicator and vertical connection line
- **Dynamic Positioning**: Automatic calculation of indicator and line positions

## ✨ Features

### Core Functionality
- ✅ **Dual Mode Operation**: Standalone (internal state) or controlled (external state)
- ✅ **Dynamic Positioning**: Automatic calculation of blue indicator and vertical line positions
- ✅ **Smooth Animations**: CSS transitions for expansion/collapse and positioning
- ✅ **Visual Feedback**: Hover, active, and selected states with proper styling
- ✅ **Icon Integration**: Support for custom icons in triggers and items
- ✅ **Typography Integration**: Design system typography classes with proper overrides

### Advanced Features
- ✅ **Responsive Design**: Mobile-first approach with touch-friendly interactions
- ✅ **Theme Support**: Automatic adaptation to light/dark themes
- ✅ **Performance Optimized**: Efficient DOM calculations and re-renders
- ✅ **Accessibility**: Full ARIA support and keyboard navigation

## 🔧 API Reference

### Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `triggerLabel` | `string` | ✅ | - | Text label for the accordion trigger |
| `triggerIcon` | `React.ComponentType<any>` | ✅ | - | Icon component for the trigger |
| `items` | `Array<Item>` | ✅ | `[]` | Array of selectable items |
| `selectedItemId` | `string` | ❌ | `null` | ID of currently selected item |
| `isExpanded` | `boolean` | ❌ | `false` | Whether accordion is expanded |
| `onItemSelect` | `(itemId: string) => void` | ✅ | - | Callback when item is selected |
| `onToggle` | `(accordionId: string) => void` | ❌ | - | Callback when accordion is toggled |
| `accordionId` | `string` | ❌ | - | Unique ID for the accordion |
| `className` | `string` | ❌ | `''` | Additional CSS classes |
| `style` | `React.CSSProperties` | ❌ | `{}` | Inline styles |

### Item Object Structure

```typescript
interface Item {
  id: string;           // Unique identifier
  label: string;        // Display text
  icon: React.ComponentType<any>; // Icon component
  disabled?: boolean;   // Whether item is disabled
}
```

### State Management

The component supports two modes:

#### Standalone Mode (Internal State)
```jsx
<AccordionSelectableList
  triggerLabel="Account"
  triggerIcon={AccountIcon}
  items={items}
  onItemSelect={handleItemSelect}
  // No isExpanded or selectedItemId props - uses internal state
/>
```

#### Controlled Mode (External State)
```jsx
<AccordionSelectableList
  accordionId="account-accordion"
  triggerLabel="Account"
  triggerIcon={AccountIcon}
  items={items}
  selectedItemId={selectedItem}
  isExpanded={expandedAccordions.has('account-accordion')}
  onItemSelect={handleItemSelect}
  onToggle={handleToggle}
/>
```

## 📚 Usage Examples

### Basic Usage

```jsx
import { AccordionSelectableList } from 'now-design-atoms';
import { SystemAddFill, WeatherSunFill } from 'now-design-icons';

function BasicExample() {
  const [selectedItem, setSelectedItem] = useState('profile');
  
  const items = [
    { id: 'profile', label: 'Profile', icon: SystemAddFill },
    { id: 'settings', label: 'Settings', icon: WeatherSunFill },
    { id: 'help', label: 'Help', icon: SystemAddFill },
  ];

  return (
    <AccordionSelectableList
      triggerLabel="Account Settings"
      triggerIcon={SystemAddFill}
      items={items}
      selectedItemId={selectedItem}
      onItemSelect={setSelectedItem}
    />
  );
}
```

### Controlled Mode

```jsx
function ControlledExample() {
  const [expandedAccordions, setExpandedAccordions] = useState(new Set(['account']));
  const [selectedItem, setSelectedItem] = useState('profile');
  
  const handleToggle = (accordionId) => {
    const newExpanded = new Set(expandedAccordions);
    if (newExpanded.has(accordionId)) {
      newExpanded.delete(accordionId);
    } else {
      newExpanded.add(accordionId);
    }
    setExpandedAccordions(newExpanded);
  };

  return (
    <AccordionSelectableList
      accordionId="account"
      triggerLabel="Account"
      triggerIcon={AccountIcon}
      items={items}
      selectedItemId={selectedItem}
      isExpanded={expandedAccordions.has('account')}
      onItemSelect={setSelectedItem}
      onToggle={handleToggle}
    />
  );
}
```

### With Disabled Items

```jsx
function DisabledItemsExample() {
  const items = [
    { id: 'active', label: 'Active Feature', icon: ActiveIcon },
    { id: 'disabled', label: 'Disabled Feature', icon: DisabledIcon, disabled: true },
    { id: 'coming-soon', label: 'Coming Soon', icon: ComingSoonIcon, disabled: true },
  ];

  const handleItemSelect = (itemId) => {
    const item = items.find(item => item.id === itemId);
    if (!item?.disabled) {
      setSelectedItem(itemId);
    }
  };

  return (
    <AccordionSelectableList
      triggerLabel="Features"
      triggerIcon={FeatureIcon}
      items={items}
      selectedItemId={selectedItem}
      onItemSelect={handleItemSelect}
    />
  );
}
```

### Custom Styling

```jsx
function CustomStylingExample() {
  return (
    <AccordionSelectableList
      triggerLabel="Custom Styled"
      triggerIcon={CustomIcon}
      items={items}
      selectedItemId={selectedItem}
      onItemSelect={setSelectedItem}
      className="my-custom-accordion"
      style={{
        '--indicator-color': '#ff6b6b',
        '--vertical-line-color': '#4ecdc4',
      }}
    />
  );
}
```

## 🎛️ State Management

### Internal State (Standalone Mode)

When used without external state props, the component manages its own state:

```jsx
// Internal state
const [internalIsExpanded, setInternalIsExpanded] = useState(false);
const [internalSelectedItemId, setInternalSelectedItemId] = useState(null);

// Effective values
const isExpanded = externalIsExpanded !== undefined ? externalIsExpanded : internalIsExpanded;
const effectiveSelectedItemId = selectedItemId !== undefined ? selectedItemId : internalSelectedItemId;
```

### State Update Logic

```jsx
const handleItemSelect = (itemId) => {
  if (selectedItemId !== undefined) {
    // External mode - call parent callback
    onItemSelect(itemId);
  } else {
    // Internal mode - update internal state
    setInternalSelectedItemId(itemId);
    onItemSelect(itemId);
  }
};

const handleToggle = () => {
  if (externalOnToggle) {
    // External mode - call parent callback
    externalOnToggle(accordionId);
  } else {
    // Internal mode - update internal state
    setInternalIsExpanded(!internalIsExpanded);
  }
};
```

## 🎨 Visual Elements

### Blue Selection Indicator

A blue indicator that appears next to the selected item:

```css
.accordion-selectable-list-blue-indicator {
  position: absolute;
  left: 9px;
  width: 3px;
  height: 20px;
  background: var(--normal-surface-action, #1579BE);
  border-radius: calc(var(--cornerRadius-s) * 1px);
  z-index: 2;
  transition: top 0.2s ease;
  pointer-events: none;
}
```

### Vertical Connection Line

A vertical line that connects the trigger to the list items:

```css
.accordion-selectable-list-vertical-line {
  position: absolute;
  left: 9.5px;
  width: 1px;
  background: var(--normal-surface-cardSecondary, #D0E4F2);
  border-radius: calc(var(--cornerRadius-s) * 1px);
  z-index: 1;
  transition: top 0.2s ease, height 0.2s ease;
}
```

### Dynamic Positioning

The component automatically calculates positions for visual elements:

```jsx
const updateVerticalLinePosition = () => {
  if (triggerRef.current) {
    const parentContainer = triggerRef.current.parentElement;
    if (parentContainer) {
      const parentRect = parentContainer.getBoundingClientRect();
      const triggerRect = triggerRef.current.getBoundingClientRect();
      
      // Calculate trigger bottom (where line starts)
      const triggerBottom = triggerRect.bottom - parentRect.top;
      setVerticalLineTop(triggerBottom);
      
      // Calculate height to last item
      if (isExpanded && items.length > 0 && itemsContainerRef.current) {
        const lastItemRef = itemRefs.current[items[items.length - 1].id];
        if (lastItemRef) {
          const lastItemRect = lastItemRef.getBoundingClientRect();
          const relativeBottom = lastItemRect.bottom - parentRect.top;
          const height = relativeBottom - triggerBottom;
          setVerticalLineHeight(`${height}px`);
        }
      }
    }
  }
};
```

## 🎨 Styling

### CSS Classes

The component uses the following CSS classes:

```css
.accordion-selectable-list          /* Main container */
.accordion-selectable-list-trigger  /* Trigger wrapper */
.accordion-selectable-list-items    /* Items container */
.accordion-selectable-list-item-wrapper /* Individual item wrapper */
.accordion-selectable-list-blue-indicator /* Blue selection indicator */
.accordion-selectable-list-vertical-line /* Vertical connection line */
```

### Design Token Integration

Uses design tokens for consistent styling:

```css
/* Spacing */
margin-top: calc(var(--gapSpacing-400) * 1px);
margin-bottom: calc(var(--gapSpacing-300) * 1px);

/* Colors */
background: var(--normal-surface-page, #FFF);
color: var(--normal-typography-bodyPrimary, #222);

/* Borders */
border-radius: calc(var(--cornerRadius-s) * 1px);
border: 1px solid var(--normal-border-primary, #e0e0e0);
```

### Custom CSS Properties

Exposes CSS custom properties for customization:

```css
.accordion-selectable-list {
  --accordion-spacing: calc(var(--gapSpacing-400) * 1px);
  --indicator-color: var(--normal-surface-action, #1579BE);
  --vertical-line-color: var(--normal-surface-cardSecondary, #D0E4F2);
}
```

### Responsive Design

Mobile-first responsive design:

```css
/* Base mobile styles */
.accordion-selectable-list {
  width: 100%;
}

.accordion-selectable-list-items {
  margin-top: calc(var(--gapSpacing-300) * 1px);
}

/* Tablet and desktop enhancements */
@media (min-width: 768px) {
  .accordion-selectable-list-items {
    margin-top: calc(var(--gapSpacing-400) * 1px);
  }
}
```

## ♿ Accessibility

### ARIA Attributes

Comprehensive ARIA support:

```jsx
// AccordionTrigger
<button
  aria-expanded={expanded}
  aria-label={label}
  role="button"
  tabIndex={0}
>

// SelectableListItem
<button
  role="option"
  aria-selected={selected}
  tabIndex={disabled ? -1 : 0}
  aria-disabled={disabled}
>
```

### Keyboard Navigation

Full keyboard support:

```jsx
const handleKeyDown = (event) => {
  switch (event.key) {
    case 'Enter':
    case ' ':
      event.preventDefault();
      onSelect();
      break;
    case 'Escape':
      onClose();
      break;
  }
};
```

### Focus Management

Proper focus handling:

```jsx
// Focus first item when accordion expands
useEffect(() => {
  if (isExpanded && items.length > 0) {
    const firstItem = itemRefs.current[items[0].id];
    if (firstItem) {
      firstItem.focus();
    }
  }
}, [isExpanded, items]);
```

## ⚡ Performance

### Optimization Strategies

1. **Memoization**: Uses React.memo for performance
2. **Callback Optimization**: Event handlers memoized with useCallback
3. **Ref Usage**: DOM measurements use refs instead of state
4. **Efficient Re-renders**: Minimal state updates and conditional rendering

### Performance Best Practices

```jsx
// Memoized callbacks
const handleToggle = useCallback(() => {
  setExpanded(prev => !prev);
}, []);

// Efficient DOM measurements
const updatePositions = useCallback(() => {
  if (triggerRef.current && itemsContainerRef.current) {
    // DOM calculations
  }
}, [isExpanded, selectedItemId]);

// Conditional rendering
{isExpanded && items.length > 0 && (
  <div className="accordion-selectable-list-vertical-line" />
)}
```

### Bundle Size

- **Core Component**: ~15KB (minified + gzipped)
- **Dependencies**: ~5KB (design tokens and icons)
- **Total**: ~20KB

## 🔧 Troubleshooting

### Common Issues

#### 1. Vertical Line Not Positioning Correctly

**Problem**: Vertical line doesn't align with trigger icon or extend to last item.

**Solution**:
```jsx
// Ensure proper timing for DOM measurements
useEffect(() => {
  const timeoutId = setTimeout(updateVerticalLinePosition, 0);
  return () => clearTimeout(timeoutId);
}, [isExpanded, items]);

// Add retry mechanism
const updateVerticalLinePosition = () => {
  if (!triggerRef.current || !itemsContainerRef.current) {
    setTimeout(updateVerticalLinePosition, 50);
    return;
  }
  // ... calculation logic
};
```

#### 2. Blue Indicator Not Showing

**Problem**: Blue selection indicator doesn't appear on first expansion.

**Solution**:
```jsx
// Add dedicated effect for indicator calculation
useEffect(() => {
  if (isExpanded && effectiveSelectedItemId) {
    const attemptCalculation = (attempts = 0) => {
      if (attempts >= 5) return;
      
      const selectedItemRef = itemRefs.current[effectiveSelectedItemId];
      if (selectedItemRef) {
        // Calculate position
      } else {
        setTimeout(() => attemptCalculation(attempts + 1), 100);
      }
    };
    
    setTimeout(() => attemptCalculation(), 100);
  }
}, [isExpanded, effectiveSelectedItemId]);
```

#### 3. Typography Classes Causing Spacing Issues

**Problem**: Design system typography classes add unwanted spacing.

**Solution**:
```css
/* Override line-height for components */
.accordion-trigger .regular-h4,
.accordion-trigger .bold-h4 {
  line-height: 1 !important;
}

.selectable-list-item .regular-bodyLarge,
.selectable-list-item .bold-bodyLarge {
  line-height: 1 !important;
}
```

#### 4. Animation Performance Issues

**Problem**: Animations are choppy or cause layout thrashing.

**Solution**:
```css
/* Use transform instead of top/left for animations */
.accordion-selectable-list-blue-indicator {
  transform: translateY(var(--indicator-top));
  transition: transform 0.2s ease;
}

/* Use will-change for performance */
.accordion-selectable-list-items {
  will-change: max-height, opacity;
}
```

### Debug Mode

Enable debug logging for troubleshooting:

```jsx
const DEBUG = process.env.NODE_ENV === 'development';

const logDebug = (message, data) => {
  if (DEBUG) {
    console.log(`[AccordionSelectableList] ${message}`, data);
  }
};

// Usage
logDebug('Accordion expanded', { accordionId, isExpanded });
logDebug('Item selected', { itemId, selectedItemId });
logDebug('Position calculated', { indicatorPosition, verticalLineHeight });
```

### Performance Monitoring

Monitor component performance:

```jsx
// Performance monitoring
useEffect(() => {
  const startTime = performance.now();
  
  return () => {
    const endTime = performance.now();
    console.log(`AccordionSelectableList render time: ${endTime - startTime}ms`);
  };
});
```

---

## 📄 License

This component is part of the AccordionSelectableList system and is licensed under the MIT License.

## 🤝 Contributing

For contributions, please see the main project README.md for guidelines and setup instructions. 