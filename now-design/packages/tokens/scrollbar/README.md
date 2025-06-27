# 🖱️ Scrollbar Tokens — `@now-design/tokens/scrollbar`

## Overview

Scrollbar tokens provide a scalable, themeable, and highly customizable way to style scrollbars across your product suite. This package defines all design decisions for scrollbars (width, colors, border, SVG, states, dark mode) as design tokens, enabling consistent, accessible, and brand-aligned scrollbars in web and native applications.

---

## 1. What Are Scrollbar Tokens?

Scrollbar tokens are named, reusable values that define the appearance and behavior of scrollbars. They abstract away hardcoded CSS, allowing you to:
- Centralize scrollbar design decisions
- Support theming (light/dark, brand variants)
- Enable custom SVG thumb graphics
- Easily update or extend scrollbar styles across all platforms

---

## 2. Token Structure

Tokens are defined in `scrollbar.json` and support:
- **Width**: The thickness of the scrollbar
- **Thumb**: Color, border, border radius, SVG, hover/active states
- **Track**: Color, border radius
- **Corner**: Color
- **Dark mode**: All of the above, for dark theme

### Example: `scrollbar.json`
```json
{
  "scrollbar": {
    "width": { "value": "4px" },
    "thumb": {
      "color": { "value": "rgba(0,0,0,0.6)" },
      "borderRadius": { "value": "2px" },
      "border": {
        "width": { "value": "1px" },
        "style": { "value": "solid" },
        "color": { "value": "linear-gradient(90deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0) 100%)" }
      },
      "svg": { "value": "./scrollbar-thumb.svg" },
      "hover": { "color": { "value": "rgba(0,0,0,0.8)" } },
      "active": { "color": { "value": "rgba(0,0,0,1)" } }
    },
    "track": {
      "color": { "value": "#F0F0F0" },
      "borderRadius": { "value": "2px" }
    },
    "corner": {
      "color": { "value": "#E0E0E0" }
    },
    "dark": {
      "thumb": {
        "color": { "value": "rgba(255,255,255,0.4)" },
        "hover": { "color": { "value": "rgba(255,255,255,0.6)" } },
        "active": { "color": { "value": "rgba(255,255,255,0.8)" } }
      },
      "track": { "color": { "value": "#222" } },
      "corner": { "color": { "value": "#333" } }
    }
  }
}
```

---

## 3. SVG Thumb Integration

- The SVG for the thumb is stored as `scrollbar-thumb.svg`.
- Reference it in your CSS or JS using the token: `scrollbar.thumb.svg.value`.
- This allows for highly branded, visually rich scrollbar thumbs.

---

## 4. Usage

### 4.1. In CSS (with Style Dictionary build)

After building tokens, you can use CSS variables:
```css
:root {
  --scrollbar-width: 4px;
  --scrollbar-thumb-color: rgba(0,0,0,0.6);
  --scrollbar-thumb-border-radius: 2px;
  --scrollbar-thumb-border: 1px solid linear-gradient(90deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0) 100%);
  --scrollbar-track-color: #F0F0F0;
}

/* Example for Webkit browsers */
::-webkit-scrollbar {
  width: var(--scrollbar-width);
}
::-webkit-scrollbar-thumb {
  background: var(--scrollbar-thumb-color);
  border-radius: var(--scrollbar-thumb-border-radius);
  /* For SVG thumb, use a mask or background-image: */
  /* background: url('scrollbar-thumb.svg') center/cover no-repeat; */
}
::-webkit-scrollbar-track {
  background: var(--scrollbar-track-color);
  border-radius: var(--scrollbar-track-border-radius);
}
```

### 4.2. In JavaScript/TypeScript

Import the JSON and use tokens in your styling logic:
```js
import scrollbarTokens from '@now-design/tokens/scrollbar/scrollbar.json';

const thumbColor = scrollbarTokens.scrollbar.thumb.color.value;
const thumbSVG = require('./scrollbar-thumb.svg');
```

### 4.3. Theming (Light/Dark)

- Use the `scrollbar.dark` object for dark mode overrides.
- In CSS, you can scope dark mode tokens under a selector:
```css
[data-theme="dark"] {
  --scrollbar-thumb-color: rgba(255,255,255,0.4);
  --scrollbar-track-color: #222;
}
```
- In JS, switch tokens based on theme context.

---

## 5. Customization & Extension

- **States:** Customize `hover` and `active` colors for thumb.
- **SVG:** Swap out `scrollbar-thumb.svg` for a different look.
- **Width:** Adjust `scrollbar.width.value` for thicker/thinner scrollbars.
- **Dark mode:** All tokens can be overridden for dark theme.
- **Add new states:** Extend the JSON with e.g. `focus`, `disabled` as needed.

---

## 6. Best Practices

- **Always use tokens, never hardcoded values.**
- **Keep SVGs simple and optimized** for performance.
- **Test for accessibility:** Ensure thumb/track contrast is sufficient.
- **Document all changes** to tokens and SVG assets.
- **Support theming** by using the `dark` object and/or CSS custom properties.

---

## 7. Troubleshooting & FAQ

**Q: My custom SVG thumb doesn't appear?**
- Check your CSS for correct `background` or `mask` usage.
- Ensure the SVG path is correct and the asset is present.

**Q: Scrollbar looks wrong in dark mode?**
- Make sure your theme switcher applies the correct dark tokens.
- Check for CSS specificity issues.

**Q: How do I add a horizontal scrollbar?**
- The same tokens apply; use `::-webkit-scrollbar-thumb:horizontal` etc. in CSS.

**Q: Can I use these tokens in React Native?**
- Not directly, but you can map the values to RN's `ScrollView` props or use them in custom components.

---

## 8. Example: Full Custom Scrollbar CSS
```css
:root {
  --scrollbar-width: 4px;
  --scrollbar-thumb-color: rgba(0,0,0,0.6);
  --scrollbar-thumb-border-radius: 2px;
  --scrollbar-track-color: #F0F0F0;
}
[data-theme="dark"] {
  --scrollbar-thumb-color: rgba(255,255,255,0.4);
  --scrollbar-track-color: #222;
}
::-webkit-scrollbar {
  width: var(--scrollbar-width);
}
::-webkit-scrollbar-thumb {
  background: var(--scrollbar-thumb-color);
  border-radius: var(--scrollbar-thumb-border-radius);
  /* background: url('scrollbar-thumb.svg') center/cover no-repeat; */
}
::-webkit-scrollbar-thumb:hover {
  background: rgba(0,0,0,0.8);
}
::-webkit-scrollbar-thumb:active {
  background: rgba(0,0,0,1);
}
::-webkit-scrollbar-track {
  background: var(--scrollbar-track-color);
  border-radius: 2px;
}
```

---

## 9. File Structure

```
packages/tokens/scrollbar/
  ├── scrollbar.json         # All scrollbar tokens
  ├── scrollbar-thumb.svg    # Custom SVG for thumb
  ├── fetch-figma-scrollbar.js # (optional) Script for fetching SVG from Figma
  └── README.md              # This documentation
```

---

## 10. Updating & Contributing

- **To update tokens:** Edit `scrollbar.json` and/or replace `scrollbar-thumb.svg`.
- **To add new states or themes:** Extend the JSON structure.
- **To fetch new SVGs from Figma:** Use or update the provided script.
- **Document all changes** in this README and your changelog.

---

## 11. Resources
- [MDN: ::-webkit-scrollbar](https://developer.mozilla.org/en-US/docs/Web/CSS/::-webkit-scrollbar)
- [Custom Scrollbars in CSS](https://css-tricks.com/the-current-state-of-styling-scrollbars/)
- [Style Dictionary](https://amzn.github.io/style-dictionary/)

---

**By using these tokens, you ensure your scrollbars are consistent, themeable, and easy to maintain across your design system.** 