# @your-scope/atoms

Reusable, stateless atomic UI components for your design system, powered by now-design tokens and styles.

---

## 🚀 Installation

```bash
npm install @your-scope/atoms now-design-tokens now-design-styles
# or
yarn add @your-scope/atoms now-design-tokens now-design-styles
```

> **Note:** `now-design-tokens` and `now-design-styles` are required peer dependencies. You must install them alongside this package.

---

## 🛠️ Usage

1. **Import the tokens and styles CSS at your app entry point:**
   ```js
   import 'now-design-tokens/dist/css/variables.css';
   import 'now-design-styles/text/text-styles.css';
   ```
2. **Import and use atoms in your components:**
   ```js
   import { IconAtom, TypographyAtom } from '@your-scope/atoms';

   <TypographyAtom className="bold-h5">Heading 5 Bold</TypographyAtom>
   <IconAtom icon={SomeIcon} color="icon-primary" size="icon-md" ariaLabel="Add" />
   ```

---

## 🎨 Token-Driven Styling
- All visual properties (color, size, spacing, etc.) use tokens from `now-design-tokens` and styles from `now-design-styles`.
- **Never use raw values** (e.g., `#fff`, `16px`) in your code—always use tokens and classes (e.g., `color="icon-primary"`, `className="bold-h5"`).

---

## ♿ Accessibility
- All atoms are stateless and accessible by default.
- Use `ariaLabel`, `role`, and `tabIndex` props as needed for screen readers and keyboard navigation.
- See Storybook for accessibility best practices and examples.

---

## 📚 Storybook & Documentation
- Every atom has a Storybook story showing all props, states, and variants.
- Usage examples always use tokens and classes, not raw values.
- Accessibility notes and best practices are included in stories.

---

## 🧩 Best Practices
- Atoms are stateless: all state is managed by parent components.
- Use only tokens and allowed classes for all styling.
- Import the tokens and styles CSS once at the app entry point.
- Keep your code DRY and composable.

---

## 🔗 Related Packages
- [now-design-tokens](https://www.npmjs.com/package/now-design-tokens): Design tokens for color, size, spacing, etc.
- [now-design-styles](https://www.npmjs.com/package/now-design-styles): Prebuilt CSS classes for typography and more.
- [@your-scope/icons](https://www.npmjs.com/package/@your-scope/icons): Icon library for use with IconAtom.

---

## 📝 License
MIT 

## 🚀 Usage in UI (Not Storybook)

To use atoms in your application, import them directly from the package and ensure global styles are loaded:

```jsx
// Import global styles (at your app entry point)
import 'now-design-styles/text/text-styles.css';
import 'now-design-styles/fonts/fonts.css';

// Import atoms
import { AccordionTrigger, SelectableListItem, Typography, Icon } from '@your-scope/atoms';

function Example() {
  return (
    <div>
      <AccordionTrigger
        label="Section Title"
        expanded={false}
        onToggle={() => {}}
        icon="SystemAddFill"
      />
      <SelectableListItem
        icon="User"
        label="Profile"
        selected={true}
        onSelect={() => {}}
      />
      <Typography className="bold-h4">Heading</Typography>
      <Icon icon="SystemAddFill" />
    </div>
  );
}
```

> **Note:** Always import the global styles from `now-design-styles` at your app's entry point to ensure all tokens and typography are applied correctly. 