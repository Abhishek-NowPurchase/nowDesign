const fs = require('fs');
const path = require('path');

const responsiveFormat = {
  name: 'css/variables-responsive',
  formatter: function({ dictionary }) {
    // Write the entire tokens object for debugging
    const debugPath = path.join(__dirname, 'debug-style-dictionary.json');
    fs.writeFileSync(debugPath, JSON.stringify({ tokens: dictionary.tokens }, null, 2));

    // Helper to output a variable line with a given name and value
    function varLine(name, value) {
      return `  --${name}: ${value};`;
    }

    // Helper to output responsive variables for a given breakpoint
    function responsiveVarLine(name, value) {
      return `  --${name}: ${value};`;
    }

    // Helper to flatten scale tokens with custom naming
    function flattenScaleTokens(obj, prefix = '', out = []) {
      Object.entries(obj).forEach(([k, v]) => {
        if (v && typeof v === 'object' && 'value' in v) {
          // Handle base scale values
          if (/^\d+$/.test(k)) {
            out.push(varLine(`scale-${k}`, v.value));
          } else if (prefix.endsWith('cornerRadius')) {
            out.push(varLine(`cornerRadius-${k}`, v.value));
          } else if (prefix.endsWith('strokeWidth')) {
            out.push(varLine(`strokeWidth-${k}`, v.value));
          } else if (prefix.endsWith('positionX')) {
            out.push(varLine(`positionX-${k}`, v.value));
          } else if (prefix.endsWith('positionY')) {
            out.push(varLine(`positionY-${k}`, v.value));
          } else if (prefix.endsWith('blur')) {
            out.push(varLine(`blur-${k}`, v.value));
          } else if (prefix.endsWith('spread')) {
            out.push(varLine(`spread-${k}`, v.value));
          } else {
            out.push(varLine(`${prefix ? prefix + '-' : ''}${k}`, v.value));
          }
        } else if (v && typeof v === 'object') {
          flattenScaleTokens(v, prefix ? `${prefix}-${k}` : k, out);
        }
      });
      return out;
    }

    // Helper to flatten typography tokens with custom naming
    function flattenTypographyTokens(obj, prefix = '', out = []) {
      Object.entries(obj).forEach(([k, v]) => {
        if (v && typeof v === 'object' && 'value' in v) {
          out.push(varLine(`${prefix ? prefix + '-' : ''}${k}`, v.value));
        } else if (v && typeof v === 'object') {
          flattenTypographyTokens(v, k, out);
        }
      });
      return out;
    }

    // Helper to flatten nested tokens for scale and typography
    function flattenTokens(obj, prefix = '', out = []) {
      Object.entries(obj).forEach(([k, v]) => {
        const newPrefix = prefix ? `${prefix}-${k}` : k;
        if (v && typeof v === 'object' && 'value' in v) {
          out.push(varLine(newPrefix, v.value));
        } else if (v && typeof v === 'object') {
          flattenTokens(v, newPrefix, out);
        }
      });
      return out;
    }

    // Helper to join path for color and typography tokens (without theme)
    function fullVarNameNoTheme(path) {
      // Remove 'mapped', 'modes', theme, then join the rest
      // e.g., [mapped, modes, light, normal, surface, action] => normal-surface-action
      return path.slice(3).join('-');
    }

    // Recursively walk mapped tokens and collect variables by branch/category (theme is only for value selection)
    function collectMappedVars(obj, path = ['mapped'], themeVars = { light: {}, dark: {} }, theme, branch, category) {
      if (!obj || typeof obj !== 'object') return;
      // At root: descend to 'modes'
      if (path.length === 1 && path[0] === 'mapped') {
        Object.entries(obj || {}).forEach(([k, v]) => {
          collectMappedVars(v, [...path, k], themeVars);
        });
        return themeVars;
      }
      // At 'modes': next key is theme
      if (path.length === 2 && path[0] === 'mapped' && path[1] === 'modes') {
        Object.entries(obj || {}).forEach(([themeKey, v]) => {
          collectMappedVars(v, [...path, themeKey], themeVars, themeKey);
        });
        return themeVars;
      }
      // At theme: next key is branch
      if (path.length === 3 && path[0] === 'mapped' && path[1] === 'modes') {
        Object.entries(obj || {}).forEach(([branchKey, v]) => {
          collectMappedVars(v, [...path, branchKey], themeVars, theme, branchKey);
        });
        return themeVars;
      }
      // At branch: next key is category
      if (path.length === 4 && path[0] === 'mapped' && path[1] === 'modes') {
        Object.entries(obj || {}).forEach(([categoryKey, v]) => {
          collectMappedVars(v, [...path, categoryKey], themeVars, theme, branch, categoryKey);
        });
        return themeVars;
      }
      // Leaf tokens: output all
      if ('value' in obj) {
        if (theme && branch && category) {
          let varName = fullVarNameNoTheme(path);
          if (!themeVars[theme]) themeVars[theme] = {};
          if (!themeVars[theme][branch]) themeVars[theme][branch] = {};
          if (!themeVars[theme][branch][category]) themeVars[theme][branch][category] = [];
          themeVars[theme][branch][category].push(varLine(varName, obj.value));
        }
        return themeVars;
      }
      // Recurse deeper for subcategories
      Object.entries(obj || {}).forEach(([k, v]) => {
        collectMappedVars(v, [...path, k], themeVars, theme, branch, category);
      });
      return themeVars;
    }

    // Helper to output responsive tokens for typography
    function outputResponsiveTypographyVars(responsiveObj) {
      const desktopVars = [];
      const tabletVars = [];
      const mobileVars = [];
      Object.entries(responsiveObj).forEach(([k, v]) => {
        if (v && typeof v === 'object' && v.value) {
          // Naming: e.g., heading-h5-fontSize => fontSize-heading-h5
          const parts = k.split('-');
          const type = parts.pop();
          const name = `${type}-${parts.join('-')}`;
          if (v.value.desktop !== undefined) desktopVars.push(responsiveVarLine(name, v.value.desktop));
          if (v.value.tablet !== undefined) tabletVars.push(responsiveVarLine(name, v.value.tablet));
          if (v.value.mobile !== undefined) mobileVars.push(responsiveVarLine(name, v.value.mobile));
        }
      });
      return { desktopVars, tabletVars, mobileVars };
    }

    // Helper to output responsive tokens for scale/spacing
    function outputResponsiveScaleVars(responsiveObj) {
      const desktopVars = [];
      const tabletVars = [];
      const mobileVars = [];
      Object.entries(responsiveObj).forEach(([group, groupObj]) => {
        Object.entries(groupObj).forEach(([k, v]) => {
          const name = `${group}-${k}`;
          if (v.desktop && v.desktop.value !== undefined) desktopVars.push(responsiveVarLine(name, v.desktop.value));
          if (v.tablet && v.tablet.value !== undefined) tabletVars.push(responsiveVarLine(name, v.tablet.value));
          if (v.mobile && v.mobile.value !== undefined) mobileVars.push(responsiveVarLine(name, v.mobile.value));
        });
      });
      return { desktopVars, tabletVars, mobileVars };
    }

    // Start collecting
    const mappedRoot = dictionary.properties && dictionary.properties.mapped ? dictionary.properties.mapped : undefined;
    let themeVars = {};
    try {
      themeVars = collectMappedVars(mappedRoot);
      // Write collected themeVars for debugging
      const themeVarsDebugPath = path.join(__dirname, 'themeVars-debug.json');
      fs.writeFileSync(themeVarsDebugPath, JSON.stringify(themeVars, null, 2));
    } catch (e) {
      fs.writeFileSync(debugPath, JSON.stringify({ error: e.message, mappedRoot }, null, 2));
    }

    // Helper to output grouped sections with comments
    function sectionBlock(title, lines) {
      if (!lines || !lines.length) return '';
      return `  /* ========== ${title.toUpperCase()} ========== */\n` + lines.join('\n') + '\n';
    }

    // Build CSS output
    let out = '';
    // Output light theme under :root
    out += ':root {\n';
    if (themeVars.light) {
      Object.entries(themeVars.light).forEach(([branch, cats]) => {
        if (typeof cats === 'object' && cats !== null) {
          Object.entries(cats).forEach(([cat, linesOrObj]) => {
            if (typeof linesOrObj === 'object' && !Array.isArray(linesOrObj)) {
              Object.entries(linesOrObj).forEach(([subcat, lines]) => {
                out += sectionBlock(`${branch} ${cat} ${subcat}`, lines);
              });
            } else if (Array.isArray(linesOrObj)) {
              out += sectionBlock(`${branch} ${cat}`, linesOrObj);
            }
          });
        }
      });
    }
    // Output scale tokens (theme-independent)
    if (dictionary.properties && dictionary.properties.scale) {
      const scaleVars = flattenScaleTokens(dictionary.properties.scale, '', []);
      out += sectionBlock('SCALE', scaleVars);
    }
    // Output typography tokens (theme-independent)
    if (dictionary.properties && dictionary.properties.typography) {
      const typoVars = flattenTypographyTokens(dictionary.properties.typography, '', []);
      out += sectionBlock('TYPOGRAPHY', typoVars);
    }
    // Output responsive variables for desktop (in :root)
    let respTypo = { desktopVars: [], tabletVars: [], mobileVars: [] };
    let respScale = { desktopVars: [], tabletVars: [], mobileVars: [] };
    if (dictionary.properties && dictionary.properties.typographyResponsive) {
      respTypo = outputResponsiveTypographyVars(dictionary.properties.typographyResponsive);
      if (respTypo.desktopVars.length) out += sectionBlock('RESPONSIVE TYPOGRAPHY', respTypo.desktopVars);
    }
    if (dictionary.properties && dictionary.properties.scaleResponsive) {
      respScale = outputResponsiveScaleVars(dictionary.properties.scaleResponsive);
      if (respScale.desktopVars.length) out += sectionBlock('RESPONSIVE SCALE', respScale.desktopVars);
    }
    out += '}\n\n';
    // Output responsive variables for tablet and mobile in media queries
    if (respTypo.tabletVars.length || respScale.tabletVars.length) {
      out += `@media (max-width: 900px) {\n  :root {\n`;
      if (respTypo.tabletVars.length) out += sectionBlock('RESPONSIVE TYPOGRAPHY', respTypo.tabletVars);
      if (respScale.tabletVars.length) out += sectionBlock('RESPONSIVE SCALE', respScale.tabletVars);
      out += '  }\n}\n';
    }
    if (respTypo.mobileVars.length || respScale.mobileVars.length) {
      out += `@media (max-width: 600px) {\n  :root {\n`;
      if (respTypo.mobileVars.length) out += sectionBlock('RESPONSIVE TYPOGRAPHY', respTypo.mobileVars);
      if (respScale.mobileVars.length) out += sectionBlock('RESPONSIVE SCALE', respScale.mobileVars);
      out += '  }\n}\n';
    }
    // Output dark theme under [data-theme="dark"]
    if (themeVars.dark) {
      out += '[data-theme="dark"] {\n';
      Object.entries(themeVars.dark).forEach(([branch, cats]) => {
        if (typeof cats === 'object' && cats !== null) {
          Object.entries(cats).forEach(([cat, linesOrObj]) => {
            if (typeof linesOrObj === 'object' && !Array.isArray(linesOrObj)) {
              Object.entries(linesOrObj).forEach(([subcat, lines]) => {
                out += sectionBlock(`${branch} ${cat} ${subcat}`, lines);
              });
            } else if (Array.isArray(linesOrObj)) {
              out += sectionBlock(`${branch} ${cat}`, linesOrObj);
            }
          });
        }
      });
      out += '}\n';
    }
    return out;
  }
};

module.exports = responsiveFormat; 