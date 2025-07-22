# AccordionTrigger Atom

> **Atomic Design Classification:**
> - **Type:** Atom
> - **Why:** AccordionTrigger performs a single function—expand/collapse—using a label and chevron icon. Even though it combines multiple atoms, it serves a single action, so it remains an Atom.
> - **Styling:** All core styles (spacing, color, font, icon) come from design tokens via CSS classes.
> - **Accessibility:** Uses button semantics, ARIA attributes, and keyboard support.

---

## 🚀 Usage

```jsx
import { AccordionTrigger } from '@your-scope/atoms';

<AccordionTrigger
  label="Item Name"
  expanded={false}
  onToggle={() => {}}
/>
```

---

## 🔧 Props
| Prop      | Type      | Description                                  |
|-----------|-----------|----------------------------------------------|
| label     | string    | Accordion label (required)                   |
| expanded  | boolean   | Is the accordion expanded? (required)        |
| onToggle  | function  | Handler for expand/collapse (required)       |
| className | string    | Additional class names (optional)            |
| style     | object    | Inline styles (optional)                     |

---

## 🎨 Token-Driven Styling
- Uses tokens for spacing, color, font, icon size, and border radius.
- Chevron icon rotates on expand/collapse.

---

## ♿ Accessibility
- Renders as a `<button>` with `aria-expanded` and `aria-label`.
- Fully keyboard accessible.

---

## 🧩 Best Practices
- Use for any expand/collapse trigger in lists, accordions, or panels.
- Always provide a clear, descriptive label.
- Document all usages in Storybook. 