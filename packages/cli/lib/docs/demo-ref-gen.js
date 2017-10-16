const path = require('path');
const fs = require('fs-extra');

module.exports = function(location) {
  const srcFile = path.resolve(location, 'demo.ts');
  if (fs.pathExistsSync(srcFile)) {
    const content = fs.readFileSync(srcFile, 'utf-8');
    const compiled = content
        .replace('[', '{')
        .replace(']', '}')
        .replace(/(\ +)(.*),/g, '$1\'$2\': $2,');
    fs.outputFile(path.resolve(location, 'demo-ref.ts'), compiled, function(err) {
      if (err) {
        return console.log(err);
      }
    });
  }
};
