# Developer Quick Reference Guide

## 🚀 Quick Commands

### Build Commands
```bash
# From tokens package directory
cd packages/tokens
node build-tokens-simple.js

# From monorepo root
npm run build --workspace=packages/tokens
```

### Publishing Commands
```bash
# Build first
node build-tokens-simple.js

# Update version
npm version patch  # or minor/major

# Publish
npm publish
```

## 📁 File Structure
```
packages/tokens/
├── build-tokens-simple.js    # ✅ Main build script
├── formats/responsive-css.js # ✅ Custom formatter
├── color/                    # ✅ Token sources
├── scale/                    # ✅ Token sources  
├── typography/               # ✅ Token sources
├── dist/                     # ✅ Generated outputs
└── package.json              # ✅ Package config
```

## 🔄 Token Resolution Order
1. **Brand tokens** → Base hex values
2. **Alias tokens** → Reference brand tokens
3. **Mapped tokens** → Reference alias tokens

## 📦 What Gets Published
- `dist/js/tokens.js` - JavaScript tokens
- `dist/css/variables.css` - CSS variables
- `dist/scss/_variables.scss` - SCSS variables
- `README.md` - Documentation
- `fonts/` - Font files

## 🐛 Common Issues
- **Build fails?** → Check JSON syntax in token files
- **Undefined values?** → Run `node build-tokens-simple.js`
- **Import errors?** → Verify package is installed correctly

## 📝 Development Workflow
1. Edit token JSON files
2. Run `node build-tokens-simple.js`
3. Test outputs locally
4. Commit changes
5. Publish when ready 