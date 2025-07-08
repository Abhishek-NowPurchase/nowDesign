// Auto-generated index.js for all icon components

const req = require.context('./react/now-design/packages/icons/raw', false, /\.js$/);

req.keys().forEach((filename) => {
  const name = filename.replace('./', '').replace('.js', '');
  exports[name] = req(filename).default || req(filename);
});
