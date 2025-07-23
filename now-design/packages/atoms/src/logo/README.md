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

### **Common Props (All Components):**
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

### **Icon-Specific Props:**
```jsx
<IconMetalCloud
  color="red"                    // string - for monochrome icons
  width="100"
  height="100"
  // ... other common props
/>
```

### **Logo-Specific Props:**
```jsx
<LogoMetalCloud
  textColorVariable="--custom-color"  // string - CSS variable name
  width="200"
  height="100"
  // ... other common props
/>
```

## 🔧 Adding New Logos

1. **Add SVG to `assets/`** with `Logo` prefix
2. **Create component in `components/`** with consistent naming
3. **Export from `index.js`**
4. **Update this README**

## 🚨 Troubleshooting

### **Import Errors:**
If you get "Element type is invalid" errors:
1. **Update package**: `npm install now-design-atoms@latest`
2. **Use correct names**: `LogoNowPurchase` (not `LogonowPurchaseLogo`)
3. **Clear cache**: `npm cache clean --force`
4. **Reinstall**: `rm -rf node_modules package-lock.json && npm install`

### **Component Not Found:**
- Ensure you're using the latest package version (`1.0.27+`)
- Check import statement matches exactly
- Restart your development server

---

*For detailed usage examples, see our Storybook documentation.* 