const fs = require('fs');
const path = require('path');

// Icon categories mapping
const categories = [
  'Arrows', 'Buildings', 'Business', 'Communication', 'Design', 
  'Development', 'Device', 'Document', 'Finance', 'Food', 
  'Health', 'Logos', 'Map', 'Media', 'Metalcloud', 
  'Others', 'System', 'User', 'Weather'
];

// Function to convert filename to component name
function filenameToComponentName(filename) {
  // Remove .svg extension
  const nameWithoutExt = filename.replace('.svg', '');
  
  // Split by capital letters and remove the category prefix
  const parts = nameWithoutExt.split(/(?=[A-Z])/);
  const category = parts[0];
  const rest = parts.slice(1);
  
  // Convert to PascalCase
  const componentName = rest.map(part => 
    part.charAt(0).toUpperCase() + part.slice(1)
  ).join('');
  
  return { category, componentName };
}

// Function to generate React component
function generateReactComponent(svgContent, componentName) {
  return `import React from 'react';

const ${componentName} = ({ size = 24, color = 'currentColor', ...props }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      ${svgContent}
    </svg>
  );
};

export default ${componentName};
`;
}

// Function to generate index file for a category
function generateCategoryIndex(category, components) {
  const imports = components.map(comp => 
    `import ${comp} from './${comp}.jsx';`
  ).join('\n');
  
  const exports = components.map(comp => comp).join(',\n  ');
  
  return `${imports}

export {
  ${exports}
};
`;
}

// Function to generate main index file
function generateMainIndex() {
  const categoryImports = categories.map(category => 
    `export * from './${category}';`
  ).join('\n');
  
  return `${categoryImports}
`;
}

// Main function to organize icons
function organizeIcons() {
  const rawDir = path.join(__dirname, '../raw');
  const srcDir = path.join(__dirname, '../src');
  
  // Create category directories if they don't exist
  categories.forEach(category => {
    const categoryDir = path.join(srcDir, category);
    if (!fs.existsSync(categoryDir)) {
      fs.mkdirSync(categoryDir, { recursive: true });
    }
  });
  
  // Read all SVG files
  const svgFiles = fs.readdirSync(rawDir).filter(file => file.endsWith('.svg'));
  
  // Group files by category
  const categoryFiles = {};
  
  svgFiles.forEach(file => {
    const { category, componentName } = filenameToComponentName(file);
    
    if (categories.includes(category)) {
      if (!categoryFiles[category]) {
        categoryFiles[category] = [];
      }
      categoryFiles[category].push({ file, componentName });
    }
  });
  
  // Process each category
  Object.entries(categoryFiles).forEach(([category, files]) => {
    const categoryDir = path.join(srcDir, category);
    const components = [];
    
    files.forEach(({ file, componentName }) => {
      // Read SVG content
      const svgPath = path.join(rawDir, file);
      const svgContent = fs.readFileSync(svgPath, 'utf8');
      
      // Extract the path content from SVG
      const pathMatch = svgContent.match(/<path[^>]*>/g);
      const pathContent = pathMatch ? pathMatch.join('\n      ') : '';
      
      // Generate React component
      const componentContent = generateReactComponent(pathContent, componentName);
      const componentPath = path.join(categoryDir, `${componentName}.jsx`);
      
      fs.writeFileSync(componentPath, componentContent);
      components.push(componentName);
      
      console.log(`Created: ${category}/${componentName}.jsx`);
    });
    
    // Generate index file for category
    const indexContent = generateCategoryIndex(category, components);
    const indexPath = path.join(categoryDir, 'index.js');
    fs.writeFileSync(indexPath, indexContent);
    
    console.log(`Created: ${category}/index.js with ${components.length} components`);
  });
  
  // Generate main index file
  const mainIndexContent = generateMainIndex();
  const mainIndexPath = path.join(srcDir, 'index.js');
  fs.writeFileSync(mainIndexPath, mainIndexContent);
  
  console.log('Created: src/index.js');
  console.log('\nIcon organization complete!');
}

// Run the script
organizeIcons(); 