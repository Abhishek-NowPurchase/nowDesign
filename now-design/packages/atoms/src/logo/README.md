# CompanyLogo Component

## How to Consume

1. **Import the specific logo component you need:**
   ```jsx
   import { LogoNowPurchase, LogoMetalCloud } from 'now-design-atoms/dist/logo';
   ```

2. **Use the component in your app:**
   ```jsx
   // For a theme-dependent logo
   <LogoNowPurchase color="var(--glass-surface-disabled)" />

   // For a static logo
   <LogoMetalCloud />
   ```

3. **Set up CSS for theming (for theme-dependent logos):**
   ```css
   :root {
     --glass-surface-disabled: #1A1A1A;
   }
   [data-theme="dark"] {
     --glass-surface-disabled: #F5F5F5;
   }
   ```
   - When you toggle the theme (e.g., by setting `data-theme="dark"` on your root element), the logo color will update automatically.

---

## Adding a New Logo
1. Add your new SVG to the `packages/atoms/src/logo` directory.
2. Re-run the build (`npm run build --workspace=packages/atoms`).
3. The new logo will be automatically exported and available for consumption.

---

## Supported Props
| Prop         | Type      | Description                                                                                 |
|--------------|-----------|---------------------------------------------------------------------------------------------|
| `color`      | string    | Sets the color for theme-dependent logos. Use a CSS variable for theming.                   |
| `width`      | string/number | Sets the width of the logo.                                                                |
| `height`     | string/number | Sets the height of the logo.                                                               |
| `className`  | string    | Adds a custom CSS class to the SVG.                                                         |
| `style`      | object    | Additional inline styles.                                                                   |
| `aria-label` | string    | Accessibility: describes the logo for screen readers.                                      |
| `title`      | string    | Accessibility: sets a title for the SVG.                                                    |
| `role`       | string    | Accessibility role, defaults to `img`.                                                      |
| `onClick`    | function  | Click handler for interactive use.                                                          |
| ...          | ...       | Any other SVG/HTML prop is forwarded to the SVG.                                            | 