# Logo Components

This directory contains all company and product logos as individual, self-contained React components with configurable theme-dependent text colors.

---

## How to Consume

The logo system is designed for simplicity and performance. Each logo is a distinct component that can be imported directly. This allows for tree-shaking, ensuring that only the logos you use are included in your final application bundle.

### 1. Install the latest version of the package:
```bash
npm install now-design-atoms@latest
```

### 2. Import the specific logo component you need:
The component names are derived directly from their original filenames, in `PascalCase`.

```jsx
import {
  LogometalCloudIcon,
  LogometalCloudLogo,
  LogonowPurchaseIcon,
  LogonowPurchaseLogo,
  LogonowPurchaseMetalCloudCombinedLogo
} from 'now-design-atoms';
```

### 3. Use the component in your app:

#### **Theme-Dependent Icons (Monochrome):**
These components accept a `color` prop and are fully theme-dependent.

```jsx
<LogonowPurchaseIcon color="var(--normal-typography-bodyPrimary)" width="100" />
<LogometalCloudIcon color="var(--normal-typography-bodyPrimary)" width="100" />
```

#### **Brand Logos (Multi-Color with Configurable Text Color):**
These logos maintain their original brand colors but have configurable text elements via the `textColorVariable` prop.

```jsx
// Basic usage - uses default CSS variable (--glass-surface-disabled)
<LogonowPurchaseLogo width="200" />
<LogometalCloudLogo width="200" />
<LogonowPurchaseMetalCloudCombinedLogo width="400" />

// With custom CSS variable passed as prop
<LogonowPurchaseLogo 
  width="200" 
  textColorVariable="--my-custom-text-color" 
/>

// With different variables for different contexts
<LogonowPurchaseLogo 
  width="200" 
  textColorVariable="--header-text-color" 
/>
<LogometalCloudLogo 
  width="200" 
  textColorVariable="--footer-text-color" 
/>

// Using your design system tokens
<LogonowPurchaseLogo 
  width="200" 
  textColorVariable="--normal-typography-bodyPrimary" 
/>
```

### **CSS Variable Setup:**
```css
/* Light theme */
:root {
  --glass-surface-disabled: #1A1A1A;
  --my-custom-text-color: #2C2C2C;
  --header-text-color: #333333;
  --footer-text-color: #666666;
}

/* Dark theme */
[data-theme="dark"] {
  --glass-surface-disabled: #FFFFFF;
  --my-custom-text-color: #E0E0E0;
  --header-text-color: #FFFFFF;
  --footer-text-color: #CCCCCC;
}
```

## Configurable Color System

The logos use a flexible color system that preserves brand identity while supporting any CSS variable:

### **Brand Colors (Fixed):**
- **NowPurchase Logo**: `#2078BE`, `#4AC0EE`, `#3F96D2`, `#2078BD` (blue brand colors)
- **MetalCloud Logo**: `#929498`, `#3877B9`, `#333333` (gray/blue brand colors)
- **Gradients**: Preserved original gradient definitions

### **Configurable Text Colors:**
- **Text Elements**: Use `var(${textColorVariable}, #1A1A1A)` 
- **Default Variable**: `--glass-surface-disabled` (if no prop provided)
- **Fallback**: If CSS variable is not defined, defaults to `#1A1A1A`
- **Flexibility**: Pass any CSS variable name via `textColorVariable` prop

### **CSS Variable Examples:**
```css
/* Using your design system */
:root {
  --glass-surface-disabled: #1A1A1A;
  --normal-typography-bodyPrimary: #2C2C2C;
  --brand-text-color: #333333;
  --accent-text-color: #666666;
}

/* Dark theme */
[data-theme="dark"] {
  --glass-surface-disabled: #FFFFFF;
  --normal-typography-bodyPrimary: #E0E0E0;
  --brand-text-color: #FFFFFF;
  --accent-text-color: #CCCCCC;
}
```

## Design Philosophy: Brand Integrity + Maximum Flexibility

The logo system balances brand consistency with maximum flexibility:

- **Brand Colors Preserved**: Original multi-color brand fills are maintained
- **Text Elements Configurable**: Text portions adapt to any CSS variable via props
- **No Monochrome Override**: Logos don't become completely monochrome
- **Graceful Fallbacks**: Works without CSS variables defined
- **Parent Component Control**: CSS variable names are passed from parent components

## Adding a New Logo

1. Create a new `.jsx` file in this directory (e.g., `NewLogo.jsx`).
2. Paste the SVG code inside a React component, ensuring it is properly formatted as JSX.
3. Add standard props (`width`, `height`, `className`, etc.) and `PropTypes`.
4. Add the `textColorVariable` prop with default value `'--glass-surface-disabled'`.
5. For theme-dependent text elements, use `var(${textColorVariable}, #1A1A1A)`.
6. Export the new component from this `index.js` file.

## Supported Props

All logos support the following standard props for sizing, styling, and accessibility.

| Prop | Type | Description |
| :--- | :--- | :--- |
| `width` | string/number | Sets the width of the logo. |
| `height` | string/number | Sets the height of the logo. |
| `className`| string | Adds a custom CSS class to the root SVG element. |
| `style` | object | Allows for additional inline styles. |
| `aria-label`| string | Provides an accessible name for the logo for screen readers. |
| `title` | string | Provides a tooltip and accessible title for the logo. |
| `role` | string | Sets the ARIA role. Defaults to `img`. |
| `onClick` | function | A callback function to handle clicks. |
| `textColorVariable` | string | CSS variable name for text color (default: `'--glass-surface-disabled'`). |
| `...` | ... | Any other valid SVG attributes are passed down to the root `<svg>` element. |

## Examples

### Basic Usage
```jsx
import { LogonowPurchaseLogo, LogometalCloudLogo } from 'now-design-atoms';

function Header() {
  return (
    <header>
      <LogonowPurchaseLogo width="150" />
      <LogometalCloudLogo width="120" />
    </header>
  );
}
```

### With Custom CSS Variables
```jsx
import { LogonowPurchaseLogo } from 'now-design-atoms';

function ThemedHeader() {
  return (
    <header className="header--dark">
      <LogonowPurchaseLogo 
        width="200" 
        textColorVariable="--header-text-color" 
      />
    </header>
  );
}
```

### Using Design System Tokens
```jsx
import { LogometalCloudLogo } from 'now-design-atoms';

function BrandSection() {
  return (
    <section>
      <LogometalCloudLogo 
        width="200" 
        textColorVariable="--normal-typography-bodyPrimary" 
      />
    </section>
  );
}
```

### Different Variables for Different Contexts
```jsx
import { LogonowPurchaseLogo } from 'now-design-atoms';

function App() {
  return (
    <div>
      {/* Header with custom text color */}
      <header>
        <LogonowPurchaseLogo 
          width="150" 
          textColorVariable="--header-text-color" 
        />
      </header>
      
      {/* Footer with different text color */}
      <footer>
        <LogonowPurchaseLogo 
          width="120" 
          textColorVariable="--footer-text-color" 
        />
      </footer>
      
      {/* Main content with default */}
      <main>
        <LogonowPurchaseLogo width="200" />
      </main>
    </div>
  );
}
```

```css
/* CSS for theme support */
:root {
  --glass-surface-disabled: #1A1A1A;
  --header-text-color: #333333;
  --footer-text-color: #666666;
}

.header--dark {
  --header-text-color: #FFFFFF;
}

.footer--dark {
  --footer-text-color: #CCCCCC;
}
```

### Responsive Usage
```jsx
import { LogometalCloudLogo } from 'now-design-atoms';

function ResponsiveLogo() {
  return (
    <LogometalCloudLogo 
      width="100%" 
      height="auto"
      className="responsive-logo"
      textColorVariable="--brand-text-color"
    />
  );
}
``` 