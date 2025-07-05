const StyleDictionary = require('style-dictionary');
const path = require('path');
const fs = require('fs');

// Register the custom formatter
const responsiveFormat = require('./style-dictionary/formats/responsive-css.js');
StyleDictionary.registerFormat(responsiveFormat);

// Read mapped.json (nested)
const mappedPath = path.join(__dirname, 'packages/tokens/color/mapped.json');
const mappedJson = JSON.parse(fs.readFileSync(mappedPath, 'utf8'));
const mappedRoot = mappedJson.mapped;

// Read alias.json (nested)
const aliasPath = path.join(__dirname, 'packages/tokens/color/alias.json');
const aliasJson = JSON.parse(fs.readFileSync(aliasPath, 'utf8'));
const aliasRoot = aliasJson.alias;

// Read brand.json (nested)
const brandPath = path.join(__dirname, 'packages/tokens/color/brand.json');
const brandJson = JSON.parse(fs.readFileSync(brandPath, 'utf8'));
const brandRoot = brandJson.brand;

// Read scale/alias.json
const scaleAliasPath = path.join(__dirname, 'packages/tokens/scale/alias.json');
const scaleAliasJson = JSON.parse(fs.readFileSync(scaleAliasPath, 'utf8'));

// Read typography/brand.json
const typographyBrandPath = path.join(__dirname, 'packages/tokens/typography/brand.json');
const typographyBrandJson = JSON.parse(fs.readFileSync(typographyBrandPath, 'utf8'));

// Read scale/scale.json
const scaleBasePath = path.join(__dirname, 'packages/tokens/scale/scale.json');
const scaleBaseJson = JSON.parse(fs.readFileSync(scaleBasePath, 'utf8'));

// Read responsive typography tokens
const typographyResponsivePath = path.join(__dirname, 'packages/tokens/typography/responsive.json');
const typographyResponsiveJson = JSON.parse(fs.readFileSync(typographyResponsivePath, 'utf8'));

// Read responsive scale tokens
const scaleResponsivePath = path.join(__dirname, 'packages/tokens/scale/responsive-spacing.json');
const scaleResponsiveJson = JSON.parse(fs.readFileSync(scaleResponsivePath, 'utf8'));

// Flatten scaleBaseJson.scale into scaleAliasJson
const scaleAliasFlat = JSON.parse(JSON.stringify(scaleAliasJson));
if (scaleBaseJson && scaleBaseJson.scale) {
  for (const [k, v] of Object.entries(scaleBaseJson.scale)) {
    scaleAliasFlat[k] = v;
  }
}

// Merge scale base and alias into a single object (deep merge for nested keys)
function deepMerge(target, source) {
  for (const key of Object.keys(source)) {
    if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
      if (!target[key]) target[key] = {};
      deepMerge(target[key], source[key]);
    } else {
      target[key] = source[key];
    }
  }
  return target;
}

const mergedScale = deepMerge(scaleAliasFlat, {}); // already flat, just ensure deep copy

// Merge all tokens as nested objects for reference resolution
const allTokens = {
  mapped: mappedRoot,
  alias: aliasRoot,
  brand: brandRoot,
  scale: mergedScale,
  typography: typographyBrandJson,
  typographyResponsive: typographyResponsiveJson,
  scaleResponsive: scaleResponsiveJson
};

// Write merged tokens to a temporary file
const tempTokensPath = path.join(__dirname, 'temp-tokens.json');
fs.writeFileSync(tempTokensPath, JSON.stringify(allTokens, null, 2));

// Build a Style Dictionary config using the temp file as source
const config = {
  source: [tempTokensPath],
  platforms: {
    css: {
      transformGroup: 'css',
      buildPath: path.join(__dirname, 'packages/tokens/dist/'),
      files: [
        {
          destination: 'css/variables.css',
          format: 'css/variables-responsive'
        }
      ]
    }
  }
};

console.log('Building design tokens from merged temp-tokens.json...');
StyleDictionary.extend(config).buildAllPlatforms();
console.log('Build complete!');
// Clean up temp file
fs.unlinkSync(tempTokensPath); 