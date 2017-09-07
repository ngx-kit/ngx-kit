const path = require('path');
const fs = require('fs-extra');

const config = require('./dev-copy-config.json');

config.paths.forEach(p => {
  fs.copySync(path.resolve('dist/release'), path.resolve(p));
  console.log('Dist copied', p);
});
