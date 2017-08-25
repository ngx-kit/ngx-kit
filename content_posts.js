const path = require('path');
const walk = require('walk');
const fs = require('fs-extra');
const matter = require('front-matter');

const posts = {};

walker = walk.walk('./content');

walker.on('file', function(root, fileStats, next) {
  const content = fs.readFileSync(path.resolve(root, fileStats.name), 'utf-8');
  const parsed = matter(content);
  posts[fileStats.name.replace('.md', '')] = {
    meta: parsed.attributes,
    content: parsed.body,
  };
  next();
});

walker.on('errors', function(root, nodeStatsArray, next) {
  console.log('err', nodeStatsArray);
  next();
});

walker.on('end', function() {
  fs.outputFile(path.resolve('content_dist/posts.json'), JSON.stringify(posts), function(err) {
    if (err) {
      return console.log(err);
    }
  });
});
