const path = require('path');
const fs = require('fs-extra');

const pkg = require('./package.json');
const dist = 'dist/package';

// Copy files
fs.copySync(path.resolve('package'), path.resolve(dist), {filter: function(src,dest) {
	// const ext = src.split('.').pop();
	// return ext !== 'ts';
	return true;
}});
// Generate package.json
const blueprint = fs.readFileSync(path.resolve('package/package.json'), 'utf-8');
const result = blueprint
    .replace(/0\.0\.0\-PLACEHOLDER/g, pkg.version);
fs.writeFileSync(path.resolve(dist, 'package.json'), result);
// Copy README
fs.copySync(path.resolve('README.md'), path.resolve(dist, 'README.md'));

console.log('release.js finished!');
