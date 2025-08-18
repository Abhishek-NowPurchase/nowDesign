# Button Atom

A flexible and accessible button component with multiple variants, states, and interactive behaviors.

## Features

- **3 Variants**: Primary, Secondary, Transparent
- **3 Semantic States**: Default, Error, Success  
- **3 Interactive States**: Hover, Focus, Disabled
- **Optional Content**: Left icon, text, right icon (all optional)
- **Accessible**: Proper keyboard focus management with `:focus-visible`
- **Design Token Based**: Uses CSS custom properties with `calc()` functions
- **CSS-only Focus**: No JavaScript blur() - pure CSS solution

## Usage

```jsx
import Button from './Button';

// Basic usage
<Button>Click me</Button>

// With icons
<Button 
  leftIcon={<Icon />} 
  rightIcon={<ArrowIcon />}
>
  Submit
</Button>

// Different variants
<Button variant="secondary">Secondary</Button>
<Button variant="transparent">Transparent</Button>

// Different states
<Button state="error">Error Button</Button>
<Button state="success">Success Button</Button>
<Button disabled>Disabled</Button>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'transparent'` | `'primary'` | Button visual variant |
| `state` | `'default' \| 'error' \| 'success'` | `'default'` | Button semantic state |
| `disabled` | `boolean` | `false` | Whether button is disabled |
| `leftIcon` | `ReactNode` | - | Icon to display on the left |
| `rightIcon` | `ReactNode` | - | Icon to display on the right |
| `children` | `ReactNode` | - | Button text content |
| `onClick` | `function` | - | Click handler |
| `className` | `string` | - | Additional CSS classes |
| `...props` | `object` | - | All other HTML button props |

## State Matrix

Each variant supports all semantic states with consistent interactive behaviors:

### Primary Buttons
```jsx
<Button variant="primary" state="default">Default Primary</Button>
<Button variant="primary" state="error">Error Primary</Button>
<Button variant="primary" state="success">Success Primary</Button>
```

### Secondary Buttons
```jsx
<Button variant="secondary" state="default">Default Secondary</Button>
<Button variant="secondary" state="error">Error Secondary</Button>
<Button variant="secondary" state="success">Success Secondary</Button>
```

### Transparent Buttons
```jsx
<Button variant="transparent" state="default">Default Transparent</Button>
<Button variant="transparent" state="error">Error Transparent</Button>
<Button variant="transparent" state="success">Success Transparent</Button>
```

## Interactive States

### Hover
Automatically applied when cursor is over the button. All variants and states have hover effects.

### Focus (Keyboard Navigation)
- **Mouse Click**: No visual focus (returns to default when cursor moves away)
- **Keyboard Tab**: Shows focus state with background change + outline
- Uses `:focus-visible` for accessibility-first approach

### Disabled
```jsx
<Button disabled>Disabled Button</Button>
<Button variant="secondary" disabled>Disabled Secondary</Button>
<Button variant="transparent" state="error" disabled>Disabled Error Transparent</Button>
```

## Variants

### Primary
Solid background button for primary actions.
- **Default**: Blue background with white text
- **Error**: Red background with white text  
- **Success**: Green background with white text

### Secondary  
Outlined button for secondary actions.
- **Default**: Blue border with blue text
- **Error**: Red border with red text
- **Success**: Green border with green text

### Transparent
Borderless button for subtle actions.
- **Default**: No background, blue text
- **Error**: No background, red text
- **Success**: No background, green text

## Icon Usage

### Left Icon Only
```jsx
<Button leftIcon={<AddIcon />}>Add Item</Button>
```

### Right Icon Only  
```jsx
<Button rightIcon={<ArrowIcon />}>Next</Button>
```

### Both Icons
```jsx
<Button 
  leftIcon={<SaveIcon />} 
  rightIcon={<ArrowIcon />}
>
  Save & Continue
</Button>
```

### Icon Only (No Text)
```jsx
<Button 
  leftIcon={<MenuIcon />}
  aria-label="Open menu"
/>
```

## Design Tokens

The button uses CSS custom properties with `calc()` functions:

```css
/* Spacing */
--gapSpacing-100: 4px
--gapSpacing-200: 8px  
--gapSpacing-300: 12px

/* Border Radius */
--cornerRadius-m: 8px
--cornerRadius-l: 12px

/* Stroke Width */
--strokeWidth-s: 1

/* Colors - Surface */
--normal-surface-action: #1579BE
--normal-surface-actionHover: #0D4972
--normal-surface-disabled: #E6E6E6
--normal-surface-error: #F5D5D8
--normal-surface-success: #D5ECDB
--normal-surface-hover: #D0E4F2

/* Colors - Typography */
--normal-typography-action: #1579BE
--normal-typography-onAction: #FFF
--normal-typography-onDisabled: #808080
--normal-typography-onError: #B91C1C
--normal-typography-onSuccess: #1A612E

/* Colors - Icons */
--normal-icon-action: #1579BE
--normal-icon-onAction: #FFF
--normal-icon-onError: #B91C1C
--normal-icon-onSuccess: #1A612E

/* Colors - Borders */
--normal-border-action: #1579BE
--normal-border-active: #1579BE
--normal-border-error: #F87171
--normal-border-success: #4ADE80
```

## CSS Classes Generated

The component dynamically generates CSS classes:

- `.button` - Base button styles
- `.button--primary` - Primary variant
- `.button--secondary` - Secondary variant  
- `.button--transparent` - Transparent variant
- `.button--error` - Error state (when `state="error"`)
- `.button--success` - Success state (when `state="success"`)
- `.button__text` - Text wrapper
- `.button__icon` - Icon wrapper

## Focus Behavior (CSS-only)

```css
/* Hide focus outline for mouse clicks */
.button:focus {
  outline: none;
}

/* Show focus state only for keyboard navigation */
.button:focus-visible {
  outline: calc(var(--strokeWidth-s, 1) * 1px) solid var(--normal-border-active, #1579BE);
  outline-offset: calc(var(--gapSpacing-100, 4) * 1px);
  border-radius: calc(var(--cornerRadius-l, 12) * 1px);
}
```

## Accessibility

- ✅ **Keyboard Navigation**: Tab to focus, Enter/Space to activate
- ✅ **Focus Visible**: Only shows focus ring for keyboard users
- ✅ **Screen Readers**: Proper semantic HTML `<button>` element
- ✅ **Disabled State**: Prevents interaction and announces state
- ✅ **ARIA Support**: Works with `aria-label`, `aria-describedby`, etc.

## Examples

### Form Actions
```jsx
<div>
  <Button variant="primary" type="submit">
    Save Changes
  </Button>
  <Button variant="secondary" onClick={handleCancel}>
    Cancel  
  </Button>
</div>
```

### Status Actions
```jsx
<div>
  <Button variant="primary" state="success" leftIcon={<CheckIcon />}>
    Completed
  </Button>
  <Button variant="secondary" state="error" leftIcon={<ErrorIcon />}>
    Failed
  </Button>
</div>
```

### Navigation
```jsx
<Button 
  variant="transparent" 
  rightIcon={<ArrowRightIcon />}
  onClick={handleNext}
>
  Continue
</Button>
```

## Testing

Test the Button component by importing and using it in your application:

```jsx
import Button from './Button';

// Test different variants and states
<div>
  <Button variant="primary">Primary</Button>
  <Button variant="secondary" state="error">Secondary Error</Button>
  <Button variant="transparent" state="success" disabled>Disabled Success</Button>
</div>
```

Recommended testing scenarios:
- All variant/state combinations
- Interactive hover/focus/disabled states  
- Icon usage with different combinations
- Keyboard navigation (Tab key)
- Screen reader compatibility

## Browser Support

- ✅ **Modern Browsers**: Full support with `:focus-visible`
- ✅ **Safari 15+**: Native `:focus-visible` support
- ✅ **Chrome/Firefox**: Full support
- ⚠️ **Older Browsers**: Graceful fallback (shows focus outline for all focus)

## Package Structure

When using this component as an atom package:

```
button/
├── Button.jsx          # Main component
├── Button.css          # Styles
├── index.js            # Export
└── README.md          # Documentation
```

## Implementation Notes

### State Inheritance
Error and Success states inherit interactive behaviors (hover, focus, disabled) from their default variant, ensuring consistency without code duplication.

### CSS Specificity
Focus states use higher specificity (`.button--primary.button--error:focus-visible`) to properly override base styles.

### Design Token Integration
All measurements use `calc()` with design tokens for maintainability:
```css
border-radius: calc(var(--cornerRadius-m) * 1px);
```