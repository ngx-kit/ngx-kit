const path = require('path');
const fs = require('fs-extra');

module.exports = function(name, schematicsConfig) {
  const file = path.resolve(schematicsConfig.dist, 'collection.json');
  const collection = JSON.parse(fs.readFileSync(file, 'utf-8'));
  collection.schematics[name] = {
    factory: `./${name}`,
    description: `Create a @ngx-kit/collection/${name} module.`,
    schema: `./${name}/schema.json`
  };
  fs.outputFileSync(file, JSON.stringify(collection));
};
