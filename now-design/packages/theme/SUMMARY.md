# Theming Package Summary

## 📚 Documentation Overview

The Now Design System theming package provides comprehensive documentation to help you implement and use the theming system effectively.

### 📖 Available Documentation

1. **[README.md](./README.md)** - Main theming guide with concepts, implementation, and API reference
2. **[ARCHITECTURE.md](./ARCHITECTURE.md)** - Technical deep dive into system design and implementation
3. **[IMPLEMENTATION.md](./IMPLEMENTATION.md)** - Step-by-step implementation guide
4. **[BEST_PRACTICES.md](./BEST_PRACTICES.md)** - Best practices and anti-patterns to avoid
5. **[EXAMPLES.md](./EXAMPLES.md)** - Comprehensive examples and use cases

## 🚀 Quick Start

### 1. Install and Setup
```bash
# From the root directory
npm install
npm run build-tokens
```

### 2. Basic Usage
```jsx
import { ThemeProvider, useTheme } from '@now-design/theme';

function App() {
  return (
    <ThemeProvider defaultTheme="light">
      <YourApp />
    </ThemeProvider>
  );
}

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button onClick={toggleTheme}>
      Switch to {theme === 'light' ? 'Dark' : 'Light'}
    </button>
  );
}
```

### 3. Component Integration
```css
/* Use semantic tokens in your CSS */
.button {
  background: var(--primary);
  color: var(--text-on-primary);
  padding: var(--gap-spacing-300-desktop);
  border-radius: var(--border-corner-radius-m);
}
```

## 🎯 Key Concepts

### Token Hierarchy
```
Base Tokens → Mapped Tokens → Semantic Tokens → Components
     ↓              ↓              ↓              ↓
  brand.json    themes.json    CSS Variables   Button.css
```

### Theme Architecture
- **CSS-First**: All theme switching via CSS variables
- **Token-Based**: Consistent design values through tokens
- **Progressive Enhancement**: Works without JavaScript
- **Accessible**: Built-in accessibility features

## 🔧 Core Features

### ThemeProvider
- Theme state management
- System theme detection
- Theme persistence
- Multiple theme support

### useTheme Hook
- Current theme access
- Theme switching functions
- System theme information
- Available themes list

### CSS Variables
- Runtime theme switching
- Responsive design support
- Smooth transitions
- Fallback values

## 📋 Implementation Checklist

### Phase 1: Token Setup
- [ ] Create base tokens (`brand.json`)
- [ ] Create theme mappings (`themes.json`)
- [ ] Build tokens (`npm run build-tokens`)
- [ ] Verify CSS variables generation

### Phase 2: Theme Provider
- [ ] Install theme package
- [ ] Wrap app with ThemeProvider
- [ ] Test theme switching
- [ ] Verify system theme detection

### Phase 3: Component Integration
- [ ] Import CSS variables
- [ ] Use semantic tokens in components
- [ ] Test all themes
- [ ] Verify responsive behavior

### Phase 4: Testing
- [ ] Visual regression testing
- [ ] Accessibility testing
- [ ] Performance testing
- [ ] Cross-browser testing

## 🎨 Available Themes

### Light Theme (Default)
- Primary: Blue 600 (#1579BE)
- Background: Grey 100 (#F2F2F2)
- Text: Grey 1000 (#1A1A1A)

### Dark Theme
- Primary: Blue 400 (#73AFD8)
- Background: Grey 1000 (#1A1A1A)
- Text: Grey 100 (#F2F2F2)

### High Contrast Theme
- Primary: Black (#000000)
- Background: White (#FFFFFF)
- Text: Black (#000000)

## 🔧 Configuration Options

### ThemeProvider Props
```jsx
<ThemeProvider
  defaultTheme="light"           // Initial theme
  themes={['light', 'dark']}     // Available themes
  enableSystemTheme={true}       // Auto-detect system theme
  persistTheme={true}            // Save theme preference
  transitionDuration={200}       // CSS transition duration
>
  {children}
</ThemeProvider>
```

### Style Dictionary Configuration
```javascript
// style-dictionary.config.js
module.exports = {
  source: ['packages/tokens/**/*.json'],
  platforms: {
    css: {
      transforms: ['attribute/cti', 'name/cti/kebab'],
      buildPath: 'packages/tokens/dist/',
      files: [
        {
          destination: 'css/variables.css',
          format: 'css/variables-responsive'
        }
      ]
    }
  }
};
```

## 🧪 Testing

### Storybook Integration
```jsx
// .storybook/preview.js
export const globalTypes = {
  theme: {
    description: 'Global theme for components',
    defaultValue: 'light',
    toolbar: {
      title: 'Theme',
      items: ['light', 'dark', 'high-contrast'],
    },
  },
};

export const decorators = [
  (Story, context) => (
    <div data-theme={context.globals.theme}>
      <Story />
    </div>
  ),
];
```

### Manual Testing
```jsx
// Test theme switching
const { theme, setTheme, themes } = useTheme();
console.log('Current theme:', theme);
console.log('Available themes:', themes);
```

## 🚨 Common Issues

### Theme Not Switching
- Check ThemeProvider is wrapping your component
- Verify CSS variables are properly generated
- Ensure `data-theme` attribute is set

### Missing CSS Variables
- Check token JSON syntax
- Verify Style Dictionary build completed
- Ensure CSS file is imported

### Performance Issues
- Use CSS variables, not JavaScript
- Avoid unnecessary re-renders
- Leverage CSS transitions

## 📚 Next Steps

### 1. Read the Documentation
- Start with [README.md](./README.md) for overview
- Review [ARCHITECTURE.md](./ARCHITECTURE.md) for technical details
- Follow [IMPLEMENTATION.md](./IMPLEMENTATION.md) for step-by-step guide

### 2. Explore Examples
- Check [EXAMPLES.md](./EXAMPLES.md) for implementation patterns
- Review [BEST_PRACTICES.md](./BEST_PRACTICES.md) for guidelines

### 3. Start Building
- Create your first themed component
- Test theme switching functionality
- Add more themes as needed

### 4. Contribute
- Follow best practices
- Test all themes
- Update documentation
- Ensure accessibility compliance

## 🔗 Related Resources

- [Design Tokens Guide](../tokens/README.md)
- [Component Development Guide](../atoms/README.md)
- [Style Dictionary Configuration](../../style-dictionary.config.js)
- [Storybook Setup](../../.storybook/README.md)

## 🤝 Support

If you need help with the theming system:

1. Check the troubleshooting sections in the documentation
2. Review the examples for implementation patterns
3. Test with the provided Storybook stories
4. Create an issue in the repository

---

**Happy Theming! 🎨**

The Now Design System theming package provides everything you need to create beautiful, accessible, and maintainable themed applications. 