# Now Design System - Theming Guide

## 🎨 Overview

The Now Design System uses a **token-based theming architecture** that provides consistent, accessible, and flexible theming capabilities across all components and applications.

## 🏗️ Architecture

### Token Hierarchy
```
Base Tokens → Mapped Tokens → Semantic Tokens → Components
     ↓              ↓              ↓              ↓
  brand.json    themes.json    CSS Variables   Button.css
```

### File Structure
```
packages/
├── tokens/
│   ├── color/
│   │   ├── brand.json          # Base color tokens
│   │   └── themes.json         # Theme mappings
│   ├── scale/
│   │   ├── scale.json          # Base scale tokens
│   │   └── responsive-spacing.json
│   └── typography/
│       ├── font-families.json  # Base typography
│       └── font-weights.json
├── theme/
│   ├── src/
│   │   ├── ThemeProvider.jsx   # React context provider
│   │   ├── useTheme.js         # React hook
│   │   └── index.js            # Package exports
│   └── stories/
│       └── ThemeProvider.stories.jsx
└── atoms/
    └── src/
        └── Button/
            ├── Button.jsx       # Component using theme tokens
            ├── Button.css       # Styles using semantic tokens
            └── Button.stories.jsx
```

## 🎯 Core Concepts

### 1. Base Tokens
**Purpose**: Raw design values that serve as the foundation
**Location**: `packages/tokens/color/brand.json`
**Example**:
```json
{
  "brand": {
    "blue": {
      "600": { "value": "#1579BE", "type": "color" }
    },
    "grey": {
      "100": { "value": "#F2F2F2", "type": "color" },
      "1000": { "value": "#1A1A1A", "type": "color" }
    }
  }
}
```

### 2. Mapped Tokens (Themes)
**Purpose**: Semantic mappings that reference base tokens
**Location**: `packages/tokens/color/themes.json`
**Example**:
```json
{
  "light": {
    "primary": { "value": "{brand.blue.600.value}", "type": "color" },
    "background": { "value": "{brand.grey.100.value}", "type": "color" },
    "text": { "value": "{brand.grey.1000.value}", "type": "color" }
  },
  "dark": {
    "primary": { "value": "{brand.blue.400.value}", "type": "color" },
    "background": { "value": "{brand.grey.1000.value}", "type": "color" },
    "text": { "value": "{brand.grey.100.value}", "type": "color" }
  }
}
```

### 3. Semantic Tokens
**Purpose**: CSS variables that components consume
**Generated**: `packages/tokens/dist/css/variables.css`
**Example**:
```css
:root {
  --primary: #1579BE;
  --background: #F2F2F2;
  --text: #1A1A1A;
}

[data-theme="dark"] {
  --primary: #73AFD8;
  --background: #1A1A1A;
  --text: #F2F2F2;
}
```

## 🚀 Implementation

### 1. Theme Provider Setup

```jsx
// App.jsx
import { ThemeProvider } from '@now-design/theme';

function App() {
  return (
    <ThemeProvider defaultTheme="light">
      <YourApp />
    </ThemeProvider>
  );
}
```

### 2. Component Usage

```css
/* Button.css */
.button {
  /* Theme-agnostic tokens */
  font-family: var(--font-family-body);
  padding: var(--gap-spacing-300-desktop);
  border-radius: var(--border-corner-radius-m);
  
  /* Theme-aware tokens */
  background: var(--primary);
  color: var(--text);
  border: 1px solid var(--border);
}
```

### 3. Theme Switching

```jsx
import { useTheme } from '@now-design/theme';

function ThemeToggle() {
  const { theme, setTheme, toggleTheme } = useTheme();
  
  return (
    <button onClick={toggleTheme}>
      Switch to {theme === 'light' ? 'Dark' : 'Light'}
    </button>
  );
}
```

## 🎨 Available Themes

### Light Theme (Default)
- **Primary**: Blue 600 (#1579BE)
- **Background**: Grey 100 (#F2F2F2)
- **Text**: Grey 1000 (#1A1A1A)
- **Border**: Grey 300 (#CCCCCC)

### Dark Theme
- **Primary**: Blue 400 (#73AFD8)
- **Background**: Grey 1000 (#1A1A1A)
- **Text**: Grey 100 (#F2F2F2)
- **Border**: Grey 700 (#666666)

### High Contrast Theme
- **Primary**: Black (#000000)
- **Background**: White (#FFFFFF)
- **Text**: Black (#000000)
- **Border**: Black (#000000)

## 🔧 API Reference

### ThemeProvider Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `defaultTheme` | `string` | `'light'` | Initial theme |
| `themes` | `string[]` | `['light', 'dark']` | Available themes |
| `children` | `ReactNode` | - | Child components |

### useTheme Hook

```jsx
const {
  theme,           // Current theme name
  setTheme,        // Function to set specific theme
  toggleTheme,     // Function to toggle between light/dark
  systemTheme,     // System preference (if available)
  themes           // Available themes array
} = useTheme();
```

### Theme Context

```jsx
import { ThemeContext } from '@now-design/theme';

const themeContext = useContext(ThemeContext);
// Same properties as useTheme hook
```

## 🎯 Best Practices

### 1. Token Naming
- Use **semantic names** for theme tokens: `primary`, `text`, `background`
- Use **descriptive names** for base tokens: `brand.blue.600`, `brand.grey.100`
- Follow **kebab-case** for CSS variables: `--primary`, `--text-secondary`

### 2. Component Design
- **Always use semantic tokens** in components, never base tokens
- **Provide fallback values** for missing tokens
- **Test all themes** during development

### 3. Theme Creation
- **Start with color themes** only
- **Add scale/typography themes** only when needed
- **Ensure accessibility** with sufficient contrast ratios

### 4. Performance
- **Use CSS variables** for runtime theme switching
- **Avoid JavaScript-based** theme switching when possible
- **Leverage CSS custom properties** for smooth transitions

## 🧪 Testing

### Storybook Integration

```jsx
// Button.stories.jsx
export default {
  title: 'Atoms/Button',
  component: Button,
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        title: 'Theme',
        items: ['light', 'dark', 'high-contrast'],
      },
    },
  },
  decorators: [
    (Story, context) => (
      <ThemeProvider defaultTheme={context.globals.theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
};
```

### Manual Testing
1. **Theme Switching**: Test all available themes
2. **Responsive Behavior**: Test themes across different screen sizes
3. **Accessibility**: Verify contrast ratios meet WCAG guidelines
4. **Performance**: Ensure smooth theme transitions

## 🔄 Workflow

### Adding New Themes

1. **Update theme tokens**:
   ```json
   // packages/tokens/color/themes.json
   {
     "new-theme": {
       "primary": { "value": "{brand.purple.600.value}", "type": "color" }
     }
   }
   ```

2. **Rebuild tokens**:
   ```bash
   npm run build-tokens
   ```

3. **Update ThemeProvider**:
   ```jsx
   <ThemeProvider themes={['light', 'dark', 'new-theme']}>
   ```

4. **Test in Storybook**:
   - Add new theme to toolbar items
   - Verify all components work correctly

### Adding New Semantic Tokens

1. **Add to theme definitions**:
   ```json
   {
     "light": {
       "new-token": { "value": "{brand.blue.500.value}", "type": "color" }
     }
   }
   ```

2. **Use in components**:
   ```css
   .component {
     background: var(--new-token);
   }
   ```

3. **Rebuild and test**:
   ```bash
   npm run build-tokens
   ```

## 🚨 Troubleshooting

### Common Issues

#### Theme Not Switching
- **Check**: ThemeProvider is wrapping your component
- **Check**: CSS variables are properly generated
- **Check**: `data-theme` attribute is set on root element

#### Missing CSS Variables
- **Check**: Token JSON syntax is correct
- **Check**: Style Dictionary build completed successfully
- **Check**: CSS file is imported in your application

#### Performance Issues
- **Check**: Using CSS variables, not JavaScript
- **Check**: Avoiding unnecessary re-renders
- **Check**: CSS transitions are hardware-accelerated

### Debug Tools

```jsx
// Debug theme context
const themeContext = useTheme();
console.log('Current theme:', themeContext.theme);
console.log('Available themes:', themeContext.themes);
```

```css
/* Debug CSS variables */
.debug-theme {
  background: var(--primary);
  color: var(--text);
  border: 2px solid var(--border);
}
```

## 📚 Examples

### Complete Component Example

```jsx
// Button.jsx
import React from 'react';
import './Button.css';

const Button = ({ children, variant = 'primary', ...props }) => {
  return (
    <button 
      className={`button button--${variant}`} 
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
```

```css
/* Button.css */
.button {
  /* Theme-agnostic */
  font-family: var(--font-family-body);
  font-weight: var(--font-weight-medium);
  padding: var(--gap-spacing-300-desktop) var(--gap-spacing-600-desktop);
  border-radius: var(--border-corner-radius-m);
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  
  /* Theme-aware */
  background: var(--primary);
  color: var(--text);
}

.button:hover {
  background: var(--primary-hover);
}

.button--secondary {
  background: var(--background-secondary);
  border: 1px solid var(--border);
}

/* Responsive */
@media (max-width: 1024px) {
  .button {
    padding: var(--gap-spacing-300-tablet) var(--gap-spacing-600-tablet);
  }
}
```

### Application Example

```jsx
// App.jsx
import React from 'react';
import { ThemeProvider } from '@now-design/theme';
import { Button } from '@now-design/atoms';
import ThemeToggle from './ThemeToggle';

function App() {
  return (
    <ThemeProvider defaultTheme="light">
      <div className="app">
        <header>
          <h1>My App</h1>
          <ThemeToggle />
        </header>
        <main>
          <Button variant="primary">Primary Action</Button>
          <Button variant="secondary">Secondary Action</Button>
        </main>
      </div>
    </ThemeProvider>
  );
}
```

## 🔗 Related Documentation

- [Design Tokens Guide](../tokens/README.md)
- [Component Development Guide](../atoms/README.md)
- [Style Dictionary Configuration](../../style-dictionary.config.js)
- [Storybook Setup](../../.storybook/README.md)

## 🤝 Contributing

When contributing to the theming system:

1. **Follow the token hierarchy** (Base → Mapped → Semantic)
2. **Test all themes** before submitting
3. **Update documentation** for new features
4. **Ensure accessibility** compliance
5. **Add Storybook examples** for new themes

---

**Need help?** Check the troubleshooting section or create an issue in the repository. 