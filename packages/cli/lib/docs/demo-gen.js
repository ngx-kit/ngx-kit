const path = require('path');
const walk = require('walk');
const fs = require('fs-extra');
const matter = require('front-matter');
const parseTs = require('./api/parse-ts');

module.exports = function(location) {
  const demo = {files: []};

  walker = walk.walkSync(location, {
    listeners: {
      file: function(root, fileStats, next) {
        let file = {};
        const content = fs.readFileSync(path.resolve(root, fileStats.name), 'utf-8');
        const ext = fileStats.name.split('.').pop();
        if (ext === 'md') {
          // const parsed = matter(content);
          // file['meta'] = parsed.attributes;
          // file['readme'] = parsed.body;
        } else {
          file.name = fileStats.name;
          file.ext = ext;
          file.content = content;
          if (ext === 'ts') {
            const api = parseTs(path.resolve(root, fileStats.name));
            file.class = api.class;
          }
        }

        demo.files.push(file);
        next();
      },
      errors: function(root, nodeStatsArray, next) {
        console.log('err', nodeStatsArray);
        next();
      }
      ,
    }
  });

  return demo.files.length > 0 ? demo : null;
};
