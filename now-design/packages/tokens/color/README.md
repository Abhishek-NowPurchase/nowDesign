# 🎨 Color Tokens — `@now-design/tokens/color`

## Overview

Color tokens are the foundation of a scalable, consistent, and themeable design system. In `@now-design/tokens`, color tokens are defined in a structured, Figma-mapped, and Style Dictionary-compatible format, enabling seamless integration across web, mobile, and design tools.

This documentation covers:

- What color tokens are and why they matter
- The structure of color tokens in this repo
- How to use color tokens in code (CSS, JS/TS, design tools)
- The mapping to Figma and design source of truth
- Extending and customizing color tokens
- Best practices for maintainability and accessibility
- Troubleshooting and FAQ

---

## 1. What Are Color Tokens?

Color tokens are named, reusable values that represent colors in your design system. Instead of hardcoding hex values, you use semantic or functional names (e.g., `color.brand.primary.500`), making your UI more maintainable, themeable, and accessible.

**Benefits:**
- Consistency across products and platforms
- Easy theming (light/dark, brand variants)
- Centralized updates
- Better collaboration between design and engineering

---

## 2. Color Token Structure

Color tokens are organized in the following files:

- **`brand.json`**: The source palette, directly mapped from Figma's "Colors - Brand" frame. Contains all brand color families and shades.
- **`alias.json`**: Semantic tokens (e.g., `background.primary`, `text.secondary`) that reference brand tokens. These are used in UI components.
- **`effect-styles.json`**: Tokens for shadows, gradients, overlays, and other effects, referencing brand or alias tokens.

All files are Style Dictionary-compatible and use a nested JSON structure.

### Example: `brand.json`
```json
{
  "color": {
    "brand": {
      "primary": {
        "50": { "value": "#F0F7FF" },
        "100": { "value": "#C2E0FF" },
        "500": { "value": "#1976D2" }
        // ...more shades
      },
      "success": {
        "500": { "value": "#2E7D32" }
        // ...more shades
      }
      // ...other families
    }
  }
}
```

### Example: `alias.json`
```json
{
  "color": {
    "background": {
      "primary": { "value": "{color.brand.primary.50}" },
      "surface": { "value": "{color.brand.neutral.0}" }
    },
    "text": {
      "primary": { "value": "{color.brand.neutral.900}" },
      "link": { "value": "{color.brand.primary.500}" }
    }
    // ...more aliases
  }
}
```

### Example: `effect-styles.json`
```json
{
  "color": {
    "shadow": {
      "default": { "value": "rgba(0,0,0,0.12)" }
    },
    "gradient": {
      "brand": { "value": "linear-gradient(90deg, {color.brand.primary.400} 0%, {color.brand.primary.600} 100%)" }
    }
  }
}
```

---

## 3. Installation

### Monorepo Workspace

If you're using npm workspaces or yarn workspaces:

```sh
# From the monorepo root
npm install
```

### As a Standalone Package

If you want to use just the tokens package:

```sh
npm install @now-design/tokens
```

---

## 4. Usage

### 4.1. In CSS (via Style Dictionary build)

After building tokens with Style Dictionary, you'll get output files (e.g., CSS variables, SCSS, JS, JSON).

**Example: Using CSS Variables**
```css
:root {
  --color-brand-primary-500: #1976D2;
  --color-background-primary: var(--color-brand-primary-50);
  --color-text-primary: var(--color-brand-neutral-900);
}
```
**Usage in CSS:**
```css
.button {
  background: var(--color-background-primary);
  color: var(--color-text-primary);
}
```

### 4.2. In JavaScript/TypeScript

You can import the JSON files directly or use the built JS/TS output.

**Example:**
```js
import colorTokens from '@now-design/tokens/color/alias.json';

const primaryBg = colorTokens.color.background.primary.value; // → "#F0F7FF"
```

### 4.3. In Design Tools (Figma)

- The tokens are mapped 1:1 to Figma color styles.
- Designers should use the Figma color styles (e.g., "Brand/Primary/500") as the source of truth.
- Developers reference the corresponding token (e.g., `color.brand.primary.500`).

### 4.4. In Storybook

- Use color tokens in your component stories to ensure consistency.
- Document color usage in stories and docs using the token names, not raw hex values.

---

## 5. Mapping to Figma

- **Source of Truth:** All color tokens are mapped to Figma styles in the "Colors - Brand", "Colors - Alias", and "Colors - Effect Styles" frames.
- **Naming:** Token names match Figma style names (converted to token case).
- **Updates:** When Figma colors change, update the JSON files (manually or via script) to keep code and design in sync.

---

## 6. Extending and Customizing

### 6.1. Adding a New Brand Color

1. Add the new color family and shades to `brand.json` (e.g., `color.brand.warning`).
2. Reference it in `alias.json` if needed (e.g., `color.background.warning`).

### 6.2. Adding a Semantic Alias

1. Add a new alias in `alias.json`:
   ```json
   "color": {
     "border": {
       "focus": { "value": "{color.brand.primary.500}" }
     }
   }
   ```

### 6.3. Adding/Editing Effect Styles

- Add new gradients, overlays, or shadows in `effect-styles.json`, referencing brand or alias tokens.

---

## 7. Best Practices

- **Never use raw hex values in code or design.** Always use tokens.
- **Use semantic aliases in UI code.** Only use brand tokens for palette generation or theming.
- **Keep Figma and code in sync.** Automate extraction if possible.
- **Document all changes.** Update README and changelogs when tokens change.
- **Test for accessibility.** Ensure color combinations meet WCAG contrast requirements.
- **Support theming.** Use alias tokens to enable easy theme switching (e.g., light/dark).

---

## 8. Troubleshooting & FAQ

### Q: I see a color mismatch between Figma and code!
- Check that the token value matches the latest Figma style.
- Re-run the extraction script or update the JSON manually.

### Q: How do I add a dark theme?
- Add a new set of alias tokens (e.g., `alias-dark.json`) referencing different brand tokens.
- Use CSS custom properties or a theming solution to switch at runtime.

### Q: Can I use tokens in React Native?
- Yes! Use the JS/JSON output and map tokens to your RN styles.

### Q: How do I reference a token in another token?
- Use the `{path.to.token}` syntax (Style Dictionary reference).

---

## 9. Contributing

- **Additions/changes:** Update the relevant JSON file and document your change.
- **Validation:** Run the Style Dictionary build and check for errors.
- **Review:** Ensure all new tokens are mapped to Figma and follow naming conventions.

---

## 10. Resources

- [Style Dictionary Documentation](https://amzn.github.io/style-dictionary/)
- [Figma Tokens Plugin](https://docs.tokens.studio/)
- [WCAG Color Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Storybook Theming](https://storybook.js.org/docs/react/configure/theming)

---

## 11. Example Token Reference Table

| Token Name                      | Figma Style           | Value      | Usage Example         |
|----------------------------------|-----------------------|------------|----------------------|
| `color.brand.primary.500`        | Brand/Primary/500     | #1976D2    | Buttons, links       |
| `color.background.primary`       | Alias/Background/Primary | #F0F7FF | App background       |
| `color.text.primary`             | Alias/Text/Primary    | #212121    | Main text            |
| `color.shadow.default`           | Effect/Shadow/Default | rgba(0,0,0,0.12) | Card shadow    |

---

## 12. File Structure

```
packages/tokens/color/
  ├── brand.json         # Brand palette, mapped from Figma
  ├── alias.json         # Semantic/functional tokens
  ├── effect-styles.json # Shadows, gradients, overlays
  └── README.md          # This documentation
```

---

## 13. Updating Tokens

1. **From Figma:** Use the extraction script or manually update JSON files.
2. **Run Build:** `npm run build-tokens` (or your Style Dictionary build command).
3. **Test:** Check output in Storybook and your app.
4. **Document:** Update this README if structure or usage changes.

---

## 14. Contact

For questions, suggestions, or issues, please open an issue or contact the design system team.

---

**By following this documentation, you ensure that your color system is robust, scalable, and always in sync with your design source of truth.** 