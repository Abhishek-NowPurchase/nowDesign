// generate-barrel.js: Auto-generate dist/index.js to export all icons
const fs = require('fs');
const path = require('path');

const distDir = path.resolve(__dirname, '../dist');
const files = fs.readdirSync(distDir).filter(f => f.endsWith('.js') && f !== 'index.js');

const exportLines = files.map(f => {
  const name = path.basename(f, '.js');
  return `export { default as ${name} } from './${name}';`;
});

fs.writeFileSync(path.join(distDir, 'index.js'), exportLines.join('\n') + '\n');
console.log('dist/index.js barrel file generated with', files.length, 'exports.'); 