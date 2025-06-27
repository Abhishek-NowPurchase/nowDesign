const fs = require('fs');
const path = require('path');

const ICONS_DIR = path.join(__dirname, '../src/react/now-design/packages/icons/raw');

fs.readdirSync(ICONS_DIR).forEach(file => {
  if (file.endsWith('.js')) {
    const filePath = path.join(ICONS_DIR, file);
    let content = fs.readFileSync(filePath, 'utf8');
    // Replace fill attributes with currentColor
    content = content.replace(/fill=["'].*?["']/g, 'fill="currentColor"');
    fs.writeFileSync(filePath, content, 'utf8');
  }
});

console.log('All icon fills replaced with currentColor.'); 