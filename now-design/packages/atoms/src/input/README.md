## Input (Atom)

A foundational, token-driven text input built for composition. It exposes only UI concerns (layout, states, icon slot, placeholder behavior) so molecules (e.g., TextField with Label/Tooltip/Validation) can own business logic.

### Features
- Wrapper-based layout for prefix/suffix/icon and consistent sizing
- States: default, hover, active, focus, filled, disabled
- Validation skins via classes: `input--error`, `input--success`, `input--warning`
- Keyboard-only outer focus ring with layered box-shadows
- Flexible placeholder strategy: smart-by-default, overridable via prop
- Optional right-side icon slot (any React node), color-controllable
- Token-first CSS with CSS variables and calc(); theming-ready
- A11y-friendly: clear focus styles via :focus-within and :focus-visible

### When to use
- As the visual input field inside a higher-level TextField/Control molecule that adds label, tooltip, validation, helper text, char counter, etc.

---

## Installation
```bash
# as part of your design atoms package
npm install now-design-styles now-design-icons
```
Ensure the styles package is loaded once in your app entry:
```js
import 'now-design-styles/dist/text/text-styles.css';
import 'now-design-styles/dist/fonts/fonts.css';
```

---

## Usage

### Basic (controlled)
```jsx
import { Input } from './Input';

function Example() {
  const [value, setValue] = useState('');
  return (
    <Input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="Label Text *"
    />
  );
}
```

### With icon (right side)
```jsx
<Input
  value={value}
  onChange={(e) => setValue(e.target.value)}
  placeholder="Search"
  icon={<MyCircleIcon />}
  iconColor="#1579BE"
/>
```

### Always show placeholder (molecule override)
```jsx
<Input
  value={value}
  onChange={(e) => setValue(e.target.value)}
  placeholder="Email"
  showPlaceholder={true}
/>
```

---

## API

### Props
- `value: string` — controlled value
- `onChange: (e: React.ChangeEvent<HTMLInputElement>) => void` — change handler
- `placeholder?: string` — placeholder text
- `icon?: React.ReactNode` — optional adornment rendered on the right
- `iconColor?: string` — CSS color for the icon container (applies via `color`)
- `className?: string` — custom class(es) on the wrapper
- `onFocus?: (e) => void` — focus handler
- `onBlur?: (e) => void` — blur handler
- `showPlaceholder?: boolean` — if true, placeholder is visible even when not focused
- `type?: 'text'|'email'|'number'|'password'|'tel'|'url'`
- `inputMode?: 'text'|'email'|'numeric'|'tel'|'url'|'search'|'decimal'`
- `status?: 'error'|'success'|'warning'` — visual skin class
- `disabled?: boolean`
- `...props` — spread to native `<input>` (name, autoComplete, spellCheck, etc.)

### States and behavior
- **Default**: clean surface, placeholder hidden
- **Hover**: `--normal-stroke-hover`, `--normal-surface-tableHover`
- **Active / Focus**: `--normal-stroke-active`, `--normal-surface-active`
- **Keyboard focus ring**: outer ring appears on Tab (not mouse)
- **Disabled**: `--normal-surface-disabled`, not-allowed cursor
- **Validation**: error/success/warning tokens on border/background

---

## Styling & Tokens
The component is fully driven by design tokens via CSS variables.

Key styles (simplified):
```css
.input {
  display: flex;
  width: 282px;
  min-height: 40px;              /* total height with border-box */
  padding: 10px;                  /* vertical = 20px total */
  border: 1px solid var(--normal-stroke-primary, #CCC);
  border-radius: calc(var(--cornerRadius-m, 8) * 1px);
  background: var(--normal-surface-otherCards, #FFF);
  box-sizing: border-box;         /* ensures 40px total = 18 text + 20 padding + 2 border */
}
.input__text { flex: 1; background: transparent; border: 0; outline: 0; min-width: 0; }
.input__text::placeholder { color: var(--normal-typography-disabled, #B3B3B3); opacity: 0; transition: opacity .2s; }
.input--focused .input__text::placeholder { opacity: 1; }
.input--show-placeholder .input__text::placeholder { opacity: 1; }
.input--focused { border-color: var(--normal-border-active, #1579BE); box-shadow: 0 0 0 calc(var(--strokeWidth-s, 1) * 1px) var(--normal-border-active, #1579BE); }
.input:hover { border-color: var(--normal-border-hover, #999); }
.input__icon { display:flex; align-items:center; justify-content:center; width:20px; height:20px; color: var(--normal-icon-iconActive, #666); }
```

Why a wrapper div?
- Provides a flex container for icon/prefix/suffix slots
- Enables `:focus-within` so focus ring works when clicking the icon area
- Centralizes border/background/radius sizing with `box-sizing: border-box`

---

## Accessibility
- Native `<input>` is used for semantics and screen-reader support
- Focus visibility: outline via `:focus-within`/`focus-visible` styling on the wrapper
- Large click target: wrapper click area focuses input
- Placeholder is not a label; molecules must associate visible labels (`<label htmlFor>` or ARIA)

---

## Composition (Molecule Guidance)
Use this atom inside a TextField/Control molecule that provides:
- Label (small/large) + tooltip on the right
- Validation (error/success) and messages
- Disabled/readonly logic
- Prefix/suffix (icons, buttons), clear button, character count, helper text

Example molecule sketch:
```jsx
function TextField({ label, tooltip, error, disabled, ...inputProps }) {
  return (
    <div className={"text-field"}>
      <Label size="large" info={tooltip}>{label}</Label>
      <Input {...inputProps} /* no disabled here; molecule decides */ />
      {error && <div className="text-field__error">{error}</div>}
    </div>
  );
}
```

---

## Testing
```jsx
import { render, screen, fireEvent } from '@testing-library/react';
import Input from './Input';

test('renders placeholder on focus', () => {
  render(<Input value="" placeholder="Email" />);
  const input = screen.getByPlaceholderText('Email');
  input.focus();
  expect(input).toHaveFocus();
});

test('calls onChange', () => {
  const onChange = jest.fn();
  render(<Input value="" onChange={onChange} />);
  fireEvent.change(screen.getByRole('textbox'), { target: { value: 'x' } });
  expect(onChange).toHaveBeenCalled();
});
```

---

## Troubleshooting
- Height shows 58–62px instead of 40px total:
  - Ensure `.input { box-sizing: border-box; min-height: 40px; padding: 10px; border: 1px; }`
  - Avoid adding extra vertical margins on the native input element
- Placeholder always visible:
  - Confirm `showPlaceholder` is not set or remove `.input--show-placeholder`
- React 16 pooled events:
  - In parent handlers, capture `const { value } = e.target` before updating state

---

## Changelog (high-level)
- Removed disabled state (molecule responsibility)
- Added flexible placeholder behavior with `showPlaceholder`
- Fixed sizing via `box-sizing: border-box` on wrapper
- Added optional right-side icon slot
