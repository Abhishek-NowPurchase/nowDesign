# CompanyLogo Component

## How to Consume

1. **Import the component:**
   ```jsx
   import CompanyLogo from './logo/CompanyLogo';
   ```

2. **Use a static (theme-independent) logo:**
   ```jsx
   <CompanyLogo variant="nowPurchase" />
   <CompanyLogo variant="metalCloud" />
   ```

3. **Use a theme-dependent logo (recommended):**
   - Set up your CSS variable for the color token (e.g., `--glass-surface-disabled`).
   - Pass the variable to the `color` prop:
   ```jsx
   <CompanyLogo variant="nowPurchaseLogo" color="var(--glass-surface-disabled)" />
   <CompanyLogo variant="metalCloudLogo" color="var(--glass-surface-disabled)" />
   <CompanyLogo variant="combinedLogo" color="var(--glass-surface-disabled)" />
   ```

4. **Set up CSS for theming:**
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

## Supported Props
| Prop         | Type      | Description                                                                                 |
|--------------|-----------|---------------------------------------------------------------------------------------------|
| `variant`    | string    | Which logo to render. One of: `nowPurchase`, `metalCloud`, `nowPurchaseLogo`, `metalCloudLogo`, `combinedLogo`. |
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

### Example Usage
```jsx
<CompanyLogo
  variant="nowPurchaseLogo"
  color="var(--glass-surface-disabled)"
  width={120}
  height={40}
  className="my-logo"
  aria-label="Now Purchase Logo"
  title="Now Purchase Logo"
  role="img"
  onClick={() => alert('Logo clicked!')}
  style={{ margin: '1rem' }}
/>
```

---

## Supported Variants
- **nowPurchase**: Static logo (from nowPurchase-Icon.svg)
- **metalCloud**: Static logo (from metalCloud-Icon.svg)
- **nowPurchaseLogo**: Theme-dependent logo (from nowPurchase-Logo.svg)
- **metalCloudLogo**: Theme-dependent logo (from metalCloud-Logo.svg)
- **combinedLogo**: Theme-dependent logo (from nowPurchase-MetalCloud-CombinedLogo.svg)

## Theming with CSS Variables
To ensure the logo color updates automatically with your theme, use a CSS variable for the color prop. For example:

```css
:root {
  --glass-surface-disabled: #1A1A1A;
}
[data-theme="dark"] {
  --glass-surface-disabled: #F5F5F5;
}
```

When you change the theme (e.g., by toggling `data-theme="dark"` on your root element), the logo color will update automatically.

## Adding More Logos
- Place new SVGs in this folder.
- Add an import and a key to the `logoMap` in `CompanyLogo.jsx`.
- Use a clear, descriptive key for the `variant` prop (e.g., `brandMark`, `wordmark`).

## Notes
- For static (theme-independent) logos, use fixed colors in the SVG.
- For theme-dependent logos, use `fill="currentColor"` in the SVG so the color prop or CSS variable works.
- The `color` prop only affects theme-dependent variants.
- **Best practice:** Always use design tokens and CSS variables for theme-dependent assets to ensure consistency and easy theme switching. 