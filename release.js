const path = require('path');
const fs = require('fs-extra');

const pkg = require('./package.json');
const releaseDir = path.resolve('./dist/release');

// Copy src
fs.copySync(path.resolve('./src/app/package/'), releaseDir);
// Generate package.json
const blueprint = fs.readFileSync(path.resolve('./src/app/package/package.json'), 'utf-8');
const result = blueprint
    .replace(/0\.0\.0\-PLACEHOLDER/g, pkg.version);
fs.writeFileSync(path.resolve(releaseDir, 'package.json'), result);

console.log('release.js finished!');
