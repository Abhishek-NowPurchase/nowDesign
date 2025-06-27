# Scale Tokens — @now-design/tokens

This module contains the **atomic scale system** for the now-design system, powering spacing, border, effects, and responsive layout tokens. All tokens are Style Dictionary compatible and map directly to your Figma scale system.

---

## 📦 Installation

```sh
npm install @now-design/tokens
```

---

## 🧩 Token Structure

- `scale.json` — Atomic scale values (0, 25, 50, ... 40000)
- `alias.json` — Aliases for border, effects, etc., referencing scale values
- `responsive-spacing.json` — Responsive gapSpacing tokens for layout

---

## 🚀 Usage

### 1. **Importing Atomic Scale in JS/TS**
```js
import scale from '@now-design/tokens/scale/scale.json';
console.log(scale.scale["400"].value); // 16
```

### 2. **Using Aliases**
```js
import alias from '@now-design/tokens/scale/alias.json';
console.log(alias.border.strokeWidth.s.value); // 1 (from scale/25)
console.log(alias.effects.blur.xl.value); // 64 (from scale/1600)
```

### 3. **Responsive Spacing**
```js
import gapSpacing from '@now-design/tokens/scale/responsive-spacing.json';
console.log(gapSpacing.gapSpacing["400"].desktop.value); // 16
```

### 4. **Using in CSS/SCSS (via Style Dictionary build)**
After running Style Dictionary, you can use tokens as CSS variables:
```css
:root {
  --scale-400: 16px;
  --border-radius-m: 12px;
  --gap-spacing-400: 16px;
}
.box { border-radius: var(--border-radius-m); gap: var(--gap-spacing-400); }
```

---

## 🛠️ Extending Scale Tokens
- **Add new atomic values** to `scale.json` as your system grows.
- **Add new aliases** for new border/effect/spacing needs in `alias.json`.
- **Add tablet/mobile values** to `responsive-spacing.json` for full responsiveness.
- **Regenerate outputs** with Style Dictionary after changes.

---

## 📝 Best Practices
- **Reference atomic scale tokens** in all aliases for consistency.
- **Keep naming and values in sync with Figma.**
- **Document new aliases and responsive patterns** in this README.
- **Use Style Dictionary** for all transformations and output formats.

---

## 📚 Example: Alias Reference
```json
"border": {
  "strokeWidth": {
    "s": { "value": "{scale.25.value}" }
  }
}
```

---

## 🔗 References
- [Style Dictionary](https://amzn.github.io/style-dictionary/#/)
- [now-design system Figma](https://www.figma.com/design/wOVgmB8my4cHAif88cKO4r/Tokens---Variables---Styles?node-id=26-1467&p=f&m=dev)

---

For questions or contributions, see the main [@now-design/tokens README](../README.md). 