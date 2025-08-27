## MinMax (Molecule)

MinMax is a composable range control (min and max) built from two Input atoms and a shared Label. It enforces domain and ordering constraints, can run regex/custom validation, and supports helper text and unit adornments. All visuals are token-driven and themeable.

---

## Architecture

- Label (large, above the pair) with required asterisk and optional Tooltip (`info`)
- Two Input atoms (min and max) laid out with CSS grid: `min – max`
- Optional helper text under the pair
- Group-level validation and per-field skins (error/warning/success)

---

## Props

- id: string — base id; inputs become `${id}-min` and `${id}-max`
- label?: string, required?: boolean, info?: string | ReactNode
- value: { min?: string|number; max?: string|number } — controlled; supply both or either
- onChange(next): void — next = { min?: string|number; max?: string|number }
- disabled?: boolean, readOnly?: boolean
- type?: 'number' | 'text' | 'tel' | 'email' | 'url' | 'password' (default 'number')
- inputMode?: 'text' | 'email' | 'numeric' | 'tel' | 'url' | 'search' | 'decimal'
- step?: number | 'any' — forwarded to the native input
- precision?: number — rounds parsed numeric values for validation display logic
- domain?: { min?: number; max?: number } — absolute numeric bounds
- allowEqual?: boolean (default true) — if false, enforces strict min < max
- regex?: RegExp | string — per-field validation when `type='text'`
- validator?: (value) => { valid?: boolean; status?: 'error'|'warning'|'success'; message?: string } — custom rule
- helperText?: string | ReactNode — helper/validation text under the pair
- unit?: string | ReactNode — end adornment rendered in both fields (e.g., °C)
- nameMin?: string; nameMax?: string — form integration
- ariaLabelMin?: string (default 'Minimum'); ariaLabelMax?: string (default 'Maximum')

### Width controls

- fullWidth?: boolean — fields stretch to container width
- fieldWidth?: string | number — fixed width applied to both fields (e.g., 220 or '220px')
- widths?: { min?: string|number; max?: string|number } — per-field widths

Implementation detail: widths are mapped to a CSS custom property that drives the grid: `grid-template-columns: var(--minmax-grid, 1fr auto 1fr)`.

---

## Validation model

The molecule computes a group status from these checks (in order):

1) Built-in numeric checks (when `type='number'`)
   - domain.min ≤ min (if min present)
   - max ≤ domain.max (if max present)
   - ordering: allowEqual ? min ≤ max : min < max (if both present)
2) Regex (when `type='text'`): `regex.test(value)` for each side
3) Custom validator: can override status to `warning` or `success`, and return a `message`

Status precedence: explicit status from a higher layer (not exposed here) > custom validator status > built-in error > neutral.

Messaging: helper text shows either `validator.message` or `helperText`.

---

## Accessibility

- The wrapper toggles `aria-invalid` on error
- Helper text is linked via `aria-describedby={id}-helper`
- Each input has its own `aria-label` (Minimum/Maximum) for screen readers
- Focus ring behavior inherits from the Input atom (keyboard-only outer ring)

---

## Usage examples

Numeric with domain and unit:

```jsx
<MinMax
  id="temp"
  label="Tapping Temperature Range (°C)"
  value={range}
  onChange={setRange}
  domain={{ min: -50, max: 150 }}
  step={0.5}
  precision={1}
  unit="°C"
  helperText="Allowed operating temperature"
/>
```

Fixed widths (matching design mocks):

```jsx
<MinMax id="temp" label="Range (°C)" value={range} onChange={setRange} fieldWidth={220} unit="°C" />
```

Per-field widths:

```jsx
<MinMax id="pressure" label="Pressure (bar)" value={range} onChange={setRange} widths={{ min: 180, max: 260 }} unit="bar" />
```

Full-width inside a constrained container:

```jsx
<div style={{ width: 640 }}>
  <MinMax id="length" label="Length (mm)" value={range} onChange={setRange} fullWidth unit="mm" />
</div>
```

Text range with regex:

```jsx
<MinMax
  id="codes"
  label="Code range"
  type="text"
  value={range}
  onChange={setRange}
  regex={/^[A-Z]{2}-\d{3}$/}
  helperText="Format: AA-123"
/>
```

---

## Theming & tokens

Visual states (default, hover, active/focus, disabled, validation) inherit from the Input atom’s token mapping. Update theme tokens (surfaces, strokes, radii) to re-skin without code changes.

State precedence: validation > active/focus > hover; disabled overrides all interactions.

---

## Testing checklist

- Renders two inputs with distinct ids and labels
- Validation:
  - domain bounds respected
  - min ≤/</ max enforced when both present
  - regex applied per side (type='text')
  - custom validator status/message surfaced
- A11y: `aria-invalid` toggles; helper text linked via `aria-describedby`
- Widths: `fieldWidth`, `widths`, and `fullWidth` produce expected grid


