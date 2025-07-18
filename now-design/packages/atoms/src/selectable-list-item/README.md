# SelectableListItem Atom

> **Atomic Design Classification:**
> - **Type:** Atom
> - **Why:** SelectableListItem performs a single function—selecting an item—using an icon, label, and selection indicator. Even though it combines multiple atoms, it serves a single action, so it remains an Atom.
> - **Styling:** All core styles (spacing, color, font, icon, indicator) come from design tokens via CSS classes.
> - **Accessibility:** Uses option semantics, ARIA attributes, and keyboard support.

---

## 🚀 Usage

```jsx
import { SelectableListItem } from '@your-scope/atoms';

<SelectableListItem
  icon="User"
  label="Item Name"
  selected={false}
  onSelect={() => {}}
/>
```

---

## 🔧 Props
| Prop      | Type      | Description                                 |
|-----------|-----------|---------------------------------------------|
| icon      | string    | Icon name (from now-design-icons, required)  |
| label     | string    | Item label (required)                        |
| selected  | boolean   | Is the item selected? (required)             |
| onSelect  | function  | Handler for selection (required)             |
| disabled  | boolean   | Is the item disabled? (optional)             |
| className | string    | Additional class names (optional)            |
| style     | object    | Inline styles (optional)                     |

---

## 🎨 Token-Driven Styling
- Uses tokens for spacing, color, font, icon size, and indicator bar.
- Blue bar indicator appears when selected.

---

## ♿ Accessibility
- Renders as a `<div>` with `role="option"` and `aria-selected`.
- Fully keyboard accessible.

---

## 🧩 Best Practices
- Use for any selectable list, menu, or option.
- Always provide a clear, descriptive label and icon.
- Document all usages in Storybook. 