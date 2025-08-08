# now-design-tokens

Design tokens for the now-design system, managed by a custom build process. Provides **CSS**, **SCSS**, and **JS** outputs for easy consumption in any modern frontend project.

---

## 📦 Installation

```sh
npm install now-design-tokens
```

---

## 🗂️ What's Included?

This package provides design tokens for:
- **Colors** (brand, alias, effects, etc.)
- **Scale** (spacing, sizing, breakpoints)
- **Typography** (font families, sizes, weights, line heights, letter spacing)
- **Scrollbar** (custom scrollbar styles)

All tokens are available in:
- CSS custom properties (`dist/css/variables.css`)
- SCSS variables (`dist/scss/_variables.scss`)
- JavaScript object (`dist/js/tokens.js`)

---

## 🚀 Usage

> **Note:** Consumers should only use the built outputs in `dist/` (CSS, SCSS, JS). Do **not** import raw JSON files from the package source.

### 1. CSS Variables
Import the CSS variables into your project (e.g., in your main JS/TS entry):
```js
import 'now-design-tokens/dist/css/variables.css';
```
Use the variables in your CSS:
```css
.my-button {
  background: var(--normal-surface-action);
  color: var(--normal-typography-onAction);
  padding: var(--gapSpacing-300);
  font-size: var(--fontSize-heading-h2);
}
```

### 2. SCSS Variables
Import the SCSS variables into your styles:
```scss
@import '~now-design-tokens/dist/scss/_variables.scss';

.my-heading {
  color: $normal-typography-headingPrimary;
  font-family: $fontFamily-heading;
  font-size: $fontSize-heading-h1;
}
```

### 3. JavaScript Tokens
Import the tokens as a JS object:
```js
import tokens from 'now-design-tokens';
// or
import tokens from 'now-design-tokens/dist/js/tokens.js';

console.log(tokens.mapped.modes.light.normal.surface.page.value); // #FFFFFF
console.log(tokens.brand.neutral['100'].value); // #FFFFFF
console.log(tokens.alias.neutral.white.value); // #FFFFFF
```

---

## 🏗️ Token Structure

- **CSS:** Variables are named like `--normal-surface-page`, `--gapSpacing-300`, `--fontSize-heading-h1`.
- **SCSS:** Variables are named like `$normal-surface-page`, `$gapSpacing-300`, `$fontSize-heading-h1`.
- **JS:** Tokens are nested objects, e.g.:
  ```js
  tokens.mapped.modes.light.normal.surface.page.value // '#FFFFFF'
  tokens.brand.neutral['100'].value // '#FFFFFF'
  tokens.alias.neutral.white.value // '#FFFFFF'
  ```

---

## 💡 Best Practices
- Use CSS variables for global theming and runtime flexibility.
- Use SCSS variables for static style generation and advanced mixins.
- Use JS tokens for inline styles, JS-based theming, or design system integration.
- Reference tokens for all design values (colors, spacing, typography) to ensure consistency.
- For theming, override CSS variables at the root or theme selector.

---

## 🛠️ Development & Build Process

### How the `dist/` Directory is Generated

The `dist/` directory contains the final outputs that consumers use. Here's how it's generated:

#### 1. **Token Resolution Process**
The build script (`build-tokens-simple.js`) follows this resolution order:

```javascript
// 1. Brand tokens (base values - no references)
brand.neutral.100.value = "#FFFFFF"

// 2. Alias tokens (reference brand tokens)
alias.neutral.white.value = "{brand.neutral.100.value}" → "#FFFFFF"

// 3. Mapped tokens (reference alias tokens)  
mapped.modes.light.normal.surface.page.value = "{alias.neutral.white.value}" → "#FFFFFF"
```

#### 2. **Build Script Workflow**
```bash
# The build process:
1. Load all JSON token files
2. Merge tokens into a single object
3. Resolve references in correct order (Brand → Alias → Mapped)
4. Generate CSS variables with responsive breakpoints
5. Generate SCSS variables
6. Generate JS token object
7. Output to dist/ directory
```

### Commands to Generate `dist/`

#### **From the tokens package directory:**
```bash
cd packages/tokens

# Generate all outputs (CSS, SCSS, JS)
node build-tokens-simple.js

# Or using npm script
npm run build
```

#### **From the monorepo root:**
```bash
# Build tokens package
npm run build --workspace=packages/tokens

# Or build all packages
npm run build
```

### What Gets Generated

After running the build command, you'll get:

```
packages/tokens/dist/
├── css/
│   └── variables.css          # CSS custom properties
├── scss/
│   └── _variables.scss        # SCSS variables  
└── js/
    └── tokens.js              # JavaScript token object
```

#### **CSS Output Example:**
```css
:root {
  --normal-surface-page: #FFFFFF;
  --normal-surface-action: #1579BE;
  --normal-typography-headingPrimary: #000000;
  /* ... more variables */
}

@media (max-width: 900px) {
  :root {
    --fontSize-body-bodyLarge: 0;
    --gapSpacing-300: 6;
    /* ... responsive variables */
  }
}

[data-theme="dark"] {
  --normal-surface-page: #000000;
  --normal-surface-action: #1579BE;
  /* ... dark theme variables */
}
```

#### **JS Output Example:**
```javascript
module.exports = {
  "mapped": {
    "modes": {
      "light": {
        "normal": {
          "surface": {
            "page": {
              "value": "#FFFFFF"
            }
          }
        }
      }
    }
  },
  "brand": {
    "neutral": {
      "100": {
        "value": "#FFFFFF",
        "type": "color"
      }
    }
  }
  // ... more tokens
};
```

---

## 📦 Publishing Process

### Pre-Publishing Checklist

Before publishing a new version:

1. **Update tokens** in JSON files if needed
2. **Build the package** to generate fresh outputs:
   ```bash
   cd packages/tokens
   node build-tokens-simple.js
   ```
3. **Test the outputs** by importing in a test project
4. **Update version** in `package.json`
5. **Commit changes** with descriptive message

### Publishing Commands

#### **From the tokens package directory:**
```bash
cd packages/tokens

# Build first
node build-tokens-simple.js

# Publish to npm
npm publish
```

#### **From the monorepo root:**
```bash
# Build and publish tokens package
npm run publish --workspace=packages/tokens

# Or publish all packages
npm run publish
```

### Version Management

```bash
# Patch version (bug fixes)
npm version patch

# Minor version (new features)
npm version minor

# Major version (breaking changes)
npm version major
```

### What Gets Published

The `package.json` specifies which files are included in the npm package:

```json
{
  "files": [
    "dist/js/tokens.js",
    "dist/css/variables.css", 
    "dist/scss/_variables.scss",
    "README.md",
    "fonts"
  ]
}
```

---

## 🔧 Troubleshooting & FAQ

### Build Issues
- **Missing outputs?**
  - Run `node build-tokens-simple.js` in the package directory
  - Check that all JSON token files exist and are valid
- **Token resolution errors?**
  - Verify token references in JSON files are correct
  - Check the resolution order (Brand → Alias → Mapped)

### Import Issues
- **Import errors?**
  - Double-check the import paths above
  - Ensure the package is properly installed
- **Type errors?**
  - Ensure your project supports ES modules for JS imports

### Development
- **How do I add new tokens?**
  - Add or edit JSON files in `color/`, `scale/`, `typography/` directories
  - Run `node build-tokens-simple.js` to regenerate outputs
- **How do I use responsive tokens?**
  - Use the appropriate variable for each breakpoint (see generated CSS for details)
- **How do I test changes locally?**
  - Build the package: `node build-tokens-simple.js`
  - Import in a test project to verify outputs

---

## 🤝 Contributing

### Development Workflow

1. **Make changes** to token JSON files
2. **Build outputs**: `node build-tokens-simple.js`
3. **Test locally** by importing in a test project
4. **Commit changes** with descriptive message
5. **Submit PR** with your changes

### File Structure

```
packages/tokens/
├── build-tokens-simple.js    # Main build script
├── formats/responsive-css.js # Custom CSS formatter
├── color/                    # Color token definitions
│   ├── brand.json           # Brand colors
│   ├── alias.json           # Color aliases
│   └── mapped.json          # Mapped color tokens
├── scale/                    # Scale & spacing tokens
│   ├── scale.json           # Base scale values
│   ├── alias.json           # Scale aliases
│   └── responsive-spacing.json # Responsive spacing
├── typography/               # Typography tokens
│   ├── brand.json           # Typography tokens
│   └── responsive.json      # Responsive typography
├── dist/                     # Generated outputs (gitignored)
│   ├── css/variables.css
│   ├── scss/_variables.scss
│   └── js/tokens.js
└── package.json
```

---

## 📚 NPM Package
[View now-design-tokens on npm](https://www.npmjs.com/package/now-design-tokens)

---

## 🏢 Monorepo & Workspaces
This package is part of the now-design monorepo, managed with npm workspaces.

---

## License
MIT 