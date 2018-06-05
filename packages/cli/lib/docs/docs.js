const path = require('path');
const walk = require('walk');
const fs = require('fs-extra');
const apiGen = require('./api/api-gen');
const demoGen = require('./demo-gen');
const docsGen = require('./docs-gen');

module.exports = function(dir, pkg, schema, dest) {
  const compiled = {
    genTime: new Date(),
    docs: [],
    modules: [],
  };

  walker = walk.walk(path.resolve(dir, schema.src));
  walker.on('directories', function(root, fileStats, next) {
    // modules
    fileStats.map(f => f.name).forEach(name => {
      console.log('>> ', name);
      const mod = {
        name,
        api: apiGen(path.resolve(dir, schema.src, name)),
        docs: docsGen(path.resolve(dir, schema.src, name)),
        demo: demoGen(path.resolve(dir, schema.src, name, 'demo')),
      };
      if (mod.api.length > 0 || mod.docs.length > 0 || mod.api.length > 0) {
        compiled.modules.push(mod);
      }
    });
    compiled.docs = docsGen(path.resolve(dir, schema.docs));
    saveDocs(pkg, compiled, dest);
  });
};

function saveDocs(pkg, compiled, dest) {
  // @todo get path from config
  fs.outputFile(path.resolve(dest, `${pkg}.json`), JSON.stringify(compiled), function(err) {
    if (err) {
      return console.log(err);
    }
  });
}
