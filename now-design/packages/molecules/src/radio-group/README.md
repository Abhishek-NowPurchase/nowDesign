## RadioGroup (Molecule) and Radio (Atom)

Manages a mutually exclusive set of options with keyboard navigation and accessible labeling. Uses the `Radio` atom for each option.

### RadioGroup props
- `id`, `label`, `required`, `info`
- `value` (string|number, controlled), `onChange(next)`
- `options: { value, label, description?, disabled? }[]`
- `orientation: 'horizontal'|'vertical'` (default vertical), `wrap?: boolean`
- `size: 's'|'m'|'l'` (default m)
- `status?: 'error'|'warning'|'success'`, `helperText?`, `disabled?`

### Radio atom props (subset)
- `name`, `value`, `checked`, `disabled`, `size`, `label`, `description`

### Behavior
- Arrow keys move and select previous/next enabled option (Home/End jump); Tab enters/exits group.
- Group sets `role="radiogroup"`, links helper via `aria-describedby`, and toggles `aria-invalid` on error.
- Each option renders a native `<input type="radio">` for form semantics.

### Usage
```jsx
import { RadioGroup } from 'now-design-molecules';

<RadioGroup
  id="shipping"
  label="Shipping speed"
  value={speed}
  onChange={setSpeed}
  orientation="horizontal"
  options={[
    { value: 'standard', label: 'Standard (3–5 days)' },
    { value: 'express', label: 'Express (1–2 days)' },
    { value: 'overnight', label: 'Overnight', disabled: peakBlocked },
  ]}
  helperText="Choose one"
/>
```

---

Note: RadioGroup composes the `Radio` atom from `now-design-atoms`. Ensure compatible versions are installed in your app.


