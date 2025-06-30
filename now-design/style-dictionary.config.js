const responsiveFormat = require('./style-dictionary/formats/responsive-css.js');

module.exports = {
  source: ['packages/tokens/**/*.json'],
  platforms: {
    css: {
      transforms: ['attribute/cti', 'name/cti/kebab'],
      buildPath: 'packages/tokens/dist/',
      files: [
        {
          destination: 'css/variables.css',
          format: 'css/variables-responsive'
        }
      ]
    },
    scss: {
      transformGroup: 'scss',
      buildPath: 'packages/tokens/dist/scss/',
      files: [{
        destination: '_variables.scss',
        format: 'scss/variables'
      }]
    },
    js: {
      transformGroup: 'js',
      buildPath: 'packages/tokens/dist/js/',
      files: [{
        destination: 'tokens.js',
        format: 'javascript/es6'
      }]
    }
  },
  hooks: {
    formats: [
      {
        name: responsiveFormat.name,
        formatter: responsiveFormat.formatter
      }
    ]
  }
}; 

