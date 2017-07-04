const {execSync} = require('child_process');
const path = require('path');
const fs = require('fs-extra');
const rollup = require('rollup');

const config = require('./build.config.json');

config.packages.forEach(packageName => {
  // build
  run(`ngc -p ./packages/${packageName}/tsconfig-build.json`);
  roll(packageName);
  // generate package.json
  const blueprint = fs.readFileSync(path.resolve('packages', packageName, 'package.json'), 'utf-8');
  const result = blueprint
      .replace(/0\.0\.0\-PLACEHOLDER/g, config.version)
      .replace(/0\.0\.0\-STYLER\-PLACEHOLDER/g, config.vendors.styler)
      .replace(/0\.0\.0\-ANGULAR\-PLACEHOLDER/g, config.vendors.angular)
      .replace(/0\.0\.0\-MOMENT\-PLACEHOLDER/g, config.vendors.moment);
  fs.writeFileSync(path.resolve('dist', packageName, 'package.json'), result);
});

function run(command) {
  execSync(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`, command);
      return;
    }
    console.log(`stdout: ${stdout}`, command);
    console.log(`stderr: ${stderr}`, command);
  });
}

async function roll(packageName) {
  const moduleName = `kit-${packageName}`;
  const globals = require(path.resolve('packages', packageName, 'rollup-globals.json'));
  const bundle = await rollup.rollup({
    entry: path.resolve('dist', packageName, `${moduleName}.js`),
    exports: 'named',
    external: Object.keys(globals),
    onwarn: function(warning) {
      // Suppress this error message... there are hundreds of them. Angular team says to ignore it.
      // https://github.com/rollup/rollup/wiki/Troubleshooting#this-is-undefined
      if (warning.code === 'THIS_IS_UNDEFINED') {
        return;
      }
      console.error(warning);
    }
  });
  await bundle.write({
    format: 'es',
    dest: path.resolve('dist', packageName, 'module', `${moduleName}.js`),
    globals,
  });
  await bundle.write({
    format: 'umd',
    dest: path.resolve('dist', packageName, 'bundle', `${moduleName}.umd.js`),
    moduleName,
    globals,
  });
  console.log(packageName, 'rolled');
}

console.log('build script completed!');
