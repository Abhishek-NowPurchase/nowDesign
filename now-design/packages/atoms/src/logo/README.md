# Logo Components

This directory contains all company and product logos as individual, self-contained React components.

---

## How to Consume

The logo system is designed for simplicity and performance. Each logo is a distinct component that can be imported directly. This allows for tree-shaking, ensuring that only the logos you use are included in your final application bundle.

1.  **Install the latest version of the package:**
    ```bash
    npm install now-design-atoms@latest
    ```

2.  **Import the specific logo component you need:**
    The component names are derived directly from their original filenames, in `PascalCase`.

    ```jsx
    import {
      LogometalCloudIcon,
      LogometalCloudLogo,
      LogonowPurchaseIcon,
      LogonowPurchaseLogo,
      LogonowPurchaseMetalCloudCombinedLogo
    } from 'now-design-atoms';
    ```

3.  **Use the component in your app:**

    *   **Theme-Dependent Icons:** These components accept a `color` prop. You can pass a CSS variable for easy theming.
        ```jsx
        <LogonowPurchaseIcon color="var(--normal-typography-bodyPrimary)" width="100" />
        <LogometalCloudIcon color="var(--normal-typography-bodyPrimary)" width="100" />
        ```

    *   **Static Logos:** These logos have their own color schemes and do not accept a `color` prop. Their text elements will, however, inherit the surrounding color (`fill="currentColor"`).
        ```jsx
        <LogonowPurchaseLogo width="200" />
        <LogometalCloudLogo width="200" />
        <LogonowPurchaseMetalCloudCombinedLogo width="400" />
        ```

## Design Philosophy: Simplicity and Reliability

The previous logo system attempted to use build-time automation to convert SVG files into components. This proved to be complex and unreliable, leading to runtime errors.

The new system is built on a simple, foolproof principle: **logos are just standard React components.**

-   **Inlined SVGs:** The SVG code for each logo is inlined directly into its own `.jsx` file.
-   **No Magic:** There is no longer any special build-time process. The components are compiled just like any other component in the library.
-   **Reliability:** This approach is highly reliable and eliminates the entire class of errors we were experiencing.
-   **Performance:** By exporting each logo individually, we allow consuming applications to "tree-shake" unused logos, reducing the final bundle size.

## Adding a New Logo

1.  Create a new `.jsx` file in this directory (e.g., `NewLogo.jsx`).
2.  Paste the SVG code inside a React component, ensuring it is properly formatted as JSX.
3.  Add standard props (`width`, `height`, `className`, etc.) and `PropTypes`.
4.  If the logo should be theme-dependent, ensure its `fill` attributes are set to `currentColor` and add a `color` prop.
5.  Export the new component from this `index.js` file.

## Supported Props

All logos support the following standard props for sizing, styling, and accessibility.

| Prop | Type | Description |
| :--- | :--- | :--- |
| `color` | string | **(Theme-dependent only)** Sets the color for the icon. Use CSS variables for best results. |
| `width` | string/number | Sets the width of the logo. |
| `height` | string/number | Sets the height of the logo. |
| `className`| string | Adds a custom CSS class to the root SVG element. |
| `style` | object | Allows for additional inline styles. |
| `aria-label`| string | Provides an accessible name for the logo for screen readers. |
| `title` | string | Provides a tooltip and accessible title for the logo. |
| `role` | string | Sets the ARIA role. Defaults to `img`. |
| `onClick` | function | A callback function to handle clicks. |
| `...` | ... | Any other valid SVG attributes are passed down to the root `<svg>` element. | 