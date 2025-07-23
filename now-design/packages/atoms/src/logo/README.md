# Logo Components

This directory contains all company and product logos as individual, self-contained React components with configurable theme-dependent text colors.

## 📁 Structure

```
src/logo/
├── assets/                    # SVG source files
│   ├── LogoMetalCloud.svg
│   ├── LogoNowPurchase.svg
│   └── LogoNowPurchaseMetalCloudCombined.svg
├── components/               # React components
│   ├── IconMetalCloud.jsx
│   ├── IconNowPurchase.jsx
│   ├── LogoMetalCloud.jsx
│   ├── LogoNowPurchase.jsx
│   └── LogoNowPurchaseMetalCloudCombined.jsx
└── index.js                 # Exports
```

---

## 🚀 How to Consume

The logo system is designed for simplicity and performance. Each logo is a distinct component that can be imported directly, allowing for tree-shaking.

### 1. Install the latest version:
```bash
npm install now-design-atoms@latest
```

### 2. Import the specific logo component:
```jsx
import {
  IconMetalCloud,
  IconNowPurchase,
  LogoMetalCloud,
  LogoNowPurchase,
  LogoNowPurchaseMetalCloudCombined
} from 'now-design-atoms';
```

### 3. Use the components:

#### **Icons (Monochrome, Theme-Dependent):**
```jsx
<IconNowPurchase color="var(--normal-typography-bodyPrimary)" width="100" />
<IconMetalCloud color="var(--normal-typography-bodyPrimary)" width="100" />
```

#### **Brand Logos (Multi-Color with Configurable Text):**
```jsx
// Basic usage - uses default CSS variable (--glass-surface-disabled)
<LogoNowPurchase width="200" />
<LogoMetalCloud width="200" />
<LogoNowPurchaseMetalCloudCombined width="400" />

// With custom CSS variable
<LogoNowPurchase 
  width="200" 
  textColorVariable="--my-custom-text-color" 
/>

// Using design system tokens
<LogoMetalCloud 
  width="200" 
  textColorVariable="--normal-typography-bodyPrimary" 
/>
```

## 🎨 Theme Support

### **CSS Variable Setup:**
```css
/* Light theme */
:root {
  --glass-surface-disabled: #1A1A1A;
  --normal-border-primary: #CCC;
  --my-custom-text-color: #2C2C2C;
}

/* Dark theme */
[data-theme="dark"] {
  --glass-surface-disabled: #FFFFFF;
  --normal-border-primary: #666;
  --my-custom-text-color: #E0E0E0;
}
```

## 🎯 Color System

### **Brand Colors (Fixed):**
- **NowPurchase**: `#2078BE`, `#4AC0EE`, `#3F96D2`, `#2078BD`
- **MetalCloud**: `#929498`, `#3877B9`, `#333333`
- **Combined**: Preserves all brand colors

### **Configurable Elements:**
- **Text**: `var(--glass-surface-disabled, #1A1A1A)`
- **Borders**: `var(--normal-border-primary, #CCC)`

## 📋 Component Props

All logo components support these standard props:

```jsx
<LogoMetalCloud
  width="200"                    // string | number
  height="100"                   // string | number
  className="my-logo"            // string
  style={{ margin: '20px' }}     // object
  onClick={() => console.log()}  // function
  aria-label="Logo description"  // string
  title="Logo title"             // string
  role="img"                     // string
/>
```

## 🔧 Adding New Logos

1. **Add SVG to `assets/`** with `Logo` prefix
2. **Create component in `components/`** with consistent naming
3. **Export from `index.js`**
4. **Update this README**

---

*For detailed usage examples, see our Storybook documentation.* 