const path = require('path');
const walk = require('walk');
const fs = require('fs-extra');
const matter = require('front-matter');
const parseTs = require('./api/parse-ts');

module.exports = function(location) {
  const components = [];

  walker = walk.walkSync(location, {
    listeners: {
      file: function(root, fileStats, next) {
        const componentName = root.split('\\').pop();
        let component = components.find(c => c.name === componentName);
        if (!component) {
          component = {
            name: componentName,
            code: [],
          };
          components.push(component);
        }
        const content = fs.readFileSync(path.resolve(root, fileStats.name), 'utf-8');
        const ext = fileStats.name.split('.').pop();
        if (ext === 'md') {
          const parsed = matter(content);
          component['meta'] = parsed.attributes;
          component['readme'] = parsed.body;
        } else {
          component['code'].push({
            file: fileStats.name,
            language: ext === 'ts' ? 'typescript' : ext,
            content,
          });
          if (ext === 'ts') {
            const api = parseTs(path.resolve(root, fileStats.name));
            component['class'] = api.class;
          }
        }
        next();
      },
      errors: function(root, nodeStatsArray, next) {
        console.log('err', nodeStatsArray);
        next();
      },
    }
  });

  return components;
};
