const path = require('path');
const walk = require('walk');
const fs = require('fs-extra');

module.exports = function(dir, moduleName, schematicsConfig) {
  const distDir = path.resolve(schematicsConfig.dist, moduleName);
  // clean up dist
  fs.emptyDirSync(distDir);
  // copy templates
  fs.copySync(path.resolve(schematicsConfig.template), distDir);
  // gen
  const blueprintsDist = path.resolve(distDir, 'files/__path__/__name@dasherize@if-flat__');
  walk.walkSync(path.resolve(dir), {
    listeners: {
      file: function(root, fileStats, next) {
        const localDir = path.resolve(root).replace(path.resolve(dir), '').replace(/^\\/, '');
        const name = fileStats.name;
        const filePath = path.resolve(root, name);
        const content = schematize(fs.readFileSync(filePath, 'utf-8'), moduleName);
        fs.outputFileSync(path.resolve(blueprintsDist, pathDasherize(localDir, moduleName), pathDasherize(name, moduleName)), content);
        next();
      },
      errors: function(root, nodeStatsArray, next) {
        console.log('err', nodeStatsArray);
        next();
      },
    }
  });
  console.log(`${moduleName} schematized`);
};

/**
 * Path-var replacement
 */
function pathDasherize(str, name) {
  return str.replace(name, '__name@dasherize__');
}

/**
 * Templates-var replacement
 */
function schematize(content, name) {
  return content
      .replace(new RegExp(`${name}`, 'g'), '<%= dasherize(name) %>', 'g')
      .replace(new RegExp(`${classify(name)}`, 'g'), '<%= classify(name) %>', 'g')
      .replace(new RegExp(`${camelize(name)}`, 'g'), '<%= camelize(name) %>', 'g')
      .replace(new RegExp(`${classify(name)}`, 'g'), '<%= classify(name) %>', 'g');
}

function classify(str) {
  return capitalize(camelize(str));
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.substr(1);
}

function camelize(str) {
  return str
      .replace(/(-|_|\.|\s)+(.)?/g, (_match, _separator, chr) => {
        return chr ? chr.toUpperCase() : '';
      })
      .replace(/^([A-Z])/, (match) => match.toLowerCase());
}
