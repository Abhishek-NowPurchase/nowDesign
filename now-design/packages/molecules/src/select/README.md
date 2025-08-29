## Select (Combobox)

An accessible, token-driven combobox built on the `Input` atom. Supports search (in-trigger and/or in-panel), keyboard navigation, badges, description rows, helper text, validation skins, and clearable selection. One component powers multiple UI variants by composition and props.

---

## Architecture

- Trigger: `Input` atom (shows selected label; caret icon; optional clear button)
- Popover: Portal-less container positioned below the trigger (same width)
- Listbox: scrollable list of options; optional sticky search field at the top
- Options: label + optional description + optional right-aligned badge/pill
- Label/Tooltip and helper text reuse existing atoms (`Label`, etc.)

Keyboard & ARIA (WAI-ARIA 1.2 combobox pattern):
- Trigger: acts as the combobox, handles open/close and type-to-filter
- Popover: `role="listbox"`; options use `role="option"` and `aria-selected`
- ArrowUp/Down, Home/End, Enter, Esc supported in trigger and in-panel search

---

## Props (key)

- `id?: string` – base id for combobox/listbox linkage
- `label?: string` – field label; `required?: boolean`; `info?: string|ReactNode`
- `value: string|number|null` – controlled selected value
- `onChange: (next) => void` – next is selected value or `null` when cleared
- `options: { value, label, description?, badge?, group?, disabled? }[]`
- `searchable?: boolean` (default `true`) – enable filtering
- `searchInPanel?: boolean` (default `true`) – show a sticky search input inside the dropdown
- `placeholder?: string` – text for trigger (and in-panel search if present)
- `clearable?: boolean` – shows an × button to clear selection
- `disabled?: boolean`
- `status?: 'error'|'warning'|'success'` – validation skin; helper text uses matching token color
- `helperText?: string|ReactNode`
- `renderOption?: (option, state:{ active:boolean; selected:boolean }) => ReactNode` – custom row renderer

Everything else (e.g., tokens) is handled in CSS.

---

## Variants (one component)

- Plain list: only labels
- Badge list: pass a `badge` node per option
- Description list: add `description` for stacked content
- No-search: `searchable={false}`
- Search in trigger only: `searchInPanel={false}` (keep `searchable` true)

These are just prop combinations; no separate components are needed.

---

## Usage

Basic single-select with in-panel search (default):

```jsx
import Select from './Select';

const options = [
  { value: 'pig-iron', label: 'Pig Iron', badge: <span className="pill">Furnace</span> },
  { value: 'ferro-silicon', label: 'Ferro Silicon', badge: <span className="pill">Additives</span> },
];

<Select
  id="materials"
  label="Select raw material…"
  value={material}
  onChange={setMaterial}
  options={options}
  placeholder="Search materials…"
  helperText="Single-select with badges"
/>
```

Plain list (no badges):

```jsx
const elements = ['Mn','P','S','Cr','Ni','Mo','Cu','Al','Ti'].map(e => ({ value: e, label: e }));

<Select
  id="element"
  label="Element"
  value={element}
  onChange={setElement}
  options={elements}
  placeholder="Search elements…"
  helperText="Plain list variant"
/>
```

Description rows (label + subtitle):

```jsx
const grades = [
  { value: 'di', label: 'DI - Ductile Iron', description: 'Spheroidal graphite iron with enhanced mechanical properties' },
  { value: 'ci', label: 'CI - Cast Iron', description: 'Traditional gray iron compositions' },
];

<Select
  id="grade"
  label="Grade"
  value={grade}
  onChange={setGrade}
  options={grades}
  placeholder="DI - Ductile Iron…"
  helperText="Label + description rows"
/>
``;

No-search dropdown:

```jsx
<Select id="simple" label="No-search select" value={val} onChange={setVal} options={grades} searchable={false} />
```

Search only in trigger:

```jsx
<Select id="trigger-search" label="Materials" value={material} onChange={setMaterial} options={options} searchInPanel={false} />
```

Custom option renderer:

```jsx
<Select
  id="custom"
  label="Materials"
  value={material}
  onChange={setMaterial}
  options={options}
  renderOption={(opt, { active, selected }) => (
    <div className={`select__option ${active ? 'is-active' : ''} ${selected ? 'is-selected' : ''}`}>
      <div className="select__optionMain">
        <strong>{opt.label}</strong>
        {opt.description && <small>{opt.description}</small>}
      </div>
      {opt.badge}
    </div>
  )}
/>
```

---

## Keyboard interaction

- Trigger: `ArrowDown/ArrowUp/Enter/Space` opens; type filters when `searchable`
- In-panel search (if enabled): `ArrowUp/Down`, `Home/End`, `Enter` selects highlighted (or first), `Esc` closes
- Active option autoscrolls into view

---

## Accessibility

- Label and helper wired through the `Label` atom and a helper container (`aria-live="polite"`)
- Popover uses `role="listbox"`; options have `role="option"` with `aria-selected`
- Focus-visible ring is inherited from the `Input` atom styling

---

## Styling & tokens

The component uses design tokens for surfaces, strokes, radii, and typography via CSS variables. Option state classes:
- `.select__option.is-active` (hover/active), `.is-selected`, `.is-disabled`
- `.select--error|--warning|--success` for validation skins

You can restyle rows (badge, description) purely via CSS or `renderOption`.

---

## Roadmap / Extensions

- Multi-select (checkbox toggles and chip rendering in trigger)
- Group headers (role="group") and sticky headers
- Async `loadOptions(query)` with debounce and loading/empty rows
- Virtualization for very long lists


