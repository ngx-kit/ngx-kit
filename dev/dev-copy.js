const path = require('path');
const fs = require('fs-extra');

const config = require('./dev-copy-config.json');

fs.copySync(path.resolve('dist/packages'), path.resolve(config.path));
