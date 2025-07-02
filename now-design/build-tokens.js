const StyleDictionary = require('style-dictionary');
const responsiveFormat = require('./style-dictionary/formats/responsive-css.js');

// Register the custom format using the v5 API
StyleDictionary.registerFormat(responsiveFormat);

// Build all platforms
StyleDictionary.extend(__dirname + '/style-dictionary.config.js').buildAllPlatforms();

console.log('Build completed!'); 