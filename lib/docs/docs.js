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
    copyDemos(path.resolve(dir, schema.demo), path.resolve('./src/app/demo', pkg));
    genDemoImport(pkg, compiled.modules);
    saveDocs(pkg, compiled);
  });
};

function copyDemos(from, to) {
  // fs.emptyDirSync(to); << ruins ng serve
  // @todo get path from config
  fs.copySync(from, to);
}

function genDemoImport(pkg, modules) {
  // gen demo list
  const components = [].concat(...modules
      .filter(m => m.demo && m.demo.length > 0)
      .map(m => m.demo.map(d => Object.assign(d, {module: m.name}))));
  // @todo get real dir, sometimes it does not equal to compopnent-name
  let importFile = `${
      components.map(d => `import { ${d.class} } from './${d.module}/${d.name}/${d.name}.component';`).join('\r\n')
      }\r\n\r\nexport const demoComponents = [\r\n${
      components.map(d => `  ${d.class},`).join('\r\n')
      }\r\n];\r\n\r\nexport const demoComponentsRef = {\r\n${
      components.map(d => `  '${d.class}': ${d.class},`).join('\r\n')
      }\r\n};\r\n`;
  // @todo get output path from config
  fs.outputFile(path.resolve(`./src/app/demo/${pkg}/demo.ts`), importFile, function(err) {
    if (err) {
      return console.log(err);
    }
  });
}

function saveDocs(pkg, compiled) {
  // @todo get path from config
  fs.outputFile(path.resolve(`./src/assets/docs/${pkg}.json`), JSON.stringify(compiled), function(err) {
    if (err) {
      return console.log(err);
    }
  });
}
