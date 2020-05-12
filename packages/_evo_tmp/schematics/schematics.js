const path = require('path');
const fs = require('fs-extra');
const sh = require('shelljs');
const walk = require('walk');

module.exports = function(pkgName, distPath) {
  sh.echo(`Compile ui schematics for ${pkgName}…`);
  // Copy schematic template
  const schemDistPath = path.resolve(distPath, pkgName, 'schematics');
  processTemplate(path.resolve(__dirname, '__template'), schemDistPath, pkgName);
  // Prepare & copy pkg sources
  processSources(path.resolve(__dirname, '..', pkgName, 'src'), path.resolve(schemDistPath, 'extract/files'), pkgName);
  // Build
  if (sh.exec(`"./node_modules/.bin/tsc" -p ${schemDistPath}/tsconfig.json`).code !== 0) {
    sh.echo('Schematics build error!');
    sh.exit(1);
  }
};

function processTemplate(fromPath, toPath, name) {
  walk.walkSync(path.resolve(fromPath), {
    listeners: {
      file: function(root, fileStats, next) {
        const localDir = path.resolve(root).replace(path.resolve(fromPath), '').replace(/^\\/, '');
        const fileName = fileStats.name;
        const filePath = path.resolve(root, fileName);
        const rawContent = fs.readFileSync(filePath, 'utf-8');
        const content = rawContent
          .replace(/\_\_NAME\_PLACEHOLDER\_\_/g, name);
        fs.outputFileSync(path.resolve(toPath, localDir, fileName), content);
        next();
      },
      errors: function(root, nodeStatsArray, next) {
        console.log('err', nodeStatsArray);
        next();
      },
    }
  });
}

function processSources(fromPath, toPath, name) {
  const blueprintsDist = path.resolve(toPath, '__name@dasherize@if-flat__');
  walk.walkSync(path.resolve(fromPath), {
    listeners: {
      file: function(root, fileStats, next) {
        const localDir = path.resolve(root).replace(path.resolve(fromPath), '').replace(/^\\/, '');
        const fileName = fileStats.name;
        const filePath = path.resolve(root, fileName);
        const content = schematize(fs.readFileSync(filePath, 'utf-8'), name);
        fs.outputFileSync(path.resolve(blueprintsDist, pathDasherize(localDir, name), pathDasherize(fileName, name)), content);
        next();
      },
      errors: function(root, nodeStatsArray, next) {
        console.log('err', nodeStatsArray);
        next();
      },
    }
  });
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
