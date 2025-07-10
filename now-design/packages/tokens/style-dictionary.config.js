
const responsiveFormat = require('./formats/responsive-css.js');

module.exports = {
    source: ['**/*.json'],
    platforms: {
        css: {
            transformGroup: 'css',
            buildPath: 'dist/',
            files: [
                {
                    destination: 'css/variables.css',
                    format: 'css/variables-responsive'
                }
            ]
        },
        scss: {
            transformGroup: 'scss',
            buildPath: 'dist/scss/',
            files: [{
                destination: '_variables.scss',
                format: 'scss/variables'
            }]
        },
        js: {
            transformGroup: 'js',
            buildPath: 'dist/js/',
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
