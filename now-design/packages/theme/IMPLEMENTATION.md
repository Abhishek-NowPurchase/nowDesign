# Theming Implementation Guide

## 🚀 Quick Start

### 1. Install Dependencies
```bash
# From the root directory
npm install
```

### 2. Build Tokens
```bash
npm run build-tokens
```

### 3. Start Storybook
```bash
npm run storybook
```

## 📋 Step-by-Step Implementation

### Phase 1: Token Setup

#### Step 1: Create Base Tokens
```json
// packages/tokens/color/brand.json
{
  "brand": {
    "blue": {
      "400": { "value": "#73AFD8", "type": "color" },
      "600": { "value": "#1579BE", "type": "color" }
    },
    "grey": {
      "100": { "value": "#F2F2F2", "type": "color" },
      "1000": { "value": "#1A1A1A", "type": "color" }
    }
  }
}
```

#### Step 2: Create Theme Mappings
```json
// packages/tokens/color/themes.json
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

#### Step 3: Build Tokens
```bash
npm run build-tokens
```

**Expected Output**: `packages/tokens/dist/css/variables.css`

### Phase 2: Theme Provider Setup

#### Step 1: Create Theme Context
```jsx
// packages/theme/src/ThemeContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ 
  children, 
  defaultTheme = 'light',
  themes = ['light', 'dark'],
  enableSystemTheme = true,
  persistTheme = true 
}) => {
  const [theme, setThemeState] = useState(defaultTheme);
  const [systemTheme, setSystemTheme] = useState(null);

  // System theme detection
  useEffect(() => {
    if (enableSystemTheme && typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleChange = (e) => setSystemTheme(e.matches ? 'dark' : 'light');
      
      setSystemTheme(mediaQuery.matches ? 'dark' : 'light');
      mediaQuery.addEventListener('change', handleChange);
      
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, [enableSystemTheme]);

  // Load persisted theme
  useEffect(() => {
    if (persistTheme && typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('now-design-theme');
      if (savedTheme && themes.includes(savedTheme)) {
        setThemeState(savedTheme);
      }
    }
  }, [persistTheme, themes]);

  // Set theme function
  const setTheme = (newTheme) => {
    if (themes.includes(newTheme)) {
      setThemeState(newTheme);
      if (persistTheme && typeof window !== 'undefined') {
        localStorage.setItem('now-design-theme', newTheme);
      }
    }
  };

  // Toggle theme function
  const toggleTheme = () => {
    const currentIndex = themes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex]);
  };

  const value = {
    theme,
    setTheme,
    toggleTheme,
    systemTheme,
    themes,
    isSystemTheme: theme === systemTheme
  };

  return (
    <ThemeContext.Provider value={value}>
      <div data-theme={theme}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export { ThemeContext };
```

#### Step 2: Create Package Exports
```jsx
// packages/theme/src/index.js
export { ThemeProvider, useTheme, ThemeContext } from './ThemeContext';
```

#### Step 3: Create Package Configuration
```json
// packages/theme/package.json
{
  "name": "@now-design/theme",
  "version": "1.0.0",
  "main": "src/index.js",
  "peerDependencies": {
    "react": ">=16.8.0"
  },
  "devDependencies": {
    "react": "^16.14.0"
  }
}
```

### Phase 3: Component Integration

#### Step 1: Import CSS Variables
```jsx
// packages/atoms/src/Button/Button.jsx
import React from 'react';
import '../../../tokens/dist/css/variables.css';
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

#### Step 2: Use Semantic Tokens
```css
/* packages/atoms/src/Button/Button.css */
.button {
  /* Theme-agnostic tokens */
  font-family: var(--font-family-body);
  font-weight: var(--font-weight-medium);
  padding: var(--gap-spacing-300-desktop) var(--gap-spacing-600-desktop);
  border-radius: var(--border-corner-radius-m);
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  
  /* Theme-aware tokens */
  background: var(--primary);
  color: var(--text);
}

.button:hover {
  background: var(--primary-hover, var(--primary));
}

.button--secondary {
  background: var(--background-secondary, var(--background));
  border: 1px solid var(--border, var(--text));
  color: var(--text);
}

/* Responsive */
@media (max-width: 1024px) {
  .button {
    padding: var(--gap-spacing-300-tablet) var(--gap-spacing-600-tablet);
  }
}

@media (max-width: 768px) {
  .button {
    padding: var(--gap-spacing-300-mobile) var(--gap-spacing-600-mobile);
  }
}
```

### Phase 4: Application Integration

#### Step 1: Wrap Your App
```jsx
// App.jsx
import React from 'react';
import { ThemeProvider } from '@now-design/theme';
import { Button } from '@now-design/atoms';

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

export default App;
```

#### Step 2: Create Theme Toggle
```jsx
// components/ThemeToggle.jsx
import React from 'react';
import { useTheme } from '@now-design/theme';

const ThemeToggle = () => {
  const { theme, toggleTheme, themes } = useTheme();
  
  return (
    <div className="theme-toggle">
      <button onClick={toggleTheme}>
        Switch to {themes[(themes.indexOf(theme) + 1) % themes.length]}
      </button>
      <span>Current: {theme}</span>
    </div>
  );
};

export default ThemeToggle;
```

### Phase 5: Storybook Integration

#### Step 1: Update Preview Configuration
```js
// .storybook/preview.js
import '../packages/tokens/dist/css/variables.css';

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
  (Story, context) => {
    const theme = context.globals.theme;
    return (
      <div data-theme={theme}>
        <Story />
      </div>
    );
  },
];
```

#### Step 2: Create Theme Stories
```jsx
// packages/theme/stories/ThemeProvider.stories.jsx
import React from 'react';
import { ThemeProvider, useTheme } from '../src';
import { Button } from '@now-design/atoms';

const ThemeDemo = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <div style={{ padding: '20px' }}>
      <h2>Current Theme: {theme}</h2>
      <Button onClick={toggleTheme}>Toggle Theme</Button>
      <div style={{ marginTop: '20px' }}>
        <Button variant="primary">Primary Button</Button>
        <Button variant="secondary">Secondary Button</Button>
      </div>
    </div>
  );
};

export default {
  title: 'Theme/ThemeProvider',
  component: ThemeProvider,
};

export const Default = () => (
  <ThemeProvider defaultTheme="light">
    <ThemeDemo />
  </ThemeProvider>
);

export const DarkTheme = () => (
  <ThemeProvider defaultTheme="dark">
    <ThemeDemo />
  </ThemeProvider>
);
```

## 🧪 Testing Your Implementation

### 1. Visual Testing
```bash
# Start Storybook
npm run storybook

# Navigate to Theme/ThemeProvider stories
# Test theme switching functionality
```

### 2. Manual Testing
```jsx
// Test in your app
import { useTheme } from '@now-design/theme';

const TestComponent = () => {
  const { theme, setTheme, themes } = useTheme();
  
  console.log('Current theme:', theme);
  console.log('Available themes:', themes);
  
  return (
    <div>
      <button onClick={() => setTheme('dark')}>Set Dark</button>
      <button onClick={() => setTheme('light')}>Set Light</button>
    </div>
  );
};
```

### 3. CSS Variable Testing
```css
/* Add this to your component for debugging */
.debug-theme {
  background: var(--primary);
  color: var(--text);
  border: 2px solid var(--border);
  padding: 10px;
  margin: 10px;
}
```

## 🔧 Troubleshooting

### Common Issues

#### 1. CSS Variables Not Loading
**Problem**: Components don't have theme colors
**Solution**: 
```jsx
// Ensure CSS is imported
import '../../../tokens/dist/css/variables.css';
```

#### 2. Theme Not Switching
**Problem**: Theme toggle doesn't work
**Solution**:
```jsx
// Check ThemeProvider is wrapping your component
<ThemeProvider defaultTheme="light">
  <YourComponent />
</ThemeProvider>
```

#### 3. Missing Token References
**Problem**: Build fails with token reference errors
**Solution**:
```bash
# Check token JSON syntax
npm run build-tokens

# Verify all referenced tokens exist
# Example: {brand.blue.600.value} must exist in brand.json
```

#### 4. Storybook Theme Issues
**Problem**: Storybook doesn't show theme changes
**Solution**:
```js
// Update .storybook/preview.js
export const decorators = [
  (Story, context) => (
    <div data-theme={context.globals.theme}>
      <Story />
    </div>
  ),
];
```

## 📚 Next Steps

### 1. Add More Themes
```json
// packages/tokens/color/themes.json
{
  "high-contrast": {
    "primary": { "value": "#000000", "type": "color" },
    "background": { "value": "#FFFFFF", "type": "color" },
    "text": { "value": "#000000", "type": "color" }
  }
}
```

### 2. Add Theme-Specific Typography
```json
// packages/tokens/typography/themes.json
{
  "light": {
    "font-weight-heading": { "value": "600", "type": "fontWeight" }
  },
  "dark": {
    "font-weight-heading": { "value": "500", "type": "fontWeight" }
  }
}
```

### 3. Add Animation Tokens
```json
// packages/tokens/animation/themes.json
{
  "light": {
    "transition-duration": { "value": "0.2s", "type": "time" }
  },
  "dark": {
    "transition-duration": { "value": "0.3s", "type": "time" }
  }
}
```

---

**Need help?** Check the troubleshooting section or refer to the main README.md for more details. 