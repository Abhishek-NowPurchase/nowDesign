# Theming Architecture - Technical Deep Dive

## 🏗️ System Overview

The Now Design System theming architecture is built on **CSS Custom Properties** with **React Context** for state management, providing a performant and flexible theming solution.

## 🎯 Design Principles

### 1. **CSS-First Approach**
- **Why**: CSS variables provide better performance than JavaScript-based theming
- **How**: All theme switching happens via CSS `data-theme` attributes
- **Benefit**: No component re-renders during theme changes

### 2. **Token-Based Architecture**
- **Why**: Ensures consistency and maintainability
- **How**: Base tokens → Mapped tokens → Semantic tokens → Components
- **Benefit**: Single source of truth for all design values

### 3. **Progressive Enhancement**
- **Why**: Works without JavaScript, accessible by default
- **How**: CSS variables with fallback values
- **Benefit**: Graceful degradation and better accessibility

## 🔧 Technical Implementation

### CSS Variable Generation

```css
/* Generated CSS Structure */
:root {
  /* Base tokens (theme-agnostic) */
  --brand-blue-600: #1579BE;
  --gap-spacing-300-desktop: 12px;
  --font-family-body: 'Oxanium';
  
  /* Light theme (default) */
  --primary: #1579BE;
  --background: #F2F2F2;
  --text: #1A1A1A;
}

[data-theme="dark"] {
  /* Dark theme overrides */
  --primary: #73AFD8;
  --background: #1A1A1A;
  --text: #F2F2F2;
}

/* Responsive overrides */
@media (max-width: 1024px) {
  :root {
    --gap-spacing-300: 8px;
  }
}
```

### React Context Structure

```jsx
// Theme Context Value
const themeContext = {
  theme: 'light',                    // Current theme name
  setTheme: (theme) => {},           // Set specific theme
  toggleTheme: () => {},             // Toggle light/dark
  systemTheme: 'dark',               // System preference
  themes: ['light', 'dark'],         // Available themes
  isSystemTheme: false               // Using system theme?
};
```

### DOM Structure

```html
<!-- Theme Provider renders this structure -->
<div data-theme="light">
  <YourApp />
</div>

<!-- Theme switching updates the data-theme attribute -->
<div data-theme="dark">
  <YourApp />
</div>
```

## 🔄 Data Flow

### 1. Token Definition Flow
```
JSON Files → Style Dictionary → CSS Variables → Components
     ↓              ↓                ↓            ↓
brand.json    build-tokens.js   variables.css  Button.css
```

### 2. Theme Switching Flow
```
User Action → React Context → DOM Update → CSS Variables → Visual Change
     ↓              ↓            ↓            ↓            ↓
Click Toggle   setTheme()   data-theme    --primary     Button Color
```

### 3. Component Consumption Flow
```
Component CSS → CSS Variables → Theme Context → Visual Rendering
      ↓              ↓              ↓              ↓
Button.css    var(--primary)   [data-theme]    Blue Button
```

## 🎨 Theme Token Structure

### Base Token Structure
```json
{
  "brand": {
    "blue": {
      "600": { "value": "#1579BE", "type": "color" }
    }
  }
}
```

### Mapped Token Structure
```json
{
  "light": {
    "primary": { "value": "{brand.blue.600.value}", "type": "color" }
  },
  "dark": {
    "primary": { "value": "{brand.blue.400.value}", "type": "color" }
  }
}
```

### Generated CSS Structure
```css
:root {
  --brand-blue-600: #1579BE;
  --brand-blue-400: #73AFD8;
  --primary: #1579BE;  /* Light theme default */
}

[data-theme="dark"] {
  --primary: #73AFD8;  /* Dark theme override */
}
```

## ⚡ Performance Considerations

### 1. **CSS Variables vs JavaScript**
```jsx
// ❌ Bad: JavaScript-based theming
const theme = useTheme();
const buttonStyle = {
  backgroundColor: theme === 'light' ? '#1579BE' : '#73AFD8'
};

// ✅ Good: CSS variable-based theming
const buttonStyle = {
  backgroundColor: 'var(--primary)'
};
```

### 2. **Minimal Re-renders**
```jsx
// ThemeProvider only re-renders when theme changes
const ThemeProvider = ({ children, defaultTheme }) => {
  const [theme, setTheme] = useState(defaultTheme);
  
  // Only re-renders when theme state changes
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div data-theme={theme}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};
```

### 3. **CSS Transitions**
```css
/* Smooth theme transitions */
* {
  transition: background-color 0.2s ease, color 0.2s ease;
}
```

## 🔒 Security & Accessibility

### 1. **CSS Variable Security**
- CSS variables are **sandboxed** to the document
- No JavaScript injection possible through CSS variables
- **Safe for user-generated content**

### 2. **Accessibility Features**
```jsx
// System theme detection
useEffect(() => {
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  const handleChange = (e) => setSystemTheme(e.matches ? 'dark' : 'light');
  
  setSystemTheme(mediaQuery.matches ? 'dark' : 'light');
  mediaQuery.addEventListener('change', handleChange);
  
  return () => mediaQuery.removeEventListener('change', handleChange);
}, []);
```

### 3. **High Contrast Support**
```css
/* High contrast theme */
[data-theme="high-contrast"] {
  --primary: #000000;
  --background: #FFFFFF;
  --text: #000000;
  --border: #000000;
}
```

## 🧪 Testing Strategy

### 1. **Unit Testing**
```jsx
// Test theme context
test('should provide theme context', () => {
  render(
    <ThemeProvider defaultTheme="dark">
      <TestComponent />
    </ThemeProvider>
  );
  
  expect(screen.getByTestId('theme')).toHaveTextContent('dark');
});
```

### 2. **Visual Testing**
```jsx
// Storybook visual tests
export const LightTheme = () => (
  <ThemeProvider defaultTheme="light">
    <Button>Test Button</Button>
  </ThemeProvider>
);

export const DarkTheme = () => (
  <ThemeProvider defaultTheme="dark">
    <Button>Test Button</Button>
  </ThemeProvider>
);
```

### 3. **Integration Testing**
```jsx
// Test theme switching
test('should switch themes', () => {
  render(<ThemeToggle />);
  
  fireEvent.click(screen.getByText('Switch to Dark'));
  expect(document.documentElement).toHaveAttribute('data-theme', 'dark');
});
```

## 🔧 Configuration Options

### ThemeProvider Configuration
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

## 🚀 Future Enhancements

### 1. **Dynamic Theme Loading**
```jsx
// Lazy load themes
const loadTheme = async (themeName) => {
  const theme = await import(`./themes/${themeName}.json`);
  return theme.default;
};
```

### 2. **Theme Composition**
```jsx
// Compose themes
const composedTheme = {
  ...baseTheme,
  ...brandTheme,
  ...customTheme
};
```

### 3. **CSS-in-JS Integration**
```jsx
// Support for styled-components
const StyledButton = styled.button`
  background: var(--primary);
  color: var(--text);
`;
```

## 🔍 Debugging Tools

### 1. **Theme Inspector**
```jsx
// Debug component
const ThemeInspector = () => {
  const theme = useTheme();
  
  return (
    <div style={{ position: 'fixed', top: 0, right: 0, background: 'white', padding: '10px' }}>
      <h4>Theme Debug</h4>
      <p>Current: {theme.theme}</p>
      <p>System: {theme.systemTheme}</p>
      <p>Available: {theme.themes.join(', ')}</p>
    </div>
  );
};
```

### 2. **CSS Variable Inspector**
```css
/* Debug CSS variables */
.debug-vars::before {
  content: "Primary: " var(--primary) " | Background: " var(--background);
  position: fixed;
  top: 0;
  left: 0;
  background: white;
  padding: 10px;
  z-index: 9999;
}
```

---

This architecture provides a robust, performant, and maintainable theming solution that scales with your design system needs. 