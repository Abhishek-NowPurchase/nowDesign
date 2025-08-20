const fs = require('fs');
const path = require('path');

// Input and output paths
const mappingPath = path.join(__dirname, 'text-style-mapping.json');
const cssOutPath = path.join(__dirname, 'text-styles.css');

// Helper to convert camelCase or PascalCase to kebab-case
function toKebabCase(str) {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').replace(/([A-Z])([A-Z][a-z])/g, '$1-$2').toLowerCase();
}

// Helper to convert CSS variable values to calc() for specific properties
function convertToCalc(value, property) {
  const calcProperties = ['fontSize', 'lineHeight', 'letterSpacing'];
  
  if (calcProperties.includes(property) && value.includes('var(') && value.includes('px)')) {
    // Extract the CSS variable part and remove the px unit
    const varMatch = value.match(/var\(([^,]+),\s*([^)]+)\)/);
    if (varMatch) {
      const varName = varMatch[1];
      const fallbackValue = varMatch[2].replace('px', '');
      return `calc(var(${varName}, ${fallbackValue}) * 1px)`;
    }
  }
  
  return value;
}

// Standard CSS typography properties (exclude non-standard ones)
const validCssProps = ['fontFamily', 'fontWeight', 'fontSize', 'lineHeight', 'letterSpacing'];

// Read mapping
const mapping = JSON.parse(fs.readFileSync(mappingPath, 'utf8'));

let css = '';
for (const [styleKey, props] of Object.entries(mapping)) {
  css += `.${styleKey} {\n`;
  for (const [prop, value] of Object.entries(props)) {
    if (validCssProps.includes(prop)) {
      const convertedValue = convertToCalc(value, prop);
      css += `  ${toKebabCase(prop)}: ${convertedValue};\n`;
    }
  }
  css += `}\n\n`;
}

fs.writeFileSync(cssOutPath, css);
console.log(`✅ Generated ${cssOutPath}`); 