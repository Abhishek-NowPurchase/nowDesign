const fs = require('fs');
const path = require('path');

const inputPath = path.join(__dirname, 'effectStyles.json');
const outputPath = path.join(__dirname, 'effectStyles.css');

const data = JSON.parse(fs.readFileSync(inputPath, 'utf8'));
const styles = data.effectStyles;

const propertyMap = {
  'background-blur': (s) => `  backdrop-filter: blur(calc(${s.blur || 'var(--blur-l, 32px)'} / 2));`,
  'drop-shadow': (s) => `  box-shadow: ${s.positionX || 'var(--positionX-none, 0px)'} ${s.positionY || 'var(--positionY-none, 0px)'} ${s.blur || 'var(--blur-m, 16px)'} ${s.spread || 'var(--spread-none, 0px)'} ${s.color || 'var(--normal-effects-dropShadow, rgba(0, 0, 0, 0.20))'};`,
  'layer-blur': (s) => `  filter: blur(calc(${s.blur || 'var(--blur-l, 32px)'} / 2));`,
  'inner-shadow': (s) => `  box-shadow: ${s.positionX || 'var(--positionX-none, 0px)'} ${s.positionY || 'var(--positionY-none, 0px)'} ${s.blur || 'var(--blur-m, 16px)'} ${s.spread || 'var(--spread-none, 0px)'} ${s.color || 'var(--normal-effects-innerShadow, rgba(0, 0, 0, 0.20))'} inset;`
};

let css = '/* Effect Styles generated from effectStyles.json and tokens */\n\n';
for (const [name, def] of Object.entries(styles)) {
  const type = def.type;
  const generator = propertyMap[type];
  if (generator) {
    css += `.${name} {\n${generator(def)}\n}\n\n`;
  }
}

fs.writeFileSync(outputPath, css);
console.log('effectStyles.css generated successfully!'); 