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

    // Group tokens by breakpoint and theme
    const vars = {
      desktop: [],
      tablet: [],
      mobile: []
    };
    const themeVars = {};
    const aliasVars = [];

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
      // RESPONSIVE TOKENS
      if (
        token.value &&
        typeof token.value === 'object' &&
        token.value.desktop !== undefined
      ) {
        // For responsive tokens, we'll use the desktop value as the base
        // and override with media queries for tablet/mobile
        let formattedValue = token.value.desktop;
        if (token.type === 'fontSizes' && typeof formattedValue === 'number') {
          formattedValue = `${formattedValue}px`;
        }
        if (token.type === 'fontFamilies') {
          formattedValue = formatFontFamily(formattedValue);
        }
        vars.desktop.push(varLine(token.name, formattedValue));

        // Add tablet overrides if different from desktop
        if (token.value.tablet !== undefined && token.value.tablet !== null && token.value.tablet !== '' && token.value.tablet !== token.value.desktop) {
          let tabletValue = token.value.tablet;
          if (token.type === 'fontSizes' && typeof tabletValue === 'number') {
            tabletValue = `${tabletValue}px`;
          }
          if (token.type === 'fontFamilies') {
            tabletValue = formatFontFamily(tabletValue);
          }
          vars.tablet.push(varLine(token.name, tabletValue));
        }

        // Add mobile overrides if different from desktop
        if (token.value.mobile !== undefined && token.value.mobile !== null && token.value.mobile !== '' && token.value.mobile !== token.value.desktop) {
          let mobileValue = token.value.mobile;
          if (token.type === 'fontSizes' && typeof mobileValue === 'number') {
            mobileValue = `${mobileValue}px`;
          }
          if (token.type === 'fontFamilies') {
            mobileValue = formatFontFamily(mobileValue);
          }
          vars.mobile.push(varLine(token.name, mobileValue));
        }
        return;
      }
      // REGULAR TOKENS
      let formattedValue = token.value;
      if (token.type === 'fontSizes' && typeof formattedValue === 'number') {
        formattedValue = `${formattedValue}px`;
      }
      if (token.type === 'fontFamilies') {
        formattedValue = formatFontFamily(formattedValue);
      }
      vars.desktop.push(varLine(token.name, formattedValue));
    });

    // Build CSS output
    let out = ':root {\n' + vars.desktop.join('\n');
    if (aliasVars.length) out += '\n' + aliasVars.join('\n');
    out += '\n}\n\n';
    
    // Add responsive overrides
    Object.entries(breakpoints).forEach(([bp, query]) => {
      if (bp === 'desktop') return;
      if (vars[bp].length) {
        out += `@media ${query} {\n  :root {\n${vars[bp].join('\n')}\n  }\n}\n\n`;
      }
    });
    
    // Add theme overrides
    Object.entries(themeVars).forEach(([theme, lines]) => {
      const selector = theme === 'lightMode' ? ':root' : `[data-theme="${theme.replace('Mode','')}"]`;
      out += `${selector} {\n${lines.join('\n')}\n}\n\n`;
    });
    
    return out;
  }
};

module.exports = responsiveFormat; 