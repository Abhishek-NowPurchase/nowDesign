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
  // Handle {color.GROUP.NUM} and {alias.GROUP.NUM.value} references
  const colorPattern = /\{color\.([^}]+)\}/g;
  const aliasPattern = /\{alias\.(\w+)\.(\d{2,4})\.value\}/g;

  // First, handle {alias.GROUP.NUM.value} generically
  val = val.replace(aliasPattern, (match, group, num) => {
    if (aliasKeys.includes(group)) {
      if (aliasJson.alias[group][num]) {
        return `{alias.${group}.${num}.value}`;
      }
      const fallbackMap = { '100': 'white', '1100': 'black' };
      if (fallbackMap[num] && aliasJson.alias[group][fallbackMap[num]]) {
        return `{alias.${group}.${fallbackMap[num]}.value}`;
      }
      const groupKeys = Object.keys(aliasJson.alias[group]);
      if (groupKeys.length > 0) {
        return `{alias.${group}.${groupKeys[0]}.value}`;
      }
    }
    return match;
  });

  // Then, handle {color.GROUP.NUM} as before
  val = val.replace(colorPattern, (match, inner) => {
    const aliasRefMatch = inner.match(/^(\w+)\.(\d{2,4})$/);
    if (aliasRefMatch) {
      const group = aliasRefMatch[1];
      const num = aliasRefMatch[2];
      if (aliasKeys.includes(group)) {
        if (aliasJson.alias[group][num]) {
          return `{alias.${group}.${num}.value}`;
        }
        const fallbackMap = { '100': 'white', '1100': 'black' };
        if (fallbackMap[num] && aliasJson.alias[group][fallbackMap[num]]) {
          return `{alias.${group}.${fallbackMap[num]}.value}`;
        }
        const groupKeys = Object.keys(aliasJson.alias[group]);
        if (groupKeys.length > 0) {
          return `{alias.${group}.${groupKeys[0]}.value}`;
        }
      }
    }
    // Edge case: handle neutral.100/1100 → white/black
    if (inner.startsWith('neutral.100')) {
      return '{alias.neutral.white.value}';
    }
    if (inner.startsWith('neutral.1100')) {
      return '{alias.neutral.black.value}';
    }
    // Split by comma or space, trim, and find the first alias key
    const parts = inner.split(/,| /).map(s => s.trim()).filter(Boolean).map(normalizeKey);
    let foundKey = null;
    for (const part of parts) {
      const [maybeKey, maybeNum] = part.split('.');
      const normKey = normalizeKey(maybeKey);
      if (aliasKeys.includes(normKey)) {
        foundKey = normKey;
        if (maybeNum && aliasJson.alias[normKey][maybeNum]) {
          return `{alias.${normKey}.${maybeNum}.value}`;
        }
      }
      if (aliasKeys.includes(part)) {
        foundKey = part;
      }
    }
    if (foundKey) {
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
    const simpleMatch = inner.match(/([a-zA-Z]+)\.(\d{2,4})/);
    if (simpleMatch) {
      const normKey = normalizeKey(simpleMatch[1]);
      if (aliasKeys.includes(normKey) && aliasJson.alias[normKey][simpleMatch[2]]) {
        return `{alias.${normKey}.${simpleMatch[2]}.value}`;
      }
    }
    return match;
  });
  return val;
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