# Now Design System - Comprehensive Documentation

## Table of Contents
1. [Overview](#overview)
2. [File Structure & Architecture](#file-structure--architecture)
3. [Core Configuration Files](#core-configuration-files)
4. [Token System](#token-system)
5. [Build Process](#build-process)
6. [Responsiveness System](#responsiveness-system)
7. [Component Architecture](#component-architecture)
8. [Usage Examples](#usage-examples)

---

## Overview

The Now Design System is a modular, scalable design system built with:
- **Style Dictionary** for token management
- **React** for components
- **Storybook** for documentation and testing
- **CSS Variables** for theming and responsiveness
- **npm workspaces** for monorepo management

---

## File Structure & Architecture

```
now-design/
├── style-dictionary.config.js          # Main Style Dictionary config
├── config.json                         # Legacy/example config
├── build-tokens.js                     # Build script
├── style-dictionary/
│   └── formats/
│       └── responsive-css.js           # Custom responsive formatter
├── packages/
│   ├── tokens/                         # Design tokens source
│   │   ├── color/                      # Color tokens
│   │   ├── scale/                      # Scale & spacing tokens
│   │   ├── typography/                 # Typography tokens
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

## Core Configuration Files

### 1. `style-dictionary.config.js`

**Purpose**: Main configuration file for Style Dictionary that defines how design tokens are processed and output.

**Key Responsibilities**:
- Defines source token files location
- Configures output platforms (CSS, SCSS, JS)
- Registers custom formatters
- Sets up transforms and build paths

**Configuration Breakdown**:

```javascript
const responsiveFormat = require('./style-dictionary/formats/responsive-css.js');

module.exports = {
  // Source: Where to find token files
  source: ['packages/tokens/**/*.json'],
  
  platforms: {
    // CSS Platform: Outputs CSS variables
    css: {
      transforms: ['attribute/cti', 'name/cti/kebab'], // Transform token names
      buildPath: 'packages/tokens/dist/',
      files: [{
        destination: 'css/variables.css',
        format: 'css/variables-responsive' // Custom responsive formatter
      }]
    },
    
    // SCSS Platform: Outputs SCSS variables
    scss: {
      transformGroup: 'scss',
      buildPath: 'packages/tokens/dist/scss/',
      files: [{
        destination: '_variables.scss',
        format: 'scss/variables'
      }]
    },
    
    // JS Platform: Outputs JavaScript objects
    js: {
      transformGroup: 'js',
      buildPath: 'packages/tokens/dist/js/',
      files: [{
        destination: 'tokens.js',
        format: 'javascript/es6'
      }]
    }
  },
  
  // Register custom formatters
  hooks: {
    formats: [{
      name: responsiveFormat.name,
      formatter: responsiveFormat.formatter
    }]
  }
};
```

**Transforms Explained**:
- `attribute/cti`: Adds category, type, and item attributes to tokens
- `name/cti/kebab`: Converts token names to kebab-case (e.g., `brandBlue600` → `brand-blue-600`)

### 2. `config.json`

**Purpose**: Legacy/example configuration file showing multi-platform token generation.

**Use Case**: Demonstrates how Style Dictionary can generate tokens for multiple platforms:
- **CSS**: Web applications
- **Android**: Android applications
- **iOS**: iOS applications (Objective-C)
- **iOS Swift**: iOS applications (Swift)
- **Compose**: Android Jetpack Compose

**Note**: This file is not actively used in the current setup but serves as a reference for multi-platform token generation.

### 3. `build-tokens.js`

**Purpose**: Build script that orchestrates the token generation process.

**Workflow**:
1. Imports Style Dictionary
2. Registers custom responsive formatter
3. Loads configuration from `style-dictionary.config.js`
4. Builds all platforms (CSS, SCSS, JS)

```javascript
const StyleDictionary = require('style-dictionary');
const responsiveFormat = require('./style-dictionary/formats/responsive-css.js');

// Register custom formatter
StyleDictionary.registerFormat(responsiveFormat);

// Build all platforms
StyleDictionary.extend('./style-dictionary.config.js').buildAllPlatforms();
```

**Usage**: `npm run build-tokens`

---

## Token System

### Token Sources

Tokens are defined in JSON files under `packages/tokens/`:

#### Color Tokens (`packages/tokens/color/brand.json`)
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

#### Scale Tokens (`packages/tokens/scale/scale.json`)
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

#### Responsive Tokens (`packages/tokens/scale/responsive-spacing.json`)
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

### Generated Outputs

#### 1. `packages/tokens/dist/css/variables.css`

**Purpose**: Contains all design tokens as CSS custom properties (variables).

**Generated Structure**:
```css
:root {
  /* Brand Colors */
  --brand-blue-600: #1579BE;
  --brand-neutral-100: #FFFFFF;
  
  /* Scale Tokens */
  --scale-100: 4;
  --scale-300: 12;
  
  /* Responsive Tokens */
  --gap-spacing-300-desktop: 12;
  --gap-spacing-300-tablet: 6;
  --gap-spacing-300-mobile: 4;
  
  /* Typography */
  --font-family-body: Oxanium;
  --font-weight-medium: Medium;
  
  /* Borders */
  --border-corner-radius-m: 6;
}

/* Theme Overrides */
[data-theme="dark"] {
  --mapped-dark-mode-normal-surface-page: #000000;
  /* ... more theme variables */
}
```

#### 2. `packages/tokens/dist/scss/_variables.scss`

**Purpose**: SCSS variables for projects using SCSS preprocessing.

**Generated Structure**:
```scss
$brand-blue-600: #1579BE;
$scale-100: 4px;
$font-family-body: "Oxanium";
// ... more SCSS variables
```

#### 3. `packages/tokens/dist/js/tokens.js`

**Purpose**: JavaScript object containing all tokens for programmatic access.

**Generated Structure**:
```javascript
export const tokens = {
  brand: {
    blue: {
      600: "#1579BE"
    }
  },
  scale: {
    100: 4
  }
  // ... more token objects
};
```

---

## Build Process

### Token Generation Workflow

1. **Source Collection**: Style Dictionary scans `packages/tokens/**/*.json`
2. **Token Processing**: 
   - Resolves references (e.g., `{scale.300.value}` → `12`)
   - Applies transforms (naming conventions)
   - Groups by platform
3. **Formatting**: Custom formatters generate platform-specific outputs
4. **Output**: Files written to `packages/tokens/dist/`

### Custom Responsive Formatter

**File**: `style-dictionary/formats/responsive-css.js`

**Purpose**: Generates responsive CSS variables with media queries.

**Key Features**:
- Handles responsive tokens (desktop/tablet/mobile)
- Generates media queries automatically
- Supports theme tokens
- Formats values appropriately (px for dimensions, etc.)

**Generated Output**:
```css
:root {
  --gap-spacing-300: 12px; /* Desktop default */
}

@media (max-width: 1024px) {
  :root {
    --gap-spacing-300: 6px; /* Tablet override */
  }
}

@media (max-width: 600px) {
  :root {
    --gap-spacing-300: 4px; /* Mobile override */
  }
}
```

---

## Responsiveness System

### How Responsiveness Works

#### 1. Token Definition
```json
{
  "gapSpacing": {
    "300": {
      "desktop": { "value": "{scale.300.value}" }, // 12px
      "tablet": { "value": "{scale.200.value}" },  // 6px
      "mobile": { "value": "{scale.100.value}" }   // 4px
    }
  }
}
```

#### 2. CSS Generation
```css
:root {
  --gap-spacing-300-desktop: 12px;
  --gap-spacing-300-tablet: 6px;
  --gap-spacing-300-mobile: 4px;
}
```

#### 3. Component Usage
```css
.simple-token-button {
  padding: var(--gap-spacing-300-desktop, 12px) var(--gap-spacing-600-desktop, 24px);
}

@media (max-width: 1024px) {
  .simple-token-button {
    padding: var(--gap-spacing-300-tablet, 6px) var(--gap-spacing-600-tablet, 20px);
  }
}

@media (max-width: 600px) {
  .simple-token-button {
    padding: var(--gap-spacing-300-mobile, 4px) var(--gap-spacing-600-mobile, 16px);
  }
}
```

#### 4. Automatic Responsiveness
- **Desktop**: 12px vertical, 24px horizontal padding
- **Tablet**: 6px vertical, 20px horizontal padding
- **Mobile**: 4px vertical, 16px horizontal padding

### Breakpoints
- **Desktop**: Default (no media query)
- **Tablet**: `max-width: 1024px`
- **Mobile**: `max-width: 600px`

---

## Component Architecture

### Button Component Structure

#### 1. `packages/atoms/src/Button/index.js`
**Purpose**: Barrel export for clean imports.

```javascript
export { default } from './Button';
```

**Usage**: `import Button from '@now-design/atoms/Button'`

#### 2. `packages/atoms/src/index.js`
**Purpose**: Package-level exports for all atoms.

```javascript
export { default as Button } from './Button';
```

**Usage**: `import { Button } from '@now-design/atoms'`

#### 3. Component Implementation

**Button.jsx**: React component logic
**Button.css**: Styles using design tokens
**Button.stories.jsx**: Storybook documentation and testing

### Token Usage in Components

#### CSS Variables in Components
```css
.simple-token-button {
  /* Spacing */
  padding: var(--gap-spacing-300-desktop, 12px) var(--gap-spacing-600-desktop, 24px);
  
  /* Colors */
  background: var(--brand-blue-600, #1579BE);
  color: var(--brand-neutral-100, #fff);
  
  /* Typography */
  font-family: var(--font-family-body, 'Oxanium');
  font-size: var(--scale-400, 16px);
  
  /* Borders */
  border-radius: var(--border-corner-radius-m, 6px);
}
```

#### Responsive Behavior
- Components automatically adapt to screen size
- No JavaScript required for responsiveness
- Pure CSS media queries handle all responsive behavior

---

## Usage Examples

### 1. Using Design Tokens in CSS
```css
.my-component {
  /* Use any token from variables.css */
  background: var(--brand-blue-600);
  padding: var(--scale-300);
  font-family: var(--font-family-body);
  border-radius: var(--border-corner-radius-m);
}
```

### 2. Using Responsive Tokens
```css
.responsive-component {
  /* Desktop default */
  padding: var(--gap-spacing-300-desktop);
}

@media (max-width: 1024px) {
  .responsive-component {
    /* Tablet override */
    padding: var(--gap-spacing-300-tablet);
  }
}

@media (max-width: 600px) {
  .responsive-component {
    /* Mobile override */
    padding: var(--gap-spacing-300-mobile);
  }
}
```

### 3. Using Components
```jsx
import { Button } from '@now-design/atoms';

function MyApp() {
  return (
    <Button variant="primary" size="medium">
      Click me
    </Button>
  );
}
```

### 4. Building Tokens
```bash
# Build all token outputs
npm run build-tokens

# This generates:
# - packages/tokens/dist/css/variables.css
# - packages/tokens/dist/scss/_variables.scss
# - packages/tokens/dist/js/tokens.js
```

---

## Key Benefits

### 1. Single Source of Truth
- All design values defined in JSON tokens
- Automatic generation of multiple formats
- Consistent values across platforms

### 2. Responsive by Default
- Tokens automatically adapt to screen size
- No manual media query writing
- Consistent responsive behavior

### 3. Theme Support
- Dark/light mode support
- Easy theme switching
- Semantic token mapping

### 4. Developer Experience
- Type-safe token usage
- IntelliSense support
- Clear naming conventions

### 5. Scalability
- Modular token structure
- Easy to add new tokens
- Platform-agnostic design system

---

## Best Practices

### 1. Token Naming
- Use semantic names (e.g., `brand-blue-600` not `blue-1`)
- Follow kebab-case convention
- Group related tokens logically

### 2. Responsive Design
- Define desktop, tablet, and mobile values for spacing
- Use relative units when possible
- Test across all breakpoints

### 3. Component Development
- Always use design tokens in components
- Avoid hardcoded values
- Test with different themes

### 4. Token Management
- Keep tokens organized by category
- Use references to avoid duplication
- Document token purposes

---

This documentation provides a comprehensive overview of the Now Design System architecture, workflows, and usage patterns. The system is designed to be scalable, maintainable, and developer-friendly while providing powerful responsive and theming capabilities. 






------------------------------------------------------
style-dictionary.config.js - The Brain -> Orchestrator
Where to find token files
How to process them
Where to output them
What formats to generate

 - Think of it as a "recipe" that Style Dictionary follows to cook your design tokens into different formats.