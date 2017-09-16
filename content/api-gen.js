const path = require('path');
const walk = require('walk');
const parseTs = require('./parse-ts');

module.exports = function(location) {

  const files = [];

  walker = walk.walkSync(location, {
    listeners: {
      file: function(root, fileStats, next) {
        if (fileStats.name.indexOf('.component.ts') !== -1
            || fileStats.name.indexOf('.directive.ts') !== -1
            || fileStats.name.indexOf('.service.ts') !== -1) {
          const file = parseTs(path.resolve(root, fileStats.name));
          files.push(file);
        }
        next();
      },
      errors: function(root, nodeStatsArray, next) {
        console.log('err', nodeStatsArray);
        next();
      },
    },
  });

  return files;

};
