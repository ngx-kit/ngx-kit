const path = require('path');
const fs = require('fs-extra');

const pkg = require('./package.json');
const dist = 'dist/schematics-build';

// Copy files
fs.copySync(path.resolve('./packages/schematics'), path.resolve(dist), {
  filter: function(src, dest) {
    // const ext = src.split('.').pop();
    // return ext !== 'ts';
    return true;
  }
});

// Generate package.json
const blueprint = fs.readFileSync(path.resolve('packages/schematics/package.json'), 'utf-8');
const result = blueprint
    .replace(/0\.0\.0\-PLACEHOLDER/g, pkg.version);
fs.writeFileSync(path.resolve(dist, 'package.json'), result);

console.log('release-schematics.js finished!');
