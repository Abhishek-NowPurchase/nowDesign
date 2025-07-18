# Typography

> **Atomic Design Classification:**
> - **Type:** Atom
> - **Why:** Typography performs a single function—displaying styled text—using token-driven classes for consistency. It does not combine multiple roles or compound logic, strictly following Atomic Design principles.
> - **Styling:** All core styles (font, size, weight, etc.) come from design tokens via CSS classes (e.g., `bold-h5`).
> - **Flexibility:** Props like `color`, `align`, `truncate`, `style`, and `as` allow minor, context-specific adjustments (e.g., color override, alignment, truncation, semantic tag), but never override the core token-driven style. This ensures 90%+ consistency with room for 10% real-world flexibility—always within the boundaries of Atomic Design.
> - **Summary:** Typography is a pure Atom: foundational, stateless, and token-driven, with just enough flexibility for practical use.

---

## 🚀 Installation

```bash
npm install @your-scope/atoms now-design-tokens
```