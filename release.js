const path = require('path');
const fs = require('fs-extra');

const pkg = require('./package.json');
const config = require('./release.config.json');

// Generate package.json
const blueprint = fs.readFileSync(path.resolve('packages/ngx-kit/package.json'), 'utf-8');
const result = blueprint
    .replace(/0\.0\.0\-PLACEHOLDER/g, pkg.version)
    .replace(/0\.0\.0\-ANGULAR\-PLACEHOLDER/g, config.vendors.angular)
    .replace(/0\.0\.0\-TYPESCRIPT\-PLACEHOLDER/g, config.vendors.typescript)
    .replace(/0\.0\.0\-STYLER\-PLACEHOLDER/g, config.vendors.styler);
fs.writeFileSync(path.resolve('dist/release/package.json'), result);
// Copy README
fs.copySync(path.resolve('README.md'), path.resolve('dist/release/README.md'));

console.log('release.js finished!');
