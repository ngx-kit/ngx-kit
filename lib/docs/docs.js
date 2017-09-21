const path = require('path');
const walk = require('walk');
const fs = require('fs-extra');
const apiGen = require('./api/api-gen');
const demoGen = require('./demo-gen');
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
      compiled.modules.push({
        name,
        api: apiGen(path.resolve(dir, schema.src, name)),
        docs: docsGen(path.resolve(dir, schema.src, name)),
        demo: demoGen(path.resolve(dir, schema.demo, name)),
      });
    });
    compiled.docs = docsGen(path.resolve(dir, schema.docs));
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
