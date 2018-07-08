const path = require('path');
const fs = require('fs-extra');

const dist = 'dist/core/schematics';

// Copy files
fs.copySync(path.resolve('./packages/schematics'), path.resolve(dist), {
  filter: function(src, dest) {
    // const ext = src.split('.').pop();
    // return ext !== 'ts';
    return true;
  }
});

console.log('release-schematics.js finished!');
