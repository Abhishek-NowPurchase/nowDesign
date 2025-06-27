# @now-design/tokens

Design tokens for the now-design system, managed and transformed with Style Dictionary.

---

## 📦 Installation

```sh
npm install @now-design/tokens
```

---

## 🚀 Usage Overview

Tokens are provided as JSON files and can be consumed in multiple ways:
- **Direct JSON import** (JS/TS/Node)
- **Style Dictionary build** (CSS, SCSS, JS, TS, etc.)
- **Design system integration** (e.g., with styled-components, emotion, Tailwind, etc.)

---

## 🧩 Typography Tokens Structure

Typography tokens are organized in `packages/tokens/typography/`:
- `font-families.json` — font families for body, heading, title
- `font-weights.json` — all available font weights
- `font-sizes.json` — font sizes for body, headings, titles
- `line-heights.json` — line heights for each style
- `letter-spacing.json` — letter spacing for each style
- `typography.json` — composite tokens referencing atomic tokens for each text style

All files are Style Dictionary compatible and easy to extend.

---

## 📚 Example: Importing Tokens in JavaScript/TypeScript

```js
// Import atomic tokens
import fontFamilies from '@now-design/tokens/typography/font-families.json';
import fontSizes from '@now-design/tokens/typography/font-sizes.json';
import fontWeights from '@now-design/tokens/typography/font-weights.json';
import lineHeights from '@now-design/tokens/typography/line-heights.json';
import letterSpacing from '@now-design/tokens/typography/letter-spacing.json';

// Import composite typography tokens
import typography from '@now-design/tokens/typography/typography.json';

// Usage example
const heading1 = typography.typography.h1;
console.log(heading1.fontFamily.value); // "Urbanist"
console.log(heading1.fontSize.value);   // 20
```

---

## 🎨 Example: Using Tokens in CSS/SCSS (via Style Dictionary build)

After running Style Dictionary, you can generate CSS variables:

```css
:root {
  --font-family-body: 'Oxanium';
  --font-size-h1: 20px;
  --line-height-h1: 24px;
  --font-weight-bold: 700;
}

h1 {
  font-family: var(--font-family-heading);
  font-size: var(--font-size-h1);
  line-height: var(--line-height-h1);
  font-weight: var(--font-weight-bold);
}
```

---

## 🏗️ How to Build/Transform Tokens

Tokens are managed with [Style Dictionary](https://amzn.github.io/style-dictionary/):

```sh
# From the monorepo root or tokens package
npm run build
# or
yarn build
```

This will transform the JSON tokens into CSS, SCSS, JS, or any other format you configure.

---

## 📝 Extending Typography Tokens

- **Add new font sizes, weights, or families:**
  - Edit the relevant JSON file in `typography/`.
- **Add new composite styles:**
  - Add a new entry to `typography.json`, referencing atomic tokens.
- **Add responsive (tablet/mobile) values:**
  - Extend the JSON structure to include `tablet` and `mobile` keys as needed.
- **Add paragraph spacing/indent:**
  - Add new files (e.g., `paragraph-spacing.json`) or fields to composite tokens.

All changes are picked up automatically by Style Dictionary on the next build.

---

## 🧪 Best Practices

- **Reference atomic tokens** in composite styles for easy updates.
- **Use consistent naming** (e.g., `bodySmall`, `h1`, `title1`).
- **Document new tokens** in this README for your team.
- **Keep Figma and code tokens in sync** for a single source of truth.

---

## 🏢 Monorepo & Workspaces

This package is part of the `now-design` monorepo, managed with **npm workspaces**. You can run scripts from the monorepo root:

```sh
npm run --workspace=@now-design/tokens build
```

Or from within the package directory:

```sh
cd packages/tokens
npm run build
```

---

## 🤝 Contributing

- Update or add tokens in the relevant JSON files.
- Run the build to generate outputs.
- PRs are welcome! Please ensure all tokens are valid JSON and Style Dictionary builds successfully.

---

## 📚 References & Resources

- [Style Dictionary Documentation](https://amzn.github.io/style-dictionary/)
- [now-design Monorepo](../..)

---

## 🏷️ Example: Using Typography Tokens in a React Component

```tsx
import typography from '@now-design/tokens/typography/typography.json';

export function Heading1({ children }) {
  const h1 = typography.typography.h1;
  return (
    <h1 style={{
      fontFamily: h1.fontFamily.value,
      fontWeight: h1.fontWeight.value,
      fontSize: h1.fontSize.value,
      lineHeight: h1.lineHeight.value,
      letterSpacing: h1.letterSpacing.value
    }}>
      {children}
    </h1>
  );
}
```

## About
- Source of truth for colors, spacing, typography, etc.
- Built with [Style Dictionary](https://amzn.github.io/style-dictionary/) 