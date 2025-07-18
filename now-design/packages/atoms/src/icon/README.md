# IconAtom

> **Atomic Design Classification & Naming:**
> - **Type:** Atom
> - **Why 'IconAtom' and not just 'Icon'?** The explicit 'Atom' suffix makes the atomic level clear, prevents ambiguity in large codebases, and reinforces the Atomic Design methodology. This naming ensures consistency, clarity, and scalability—especially as the system grows and may include molecules or organisms with similar names (e.g., IconButtonMolecule). All atom-level components in this system follow this convention for maximum transparency and maintainability.
> - **Summary:** IconAtom is a pure Atom: stateless, token-driven, and foundational, with a name that reflects its atomic role.

A universal, stateless icon atom for your design system. Token-driven, accessible, and highly flexible.

---

## 🚀 Installation

```bash
npm install @your-scope/atoms now-design-tokens
```

---

## 🛠️ Usage

1. **Import the tokens CSS at your app entry point:**
   ```js
   import 'now-design-tokens/dist/css/variables.css';
   ```
2. **Import and use IconAtom:**
   ```js
   import { IconAtom } from '@your-scope/atoms';
   import { SystemAddFill } from 'now-design-icons';

   <IconAtom icon={SystemAddFill} color="icon-primary" size="icon-md" ariaLabel="Add" />
   ```

---

## 🎨 Token-Driven Styling
- All color and size values use tokens from `now-design-tokens`.
- Example: `color="icon-primary"` resolves to `var(--icon-primary)`.

---

## ♿ Accessibility
- Use `ariaLabel` for screen readers.
- Use `role` (e.g., `img`, `button`) for semantic meaning.
- Use `tabIndex` and `onClick` for interactive icons.

---

## 🔧 Props
| Prop         | Type                | Description                                                      |
|--------------|---------------------|------------------------------------------------------------------|
| icon         | React component/SVG | The icon to render (required).                                   |
| size         | string/number       | Icon size (token name, px, em, etc.).                            |
| color        | string              | Icon color (token name, hex, CSS var, etc.).                     |
| ariaLabel    | string              | Accessibility label for screen readers.                          |
| title        | string              | Tooltip or accessible title.                                     |
| className    | string              | Custom class for additional styling.                             |
| style        | object              | Inline styles for one-off customizations.                        |
| onClick      | function            | Click handler (if icon is interactive).                          |
| tabIndex     | number              | Tab order (for keyboard accessibility if interactive).           |
| role         | string              | ARIA role (e.g., 'img', 'button').                               |
| spin         | boolean             | Animate/spin the icon (for loading states, etc.).                |
| disabled     | boolean             | Visually and functionally disables the icon if interactive.      |
| direction    | string              | For icons that can be rotated ('up', 'down', 'left', 'right').   |
| strokeWidth  | number/string       | For outline icons, controls the stroke thickness.                |
| fill         | string              | For SVGs, overrides the fill color.                              |
| focusable    | boolean             | Whether the icon is focusable (SVG attribute, for keyboard nav). |
| data-*       | any                 | Custom data attributes for analytics, testing, etc.              |

---

## 🧩 Best Practices
- Always use tokens for color and size.
- Use `ariaLabel` for accessibility.
- Use `role="button"` and `tabIndex={0}` for interactive icons.
- Document all icon usages in Storybook.

---

## 📚 See also
- [now-design-tokens](https://www.npmjs.com/package/now-design-tokens)
- [@your-scope/icons](https://www.npmjs.com/package/@your-scope/icons) 