const path = require('path');
const fs = require('fs-extra');

const pkg = require('./package.json');
const releaseDir = path.resolve('./dist/release');

// Copy files
fs.copySync(path.resolve('package'), path.resolve(releaseDir), {
  filter: function(src, dest) {
    return !src.endsWith('_template');
  }
});

// Generate package.json
{
  const blueprint = fs.readFileSync(path.resolve('./package/package.json'), 'utf-8');
  const result = blueprint
      .replace(/0\.0\.0\-PLACEHOLDER/g, pkg.version);
  fs.writeFileSync(path.resolve(releaseDir, 'package.json'), result);
}

// Add ver to collection.json
{
  const blueprint = fs.readFileSync(path.resolve('./package/collection.json'), 'utf-8');
  const result = blueprint
      .replace(/0\.0\.0\-PLACEHOLDER/g, pkg.version);
  fs.writeFileSync(path.resolve(releaseDir, 'collection.json'), result);
}

// Copy README
fs.copySync(path.resolve('README.md'), path.resolve(releaseDir, 'README.md'));

console.log('release.js finished!');
