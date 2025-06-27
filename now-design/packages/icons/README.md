# @now-design/icons

A library of 1900+ SVG React icon components, auto-generated from Figma for the now-design system. Each icon is a flexible, typed React component with full props support, optimized for modern React workflows and npm workspaces.

---

## 📦 Installation

```sh
npm install @now-design/icons
```

---

## 🚀 Usage

### Import any icon as a named export:

```tsx
import { SystemAdd, EditorBold, WeatherSun } from '@now-design/icons';

export function Example() {
  return (
    <div>
      <SystemAdd width={32} height={32} className="icon" />
      <EditorBold width={24} height={24} style={{ color: 'red' }} />
      <WeatherSun width="2em" height="2em" />
    </div>
  );
}
```

---

## 🧩 Icon Props

All icons accept the following props via the shared `IconProps` type:

```ts
import { IconProps } from '@now-design/icons/IconProps';

export interface IconProps {
  width?: number | string;
  height?: number | string;
  className?: string;
  style?: React.CSSProperties;
  [key: string]: any; // Any other SVG props
}
```

- `width`, `height`: Size of the icon (number or string, e.g. `24` or `'2em'`)
- `className`: Custom CSS class
- `style`: Inline styles (including `color` for theming)
- Any other SVG props (e.g. `aria-label`, `onClick`)

All icons use `currentColor` for their fill, so you can control color via CSS or the `style` prop.

---

## 🛠️ TypeScript Support

- All icons are typed React components.
- Use `IconProps` for custom icon wrappers or extensions.
- Full IntelliSense and prop autocompletion in modern editors.

---

## 🏗️ How It Works

- SVGs are exported from Figma and placed in `raw/`.
- SVGR converts SVGs to React components in `src/`.
- A barrel export (`index.js`) is auto-generated for all icons, so you can import any icon as a named export.
- All icons use `currentColor` for easy theming.

### Figma Fetch Script
- The Figma fetch script is at `packages/icons/scripts/fetch-figma-icons.js`.
- Run it with:
  ```sh
  npm run fetch-icons
  ```
- SVG source files are in `packages/icons/raw/`. To add a custom icon, place your SVG here and rerun the build.

### SVGR Customization
- SVGR is configured to replace hardcoded colors with `currentColor`.
- All icons are optimized for React and tree-shaking.

---

## 📚 Storybook

To browse and search all icons visually, run:

```sh
npm run storybook
```

- Use the search bar in Storybook to quickly find any icon by name.
- **Note:** With 1900+ icons, Storybook may take a minute to load the first time.

---

## 🧪 Testing

- All icons are visually tested in Storybook.
- Use Chromatic for automated visual regression in PRs.

---

## 🏷️ Naming Convention

- Icon components are PascalCase and suffixed with `Fill` or `Line` (e.g., `SystemAddFill`, `SystemAddLine`).
- All icons are available as named exports from the package root. The `index.js` barrel file is auto-generated and always up to date.

---

## 🌲 Tree-shaking & Bundle Size

- All icons are individually importable for optimal bundle size.
- Only the icons you use will be included in your app (tree-shaking supported).

---

## 🏢 Monorepo & Workspaces

This package is part of the `now-design` monorepo, managed with **npm workspaces**. You can run scripts from the monorepo root:

```sh
npm run --workspace=@now-design/icons build
npm run --workspace=@now-design/icons storybook
```

Or from within the package directory:

```sh
cd packages/icons
npm run build
npm run storybook
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

## 🧹 Maintenance & Updating Icons

- To update icons, update the Figma file, re-run the fetch and build scripts.
- Keep `@now-design/icons` up to date in your projects for the latest icons.

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