const fs = require('fs');
const path = require('path');

// Import our custom responsive formatter directly
const responsiveFormat = require('./formats/responsive-css.js');

// Read all the JSON files
const mappedPath = path.join(__dirname, 'color/mapped.json');
const mappedJson = JSON.parse(fs.readFileSync(mappedPath, 'utf8'));
const mappedRoot = mappedJson.mapped;

const aliasPath = path.join(__dirname, 'color/alias.json');
const aliasJson = JSON.parse(fs.readFileSync(aliasPath, 'utf8'));
const aliasRoot = aliasJson.alias;

const brandPath = path.join(__dirname, 'color/brand.json');
const brandJson = JSON.parse(fs.readFileSync(brandPath, 'utf8'));
const brandRoot = brandJson.brand;

const scaleAliasPath = path.join(__dirname, 'scale/alias.json');
const scaleAliasJson = JSON.parse(fs.readFileSync(scaleAliasPath, 'utf8'));

const typographyBrandPath = path.join(__dirname, 'typography/typography.json');
const typographyBrandJson = JSON.parse(fs.readFileSync(typographyBrandPath, 'utf8'));

const scaleBasePath = path.join(__dirname, 'scale/scale.json');
const scaleBaseJson = JSON.parse(fs.readFileSync(scaleBasePath, 'utf8'));

const typographyResponsivePath = path.join(__dirname, 'typography/responsive.json');
const typographyResponsiveJson = JSON.parse(fs.readFileSync(typographyResponsivePath, 'utf8'));

const scaleResponsivePath = path.join(__dirname, 'scale/responsive-spacing.json');
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

const mergedScale = deepMerge(scaleAliasFlat, {});

// Function to resolve token references
function resolveTokenReferences(obj, allTokens) {
    if (typeof obj === 'string' && obj.includes('{') && obj.includes('}')) {
        // Extract the reference path
        const match = obj.match(/\{([^}]+)\}/);
        if (match) {
            const path = match[1].split('.');
            let value = allTokens;
            
            // Handle special case for scale tokens
            if (path[0] === 'scale' && path.length >= 2) {
                // Look for scale tokens in the correct location
                if (allTokens.scale && allTokens.scale[path[1]]) {
                    value = allTokens.scale[path[1]];
                } else {
                    console.warn(`Could not resolve scale reference: ${obj}`);
                    return obj;
                }
            } else {
                // Handle other token references
                // If the path ends with 'value', we need to stop one step earlier
                const pathToTraverse = path[path.length - 1] === 'value' ? path.slice(0, -1) : path;
                
                for (let i = 0; i < pathToTraverse.length; i++) {
                    const key = pathToTraverse[i];
                    if (value && value[key] !== undefined) {
                        value = value[key];
                    } else {
                        console.warn(`Could not resolve reference: ${obj} - path: ${path.join('.')} - missing key: ${key} at step ${i + 1}`);
                        return obj; // Return original if can't resolve
                    }
                }
            }
            
            // Extract the value properly
            let result;
            if (path[path.length - 1] === 'value') {
                result = value.value;
            } else {
                result = value.value || value;
            }
            
            // Recursively resolve any remaining references in the result
            if (typeof result === 'string' && result.includes('{')) {
                result = resolveTokenReferences(result, allTokens);
            }
            return result;
        }
    }
    return obj;
}

// Function to resolve all references in an object recursively
function resolveAllReferences(obj, allTokens) {
    if (typeof obj === 'object' && obj !== null && !Array.isArray(obj)) {
        // If this object has a 'value' property, resolve it
        if (obj.hasOwnProperty('value')) {
            obj.value = resolveTokenReferences(obj.value, allTokens);
        } else {
            // Otherwise, recursively process all properties
            for (const key in obj) {
                if (obj.hasOwnProperty(key)) {
                    resolveAllReferences(obj[key], allTokens);
                }
            }
        }
    }
}

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

// Resolve all token references in the correct order
console.log('Resolving tokens in order...');
console.log('1. Brand tokens resolved'); // Brand tokens are assumed to have no references

// 2. Resolve alias tokens (they reference brand tokens)
console.log('2. Resolving alias tokens...');
resolveAllReferences(allTokens.alias, allTokens);
console.log('2. Alias tokens resolved');

// 3. Resolve mapped tokens (they reference alias tokens)
console.log('3. Resolving mapped tokens...');
resolveAllReferences(allTokens.mapped, allTokens);
console.log('3. Mapped tokens resolved');

// 4. Resolve any remaining tokens
resolveAllReferences(allTokens.scale, allTokens);
resolveAllReferences(allTokens.typography, allTokens);
resolveAllReferences(allTokens.typographyResponsive, allTokens);
resolveAllReferences(allTokens.scaleResponsive, allTokens);
console.log('4. All other tokens resolved');

// Create a mock dictionary object that our formatter expects
const mockDictionary = {
    properties: allTokens
};

// Use our custom formatter directly
console.log('Building design tokens using custom responsive formatter...');
console.log('Sample resolved tokens:');
console.log('mapped.modes.light.normal.surface.page:', allTokens.mapped?.modes?.light?.normal?.surface?.page);
console.log('brand.neutral.100:', allTokens.brand?.neutral?.['100']);
console.log('alias.neutral.white:', allTokens.alias?.neutral?.white);

// Check if the resolution worked
console.log('Checking resolution chain:');
console.log('1. alias.neutral.white.value:', allTokens.alias?.neutral?.white?.value);
console.log('2. brand.neutral.100.value:', allTokens.brand?.neutral?.['100']?.value);

// Debug the structure
console.log('allTokens keys:', Object.keys(allTokens));
console.log('allTokens.brand keys:', Object.keys(allTokens.brand || {}));
console.log('allTokens.brand.neutral keys:', Object.keys(allTokens.brand?.neutral || {}));

const cssOutput = responsiveFormat.formatter({ dictionary: mockDictionary });

// Ensure dist directory exists
const distDir = path.join(__dirname, 'dist');
const cssDir = path.join(distDir, 'css');
if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
}
if (!fs.existsSync(cssDir)) {
    fs.mkdirSync(cssDir, { recursive: true });
}

// Write the CSS output
const cssOutputPath = path.join(cssDir, 'variables.css');
fs.writeFileSync(cssOutputPath, cssOutput);

console.log(`✅ CSS variables generated successfully: ${cssOutputPath}`);

// Also generate SCSS variables (simple conversion)
const scssOutput = cssOutput.replace(/--/g, '$');
const scssDir = path.join(distDir, 'scss');
if (!fs.existsSync(scssDir)) {
    fs.mkdirSync(scssDir, { recursive: true });
}
const scssOutputPath = path.join(scssDir, '_variables.scss');
fs.writeFileSync(scssOutputPath, scssOutput);

console.log(`✅ SCSS variables generated successfully: ${scssOutputPath}`);

// Function to convert kebab-case to camelCase
function kebabToCamelCase(str) {
    return str.replace(/-([a-z])/g, (match, letter) => letter.toUpperCase());
}

// Function to flatten tokens into individual exports
function flattenTokens(obj, prefix = '') {
    const exports = [];
    
    function traverse(current, currentPrefix) {
        for (const [key, value] of Object.entries(current)) {
            // Convert hyphens to camelCase for valid variable names
            const camelKey = kebabToCamelCase(key);
            const newPrefix = currentPrefix ? `${currentPrefix}${camelKey.charAt(0).toUpperCase() + camelKey.slice(1)}` : camelKey.charAt(0).toUpperCase() + camelKey.slice(1);
            
            if (value && typeof value === 'object' && value.value !== undefined) {
                // This is a token with a value
                const exportName = newPrefix;
                
                // Check if the value is a responsive object (has desktop/tablet/mobile)
                if (value.value && typeof value.value === 'object' && 
                    (value.value.desktop !== undefined || value.value.tablet !== undefined || value.value.mobile !== undefined)) {
                    // Handle responsive values
                    for (const [breakpoint, breakpointValue] of Object.entries(value.value)) {
                        const responsivePrefix = `${newPrefix}${breakpoint.charAt(0).toUpperCase() + breakpoint.slice(1)}`;
                        const exportValue = typeof breakpointValue === 'string' ? `"${breakpointValue}"` : breakpointValue;
                        exports.push(`export const ${responsivePrefix} = ${exportValue};`);
                    }
                } else {
                    // Regular value
                    const exportValue = typeof value.value === 'string' ? `"${value.value}"` : value.value;
                    exports.push(`export const ${exportName} = ${exportValue};`);
                }
            } else if (value && typeof value === 'object' && !Array.isArray(value)) {
                // Check if this is a responsive object with desktop/tablet/mobile
                if (value.desktop !== undefined || value.tablet !== undefined || value.mobile !== undefined) {
                    // Handle responsive objects - check if each breakpoint has a value property
                    for (const [breakpoint, breakpointValue] of Object.entries(value)) {
                        const responsivePrefix = `${newPrefix}${breakpoint.charAt(0).toUpperCase() + breakpoint.slice(1)}`;
                        
                        // Check if breakpointValue has a value property (like scale responsive tokens)
                        if (breakpointValue && typeof breakpointValue === 'object' && breakpointValue.value !== undefined) {
                            const exportValue = typeof breakpointValue.value === 'string' ? `"${breakpointValue.value}"` : breakpointValue.value;
                            exports.push(`export const ${responsivePrefix} = ${exportValue};`);
                        } else {
                            // Direct value (like typography responsive tokens)
                            const exportValue = typeof breakpointValue === 'string' ? `"${breakpointValue}"` : breakpointValue;
                            exports.push(`export const ${responsivePrefix} = ${exportValue};`);
                        }
                    }
                } else {
                    // This is a nested object, traverse deeper
                    traverse(value, newPrefix);
                }
            } else if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
                // This is a direct value
                const exportName = newPrefix;
                const exportValue = typeof value === 'string' ? `"${value}"` : value;
                exports.push(`export const ${exportName} = ${exportValue};`);
            }
        }
    }
    
    traverse(obj, prefix);
    return exports;
}

// Generate JS tokens with individual exports
const jsDir = path.join(distDir, 'js');
if (!fs.existsSync(jsDir)) {
    fs.mkdirSync(jsDir, { recursive: true });
}
const jsOutputPath = path.join(jsDir, 'tokens.js');

// Generate individual exports
const exportStatements = flattenTokens(allTokens);

// Create the JS output with header and exports
const jsOutput = `/**
 * Do not edit directly
 * Generated on ${new Date().toUTCString()}
 */

${exportStatements.join('\n')}
`;

fs.writeFileSync(jsOutputPath, jsOutput);

console.log(`✅ JS tokens generated successfully: ${jsOutputPath}`);
console.log('🎉 Build complete! All design tokens generated successfully.'); 