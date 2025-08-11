# Now Design System

A comprehensive design system monorepo with atomic design principles, featuring React components, design tokens, and Storybook documentation.

## 🏗️ Project Structure

```
now-design/
├── packages/
│   ├── atoms/          # Basic building blocks (Typography, Icons, etc.)
│   ├── molecules/      # Simple component combinations
│   ├── organisms/      # Complex component combinations
│   ├── icons/          # Icon library (2946+ icons)
│   ├── tokens/         # Design tokens (colors, spacing, typography)
│   ├── styles/         # Global styles and CSS utilities
│   └── theme/          # Theme context and providers
├── .storybook/         # Storybook configuration
└── App.js              # Demo application
```

## 🚀 Quick Start

### Prerequisites

- **Node.js**: Version 18.20.8 or higher (but not 20+ for Storybook compatibility)
- **npm**: Version 8 or higher

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Abhishek-NowPurchase/nowDesign.git
   cd nowDesign
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Build all packages** (Required before running Storybook)
   ```bash
   # Build atoms package
   cd packages/atoms && npm run build && cd ../..
   
   # Build molecules package
   cd packages/molecules && npm run build && cd ../..
   
   # Build organisms package
   cd packages/organisms && npm run build && cd ../..
   
   # Build icons package
   cd packages/icons && npm run build && cd ../..
   
   # Build tokens package
   cd packages/tokens && npm run build && cd ../..
   
   # Build styles package
   cd packages/styles && npm run build && cd ../..
   ```

   **Or use the convenience script:**
   ```bash
   npm run build:all
   ```

4. **Run Storybook**
   ```bash
   npm run storybook
   ```

5. **Open Storybook**
   Navigate to [http://localhost:6006](http://localhost:6006) in your browser.

## 📦 Available Packages

### 🧬 Atoms
- **Typography** - Text components with different styles
- **Icon** - Individual icon components
- **Logo** - Logo components
- **AccordionTrigger** - Basic accordion trigger
- **SelectableListItem** - Individual selectable list items

### 🔬 Molecules
- **AccordionSelectableList** - Accordion with selectable list functionality

### 🦠 Organisms
- **AccordionSelectableListContainer** - Container component for accordion lists
- **LeftPanel** - Left panel component

### 🎨 Icons
- **Icon Library** - 2946+ icons available
- **SingleIcon** - Individual icon stories
- **AllIcons** - Complete icon library showcase

### 🎯 Design Tokens
- **CSS Variables** - All design tokens as CSS custom properties
- **SCSS Variables** - All design tokens as SCSS variables
- **JavaScript Tokens** - All design tokens as ES6 exports

## 🛠️ Development

### Building Individual Packages

```bash
# Build atoms
cd packages/atoms && npm run build

# Build molecules
cd packages/molecules && npm run build

# Build organisms
cd packages/organisms && npm run build

# Build icons
cd packages/icons && npm run build

# Build tokens
cd packages/tokens && npm run build

# Build styles
cd packages/styles && npm run build
```

### Available Scripts

```bash
# Root level scripts
npm run storybook          # Start Storybook development server
npm run build-storybook    # Build Storybook for production
npm run build:all          # Build all packages (if available)

# Package level scripts (run from package directory)
npm run build              # Build the package
npm run clean              # Clean build artifacts
npm run test               # Run tests (if available)
```

### Storybook Commands

```bash
# Start Storybook
npm run storybook

# Build Storybook for production
npm run build-storybook

# Start Storybook on a different port
npx start-storybook -p 6007
```

## 🔧 Troubleshooting

### Common Issues

1. **Storybook won't start**
   - Ensure all packages are built: `npm run build:all`
   - Check Node.js version (should be 18.x, not 20+)
   - Clear node_modules and reinstall: `rm -rf node_modules && npm install`

2. **Missing dist folders**
   - Run build commands for each package
   - Check for build errors in individual packages

3. **Icon import errors**
   - Ensure icons package is built: `cd packages/icons && npm run build`
   - Check icon names in stories (e.g., `UserFacesUserLine` not `UserLine`)

4. **Token resolution issues**
   - Build tokens package: `cd packages/tokens && npm run build`
   - Check token build script is using `build-tokens-simple.js`

### Node.js Version Issues

This project uses Storybook 6.5.16 which requires:
- **Node.js 18.x** (recommended: 18.20.8)
- **NOT Node.js 20+** (will cause Storybook to fail)

To check your Node version:
```bash
node --version
```

To switch Node versions (if using nvm):
```bash
nvm use 18.20.8
```

## 📚 Storybook Documentation

Once Storybook is running, you can explore:

- **Components** - All atoms, molecules, and organisms
- **Design Tokens** - Colors, spacing, typography
- **Icons** - Complete icon library
- **Documentation** - Component usage and examples

## 🏗️ Architecture

### Design System Principles

This design system follows **Atomic Design** methodology:

1. **Atoms** - Basic building blocks (buttons, inputs, typography)
2. **Molecules** - Simple component combinations
3. **Organisms** - Complex component combinations
4. **Templates** - Page-level components
5. **Pages** - Specific instances of templates

### Token System

Design tokens are organized in a hierarchy:
- **Brand Tokens** - Base color values, spacing, typography
- **Alias Tokens** - Semantic references to brand tokens
- **Mapped Tokens** - Context-specific token mappings

### Build Process

1. **Token Generation** - JSON → CSS/SCSS/JS
2. **Component Compilation** - JSX → JavaScript
3. **Icon Processing** - SVG → React components
4. **Style Generation** - Design tokens → CSS utilities

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Build all packages: `npm run build:all`
5. Test with Storybook: `npm run storybook`
6. Submit a pull request

## 📄 License

MIT License - see LICENSE file for details.

## 🆘 Support

For issues and questions:
- Check the troubleshooting section above
- Review Storybook documentation
- Check package-specific README files in each package directory