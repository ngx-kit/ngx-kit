const path = require('path');
const fs = require('fs-extra');

const config = require('./release.config.json');

config.packages.forEach(packageName => {
  // Generate package.json
  const blueprint = fs.readFileSync(path.resolve('packages', packageName, 'package.json'), 'utf-8');
  const result = blueprint.replace(/0\.0\.0\-PLACEHOLDER/g, config.version);
  fs.writeFileSync(path.resolve('dist/packages', packageName, 'package.json'), result);
  // Copy README
  fs.copySync(path.resolve('packages', packageName, 'README.md'), path.resolve('dist/packages', packageName, 'README.md'));
});