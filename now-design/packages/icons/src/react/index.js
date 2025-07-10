// Auto-generated index.js for all icon components in src/react/

const req = require.context('.', false, /\.js$/);

req.keys().forEach((filename) => {
  if (filename === './index.js') return; // skip self
  const name = filename.replace('./', '').replace('.js', '');
  exports[name] = req(filename).default || req(filename);
}); 