const glob = require('glob');
const fs = require('fs-extra');
const path = require('path');
const camelCase = require('lodash.camelcase');

const logoDir = path.join(__dirname, '../src/logo');
const indexFile = path.join(logoDir, 'index.js');

const generateIndex = () => {
  const svgFiles = glob.sync('*.svg', { cwd: logoDir });
  const imports = ["import React from 'react';", "import LogoWrapper from './LogoWrapper';"];
  const exports = svgFiles.map((file) => {
    const componentName = `Logo${camelCase(path.basename(file, '.svg'))}`;
    const importName = `Svg${componentName}`;
    imports.push(`import ${importName} from './${file}';`);
    return `export const ${componentName} = (props) => <LogoWrapper svg={${importName}} {...props} />;`;
  });

  const content = `// This file is auto-generated. Do not edit directly.\n\n${imports.join('\n')}\n\n${exports.join('\n')}`;
  fs.writeFileSync(indexFile, content);
  console.log('Logo index generated successfully.');
};

generateIndex(); 