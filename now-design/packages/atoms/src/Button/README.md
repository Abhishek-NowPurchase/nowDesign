# Button Component

A simple, minimal Button component that demonstrates the design token system implementation.

## Features

- **Token-Based Styling**: Uses CSS variables generated from design tokens
- **Responsive Design**: Automatically adapts to different screen sizes using responsive tokens
- **Multiple Variants**: Primary, secondary, success, and danger variants
- **Size Options**: Small, medium, and large sizes
- **Accessibility**: Proper disabled states and hover effects

## Usage

```jsx
import { Button } from '@now-design/atoms';

// Basic usage
<Button>Click me</Button>

// With variants
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="success">Success</Button>
<Button variant="danger">Danger</Button>

// With sizes
<Button size="small">Small</Button>
<Button size="medium">Medium</Button>
<Button size="large">Large</Button>

// Disabled state
<Button disabled>Disabled</Button>
```

## Design Tokens Used

### Colors
- `--brand-blue-600`: Primary button background
- `--brand-grey-100`: Text color for dark backgrounds
- `--brand-grey-200`: Secondary button background
- `--brand-grey-300`: Secondary button border and hover
- `--brand-green-600`: Success button background
- `--brand-red-600`: Danger button background

### Spacing (Responsive)
- `--gap-spacing-200-desktop/tablet/mobile`: Small button padding
- `--gap-spacing-300-desktop/tablet/mobile`: Medium button padding
- `--gap-spacing-400-desktop/tablet/mobile`: Large button padding
- `--gap-spacing-600-desktop/tablet/mobile`: Horizontal padding

### Typography
- `--font-family-body`: Font family (Oxanium)
- `--font-weight-medium`: Font weight (500)

### Border Radius
- `--border-corner-radius-m`: Button border radius (6px)

## Responsive Behavior

The button automatically adjusts its padding and font size based on screen size:

- **Desktop**: Full padding and font size
- **Tablet (≤1024px)**: Reduced padding
- **Mobile (≤600px)**: Minimal padding and smaller font size

## Testing

Open Storybook and navigate to the Button component to see:
- All variants and sizes
- Responsive behavior (resize browser window)
- Token demonstration
- Interactive controls

## Implementation Notes

This component serves as a test case for the design token system. It demonstrates:
1. How tokens are consumed in components
2. Responsive token usage
3. Fallback values for missing tokens
4. CSS variable integration 