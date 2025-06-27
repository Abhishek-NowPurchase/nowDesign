# Typography Tokens — @now-design/tokens

This module contains all **typography design tokens** for the now-design system, managed and transformed with Style Dictionary.

---

## 📦 Installation

```sh
npm install @now-design/tokens
```

---

## 🧩 Token Structure

Typography tokens are organized as atomic and composite JSON files:
- `font-families.json` — font families for body, heading, title
- `font-weights.json` — all available font weights (thin, regular, bold, etc.)
- `font-sizes.json` — font sizes for body, headings, titles
- `line-heights.json` — line heights for each style
- `letter-spacing.json` — letter spacing for each style
- `typography.json` — composite tokens referencing the atomic tokens for each style (e.g., bodySmall, h1, title1)

All files are Style Dictionary compatible and easy to extend.

---

## 🚀 Usage

### 1. **Importing Tokens in JS/TS**

```js
// Import atomic tokens
import fontFamilies from '@now-design/tokens/typography/font-families.json';
import fontSizes from '@now-design/tokens/typography/font-sizes.json';

// Import composite typography tokens
import typography from '@now-design/tokens/typography/typography.json';

console.log(typography.typography.bodySmall.fontSize.value); // 8
```

### 2. **Using Tokens in CSS/SCSS (via Style Dictionary build)**

After running Style Dictionary, you can use tokens as CSS variables:

```css
:root {
  --font-family-body: 'Oxanium';
  --font-size-body-small: 8px;
  --line-height-body-small: 12px;
}

.body-small {
  font-family: var(--font-family-body);
  font-size: var(--font-size-body-small);
  line-height: var(--line-height-body-small);
}
```

### 3. **Using with Design Systems (styled-components, emotion, etc.)**

```js
import typography from '@now-design/tokens/typography/typography.json';

const BodySmall = styled.p`
  font-family: ${typography.typography.bodySmall.fontFamily.value};
  font-size: ${typography.typography.bodySmall.fontSize.value}px;
  line-height: ${typography.typography.bodySmall.lineHeight.value}px;
`;
```

---

## 🛠️ Extending Typography Tokens

- **Add new styles:** Add new entries to `typography.json` and reference atomic tokens.
- **Add responsive values:** Add `bodySmallMobile`, `h1Tablet`, etc., as needed.
- **Add new atomic tokens:** Extend `font-families.json`, `font-sizes.json`, etc.
- **Regenerate outputs:** Run Style Dictionary to update all builds.

---

## 📝 Best Practices

- **Reference atomic tokens** in composite styles for easy updates.
- **Keep naming consistent** with Figma and your design system.
- **Document new styles** in this README as you add them.
- **Use Style Dictionary** for all transformations and output formats.

---

## 📚 Example: Composite Token

```json
"bodySmall": {
  "fontFamily": { "value": "{font-family.body.value}" },
  "fontWeight": { "value": "{font-weight.regular.value}" },
  "fontSize": { "value": "{font-size.bodySmall.value}" },
  "lineHeight": { "value": "{line-height.bodySmall.value}" },
  "letterSpacing": { "value": "{letter-spacing.bodySmall.value}" }
}
```

---

## 🔗 References
- [Style Dictionary](https://amzn.github.io/style-dictionary/#/)
- [now-design system Figma](https://www.figma.com/design/wOVgmB8my4cHAif88cKO4r/Tokens---Variables---Styles?node-id=26-1467&p=f&m=dev)

---

For questions or contributions, see the main [@now-design/tokens README](../README.md). 