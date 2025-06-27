const fs = require('fs');
const path = require('path');

const FIGMA_FILE_KEY = 'wOVgmB8my4cHAif88cKO4r';
const FIGMA_PAT = 'FIGMA_PAT';
const ICONS_PAGE_NAME = '      → Icons';
const RAW_DIR = path.resolve(__dirname, '../raw');

if (!fs.existsSync(RAW_DIR)) {
  fs.mkdirSync(RAW_DIR, { recursive: true });
}

const fetchFigma = async (endpoint) => {
  const fetch = (await import('node-fetch')).default;
  return fetch(`https://api.figma.com/v1${endpoint}`, {
    headers: { 'X-Figma-Token': FIGMA_PAT },
  }).then((res) => res.json());
};

(async () => {
  console.log('Fetching Figma file...');
  const file = await fetchFigma(`/files/${FIGMA_FILE_KEY}`);
  if (!file.document) {
    console.error('Figma API response:', file);
    throw new Error('Failed to fetch Figma file');
  }

  console.log('Figma file URL:', 'https://www.figma.com/file/' + FIGMA_FILE_KEY);
  console.log('Looking for page named:', ICONS_PAGE_NAME);

  // Find the Icons page
  console.log('Available pages:', file.document.children.map((page) => page.name));
  const iconsPage = file.document.children.find((page) => page.name === ICONS_PAGE_NAME);
  if (!iconsPage) throw new Error('Icons page not found');

  // DEBUG: Print all direct children types and names
  console.log('Direct children of Icons page:');
  for (const child of iconsPage.children || []) {
    console.log(`- ${child.name} [${child.type}]`);
  }

  // Only use direct children of the Icons page (these are icon sets)
  const iconSets = (iconsPage.children || []).filter(
    node => node.type === 'COMPONENT_SET'
  );
  if (!iconSets.length) throw new Error('No icon sets (COMPONENT_SET) found on Icons page');

  // Recursively collect all COMPONENT nodes from the entire document
  function collectAllComponents(node, acc = []) {
    if (node.type === 'COMPONENT') acc.push(node);
    if (node.children) {
      for (const child of node.children) {
        collectAllComponents(child, acc);
      }
    }
    return acc;
  }
  const allComponents = collectAllComponents(file.document);

  // DEBUG: Log all COMPONENT nodes found
  console.log('All COMPONENT nodes found:');
  for (const c of allComponents) {
    console.log(`- ${c.name} [componentSetId: ${c.componentSetId}]`);
  }

  // Helper to convert Figma node name to PascalCase
  function toPascalCase(str) {
    return str
      .replace(/[^a-zA-Z0-9]+/g, ' ') // replace non-alphanum with space
      .replace(/(?:^|\s)(\w)/g, (_, c) => c ? c.toUpperCase() : '') // capitalize
      .replace(/\s+/g, '');
  }

  // Helper to find the base name by traversing up the parent chain
  function getBaseName(node, parentMap) {
    let names = [];
    let current = node;
    while (current) {
      if (current.type === 'COMPONENT' || current.type === 'COMPONENT_SET') {
        // skip
      } else if (current.name) {
        names.push(current.name);
      }
      current = parentMap.get(current.id);
    }
    return toPascalCase(names.reverse().join(' '));
  }

  // Build a map of id -> parent for all nodes
  function buildParentMap(node, parent = null, map = new Map()) {
    if (node.id) map.set(node.id, parent);
    if (node.children) {
      for (const child of node.children) {
        buildParentMap(child, node, map);
      }
    }
    return map;
  }
  const parentMap = buildParentMap(file.document);

  // Find all COMPONENT nodes with 'fill' or 'line' in their name (iconType or Property 1)
  let iconVariants = [];
  for (const comp of allComponents) {
    let match = comp.name.match(/^(iconType|Property 1)\s*=\s*(fill|line)$/i);
    if (!match) continue;
    let rawVariant = match[2];
    // Traverse up the parent chain to find the first parent whose name is not 'Property 1' or 'iconType'
    let current = parentMap.get(comp.id);
    let baseName = null;
    while (current) {
      if (current.name && !/^\s*(Property 1|iconType)\s*$/i.test(current.name)) {
        baseName = toPascalCase(current.name.trim());
        break;
      }
      current = parentMap.get(current.id);
    }
    let variant = rawVariant.trim().toLowerCase() === 'fill' ? 'Fill' : rawVariant.trim().toLowerCase() === 'line' ? 'Line' : null;
    if (!baseName || !variant) continue;
    iconVariants.push({
      id: comp.id,
      name: `${baseName}${variant}`
    });
  }
  if (!iconVariants.length) throw new Error('No icon variants (Fill/Line) found in COMPONENT nodes');

  console.log(`Found ${iconVariants.length} icon variants on the Icons page.`);

  // Batch node IDs for export (Figma API limit is 100 per request)
  const BATCH_SIZE = 100;
  let count = 0;
  const fetch = (await import('node-fetch')).default;
  for (let i = 0; i < iconVariants.length; i += BATCH_SIZE) {
    const batch = iconVariants.slice(i, i + BATCH_SIZE);
    const batchIds = batch.map((v) => v.id);
    const exportRes = await fetchFigma(`/images/${FIGMA_FILE_KEY}?ids=${batchIds.join(',')}&format=svg`);
    if (!exportRes.images) {
      console.error('Export batch error:', exportRes);
      continue;
    }
    for (const variant of batch) {
      const filePath = path.join(RAW_DIR, `${variant.name}.svg`);
      if (fs.existsSync(filePath)) {
        // Skip if already downloaded
        continue;
      }
      const url = exportRes.images[variant.id];
      if (!url) continue;
      // Retry logic
      let success = false, attempts = 0;
      while (!success && attempts < 3) {
        try {
          const svg = await fetch(url).then((r) => r.text());
          fs.writeFileSync(filePath, svg);
          success = true;
          count++;
          if (count % 50 === 0) console.log(`Downloaded ${count} icons...`);
        } catch (err) {
          attempts++;
          if (attempts >= 3) {
            console.error(`Failed to download ${variant.name} after 3 attempts.`);
          } else {
            console.warn(`Retrying ${variant.name} (attempt ${attempts + 1})...`);
            await new Promise(res => setTimeout(res, 1000 * attempts));
          }
        }
      }
    }
  }
  console.log(`Done! Downloaded ${count} SVG icon variants to ${RAW_DIR}`);
})(); 