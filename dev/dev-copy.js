const path = require('path');
const fs = require('fs-extra');

const config = require('./dev-copy-config.json');

config.release.forEach(p => {
  fs.copySync(path.resolve('./dist/release'), path.resolve(p));
  console.log('release copied', p);
});

config.src.forEach(s => {
  fs.copySync(path.resolve('./demo'), path.resolve(s, 'demo'));
  fs.copySync(path.resolve('./docs'), path.resolve(s, 'docs'));
  fs.copySync(path.resolve('./package'), path.resolve(s, 'package'));
  console.log('src copied', s);
});
