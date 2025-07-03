const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'mapped.json');
const aliasPath = path.join(__dirname, 'alias.json');
const json = JSON.parse(fs.readFileSync(filePath, 'utf8'));
const aliasJson = JSON.parse(fs.readFileSync(aliasPath, 'utf8'));
const aliasKeys = aliasJson.alias ? Object.keys(aliasJson.alias) : [];

// Map of known typos to correct alias keys
const typoMap = {
  'faliure': 'failure',
  // Add more typo corrections here if needed
};

function normalizeKey(key) {
  return typoMap[key] || key;
}

function transformValue(val) {
  // Handle complex color references
  const colorPattern = /\{color\.([^}]+)\}/g;
  return val.replace(colorPattern, (match, inner) => {
    // Split by comma or space, trim, and find the first alias key
    const parts = inner.split(/,| /).map(s => s.trim()).filter(Boolean).map(normalizeKey);
    let foundKey = null;
    for (const part of parts) {
      // If part contains a dot, split and check first segment
      const [maybeKey, maybeNum] = part.split('.');
      const normKey = normalizeKey(maybeKey);
      if (aliasKeys.includes(normKey)) {
        foundKey = normKey;
        // If part has a number, use it
        if (maybeNum && aliasJson.alias[normKey][maybeNum]) {
          return `{alias.${normKey}.${maybeNum}.value}`;
        }
      }
      // If the whole part is a key
      if (aliasKeys.includes(part)) {
        foundKey = part;
      }
    }
    // If foundKey, try to find the last number in parts
    if (foundKey) {
      // Find the last part that is a number or ends with a number
      let foundNum = null;
      for (let i = parts.length - 1; i >= 0; i--) {
        const numMatch = parts[i].match(/(\d{2,4})$/);
        if (numMatch && aliasJson.alias[foundKey][numMatch[1]]) {
          foundNum = numMatch[1];
          break;
        }
      }
      if (foundNum) {
        return `{alias.${foundKey}.${foundNum}.value}`;
      }
    }
    // Fallback: if simple color.key.number
    const simpleMatch = inner.match(/([a-zA-Z]+)\.([0-9]{2,4})/);
    if (simpleMatch) {
      const normKey = normalizeKey(simpleMatch[1]);
      if (aliasKeys.includes(normKey) && aliasJson.alias[normKey][simpleMatch[2]]) {
        return `{alias.${normKey}.${simpleMatch[2]}.value}`;
      }
    }
    // If nothing matches, return the original
    return match;
  });
}

function flattenTokens(obj) {
  if (obj && typeof obj === 'object') {
    if ('value' in obj && typeof obj.value === 'string') {
      return { value: transformValue(obj.value) };
    }
    if ('$value' in obj && typeof obj.$value === 'string') {
      return { value: transformValue(obj.$value) };
    }
    const result = Array.isArray(obj) ? [] : {};
    for (const key in obj) {
      result[key] = flattenTokens(obj[key]);
    }
    return result;
  }
  return obj;
}

const flattened = flattenTokens(json);
fs.writeFileSync(filePath, JSON.stringify(flattened, null, 2));
console.log('mapped.json has been flattened and alias references updated, with typo correction.'); 