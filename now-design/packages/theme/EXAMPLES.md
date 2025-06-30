# Theming Examples

## 🚀 Basic Usage

### Simple Theme Provider
```jsx
import React from 'react';
import { ThemeProvider } from '@now-design/theme';

function App() {
  return (
    <ThemeProvider defaultTheme="light">
      <YourApp />
    </ThemeProvider>
  );
}
```

### Theme Hook Usage
```jsx
import React from 'react';
import { useTheme } from '@now-design/theme';

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <button onClick={toggleTheme}>
      Switch to {theme === 'light' ? 'Dark' : 'Light'}
    </button>
  );
}
```

## 🎨 Component Examples

### Themed Button Component
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
  /* Theme-agnostic styles */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: var(--gap-spacing-300-desktop) var(--gap-spacing-600-desktop);
  border-radius: var(--border-corner-radius-m);
  font-family: var(--font-family-body);
  font-weight: var(--font-weight-medium);
  font-size: var(--font-size-body);
  line-height: var(--line-height-body);
  cursor: pointer;
  border: none;
  transition: all 0.2s ease;
  
  /* Theme-aware styles */
  background: var(--primary);
  color: var(--text-on-primary);
}

.button:hover {
  background: var(--primary-hover, var(--primary));
}

.button--secondary {
  background: var(--background-secondary);
  color: var(--text);
  border: 1px solid var(--border);
}

.button--secondary:hover {
  background: var(--background-secondary-hover);
  border-color: var(--border-hover);
}

.button--tertiary {
  background: transparent;
  color: var(--primary);
  border: 1px solid var(--primary);
}

.button--tertiary:hover {
  background: var(--primary);
  color: var(--text-on-primary);
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

### Themed Card Component
```jsx
// Card.jsx
import React from 'react';
import './Card.css';

const Card = ({ children, variant = 'default', ...props }) => {
  return (
    <div className={`card card--${variant}`} {...props}>
      {children}
    </div>
  );
};

export default Card;
```

```css
/* Card.css */
.card {
  /* Theme-agnostic styles */
  border-radius: var(--border-corner-radius-l);
  padding: var(--gap-spacing-600-desktop);
  box-shadow: var(--shadow-m);
  
  /* Theme-aware styles */
  background: var(--background);
  border: 1px solid var(--border);
}

.card--elevated {
  box-shadow: var(--shadow-l);
}

.card--outlined {
  box-shadow: none;
  border: 2px solid var(--border);
}

.card--filled {
  background: var(--background-secondary);
  border: none;
}

/* Responsive */
@media (max-width: 1024px) {
  .card {
    padding: var(--gap-spacing-600-tablet);
  }
}

@media (max-width: 768px) {
  .card {
    padding: var(--gap-spacing-600-mobile);
  }
}
```

### Themed Input Component
```jsx
// Input.jsx
import React from 'react';
import './Input.css';

const Input = ({ 
  label, 
  error, 
  variant = 'default', 
  ...props 
}) => {
  return (
    <div className="input-wrapper">
      {label && <label className="input-label">{label}</label>}
      <input 
        className={`input input--${variant} ${error ? 'input--error' : ''}`}
        {...props}
      />
      {error && <span className="input-error">{error}</span>}
    </div>
  );
};

export default Input;
```

```css
/* Input.css */
.input-wrapper {
  display: flex;
  flex-direction: column;
  gap: var(--gap-spacing-100-desktop);
}

.input-label {
  font-family: var(--font-family-body);
  font-weight: var(--font-weight-medium);
  font-size: var(--font-size-body);
  color: var(--text);
}

.input {
  /* Theme-agnostic styles */
  padding: var(--gap-spacing-300-desktop) var(--gap-spacing-400-desktop);
  border-radius: var(--border-corner-radius-s);
  font-family: var(--font-family-body);
  font-size: var(--font-size-body);
  line-height: var(--line-height-body);
  transition: all 0.2s ease;
  
  /* Theme-aware styles */
  background: var(--background);
  color: var(--text);
  border: 1px solid var(--border);
}

.input:focus {
  outline: none;
  border-color: var(--border-focus);
  box-shadow: 0 0 0 2px var(--border-focus-alpha);
}

.input--error {
  border-color: var(--error);
}

.input--error:focus {
  border-color: var(--error);
  box-shadow: 0 0 0 2px var(--error-alpha);
}

.input-error {
  font-family: var(--font-family-body);
  font-size: var(--font-size-small);
  color: var(--error);
}

/* Responsive */
@media (max-width: 1024px) {
  .input {
    padding: var(--gap-spacing-300-tablet) var(--gap-spacing-400-tablet);
  }
}

@media (max-width: 768px) {
  .input {
    padding: var(--gap-spacing-300-mobile) var(--gap-spacing-400-mobile);
  }
}
```

## 🎯 Advanced Examples

### Theme-Aware Layout Component
```jsx
// Layout.jsx
import React from 'react';
import { useTheme } from '@now-design/theme';
import './Layout.css';

const Layout = ({ children, sidebar, header }) => {
  const { theme } = useTheme();
  
  return (
    <div className={`layout layout--${theme}`}>
      {header && (
        <header className="layout-header">
          {header}
        </header>
      )}
      <div className="layout-content">
        {sidebar && (
          <aside className="layout-sidebar">
            {sidebar}
          </aside>
        )}
        <main className="layout-main">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
```

```css
/* Layout.css */
.layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: var(--background);
  color: var(--text);
}

.layout-header {
  background: var(--background-secondary);
  border-bottom: 1px solid var(--border);
  padding: var(--gap-spacing-400-desktop);
  box-shadow: var(--shadow-s);
}

.layout-content {
  display: flex;
  flex: 1;
}

.layout-sidebar {
  width: 280px;
  background: var(--background-secondary);
  border-right: 1px solid var(--border);
  padding: var(--gap-spacing-400-desktop);
}

.layout-main {
  flex: 1;
  padding: var(--gap-spacing-600-desktop);
}

/* Theme-specific adjustments */
.layout--dark .layout-header {
  background: var(--background);
  border-bottom-color: var(--border);
}

.layout--dark .layout-sidebar {
  background: var(--background);
  border-right-color: var(--border);
}
```

### Theme Toggle Component
```jsx
// ThemeToggle.jsx
import React from 'react';
import { useTheme } from '@now-design/theme';
import './ThemeToggle.css';

const ThemeToggle = ({ showLabel = true, variant = 'button' }) => {
  const { theme, toggleTheme, themes } = useTheme();
  
  const nextTheme = themes[(themes.indexOf(theme) + 1) % themes.length];
  
  if (variant === 'select') {
    return (
      <select 
        className="theme-select"
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
      >
        {themes.map(themeName => (
          <option key={themeName} value={themeName}>
            {themeName.charAt(0).toUpperCase() + themeName.slice(1)}
          </option>
        ))}
      </select>
    );
  }
  
  return (
    <button 
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={`Switch to ${nextTheme} theme`}
    >
      <span className="theme-toggle-icon">
        {theme === 'light' ? '🌙' : '☀️'}
      </span>
      {showLabel && (
        <span className="theme-toggle-label">
          {nextTheme.charAt(0).toUpperCase() + nextTheme.slice(1)}
        </span>
      )}
    </button>
  );
};

export default ThemeToggle;
```

```css
/* ThemeToggle.css */
.theme-toggle {
  display: inline-flex;
  align-items: center;
  gap: var(--gap-spacing-200-desktop);
  padding: var(--gap-spacing-300-desktop) var(--gap-spacing-400-desktop);
  border-radius: var(--border-corner-radius-m);
  border: 1px solid var(--border);
  background: var(--background-secondary);
  color: var(--text);
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: var(--font-family-body);
  font-size: var(--font-size-body);
}

.theme-toggle:hover {
  background: var(--background-secondary-hover);
  border-color: var(--border-hover);
}

.theme-toggle-icon {
  font-size: var(--font-size-large);
}

.theme-toggle-label {
  font-weight: var(--font-weight-medium);
}

.theme-select {
  padding: var(--gap-spacing-200-desktop) var(--gap-spacing-300-desktop);
  border-radius: var(--border-corner-radius-s);
  border: 1px solid var(--border);
  background: var(--background);
  color: var(--text);
  font-family: var(--font-family-body);
  font-size: var(--font-size-body);
  cursor: pointer;
}

.theme-select:focus {
  outline: none;
  border-color: var(--border-focus);
  box-shadow: 0 0 0 2px var(--border-focus-alpha);
}
```

### Theme Inspector (Debug Component)
```jsx
// ThemeInspector.jsx
import React from 'react';
import { useTheme } from '@now-design/theme';
import './ThemeInspector.css';

const ThemeInspector = ({ position = 'top-right', show = false }) => {
  const { theme, setTheme, themes, systemTheme, isSystemTheme } = useTheme();
  
  if (!show) return null;
  
  return (
    <div className={`theme-inspector theme-inspector--${position}`}>
      <h4>Theme Debug</h4>
      <div className="theme-info">
        <p><strong>Current:</strong> {theme}</p>
        <p><strong>System:</strong> {systemTheme}</p>
        <p><strong>Using System:</strong> {isSystemTheme ? 'Yes' : 'No'}</p>
        <p><strong>Available:</strong> {themes.join(', ')}</p>
      </div>
      <div className="theme-actions">
        {themes.map(themeName => (
          <button
            key={themeName}
            onClick={() => setTheme(themeName)}
            className={`theme-action ${themeName === theme ? 'theme-action--active' : ''}`}
          >
            {themeName}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ThemeInspector;
```

```css
/* ThemeInspector.css */
.theme-inspector {
  position: fixed;
  background: var(--background);
  border: 1px solid var(--border);
  border-radius: var(--border-corner-radius-m);
  padding: var(--gap-spacing-400-desktop);
  box-shadow: var(--shadow-l);
  z-index: 9999;
  max-width: 300px;
  font-family: var(--font-family-body);
  font-size: var(--font-size-small);
}

.theme-inspector--top-right {
  top: var(--gap-spacing-400-desktop);
  right: var(--gap-spacing-400-desktop);
}

.theme-inspector--top-left {
  top: var(--gap-spacing-400-desktop);
  left: var(--gap-spacing-400-desktop);
}

.theme-inspector--bottom-right {
  bottom: var(--gap-spacing-400-desktop);
  right: var(--gap-spacing-400-desktop);
}

.theme-inspector--bottom-left {
  bottom: var(--gap-spacing-400-desktop);
  left: var(--gap-spacing-400-desktop);
}

.theme-inspector h4 {
  margin: 0 0 var(--gap-spacing-300-desktop) 0;
  color: var(--text);
  font-size: var(--font-size-body);
  font-weight: var(--font-weight-bold);
}

.theme-info p {
  margin: 0 0 var(--gap-spacing-200-desktop) 0;
  color: var(--text);
}

.theme-actions {
  display: flex;
  gap: var(--gap-spacing-200-desktop);
  margin-top: var(--gap-spacing-300-desktop);
}

.theme-action {
  padding: var(--gap-spacing-200-desktop) var(--gap-spacing-300-desktop);
  border-radius: var(--border-corner-radius-s);
  border: 1px solid var(--border);
  background: var(--background-secondary);
  color: var(--text);
  cursor: pointer;
  font-size: var(--font-size-small);
  transition: all 0.2s ease;
}

.theme-action:hover {
  background: var(--background-secondary-hover);
}

.theme-action--active {
  background: var(--primary);
  color: var(--text-on-primary);
  border-color: var(--primary);
}
```

## 🎨 Application Examples

### Complete App with Theming
```jsx
// App.jsx
import React from 'react';
import { ThemeProvider } from '@now-design/theme';
import Layout from './components/Layout';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import './App.css';

function App() {
  return (
    <ThemeProvider 
      defaultTheme="light"
      themes={['light', 'dark', 'high-contrast']}
      enableSystemTheme={true}
      persistTheme={true}
    >
      <Layout
        header={<Header />}
        sidebar={<Sidebar />}
      >
        <MainContent />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
```

```css
/* App.css */
/* Global styles that work with theming */
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  font-family: var(--font-family-body);
  background: var(--background);
  color: var(--text);
  transition: background-color 0.2s ease, color 0.2s ease;
}

/* Respect reduced motion preferences */
@media (prefers-reduced-motion: reduce) {
  * {
    transition: none !important;
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
  }
}

/* High contrast mode support */
@media (prefers-contrast: high) {
  :root {
    --border: #000000;
    --border-focus: #000000;
  }
}
```

### Dashboard Example
```jsx
// Dashboard.jsx
import React from 'react';
import { useTheme } from '@now-design/theme';
import Card from './Card';
import Button from './Button';
import './Dashboard.css';

const Dashboard = () => {
  const { theme } = useTheme();
  
  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Dashboard</h1>
        <p>Welcome to your {theme} themed dashboard</p>
      </div>
      
      <div className="dashboard-grid">
        <Card variant="elevated" className="dashboard-card">
          <h3>Statistics</h3>
          <p>Your data looks great in {theme} mode!</p>
          <Button variant="primary">View Details</Button>
        </Card>
        
        <Card variant="filled" className="dashboard-card">
          <h3>Recent Activity</h3>
          <p>All activities are visible in {theme} theme.</p>
          <Button variant="secondary">See All</Button>
        </Card>
        
        <Card variant="outlined" className="dashboard-card">
          <h3>Quick Actions</h3>
          <p>Actions are clearly visible in {theme} mode.</p>
          <Button variant="tertiary">Take Action</Button>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
```

```css
/* Dashboard.css */
.dashboard {
  padding: var(--gap-spacing-600-desktop);
}

.dashboard-header {
  margin-bottom: var(--gap-spacing-800-desktop);
}

.dashboard-header h1 {
  margin: 0 0 var(--gap-spacing-200-desktop) 0;
  color: var(--text);
  font-family: var(--font-family-heading);
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-xxlarge);
}

.dashboard-header p {
  margin: 0;
  color: var(--text-secondary);
  font-size: var(--font-size-large);
}

.dashboard-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--gap-spacing-600-desktop);
}

.dashboard-card {
  display: flex;
  flex-direction: column;
  gap: var(--gap-spacing-400-desktop);
}

.dashboard-card h3 {
  margin: 0;
  color: var(--text);
  font-family: var(--font-family-heading);
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-large);
}

.dashboard-card p {
  margin: 0;
  color: var(--text-secondary);
  font-size: var(--font-size-body);
  line-height: var(--line-height-body);
}

/* Responsive */
@media (max-width: 1024px) {
  .dashboard {
    padding: var(--gap-spacing-600-tablet);
  }
  
  .dashboard-grid {
    gap: var(--gap-spacing-600-tablet);
  }
}

@media (max-width: 768px) {
  .dashboard {
    padding: var(--gap-spacing-600-mobile);
  }
  
  .dashboard-grid {
    grid-template-columns: 1fr;
    gap: var(--gap-spacing-600-mobile);
  }
}
```

## 🔧 Utility Examples

### CSS Custom Properties Debug
```css
/* Debug CSS variables */
.debug-vars::before {
  content: "Primary: " var(--primary) " | Background: " var(--background) " | Text: " var(--text);
  position: fixed;
  top: 0;
  left: 0;
  background: var(--background);
  color: var(--text);
  border: 1px solid var(--border);
  padding: var(--gap-spacing-200-desktop);
  font-family: monospace;
  font-size: var(--font-size-small);
  z-index: 9999;
  max-width: 400px;
  word-break: break-all;
}
```

### Theme Transition Utilities
```css
/* Smooth theme transitions */
.theme-transition {
  transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
}

.theme-transition * {
  transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
}

/* Disable transitions for performance */
.theme-transition--disabled {
  transition: none;
}

.theme-transition--disabled * {
  transition: none;
}
```

---

These examples demonstrate the flexibility and power of the Now Design System theming architecture. Each example follows best practices for accessibility, performance, and maintainability. 