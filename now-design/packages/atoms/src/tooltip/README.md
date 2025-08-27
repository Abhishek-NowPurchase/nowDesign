# Tooltip Atom Component

A flexible, accessible tooltip component with glass morphism design, theme-aware styling, and 8-position support. Built with React and integrated with the now-design system.

## 📦 Installation

```bash
npm install now-design-atoms
# or
yarn add now-design-atoms
```

## 🚀 Quick Start

```jsx
import { Tooltip } from 'now-design-atoms';

function MyComponent() {
  return (
    <Tooltip content="This is a helpful tooltip">
      <button>Hover me</button>
    </Tooltip>
  );
}
```

## 📋 API Reference

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | **Required.** The trigger element |
| `content` | `string \| ReactNode` | - | **Required.** Tooltip content |
| `position` | `'top' \| 'top-start' \| 'top-end' \| 'bottom' \| 'bottom-start' \| 'bottom-end' \| 'left' \| 'right'` | `'top'` | Tooltip position relative to trigger |
| `trigger` | `'hover' \| 'click' \| 'focus'` | `'hover'` | How tooltip is activated |
| `disabled` | `boolean` | `false` | Disable tooltip functionality |
| `delay` | `number` | `0` | Delay before showing tooltip (ms) |
| `icon` | `ReactNode` | `SystemInformation2Line` | Custom icon component |
| `iconColor` | `string` | `'#E3E3E3'` | Icon color (can be overridden by parent) |
| `className` | `string` | `''` | Additional CSS classes |
| `style` | `object` | `{}` | Additional inline styles |

### Position Options

The tooltip supports 8 different positions:

- `top` - Above the trigger, centered
- `top-start` - Above the trigger, aligned to start
- `top-end` - Above the trigger, aligned to end
- `bottom` - Below the trigger, centered
- `bottom-start` - Below the trigger, aligned to start
- `bottom-end` - Below the trigger, aligned to end
- `left` - To the left of the trigger
- `right` - To the right of the trigger

## 🎨 Design System Integration

### Glass Morphism Design

The tooltip uses a sophisticated glass morphism effect with:

```css
.tooltip-content {
  background: var(--glass-surface-glass, rgba(0, 0, 0, 0.60));
  border: var(--borderWidth-s, 1px) solid var(--glassStroke, rgba(255, 255, 255, 0.60));
  backdrop-filter: blur(calc(var(--effects-blur-l, 32px) / 2));
  border-radius: var(--cornerRadius-m, 8px);
}
```

### Theme Awareness

The component automatically responds to theme changes using the `useTheme` hook:

```jsx
const { theme } = useTheme(); // Forces re-render on theme changes
```

CSS variables automatically adapt to light/dark themes:
- Text color: `var(--glass-typography-headingPrimary, #E8F2F8)`
- Background: `var(--glass-surface-glass, rgba(0, 0, 0, 0.60))`
- Border: `var(--glassStroke, rgba(255, 255, 255, 0.60))`

### Typography

Uses the design system's typography classes:
- Text: `regular-h4` class
- Responsive to theme changes
- Consistent with overall design language

## 💡 Usage Examples

### Basic Usage

```jsx
import { Tooltip } from 'now-design-atoms';

<Tooltip content="Simple tooltip">
  <button>Hover for info</button>
</Tooltip>
```

### Custom Position

```jsx
<Tooltip content="Custom positioned tooltip" position="bottom-start">
  <button>Bottom start tooltip</button>
</Tooltip>
```

### Custom Icon

```jsx
import { SystemAddFill } from 'now-design-icons';

<Tooltip 
  content="Custom icon tooltip" 
  icon={<SystemAddFill width={20} height={20} />}
  iconColor="#1579BE"
>
  <button>Custom icon</button>
</Tooltip>
```

### Click Trigger

```jsx
<Tooltip content="Click to show tooltip" trigger="click">
  <button>Click me</button>
</Tooltip>
```

### Rich Content

```jsx
<Tooltip 
  content={
    <div>
      <h4>Rich Content</h4>
      <p>This tooltip contains multiple elements</p>
      <button>Action</button>
    </div>
  }
>
  <button>Rich tooltip</button>
</Tooltip>
```

### Disabled State

```jsx
<Tooltip content="This won't show" disabled>
  <button>Disabled tooltip</button>
</Tooltip>
```

### With Delay

```jsx
<Tooltip content="Delayed tooltip" delay={500}>
  <button>Wait 500ms</button>
</Tooltip>
```

## ♿ Accessibility

The tooltip component follows WCAG 2.1 AA guidelines:

### Keyboard Navigation
- **Escape key**: Closes tooltip
- **Focus management**: Proper focus handling for all trigger types
- **ARIA attributes**: `aria-describedby` for screen readers

### Screen Reader Support
```jsx
// Automatically adds aria-describedby when tooltip is visible
<button aria-describedby="tooltip-123">Trigger</button>
<div id="tooltip-123" role="tooltip">Content</div>
```

### Focus Triggers
```jsx
<Tooltip content="Focus tooltip" trigger="focus">
  <input type="text" placeholder="Focus me" />
</Tooltip>
```

## 🎯 Advanced Features

### Auto-Positioning

The tooltip automatically adjusts its position to prevent going off-screen:

```jsx
// If 'top' position would go off-screen, automatically switches to 'bottom'
<Tooltip content="Auto-positioning" position="top">
  <button>Near top edge</button>
</Tooltip>
```

### Custom Styling

```jsx
<Tooltip 
  content="Custom styled tooltip"
  className="my-custom-tooltip"
  style={{ maxWidth: '300px' }}
>
  <button>Custom style</button>
</Tooltip>
```

### Multiple Tooltips

```jsx
<div>
  <Tooltip content="First tooltip" position="top">
    <button>First</button>
  </Tooltip>
  <Tooltip content="Second tooltip" position="bottom">
    <button>Second</button>
  </Tooltip>
</div>
```

## 🔧 Customization

### CSS Custom Properties

Override design tokens for custom theming:

```css
.my-tooltip {
  --glass-surface-glass: rgba(0, 0, 0, 0.80);
  --glass-typography-headingPrimary: #FFFFFF;
  --glassStroke: rgba(255, 255, 255, 0.80);
}
```

### Custom Icon Components

```jsx
const CustomIcon = ({ width, height, style }) => (
  <svg width={width} height={height} style={style}>
    {/* Custom SVG content */}
  </svg>
);

<Tooltip content="Custom icon" icon={<CustomIcon />}>
  <button>Custom</button>
</Tooltip>
```

## 🧪 Testing

### Unit Tests

```jsx
import { render, screen, fireEvent } from '@testing-library/react';
import { Tooltip } from 'now-design-atoms';

test('tooltip shows on hover', () => {
  render(
    <Tooltip content="Test tooltip">
      <button>Trigger</button>
    </Tooltip>
  );
  
  fireEvent.mouseEnter(screen.getByRole('button'));
  expect(screen.getByText('Test tooltip')).toBeInTheDocument();
});
```

### Integration Tests

```jsx
test('tooltip responds to theme changes', () => {
  const { rerender } = render(
    <ThemeProvider defaultTheme="light">
      <Tooltip content="Theme aware">
        <button>Test</button>
      </Tooltip>
    </ThemeProvider>
  );
  
  // Change theme
  rerender(
    <ThemeProvider defaultTheme="dark">
      <Tooltip content="Theme aware">
        <button>Test</button>
      </Tooltip>
    </ThemeProvider>
  );
  
  // Tooltip should re-render with new theme
});
```

## 📱 Responsive Behavior

The tooltip is fully responsive and works across all device sizes:

- **Mobile**: Touch-friendly interactions
- **Tablet**: Optimized positioning for medium screens
- **Desktop**: Full feature set with hover interactions

## 🔄 Performance

### Optimizations

- **Lazy rendering**: Tooltip content only renders when visible
- **Debounced positioning**: Efficient position calculations
- **Memoized callbacks**: Prevents unnecessary re-renders
- **Theme-aware re-renders**: Only updates when theme actually changes

### Bundle Size

- **Core component**: ~8KB (gzipped)
- **With all features**: ~12KB (gzipped)
- **Tree-shakeable**: Only imports what you use

## 🌐 Browser Support

- **Modern browsers**: Chrome 88+, Firefox 85+, Safari 14+, Edge 88+
- **Mobile browsers**: iOS Safari 14+, Chrome Mobile 88+
- **Fallbacks**: Graceful degradation for older browsers

## 🔗 Dependencies

### Required
- `react`: ^16.14.0
- `react-dom`: ^16.14.0
- `now-design-theme`: ^1.0.5 (for theme integration)
- `now-design-icons`: ^1.0.4 (for default icon)

### Optional
- `prop-types`: ^15.8.1 (for development)

## 📄 License

MIT License - see [LICENSE](../../LICENSE) for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests
5. Submit a pull request

### Development Setup

```bash
git clone <repository>
cd now-design-atoms
npm install
npm run dev
```

## 📚 Related Components

- [Button](../button/README.md) - Interactive button component
- [Checkbox](../checkbox/README.md) - Form input component
- [Icon](../../../node_modules/now-design-atoms/dist/icon/README.md) - Icon component
- [Typography](../../../node_modules/now-design-atoms/dist/typography/README.md) - Text component

## 🆘 Troubleshooting

### Common Issues

**Tooltip not showing:**
- Check if `disabled` prop is set to `true`
- Verify trigger element is properly wrapped
- Ensure content prop is provided

**Theme not updating:**
- Verify `ThemeProvider` is wrapping the component
- Check if `useTheme` hook is working
- Ensure CSS variables are properly defined

**Position issues:**
- Check if trigger element has proper dimensions
- Verify viewport constraints
- Test with different position values

### Debug Mode

Enable debug logging:

```jsx
<Tooltip content="Debug tooltip" debug>
  <button>Debug</button>
</Tooltip>
```

## 📈 Changelog

### v1.0.0
- Initial release
- Glass morphism design
- 8-position support
- Theme integration
- Accessibility features

### v1.1.0
- Added auto-positioning
- Improved performance
- Enhanced accessibility
- Better mobile support
