const path = require('path');
const walk = require('walk');
const fs = require('fs-extra');
const matter = require('front-matter');

module.exports = function(location) {
  const posts = [];

  walker = walk.walkSync(location, {
    listeners: {
      file: function(root, fileStats, next) {
        const filename = fileStats.name;
        const ext = filename.split('.').pop();
        if (ext === 'md') {
          const content = fs.readFileSync(path.resolve(root, filename), 'utf-8');
          const parsed = matter(content);
          posts.push({
            name: filename.replace('.md', ''),
            meta: parsed.attributes,
            content: parsed.body,
          });
        }
        next();
      },
      errors: function(root, nodeStatsArray, next) {
        console.log('err', nodeStatsArray);
        next();
      },
    },
  });

  return posts;
};
