const path = require('path');
const walk = require('walk');
const fs = require('fs-extra');
const apiGen = require('./api/api-gen');
const demoGen = require('./demo-gen');
const demoRefGen = require('./demo-ref-gen');
const docsGen = require('./docs-gen');

module.exports = function(dir, pkg, schema) {
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
        demo: demoGen(path.resolve(dir, schema.demo, name)),
      };
      if (mod.api.length > 0 || mod.docs.length > 0 || mod.api.length > 0) {
        compiled.modules.push(mod);
      }
    });
    compiled.docs = docsGen(path.resolve(dir, schema.docs));
    demoRefGen(path.resolve(dir, schema.demo));
    saveDocs(pkg, compiled);
  });
};

function saveDocs(pkg, compiled) {
  // @todo get path from config
  fs.outputFile(path.resolve(`./src/assets/docs/${pkg}.json`), JSON.stringify(compiled), function(err) {
    if (err) {
      return console.log(err);
    }
  });
}
