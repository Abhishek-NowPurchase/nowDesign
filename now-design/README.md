# Now Design System

A modular, scalable design system built with Style Dictionary, React, and Storybook. Features theme-aware CSS variables, responsive design tokens, and a comprehensive component library.

## 📋 Table of Contents

1. [Overview](#overview)
2. [Quick Start](#quick-start)
3. [Architecture](#architecture)
4. [File Processing Flow](#file-processing-flow)
5. [Token System](#token-system)
6. [Build Process](#build-process)
7. [Usage Examples](#usage-examples)
8. [Development Workflow](#development-workflow)

---

## 🎯 Overview

The Now Design System is a modern design system that provides:

- **🎨 Design Tokens**: Centralized design values (colors, spacing, typography)
- **📱 Responsive Design**: Automatic responsive breakpoints (desktop, tablet, mobile)
- **🌓 Theme Support**: Light and dark theme variables
- **⚡ Multiple Outputs**: CSS, SCSS, and JavaScript token formats
- **🧩 Component Library**: React components with Storybook documentation
- **🔄 Automated Build**: Single command to regenerate all design tokens

### Tech Stack

- **Style Dictionary** - Token management and transformation
- **React** - Component library
- **Storybook** - Component documentation and testing
- **CSS Variables** - Runtime theming and responsiveness
- **npm workspaces** - Monorepo management

---

## 🚀 Quick Start

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd now-design

# Install dependencies
npm install

# Build design tokens
npm run build-tokens

# Start Storybook (for component development)
npm run storybook
```

### Basic Usage

```javascript
// Import CSS variables
import '@now-design/tokens/dist/css/variables.css';

// Import components
import { Button } from '@now-design/atoms';

// Use in your app
function MyApp() {
  return (
    <Button variant="primary">
      Click me
    </Button>
  );
}
```

---

## 🏗️ Architecture

### File Structure

```
now-design/
├── style-dictionary.config.js          # Main Style Dictionary config
├── build-tokens.js                     # Build script
├── style-dictionary/
│   └── formats/
│       └── responsive-css.js           # Custom responsive formatter
├── packages/
│   ├── tokens/                         # Design tokens source
│   │   ├── color/                      # Color tokens
│   │   │   ├── brand.json             # Brand colors
│   │   │   ├── alias.json             # Color aliases
│   │   │   └── mapped.json            # Mapped color tokens
│   │   ├── scale/                      # Scale & spacing tokens
│   │   │   ├── scale.json             # Base scale values
│   │   │   ├── alias.json             # Scale aliases
│   │   │   └── responsive-spacing.json # Responsive spacing
│   │   ├── typography/                 # Typography tokens
│   │   │   ├── brand.json             # Typography tokens
│   │   │   └── responsive.json        # Responsive typography
│   │   └── dist/                       # Generated token outputs
│   │       ├── css/variables.css       # CSS variables
│   │       ├── scss/_variables.scss    # SCSS variables
│   │       └── js/tokens.js            # JavaScript tokens
│   ├── atoms/                          # Atomic components
│   │   └── src/
│   │       ├── Button/                 # Button component
│   │       │   ├── Button.jsx          # Component logic
│   │       │   ├── Button.css          # Component styles
│   │       │   ├── Button.stories.jsx  # Storybook stories
│   │       │   └── index.js            # Component export
│   │       └── index.js                # Package exports
│   └── [other packages...]
```

---

## 🔄 File Processing Flow

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   TOKEN SOURCE  │    │  STYLE DICTIONARY│    │  CUSTOM FORMATTER│    │  FINAL OUTPUTS  │
│   (JSON FILES)  │───▶│   PROCESSING    │───▶│   (RESPONSIVE)  │───▶│   (CSS/SCSS/JS)  │
└─────────────────┘    └─────────────────┘    └─────────────────┘    └─────────────────┘
```

### Step-by-Step Process

1. **Token Source (JSON Files)**
   - Design tokens defined in `packages/tokens/**/*.json`
   - Supports nested structures and references
   - Example: `{ "brand": { "blue": { "600": { "value": "#1579BE" } } } }`

2. **Style Dictionary Configuration**
   - `style-dictionary.config.js` defines processing rules
   - Scans all JSON files: `packages/tokens/**/*.json`
   - Applies transforms: `['attribute/cti', 'name/cti/kebab']`
   - Outputs to: `packages/tokens/dist/`

3. **Build Script Execution**
   - `build-tokens.js` orchestrates the process
   - Registers custom responsive formatter
   - Builds all platforms (CSS, SCSS, JS)

4. **Style Dictionary Processing**
   - **SCAN**: Reads all JSON files
   - **PARSE**: Converts to Style Dictionary objects
   - **RESOLVE**: Processes references like `{scale.300.value} → 12`
   - **TRANSFORM**: Applies name transforms (`brandBlue600 → brand-blue-600`)
   - **GROUP**: Organizes by platform

5. **Custom Formatter Processing**
   - `responsive-css.js` handles responsive tokens
   - Generates CSS with media queries
   - Creates semantic CSS variables
   - Supports desktop/tablet/mobile breakpoints

6. **Final Outputs**
   - `css/variables.css` - CSS variables with media queries
   - `scss/_variables.scss` - SCSS variables
   - `js/tokens.js` - JavaScript objects

---

## 🎨 Token System

### Token Types

#### Color Tokens
```json
{
  "brand": {
    "blue": {
      "600": {
        "value": "#1579BE",
        "type": "color"
      }
    }
  }
}
```

#### Scale Tokens
```json
{
  "scale": {
    "100": {
      "value": 4,
      "type": "dimension"
    }
  }
}
```

#### Responsive Tokens
```json
{
  "gapSpacing": {
    "300": {
      "desktop": { "value": "{scale.300.value}" },
      "tablet": { "value": "{scale.200.value}" },
      "mobile": { "value": "{scale.100.value}" }
    }
  }
}
```

### Generated CSS Output

```css
:root {
  /* ========== COLORS ========== */
  --brand-blue-600: #1579BE;
  
  /* ========== SCALE ========== */
  --scale-100: 4;
  --scale-300: 12;
  
  /* ========== RESPONSIVE SCALE ========== */
  --gapSpacing-300: 12;
}

@media (max-width: 900px) {
  :root {
    --gapSpacing-300: 6;
  }
}

@media (max-width: 600px) {
  :root {
    --gapSpacing-300: 4;
  }
}

[data-theme="dark"] {
  --brand-blue-600: #73AFD8;
}
```

---

## 🔧 Build Process

### Configuration Files

#### `style-dictionary.config.js`
```javascript
const responsiveFormat = require('./style-dictionary/formats/responsive-css.js');

module.exports = {
  source: ['packages/tokens/**/*.json'],
  
  platforms: {
    css: {
      transforms: ['attribute/cti', 'name/cti/kebab'],
      buildPath: 'packages/tokens/dist/',
      files: [{
        destination: 'css/variables.css',
        format: 'css/variables-responsive'
      }]
    },
    scss: {
      transformGroup: 'scss',
      buildPath: 'packages/tokens/dist/scss/',
      files: [{
        destination: '_variables.scss',
        format: 'scss/variables'
      }]
    },
    js: {
      transformGroup: 'js',
      buildPath: 'packages/tokens/dist/js/',
      files: [{
        destination: 'tokens.js',
        format: 'javascript/es6'
      }]
    }
  }
};
```

#### `build-tokens.js`
```javascript
const StyleDictionary = require('style-dictionary');
const responsiveFormat = require('./style-dictionary/formats/responsive-css.js');

// Register custom formatter
StyleDictionary.registerFormat(responsiveFormat);

// Build all platforms
StyleDictionary.extend('./style-dictionary.config.js').buildAllPlatforms();
```

### Build Commands

```bash
# Build all tokens
npm run build-tokens

# Build specific platform
npx style-dictionary build --config=style-dictionary.config.js --platform=css
```

---

## 💡 Usage Examples

### CSS Variables in Components

```css
/* packages/atoms/src/Button/Button.css */
.simple-token-button {
  /* Uses generated CSS variables */
  padding: var(--gapSpacing-300, 12px) var(--gapSpacing-600, 24px);
  background: var(--brand-blue-600, #1579BE);
  color: var(--brand-neutral-100, #fff);
  font-family: var(--fontFamily-body, 'Oxanium');
  font-size: var(--scale-400, 16px);
  border-radius: var(--cornerRadius-m, 6px);
}

/* Responsive behavior is automatic */
@media (max-width: 900px) {
  .simple-token-button {
    padding: var(--gapSpacing-300, 6px) var(--gapSpacing-600, 20px);
  }
}

@media (max-width: 600px) {
  .simple-token-button {
    padding: var(--gapSpacing-300, 4px) var(--gapSpacing-600, 16px);
  }
}
```

### React Component Usage

```jsx
// packages/atoms/src/Button/Button.jsx
import React from 'react';
import './Button.css';

export const Button = ({ children, variant = 'primary', ...props }) => {
  return (
    <button 
      className={`simple-token-button ${variant}`} 
      {...props}
    >
      {children}
    </button>
  );
};
```

### Consumer Application

```jsx
// Consumer App
import { Button } from '@now-design/atoms';
import '@now-design/tokens/dist/css/variables.css';

function MyApp() {
  return (
    <div>
      <Button variant="primary">Primary Button</Button>
      <Button variant="secondary">Secondary Button</Button>
    </div>
  );
}
```

---

## 🛠️ Development Workflow

### 1. Edit Design Tokens
```bash
# Edit token files in packages/tokens/
# - color/brand.json
# - scale/scale.json
# - typography/brand.json
```

### 2. Build Tokens
```bash
npm run build-tokens
```

### 3. Generated Files
```bash
# Check generated outputs
ls packages/tokens/dist/
# css/variables.css
# scss/_variables.scss
# js/tokens.js
```

### 4. Components Automatically Updated
- Components use CSS variables
- No manual updates needed
- Responsive behavior is automatic

### 5. Test in Storybook
```bash
npm run storybook
```

### Key Insights

- **🎯 Single Source of Truth**: All design values start in JSON files
- **📱 Responsive by Design**: Responsive tokens have desktop/tablet/mobile values
- **⚡ Automated Workflow**: Run `npm run build-tokens` to regenerate all outputs
- **🌍 Platform Agnostic**: Same tokens can generate CSS, SCSS, JS, Android, iOS, etc.

---

## 📚 Additional Resources

- **Technical Documentation**: See `DESIGN_SYSTEM_DOCUMENTATION.md` for detailed technical specifications
- **Storybook**: Component documentation and testing
- **Style Dictionary**: [Official Documentation](https://amzn.github.io/style-dictionary/)

---

## 🤝 Contributing

1. Edit design tokens in `packages/tokens/`
2. Run `npm run build-tokens` to regenerate outputs
3. Test components in Storybook
4. Submit pull request

---

## 📄 License

[Add your license information here]
