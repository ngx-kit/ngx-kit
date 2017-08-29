const path = require('path');
const walk = require('walk');
const fs = require('fs-extra');
const matter = require('front-matter');

const components = {};

walker = walk.walk('./src/app/shared/kit2');

walker.on('file', function(root, fileStats, next) {
  const componentName = root.split('\\').pop();
  if (!components[componentName]) {
    components[componentName] = {code: []};
  }
  const content = fs.readFileSync(path.resolve(root, fileStats.name), 'utf-8');
  const ext = fileStats.name.split('.').pop();
  if (ext === 'md') {
    const parsed = matter(content);
    components[componentName]['meta'] = parsed.attributes;
    components[componentName]['readme'] = parsed.body;
  } else {
    components[componentName]['code'].push({
      file: fileStats.name,
      language: ext === 'ts' ? 'typescript' : 'html',
      content,
    });
  }
  next();
});

walker.on('errors', function(root, nodeStatsArray, next) {
  console.log('err', nodeStatsArray);
  next();
});

walker.on('end', function() {
  fs.outputFile(path.resolve('src/assets/content/components.json'), JSON.stringify(components), function(err) {
    if (err) {
      return console.log(err);
    }
  });
});
