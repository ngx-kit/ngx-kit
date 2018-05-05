const path = require('path');
const fs = require('fs-extra');

const pkg = require('../../package.json');

// Generate package.json
const distPkgPath  = path.resolve(__dirname, '../../dist/core/package.json');
const blueprint = fs.readFileSync(distPkgPath, 'utf-8');
const result = blueprint.replace(/0\.0\.0\-PLACEHOLDER/g, pkg.version);
fs.writeFileSync(distPkgPath, result);
// Copy README
fs.copySync(path.resolve(__dirname, '../../README.md'), path.resolve(__dirname, '../../dist/core/README.md'));

console.log('release.js finished!');
