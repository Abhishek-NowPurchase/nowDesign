# Label Component

A flexible, accessible label component that supports multiple sizes, required field indicators, and informational tooltips with configurable positioning.

## Features

- **Two Size Variants**: Small (inline-flex) and Large (fixed width)
- **Required Field Support**: Red asterisk indicator with proper accessibility
- **Info Tooltips**: Integrated tooltip system with hover interaction
- **Flexible Positioning**: Info icon can be positioned left or right of text
- **Design System Integration**: Uses design tokens for consistent theming
- **Accessibility**: WCAG compliant with proper ARIA attributes
- **Responsive Design**: Adapts to different screen sizes
- **Dark Theme Support**: Automatic theme detection and styling

## Installation

```bash
npm install @your-org/design-atoms
```

## Usage

### Basic Usage

```jsx
import { Label } from '@your-org/design-atoms';

// Basic label
<Label>Email Address</Label>

// Required field
<Label required>Email Address</Label>

// With info tooltip
<Label info="Enter your email address">Email Address</Label>

// Small variant
<Label size="small">Tag Label</Label>
```

### Advanced Usage

```jsx
import { Label } from '@your-org/design-atoms';

// Large label with all features
<Label 
  size="large"
  required
  info="This field is required and must be a valid email address"
>
  Email Address
</Label>

// Small label with info on the left
<Label 
  size="small"
  info="Info icon on the left"
  infoPosition="left"
>
  Tag Label
</Label>

// Custom styling
<Label 
  size="large"
  required
  className="custom-label-class"
  style={{ marginBottom: '16px' }}
>
  Custom Label
</Label>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `node` | **required** | The text content of the label |
| `size` | `'small' \| 'large'` | `'large'` | Size variant of the label |
| `required` | `boolean` | `false` | Whether the field is required (shows asterisk) |
| `info` | `string` | `undefined` | Tooltip content for the info icon |
| `infoPosition` | `'left' \| 'right'` | `'right'` | Position of the info icon relative to text |
| `className` | `string` | `undefined` | Additional CSS classes |
| `...props` | `object` | `{}` | Additional HTML attributes |

## Design Specifications

### Small Variant
- **Typography**: `bold-h5`
- **Color**: `var(--normal-typography-headingSecondary, #666)`
- **Layout**: `display: inline-flex; padding: 4px; align-items: center; gap: 4px`
- **Style**: `border-radius: 4px; background: #FFF`

### Large Variant
- **Typography**: `bold-h4`
- **Color**: `var(--normal-typography-headingPrimary, #0D0D0D)`
- **Layout**: `display: flex; width: 218px; height: 40px; padding: 10px 0 10px 10px; align-items: center; gap: 8px`

### Required Asterisk
- **Dimensions**: `width: 4px; height: 4px`
- **Color**: Red (`var(--semantic-color-error, #FF0000)`)

### Info Icon
- **Icon**: `SystemInformation2Line` from now-design-icons
- **Size**: 16px (small), 20px (large)
- **Color**: Orange (`var(--brand-orange-500, #FF6B35)`)
- **Tooltip**: Hover-triggered tooltip with provided content

## CSS Classes

### Base Classes
- `.label` - Base label container
- `.label--small` - Small variant styles
- `.label--large` - Large variant styles
- `.label--required` - Required field indicator
- `.label--has-info` - Has info icon
- `.label--info-left` - Info icon positioned on the left

### Element Classes
- `.label__text` - Text content container
- `.label__text--small` - Small text styles
- `.label__text--large` - Large text styles
- `.label__required` - Required asterisk
- `.label__required--small` - Small required asterisk
- `.label__required--large` - Large required asterisk
- `.label__info` - Info icon container
- `.label__info--small` - Small info icon
- `.label__info--large` - Large info icon

## Design System Integration

The Label component integrates seamlessly with the design system:

- **Typography**: Uses design token typography scales (`bold-h4`, `bold-h5`)
- **Colors**: Leverages semantic color tokens for consistency
- **Spacing**: Uses standardized spacing tokens (`gapSpacing-100`, `gapSpacing-200`)
- **Border Radius**: Uses corner radius tokens (`cornerRadius-s`)
- **Icons**: Integrates with the icon system (`SystemInformation2Line`)

## Accessibility

- **Semantic HTML**: Uses proper `<div>` structure with appropriate ARIA attributes
- **Keyboard Navigation**: Info icon is focusable and supports keyboard interaction
- **Screen Readers**: Required asterisk and tooltip content are properly announced
- **Color Contrast**: Meets WCAG AA standards for color contrast
- **Focus Indicators**: Clear focus indicators for interactive elements

## Browser Support

- **Modern Browsers**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **CSS Features**: CSS Grid, Flexbox, CSS Custom Properties, `calc()`
- **JavaScript**: ES6+ features, React 16.14.0+

## Dependencies

- **React**: ^16.14.0
- **PropTypes**: For prop validation
- **now-design-icons**: For the info icon
- **Tooltip Component**: For tooltip functionality

## Examples

### Form Labels
```jsx
<form>
  <Label required info="Enter your full name as it appears on your ID">
    Full Name
  </Label>
  <input type="text" />
  
  <Label required info="Must be a valid email address">
    Email Address
  </Label>
  <input type="email" />
</form>
```

### Tag Labels
```jsx
<div>
  <Label size="small">JavaScript</Label>
  <Label size="small" info="React is a JavaScript library">React</Label>
  <Label size="small" info="TypeScript adds static typing to JavaScript" infoPosition="left">
    TypeScript
  </Label>
</div>
```

### Interactive Demo
```jsx
<Label 
  size="large"
  required
  info="This is a comprehensive example showing all features of the Label component"
>
  Comprehensive Example
</Label>
```

## Testing

```jsx
import { render, screen } from '@testing-library/react';
import { Label } from './Label';

test('renders label with text', () => {
  render(<Label>Test Label</Label>);
  expect(screen.getByText('Test Label')).toBeInTheDocument();
});

test('shows required asterisk when required prop is true', () => {
  render(<Label required>Required Label</Label>);
  expect(screen.getByText('*')).toBeInTheDocument();
});

test('shows info icon when info prop is provided', () => {
  render(<Label info="Help text">Label with Info</Label>);
  expect(screen.getByRole('button')).toBeInTheDocument();
});
```

## Package Structure

```
src/components/atoms/label/
├── Label.jsx              # Main component
├── Label.css              # Component styles
├── LabelShowcase.jsx      # Demo component
├── LabelShowcase.css      # Demo styles
├── index.js               # Exports
└── README.md              # Documentation
```

## Implementation Notes

- **Flexible Layout**: Uses CSS Flexbox for responsive layouts
- **Design Tokens**: All values use CSS custom properties for theming
- **Component Composition**: Integrates with Tooltip component for info functionality
- **Performance**: Minimal re-renders with efficient state management
- **Maintainability**: Clean, well-documented code following React best practices


