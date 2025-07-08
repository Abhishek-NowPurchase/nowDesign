# now-design-theme

A focused React theming solution for the Now Design System. Provides a `ThemeProvider` and `useTheme` hook for robust, flexible, and scalable theming in your React app.

---

## 🎨 What is now-design-theme?
A lightweight, context-based theming provider for React. Supports light/dark/custom themes, dynamic switching, and seamless integration with CSS variables and design tokens.

---

## 📦 Installation
```sh
npm install now-design-theme
```

---

## ⚡ Quick Start
```jsx
import { ThemeProvider, useTheme } from 'now-design-theme';

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button onClick={toggleTheme}>
      Switch to {theme === 'light' ? 'Dark' : 'Light'} mode
    </button>
  );
}

function App() {
  return (
    <ThemeProvider defaultTheme="light">
      <ThemeToggle />
      {/* ...rest of your app */}
    </ThemeProvider>
  );
}
```

---

## 🏗️ Theming Concepts
- **Theme**: A set of design values (colors, backgrounds, etc.) applied via CSS variables or class names.
- **ThemeProvider**: React context provider that injects theme variables and manages theme state.
- **useTheme**: Hook to access and control the current theme.
- **Dynamic Switching**: Toggle between themes (e.g., light/dark) at runtime.
- **Custom Themes**: Extend or override built-in themes with your own values.

---

## 🧩 API Reference
### `<ThemeProvider />`
| Prop           | Type     | Default   | Description                        |
|----------------|----------|-----------|------------------------------------|
| `defaultTheme` | string   | 'light'   | Initial theme ('light', 'dark', etc.) |
| `theme`        | object   | undefined | Custom theme object (optional)     |
| `children`     | ReactNode| —         | App content                        |

### `useTheme()`
Returns an object:
```js
{
  theme,        // Current theme name
  setTheme,     // Function to set a specific theme
  toggleTheme,  // Function to toggle between themes
  themes        // Array of available themes
}
```

---

## 🚀 Advanced Theming
### Custom Themes
```jsx
const myTheme = {
  primary: '#123456',
  background: '#f0f0f0',
  text: '#222',
  // ...other variables
};

<ThemeProvider theme={myTheme} defaultTheme="light">
  <App />
</ThemeProvider>
```

### Dynamic Theme Switching
- Use `toggleTheme` or `setTheme` from `useTheme` to switch themes on user action or system preference.

### CSS Variables & Integration
- The provider injects CSS variables for all theme values at the root or a theme selector.
- Works seamlessly with [now-design-tokens](https://www.npmjs.com/package/now-design-tokens) for consistent design values.

---

## 📝 Examples
### Toggle Button
```jsx
function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button onClick={toggleTheme}>
      Switch to {theme === 'light' ? 'Dark' : 'Light'}
    </button>
  );
}
```

### Using Theme in Styled Components
```jsx
import styled from 'styled-components';

const ThemedBox = styled.div`
  background: var(--background);
  color: var(--text);
`;
```

---

## 🛠️ Troubleshooting
- **Theme not updating?** Ensure your app is wrapped in `<ThemeProvider>`.
- **Context not found?** Only call `useTheme` inside a child of `<ThemeProvider>`.
- **Custom theme not applied?** Check your theme object structure and variable names.

---

## 🤝 Contributing
- Add new themes, extend the provider, or improve documentation via PRs.
- Please ensure all code is tested and documented.

---

## License
MIT
