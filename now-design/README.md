# now-design

A modular, scalable design system monorepo for modern product teams. Built with npm Workspaces, JS, SCSS, and Storybook.

## Packages
- **@now-design/tokens**: Design tokens (Style Dictionary)
- **@now-design/theme**: ThemeProvider and theme logic
- **@now-design/atoms**: Atoms
- **@now-design/molecules**: Molecules
- **@now-design/icons**: 1600+ SVGR React icons
- **@now-design/styles**: Global CSS/SCSS

## Getting Started

```sh
npm install
npm run build
```

## Usage in Projects

```sh
npm install @now-design/tokens @now-design/atoms @now-design/theme @now-design/icons
```

## Contributing
- Use `npm workspaces` for dependency management
- Each package is independently buildable and publishable
- Use Storybook for visual testing
- Chromatic for PR visual review

## Folder Structure

```
now-design/
  packages/
    tokens/
    theme/
    atoms/
    icons/
    styles/
    molecules/
```
