const responsiveFormat = {
  name: 'css/variables-responsive',
  formatter: function({ dictionary }) {
    // Define your breakpoints
    const breakpoints = {
      desktop: null, // root
      tablet: '(max-width: 1024px)',
      mobile: '(max-width: 600px)'
    };

    // Helper to output a variable line
    function varLine(name, value) {
      return `  --${name}: ${value};`;
    }

    // Helper to format font family values
    function formatFontFamily(value) {
      if (typeof value === 'string' && (value.includes('"') || value.includes("'"))) {
        return value;
      }
      return `"${value}", Arial, sans-serif`;
    }

    // Helper to format values for CSS variables
    function formatValue(type, value) {
      // Add px for numeric values for these types
      const pxTypes = [
        'fontSize', 'lineHeight', 'letterSpacing', 'paragraphSpacing', 'paragraphIndent'
      ];
      if (pxTypes.includes(type) && typeof value === 'number') {
        return `${value}px`;
      }
      return value;
    }

    // Helper to get base variable name (strip -desktop, -tablet, -mobile)
    function getBaseVarName(name) {
      return name.replace(/-(desktop|tablet|mobile)$/,'');
    }

    // Collect responsive tokens
    const responsiveVars = {};
    const aliasVars = [];
    const regularVars = [];
    const themeVars = {};
    const responsiveSuffixRegex = /-(desktop|tablet|mobile)$/;
    const responsiveBaseNames = new Set();

    dictionary.allTokens.forEach(token => {
      // THEME TOKENS (mapped.json)
      if (token.path[0] === 'mapped') {
        const theme = token.path[1]; // e.g., 'lightMode', 'darkMode'
        if (!themeVars[theme]) themeVars[theme] = [];
        themeVars[theme].push(varLine(token.name, token.value));
        return;
      }
      // ALIAS TOKENS (alias.json)
      if (token.path.includes('alias')) {
        aliasVars.push(varLine(token.name, token.value));
        return;
      }
      // Responsive object tokens
      if (
        token.value &&
        typeof token.value === 'object' &&
        ('desktop' in token.value || 'tablet' in token.value || 'mobile' in token.value)
      ) {
        const baseName = token.name;
        responsiveBaseNames.add(baseName);
        if (!responsiveVars[baseName]) responsiveVars[baseName] = {};
        ['desktop','tablet','mobile'].forEach(bp => {
          let rawValue = (token.value && token.value[bp] != null && token.value[bp] !== 'null') ? token.value[bp] : 0;
          let formattedValue = formatValue(token.type, rawValue);
          if (token.type === 'fontFamilies') {
            formattedValue = formatFontFamily(formattedValue);
          }
          responsiveVars[baseName][bp] = formattedValue;
        });
        return;
      }
      // Responsive suffix tokens
      if (token.name.match(responsiveSuffixRegex)) {
        const baseName = getBaseVarName(token.name);
        responsiveBaseNames.add(baseName);
        if (!responsiveVars[baseName]) responsiveVars[baseName] = {};
        let formattedValue = token.value;
        if (token.type === 'fontSizes' && typeof formattedValue === 'number') {
          formattedValue = `${formattedValue}px`;
        }
        if (token.type === 'fontFamilies') {
          formattedValue = formatFontFamily(formattedValue);
        }
        if (token.name.endsWith('-desktop')) responsiveVars[baseName].desktop = formattedValue;
        if (token.name.endsWith('-tablet')) responsiveVars[baseName].tablet = formattedValue;
        if (token.name.endsWith('-mobile')) responsiveVars[baseName].mobile = formattedValue;
        return;
      }
      // Regular tokens (not responsive)
      let formattedValue = token.value;
      if (token.type === 'fontSizes' && typeof formattedValue === 'number') {
        formattedValue = `${formattedValue}px`;
      }
      if (token.type === 'fontFamilies') {
        formattedValue = formatFontFamily(formattedValue);
      }
      // Only emit if not a responsive suffix and not a responsive base name
      if (!token.name.match(responsiveSuffixRegex) && !responsiveBaseNames.has(token.name)) {
        regularVars.push(varLine(token.name, formattedValue));
      }
    });

    // Build CSS output
    let out = ':root {\n';
    // Add regular vars (not responsive)
    if (regularVars.length) out += regularVars.join('\n') + '\n';
    // Add responsive desktop vars (base name, desktop value)
    Object.entries(responsiveVars).forEach(([base, values]) => {
      if (values.desktop !== undefined) {
        out += varLine(base, values.desktop) + '\n';
      }
    });
    // Add alias vars
    if (aliasVars.length) out += aliasVars.join('\n') + '\n';
    out += '}\n\n';

    // Tablet media query
    let tabletVars = '';
    Object.entries(responsiveVars).forEach(([base, values]) => {
      if (values.tablet !== undefined) {
        tabletVars += varLine(base, values.tablet) + '\n';
      }
    });
    if (tabletVars) {
      out += '@media (max-width: 1024px) {\n  :root {\n' + tabletVars + '  }\n}\n\n';
    }
    // Mobile media query
    let mobileVars = '';
    Object.entries(responsiveVars).forEach(([base, values]) => {
      if (values.mobile !== undefined) {
        mobileVars += varLine(base, values.mobile) + '\n';
      }
    });
    if (mobileVars) {
      out += '@media (max-width: 600px) {\n  :root {\n' + mobileVars + '  }\n}\n';
    }
    
    // Add theme overrides
    Object.entries(themeVars).forEach(([theme, lines]) => {
      const selector = theme === 'lightMode' ? ':root' : `[data-theme="${theme.replace('Mode','')}"]`;
      out += `${selector} {\n${lines.join('\n')}\n}\n\n`;
    });
    
    return out;
  }
};

module.exports = responsiveFormat; 