# @now-design/styles

Global CSS styles for the Now Design System.

## ✨ Features
- **Text Styles**: Predefined CSS classes for typography, generated from design tokens.
- **Easy Integration**: Import a single CSS file for all text styles.
- **Token-Driven**: All styles are based on your design system tokens for consistency.

---

## 📦 Installation

```sh
npm install @now-design/styles
```

---

## 🚀 Usage

### 1. Import the CSS

```js
import '@now-design/styles/text/text-styles.css';
```

### 2. Use the Classes

```html
<p class="text-regular-bodyLarge">Body text</p>
<h1 class="text-bold-h1">Main heading</h1>
<h2 class="text-title-title2">Page title</h2>
```

---

## 🛠️ Regenerating Text Styles

If you update your design tokens or mapping, regenerate the CSS:

```sh
cd packages/styles/text
node generate-text-styles-css.js
```
This will update `text-styles.css` based on `text-style-mapping.json`.

---

## 📁 Structure

```
styles/
  text/
    text-style-mapping.json   # Mapping of text style tokens
    generate-text-styles-css.js # Script to generate CSS
    text-styles.css           # Generated CSS classes
```

---

## 📚 Adding More Styles
- For color or effect styles, follow the same pattern: create a mapping, a generator script, and a CSS output file in a dedicated subfolder.

---

## 📝 License
MIT 