const path = require('path');
const walk = require('walk');
const fs = require('fs-extra');
const matter = require('front-matter');

const posts = {};

walker = walk.walk('./content');

walker.on('file', function(root, fileStats, next) {
  fs.readFile(fileStats.name, function() {
    const data = fs.readFileSync(path.resolve(root, fileStats.name), 'utf-8');
    const parsed = matter(data);
    // console.log('parse', parsed);
    const post = {
      file: path.normalize(root).replace(/\\/g, '/') + '/' + fileStats.name,
      meta: parsed.attributes,
      body: parsed.body,
    };
    if (posts[post.meta.route]) {
      posts[post.meta.route].push(post);
    } else {
      posts[post.meta.route] = [post];
    }
    next();
  });
});

walker.on('errors', function(root, nodeStatsArray, next) {
  console.log('err', nodeStatsArray);
  next();
});

// @todo clean-up compiled before saving
walker.on('end', function() {
  for (const route in posts) {
    fs.outputFile(path.resolve('content/compiled', route + '.json'), JSON.stringify(posts[route]), function(err) {
      if (err) {
        return console.log(err);
      }
    });
  }
});
