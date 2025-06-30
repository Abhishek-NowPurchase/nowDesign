# Now Design System - File Processing Flow

## Complete System Flow Diagram

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                                    DESIGN SYSTEM FLOW                               │
└─────────────────────────────────────────────────────────────────────────────────────┘

┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   TOKEN SOURCE  │    │  STYLE DICTIONARY│    │  CUSTOM FORMATTER│    │  FINAL OUTPUTS  │
│   (JSON FILES)  │───▶│   PROCESSING    │───▶│   (RESPONSIVE)  │───▶│   (CSS/SCSS/JS)  │
└─────────────────┘    └─────────────────┘    └─────────────────┘    └─────────────────┘

┌─────────────────────────────────────────────────────────────────────────────────────┐
│                                    DETAILED FLOW                                    │
└─────────────────────────────────────────────────────────────────────────────────────┘

1. TOKEN SOURCE (JSON FILES)
   ┌─────────────────────────────────────────────────────────────────────────────┐
   │ packages/tokens/                                                           │
   │ ├── color/brand.json          ──▶ { "brand": { "blue": { "600": {         │
   │ ├── scale/scale.json          ──▶   "value": "#1579BE", "type": "color"   │
   │ ├── scale/responsive-spacing.json ──▶ } } } }                            │
   │ ├── typography/font-families.json ──▶                                     │
   │ └── typography/font-weights.json ──▶                                     │
   └─────────────────────────────────────────────────────────────────────────────┘
                                    │
                                    ▼
2. STYLE DICTIONARY CONFIGURATION
   ┌─────────────────────────────────────────────────────────────────────────────┐
   │ style-dictionary.config.js                                                 │
   │                                                                             │
   │ source: ['packages/tokens/**/*.json']  ←─ Scans all JSON files             │
   │                                                                             │
   │ platforms: {                                                               │
   │   css: {                                                                   │
   │     transforms: ['attribute/cti', 'name/cti/kebab']  ←─ Name processing   │
   │     buildPath: 'packages/tokens/dist/',                                   │
   │     files: [{                                                              │
   │       destination: 'css/variables.css',                                   │
   │       format: 'css/variables-responsive'  ←─ Custom formatter             │
   │     }]                                                                     │
   │   }                                                                        │
   │ }                                                                          │
   └─────────────────────────────────────────────────────────────────────────────┘
                                    │
                                    ▼
3. BUILD SCRIPT EXECUTION
   ┌─────────────────────────────────────────────────────────────────────────────┐
   │ build-tokens.js                                                            │
   │                                                                             │
   │ const StyleDictionary = require('style-dictionary');                       │
   │ const responsiveFormat = require('./style-dictionary/formats/responsive-css.js'); │
   │                                                                             │
   │ // 1. Register custom formatter                                            │
   │ StyleDictionary.registerFormat(responsiveFormat);                          │
   │                                                                             │
   │ // 2. Load config and build                                                │
   │ StyleDictionary.extend('./style-dictionary.config.js').buildAllPlatforms(); │
   └─────────────────────────────────────────────────────────────────────────────┘
                                    │
                                    ▼
4. STYLE DICTIONARY PROCESSING
   ┌─────────────────────────────────────────────────────────────────────────────┐
   │ INTERNAL PROCESSING                                                        │
   │                                                                             │
   │ 1. SCAN: Reads all JSON files from packages/tokens/**/*.json               │
   │                                                                             │
   │ 2. PARSE: Converts JSON to Style Dictionary objects                        │
   │    ┌─────────────────────────────────────────────────────────────────────┐ │
   │    │ brand.blue.600.value = "#1579BE"                                   │ │
   │    │ brand.blue.600.type = "color"                                      │ │
   │    │ brand.blue.600.path = ["brand", "blue", "600"]                     │ │
   │    └─────────────────────────────────────────────────────────────────────┘ │
   │                                                                             │
   │ 3. RESOLVE: Processes references like {scale.300.value} → 12              │
   │                                                                             │
   │ 4. TRANSFORM: Applies name transforms (brandBlue600 → brand-blue-600)      │
   │                                                                             │
   │ 5. GROUP: Organizes tokens by platform (css, scss, js)                     │
   └─────────────────────────────────────────────────────────────────────────────┘
                                    │
                                    ▼
5. CUSTOM FORMATTER PROCESSING
   ┌─────────────────────────────────────────────────────────────────────────────┐
   │ style-dictionary/formats/responsive-css.js                                │
   │                                                                             │
   │ formatter: function({ dictionary }) {                                     │
   │   // 1. Process each token                                                │
   │   dictionary.allTokens.forEach(token => {                                 │
   │     // 2. Handle responsive tokens                                        │
   │     if (token.value.desktop) {                                            │
   │       // Desktop value                                                    │
   │       vars.desktop.push(`--${token.name}: ${token.value.desktop}`);       │
   │                                                                             │
   │       // Tablet override (if different)                                   │
   │       if (token.value.tablet !== token.value.desktop) {                   │
   │         vars.tablet.push(`--${token.name}: ${token.value.tablet}`);       │
   │       }                                                                    │
   │                                                                             │
   │       // Mobile override (if different)                                   │
   │       if (token.value.mobile !== token.value.desktop) {                   │
   │         vars.mobile.push(`--${token.name}: ${token.value.mobile}`);       │
   │       }                                                                    │
   │     }                                                                      │
   │   });                                                                      │
   │                                                                             │
   │   // 3. Generate CSS output                                               │
   │   return ':root {\n' + vars.desktop.join('\n') + '\n}\n\n' +              │
   │          '@media (max-width: 1024px) {\n:root {\n' + vars.tablet.join('\n') + '\n}\n}\n\n' + │
   │          '@media (max-width: 600px) {\n:root {\n' + vars.mobile.join('\n') + '\n}\n}'; │
   │ }                                                                          │
   └─────────────────────────────────────────────────────────────────────────────┘
                                    │
                                    ▼
6. FINAL OUTPUTS
   ┌─────────────────────────────────────────────────────────────────────────────┐
   │ packages/tokens/dist/                                                      │
   │                                                                             │
   │ ├── css/variables.css  ←─ Generated CSS variables                         │
   │ │   :root {                                                               │
   │ │     --brand-blue-600: #1579BE;                                          │
   │ │     --gap-spacing-300-desktop: 12;                                      │
   │ │     --gap-spacing-300-tablet: 6;                                        │
   │ │     --gap-spacing-300-mobile: 4;                                        │
   │ │   }                                                                      │
   │ │                                                                          │
   │ │   @media (max-width: 1024px) {                                          │
   │ │     :root {                                                             │
   │ │       --gap-spacing-300: 6;                                             │
   │ │     }                                                                   │
   │ │   }                                                                     │
   │ │                                                                         │
   │ │   @media (max-width: 600px) {                                           │
   │ │     :root {                                                             │
   │ │       --gap-spacing-300: 4;                                             │
   │ │     }                                                                   │
   │ │   }                                                                     │
   │ │                                                                         │
   │ ├── scss/_variables.scss  ←─ Generated SCSS variables                    │
   │ │   $brand-blue-600: #1579BE;                                             │
   │ │   $scale-100: 4px;                                                      │
   │ │   $font-family-body: "Oxanium";                                         │
   │ │                                                                          │
   │ └── js/tokens.js  ←─ Generated JavaScript objects                         │
   │     export const tokens = {                                               │
   │       brand: {                                                            │
   │         blue: {                                                           │
   │           600: "#1579BE"                                                  │
   │         }                                                                 │
   │       },                                                                  │
   │       scale: {                                                            │
   │         100: 4                                                            │
   │       }                                                                   │
   │     };                                                                    │
   └─────────────────────────────────────────────────────────────────────────────┘
                                    │
                                    ▼
7. COMPONENT USAGE
   ┌─────────────────────────────────────────────────────────────────────────────┐
   │ packages/atoms/src/Button/Button.css                                      │
   │                                                                             │
   │ .simple-token-button {                                                     │
   │   /* Uses generated CSS variables */                                       │
   │   padding: var(--gap-spacing-300-desktop, 12px) var(--gap-spacing-600-desktop, 24px); │
   │   background: var(--brand-blue-600, #1579BE);                              │
   │   color: var(--brand-neutral-100, #fff);                                  │
   │   font-family: var(--font-family-body, 'Oxanium');                        │
   │   font-size: var(--scale-400, 16px);                                      │
   │   border-radius: var(--border-corner-radius-m, 6px);                      │
   │ }                                                                          │
   │                                                                             │
   │ /* Responsive behavior */                                                  │
   │ @media (max-width: 1024px) {                                               │
   │   .simple-token-button {                                                   │
   │     padding: var(--gap-spacing-300-tablet, 6px) var(--gap-spacing-600-tablet, 20px); │
   │   }                                                                        │
   │ }                                                                          │
   │                                                                             │
   │ @media (max-width: 600px) {                                                │
   │   .simple-token-button {                                                   │
   │     padding: var(--gap-spacing-300-mobile, 4px) var(--gap-spacing-600-mobile, 16px); │
   │   }                                                                        │
   │ }                                                                          │
   └─────────────────────────────────────────────────────────────────────────────┘
                                    │
                                    ▼
8. CONSUMER APPLICATION
   ┌─────────────────────────────────────────────────────────────────────────────┐
   │ Consumer App (React, Vue, etc.)                                            │
   │                                                                             │
   │ import { Button } from '@now-design/atoms';                                │
   │ import '@now-design/tokens/dist/css/variables.css';                        │
   │                                                                             │
   │ function MyApp() {                                                         │
   │   return (                                                                 │
   │     <Button>Click me</Button>  ←─ Uses design tokens automatically         │
   │   );                                                                       │
   │ }                                                                          │
   │                                                                             │
   │ /* Button automatically responsive due to CSS variables */                 │
   └─────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────────────┐
│                                    KEY INSIGHTS                                    │
└─────────────────────────────────────────────────────────────────────────────────────┘

1. SINGLE SOURCE OF TRUTH
   • All design values start in JSON files
   • Style Dictionary processes them into multiple formats
   • Components use the generated CSS variables

2. RESPONSIVE BY DESIGN
   • Responsive tokens have desktop/tablet/mobile values
   • Custom formatter generates media queries automatically
   • Components automatically adapt to screen size

3. AUTOMATED WORKFLOW
   • Run `npm run build-tokens` to regenerate all outputs
   • No manual CSS/SCSS/JS file editing
   • Changes to JSON tokens automatically propagate

4. PLATFORM AGNOSTIC
   • Same tokens can generate CSS, SCSS, JS, Android, iOS, etc.
   • Consistent design values across all platforms
   • Easy to add new platforms

┌─────────────────────────────────────────────────────────────────────────────────────┐
│                                    COMMAND FLOW                                    │
└─────────────────────────────────────────────────────────────────────────────────────┘

Developer Workflow:
1. Edit JSON tokens in packages/tokens/
2. Run: npm run build-tokens
3. Generated files appear in packages/tokens/dist/
4. Components automatically use new token values
5. Test in Storybook: npm run storybook

┌─────────────────────────────────────────────────────────────────────────────────────┐
│                                    FILE DEPENDENCIES                               │
└─────────────────────────────────────────────────────────────────────────────────────┘

Dependencies Flow:
JSON Tokens → Style Dictionary Config → Build Script → Custom Formatter → Generated Outputs → Components → Consumer Apps

Each step depends on the previous one, creating a reliable and predictable build process. 