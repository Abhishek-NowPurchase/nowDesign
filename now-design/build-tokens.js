const StyleDictionary = require('style-dictionary');
const responsiveFormat = require('./style-dictionary/formats/responsive-css.js');

// Register the custom format using the v5 API
StyleDictionary.registerFormat(responsiveFormat);

// Load the configuration
StyleDictionary.extend('./style-dictionary.config.js').buildAllPlatforms();

console.log('Build completed!'); 