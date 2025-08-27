## TextInput (Molecule)

A composable text field that combines Label, Input, Tooltip, validation skins, and optional helper text. It is token-first, accessible, and themeable.

### Composition

- Label (large inline when idle; small floating chip when focused/filled)
- Input (field surface, border, icon slot, focus ring)
- Tooltip (on the info icon rendered by Label)
- Optional helper text under the field

### Install prerequisites

Ensure design tokens and styles are loaded once in your app:

```js
import 'now-design-tokens/dist/css/variables.css';
import 'now-design-styles/dist/text/text-styles.css';
import 'now-design-styles/dist/color/colorStyles.css';
import 'now-design-styles/dist/fonts/fonts.css';
import 'now-design-styles/dist/effect/effectStyles.css';
```

### Usage

Basic:

```jsx
<TextInput
  id="username"
  label="Username"
  value={value}
  onChange={(e) => setValue(e.target.value)}
  placeholder="Start typing..."
/>
```

With tooltip, icon, and helper text:

```jsx
import { SystemSearchLine } from 'now-design-icons';

<TextInput
  id="search"
  label="Search"
  info="Type your query and press Enter"
  value={query}
  onChange={(e) => setQuery(e.target.value)}
  icon={<SystemSearchLine width={20} height={20} />}
  helperText="Search by name, id, or tag"
/>
```

Regex and length constraints:

```jsx
// Format: two letters, dash, three digits (e.g., DI-001)
<TextInput
  id="deviceId"
  label="Identifier"
  value={id}
  onChange={(e) => setId(e.target.value)}
  minLength={6}
  maxLength={6}
  regex={/^[A-Za-z]{2}-\d{3}$/}
  helperText="Unique alphanumeric identifier for spectrometer integration"
/>
```

Email with native keyboards:

```jsx
<TextInput id="email" label="Email" value={email} onChange={(e)=>setEmail(e.target.value)}
  type="email" inputMode="email" helperText="We’ll never share your email." />
```

### Props

- `id: string` — required for A11y linking to helper text
- `label: string` — visible label
- `required?: boolean` — shows asterisk
- `info?: string | ReactElement` — tooltip content
- `value: string` — controlled value
- `onChange(e): void` — change handler
- `onFocus?, onBlur?`
- `placeholder?: string` (default: "Start typing…")
- `icon?: ReactNode`, `iconColor?: string`
- `disabled?: boolean` — design-specific behavior (applies when field is filled)
- `status?: 'error' | 'success' | 'warning'` — explicit visual skin (overrides computed validation)
- `type?: 'text'|'email'|'number'|'password'|'tel'|'url'` — forwarded to the native input
- `inputMode?: 'text'|'email'|'numeric'|'tel'|'url'|'search'|'decimal'`
- `regex?: RegExp | string` — computed validation; mismatch -> error skin
- `validator?: (value)=>({ valid?: boolean; status?: 'error'|'success'|'warning'; message?: string })`
- `validateOn?: 'change'|'blur'|'submit'` — timing hook (visual mapping occurs on render)
- `preventInvalid?: boolean` — reserved for keystroke filtering (future)
- `minLength?: number`, `maxLength?: number`
- `helperText?: string | ReactElement` — optional text below the field

### Behavior & states

- Large label shows when idle; small label floats as a chip when focused or filled
- Background sync: small chip background follows the input surface for hover / active / focus / disabled, and switches to validation variants
- State precedence: validation > active/focus > hover
- Keyboard-only focus ring: appears on Tab focus (not mouse click)

### Accessibility

- The molecule sets `aria-invalid` when computed status is error
- Helper text is linked via `aria-describedby={id}-helper`
- Tooltip is accessible and closes on Escape

### Theming

Driven entirely by tokens. Update your theme’s tokens to re-skin surfaces, borders, radii, and typography without code changes.


