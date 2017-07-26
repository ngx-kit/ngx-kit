const path = require('path');
const fs = require('fs-extra');

const config = require('./release.config.json');



// Copy sources
//fs.copySync(path.resolve('package'), path.resolve('dist/package'));
// Generate package.json
const blueprint = fs.readFileSync(path.resolve('package/package.json'), 'utf-8');
const result = blueprint
    .replace(/0\.0\.0\-PLACEHOLDER/g, config.version)
    .replace(/0\.0\.0\-ANGULAR\-PLACEHOLDER/g, config.vendors.angular)
    .replace(/0\.0\.0\-TYPESCRIPT\-PLACEHOLDER/g, config.vendors.typescript)
    .replace(/0\.0\.0\-STYLER\-PLACEHOLDER/g, config.vendors.styler)
    .replace(/0\.0\.0\-MOMENT\-PLACEHOLDER/g, config.vendors.moment);
fs.writeFileSync(path.resolve('dist/release/package.json'), result);
// Copy README
fs.copySync(path.resolve('README.md'), path.resolve('dist/release/README.md'));

console.log('release.js finished!');
