# now-design-tokens

Design tokens for the now-design system, managed by Style Dictionary. Provides **CSS**, **SCSS**, and **JS** outputs for easy consumption in any modern frontend project.

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
  background: var(--color-brand-primary);
  color: var(--color-brand-on-primary);
  padding: var(--scale-spacing-md);
  font-size: var(--font-size-h2);
}
```

### 2. SCSS Variables
Import the SCSS variables into your styles:
```scss
@import '~now-design-tokens/dist/scss/_variables.scss';

.my-heading {
  color: $color-brand-primary;
  font-family: $font-family-heading;
  font-size: $font-size-h1;
}
```

### 3. JavaScript Tokens
Import the tokens as a JS object:
```js
import tokens from 'now-design-tokens';
// or
import tokens from 'now-design-tokens/dist/js/tokens.js';

console.log(tokens.color.brand.primary.value); // #0052cc
console.log(tokens.scale.spacing.md.value);    // 16px
console.log(tokens.typography.fontSizes.h1.value); // 32px
```

---

## 🏗️ Token Structure

- **CSS:** Variables are named like `--color-brand-primary`, `--scale-spacing-md`, `--font-size-h1`.
- **SCSS:** Variables are named like `$color-brand-primary`, `$scale-spacing-md`, `$font-size-h1`.
- **JS:** Tokens are nested objects, e.g.:
  ```js
  tokens.color.brand.primary.value // '#0052cc'
  tokens.scale.spacing.md.value    // '16px'
  tokens.typography.fontSizes.h1.value // '32px'
  ```

---

## 💡 Best Practices
- Use CSS variables for global theming and runtime flexibility.
- Use SCSS variables for static style generation and advanced mixins.
- Use JS tokens for inline styles, JS-based theming, or design system integration.
- Reference tokens for all design values (colors, spacing, typography) to ensure consistency.
- For theming, override CSS variables at the root or theme selector.

---

## 📝 Troubleshooting & FAQ
- **Missing outputs?**
  - Run `npm run build` in the package directory.
- **Import errors?**
  - Double-check the import paths above.
- **Type errors?**
  - Ensure your project supports ES modules for JS imports.
- **How do I add new tokens?**
  - Add or edit JSON files in `color/`, `scale/`, `typography/`, or `scrollbar/` and rebuild.
- **How do I use responsive tokens?**
  - Use the appropriate variable or JS property for each breakpoint (see generated files for details).

---

## 🤝 Contributing
- Update or add token JSON files in the appropriate directory.
- Run `npm run build` to regenerate outputs.
- Submit a PR with your changes.

---

## 📚 NPM Package
[View now-design-tokens on npm](https://www.npmjs.com/package/now-design-tokens)

---

## 🏢 Monorepo & Workspaces
This package is part of the now-design monorepo, managed with npm workspaces.

---

## License
MIT 