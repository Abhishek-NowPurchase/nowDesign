# now-design-icons

A library of 1900+ SVG React icon components, auto-generated and pre-transpiled for easy use in any React project. Each icon is a flexible, typed React component with full props support, optimized for modern React workflows and npm workspaces.

---

## 📦 Installation

```sh
npm install now-design-icons
```

---

## 🚀 Usage

### Import any icon as a named export:

```jsx
import { SystemAddFill, WeatherSunLine } from 'now-design-icons';

export function Example() {
  return (
    <div>
      <SystemAddFill width={32} height={32} style={{ color: 'blue' }} />
      <WeatherSunLine width={24} height={24} style={{ color: 'orange' }} />
    </div>
  );
}
```

---

## 🧩 Icon Props

All icons accept the following props:
- `width`, `height`: Size of the icon (number or string, e.g. `24` or `'2em'`)
- `className`: Custom CSS class
- `style`: Inline styles (including `color` for theming)
- Any other SVG props (e.g. `aria-label`, `onClick`)

All icons use `currentColor` for their fill, so you can control color via CSS or the `style` prop.

---

## 🛠️ How It Works

- SVGs are exported from Figma and placed in `raw/`.
- Icon JS files are copied and transpiled to plain JS in `dist/`.
- A barrel export (`dist/index.js`) is auto-generated for all icons, so you can import any icon as a named export.
- All icons use `currentColor` for easy theming.

---

## 📁 Package Structure (2024)

- `raw/` — All source SVGs
- `src/react/` — All React icon components (one file per icon)
- `src/react/index.js` — Barrel file for importing all icons in Storybook and local dev
- `dist/` — Transpiled JS for npm consumers
- `scripts/` — Utility scripts for fetching, fixing, and generating icons

---

## 🧪 Storybook

To preview all icons locally:

```sh
cd packages/icons
npm install
npx start-storybook -p 6006
```

- `AllIcons.stories.jsx` and `SingleIcon.stories.jsx` are in `src/react/`.
- Storybook will auto-import from `src/react/index.js`.

---

## 🏷️ Naming Convention

- Icon components are PascalCase and suffixed with `Fill` or `Line` (e.g., `SystemAddFill`, `SystemAddLine`).
- All icons are available as named exports from the package root. The `index.js` barrel file is auto-generated and always up to date.

---

## 🏢 Monorepo & Workspaces

This package is part of the `now-design` monorepo, managed with **npm workspaces**. You can run scripts from the monorepo root:

```sh
npm run --workspace=now-design-icons build
```

Or from within the package directory:

```sh
cd packages/icons
npm run build
```

---

## 📝 Troubleshooting

- **Missing icons?**
  - Re-run the Figma fetch script: `npm run fetch-icons`
  - Rebuild: `npm run build`
- **Type errors?**
  - Ensure `react` and `@types/react` are installed in your project.
- **Props not working?**
  - All icons accept `width`, `height`, `className`, `style`, and SVG props.
- **Storybook slow to load?**
  - This is expected with 1900+ icons. Use the search/filter for faster navigation.

---

## 🤝 Contributing

- To add or update icons, update the Figma file, run the fetch script, and rebuild.
- For custom SVGs, add them to `raw/` and rerun the build.
- PRs are welcome! Please ensure all icons build and Storybook runs before submitting.

---

## 📚 References & Resources

- [Figma Source File](https://www.figma.com/design/wOVgmB8my4cHAif88cKO4r/Tokens---Variables---Styles?node-id=20-127&p=f&m=dev)
- [SVGR Documentation](https://react-svgr.com/)
- [now-design Monorepo](../..)

---

## 🏷️ Example: Custom Icon Button

```tsx
import { SystemAdd } from '@now-design/icons';

export function IconButton() {
  return (
    <button className="icon-btn">
      <SystemAdd width={20} height={20} />
      Add
    </button>
  );
}
``` 