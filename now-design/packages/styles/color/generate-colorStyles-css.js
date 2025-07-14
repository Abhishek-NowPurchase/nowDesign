const fs = require('fs');
const path = require('path');

const inputPath = path.join(__dirname, 'colorStyles.json');
const outputPath = path.join(__dirname, 'colorStyles.css');

// Hardcoded mapping from token reference to fallback color
const colorFallbacks = {
  '{brand.grey.400.value}': '#B0B0B0',
  '{brand.grey.100.value}': '#F5F5F5',
  '{glass.border.glass0.value}': 'rgba(255, 255, 255, 0.60)',
  '{glass.border.glass100.value}': 'rgba(0, 0, 0, 0.00)'
  // Add more mappings as needed
};

const varNameOverrides = {
  '{glass.border.glass0.value}': 'glass-border-glass0',
  '{glass.border.glass100.value}': 'glass-border-glass100'
};

const data = JSON.parse(fs.readFileSync(inputPath, 'utf8'));
const styles = data.colorStyles;

let css = '/* Color Styles generated from colorStyles.json */\n\n';
for (const [name, def] of Object.entries(styles)) {
  if (def.gradient && def.gradient.stops) {
    // Support custom angle for glassStroke
    let angle = '90deg';
    if (name === 'glassStroke') angle = '140deg';
    const stops = def.gradient.stops.map(stop => {
      const ref = stop.color;
      const varName = varNameOverrides[ref] || ref.replace(/[{}]/g, '').replace(/\./g, '-').replace('-value', '');
      const fallback = colorFallbacks[ref] || '#000';
      return `var(--${varName}, ${fallback}) ${stop.position * 100}%`;
    });
    css += `.${name}Gradient {\n  background: linear-gradient(${angle}, ${stops.join(', ')});\n}\n\n`;
  }
}

fs.writeFileSync(outputPath, css);
console.log('colorStyles.css generated successfully!'); 