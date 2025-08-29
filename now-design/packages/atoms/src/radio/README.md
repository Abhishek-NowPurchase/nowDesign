## Radio (Atom)

Token-driven radio input built on a native `<input type="radio">` for semantics and form integration, with an accessible, themeable visual wrapper.

---

## Architecture

- Native radio input (visually hidden) for keyboard, screen readers, and forms
- Custom control: outer circle with inner dot when checked
- Label wrapper allowing primary label and optional description
- Directional label placement via modifier classes

---

## Props

- id?: string — unique input id
- name: string — native grouping across same-named radios
- value: string | number — submitted value when selected
- checked?: boolean — controlled selection
- defaultChecked?: boolean — uncontrolled initial selection
- disabled?: boolean (default false)
- readOnly?: boolean (default false)
- size?: 's' | 'm' | 'l' (default 'm')
- labelPlacement?: 'right' | 'left' | 'top' | 'bottom' (default 'right')
- status?: 'error' | 'warning' | 'success' — validation skin
- label?: ReactNode — main label text/node
- description?: ReactNode — secondary description
- onChange?(e): void
- onFocus?(e): void
- onBlur?(e): void
- onKeyDown?(e): void
- className?: string
- style?: object

---

## Accessibility

- Relies on native radio semantics; focus and keyboard work out of the box
- Focus ring shown only on `:focus-visible` to reduce visual noise
- Wrapper sets `aria-disabled` when disabled
- Use `name` to group radios and ensure only one can be selected

---

## Usage

```jsx
import { Radio } from 'now-design-atoms';

function Example() {
  return (
    <div>
      <Radio name="fruit" value="apple" label="Apple" />
      <Radio name="fruit" value="banana" label="Banana" />
      <Radio name="fruit" value="cherry" label="Cherry" defaultChecked />
    </div>
  );
}
```

Label placement variants:

```jsx
<Radio name="opt" value="a" label="Left" labelPlacement="left" />
<Radio name="opt" value="b" label="Top" labelPlacement="top" />
<Radio name="opt" value="c" label="Bottom" labelPlacement="bottom" />
```

Validation skins:

```jsx
<Radio name="opt" value="ok" label="OK" status="success" />
<Radio name="opt" value="warn" label="Check" status="warning" />
<Radio name="opt" value="err" label="Invalid" status="error" />
```

---

## Theming & tokens

Colors and borders derive from CSS variables (design tokens). Key hooks in `Radio.css`:

- `--normal-stroke-primary`, `--normal-stroke-hover`, `--normal-stroke-active`
- `--normal-surface-otherCards`, `--normal-surface-page`
- `--color-brand-primary`
- Validation: `--normal-stroke-error`, `--normal-stroke-warning`, `--normal-stroke-success`

Override tokens in your theme to reskin without code changes.

---

## Testing checklist

- Native input present, changes bubble through `onChange`
- Mutual exclusivity enforced via same `name`
- Focus ring visible on keyboard focus only
- Disabled/readOnly states prevent interaction and adjust visuals
- Status classes apply styled borders/colors


