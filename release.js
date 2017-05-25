const path = require('path');
const fs = require('fs-extra');

const config = require('./release.config.json');

config.packages.forEach(packageName => {
  // Copy sources
  fs.copySync(path.resolve('packages', packageName), path.resolve('dist/packages', packageName));
  // Generate package.json
  const blueprint = fs.readFileSync(path.resolve('packages', packageName, 'package.json'), 'utf-8');
  const result = blueprint
      .replace(/0\.0\.0\-PLACEHOLDER/g, config.version)
      .replace(/0\.0\.0\-STYLER\-PLACEHOLDER/g, config.vendors.styler)
      .replace(/0\.0\.0\-ANGULAR\-PLACEHOLDER/g, config.vendors.angular);
  fs.writeFileSync(path.resolve('dist/packages', packageName, 'package.json'), result);
});