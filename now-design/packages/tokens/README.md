# now-design-tokens

Design tokens for the now-design system, managed by Style Dictionary. Provides CSS, SCSS, and JS outputs for easy consumption in any modern frontend project.

---

## 📦 Installation

```sh
npm install now-design-tokens
```

---

## 🚀 Usage

### CSS Variables
Import the CSS variables into your project:
```js
import 'now-design-tokens/dist/css/variables.css';
```

### SCSS Variables
Import the SCSS variables into your styles:
```scss
@import '~now-design-tokens/dist/scss/_variables.scss';
```

### JavaScript Tokens
Import the tokens as a JS object:
```js
import tokens from 'now-design-tokens';
// or
import tokens from 'now-design-tokens/dist/js/tokens.js';

console.log(tokens.color.brand.primary.value); // Example usage
```

---

## 🏗️ How It Works
- Tokens are defined in JSON files under `color/`, `scale/`, `typography/`, and `scrollbar/`.
- Style Dictionary builds outputs to:
  - `dist/css/variables.css` (CSS custom properties)
  - `dist/scss/_variables.scss` (SCSS variables)
  - `dist/js/tokens.js` (JS object)
- All outputs are included in the npm package for easy consumption.

---

## 📝 Troubleshooting
- **Missing outputs?**
  - Run `npm run build` in the package directory.
- **Import errors?**
  - Double-check the import paths above.
- **Type errors?**
  - Ensure your project supports ES modules for JS imports.

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