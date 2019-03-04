const path = require('path');
const sh = require('shelljs');

module.exports = function(pkgName, distPath) {
  sh.echo(`Compile core schematics…`);
  // Copy files
  const schemDistPath = path.resolve(distPath, 'core/schematics');
  sh.cp('-R', path.resolve(__dirname, '__template'), schemDistPath);
  // Build
  if (sh.exec(`tsc -p ${schemDistPath}/tsconfig.json`).code !== 0) {
    sh.echo('Schematics build error!');
    sh.exit(1);
  }
};
