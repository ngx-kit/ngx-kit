const path = require('path');
const walk = require('walk');
const fs = require('fs-extra');
const apiGen = require('./api-gen');
const demoGen = require('./demo-gen');
const docsGen = require('./docs-gen');

const args = process.argv;
const package = args[2];
const dir = path.resolve('./node_modules', package);
const content = {
  genTime: new Date(),
  docs: [],
  modules: [],
};

console.log('package:', package);

walker = walk.walk(path.resolve(dir, 'package/src'));
walker.on('directories', function(root, fileStats, next) {
  doModules(fileStats.map(f => f.name));
  doDocs();
  saveContent();
});

function doModules(names) {
  names.forEach((name) => {
    console.log('>> ', name);
    // gather content
    content.modules.push({
      name,
      api: apiGen(path.resolve(dir, 'package/src', name)),
      docs: docsGen(path.resolve(dir, 'package/src', name)),
      demo: demoGen(path.resolve(dir, 'demo', name)),
    });
    // copy demos
    copyDemos();
  });
  genDemoImport();
}

function doDocs() {
  content.docs = docsGen(path.resolve(dir, 'docs'));
}

function copyDemos() {
  const location = path.resolve('./src/app/demo', package);
  // fs.emptyDirSync(location);
  fs.copySync(path.resolve(dir, 'demo'), location);
}

function genDemoImport() {
  // gen demo list
  const components = [].concat(...content.modules
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
  fs.outputFile(path.resolve(`./src/app/demo/${package}/demo.ts`), importFile, function(err) {
    if (err) {
      return console.log(err);
    }
  });
}

function saveContent() {
  fs.outputFile(path.resolve(`./src/assets/content/${package}.json`), JSON.stringify(content), function(err) {
    if (err) {
      return console.log(err);
    }
  });
}
