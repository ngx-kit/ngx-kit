const path = require('path');
const walk = require('walk');
const fs = require('fs-extra');
const processModule = require('./process-module');
const updateCollection = require('./update-collection');

module.exports = function(config) {
  walk.walkSync(path.resolve(config.src), {
    listeners: {
      directories: function(root, fileStats, next) {
        fileStats.map(f => f.name).forEach(name => {
          processModule(path.resolve(root, name), name, config);
          updateCollection(name, config);
        });
      },
      errors: function(root, nodeStatsArray, next) {
        console.log('err', nodeStatsArray);
        next();
      },
    }
  });
};
