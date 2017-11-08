#!/usr/bin/env node
'use strict';

console.log('ngx-kit cli');

const path = require('path');
const fs = require('fs-extra');
const merge = require('deepmerge');

const args = process.argv;
const action = args[2];

switch (action) {
  case 'copy':
    // format: "ngx-kit copy"
    // uses .ngx-kit.json
    const config = getConfig();
    // copy release files
    if (config.copy.release) {
      config.copy.release.from.forEach(source => {
        config.copy.release.to.forEach(dest => {
          fs.copySync(path.resolve(source), path.resolve(dest));
          console.log(`${source} copied to ${path.resolve(dest)}`);
        });
      });
    }
    // copy dest files (keeps dir structure)
    if (config.copy.src) {
      config.copy.src.from.forEach(source => {
        config.copy.src.to.forEach(dest => {
          fs.copySync(path.resolve(source), path.resolve(dest, source));
          console.log(`${source} copied to ${path.resolve(dest, source)}`);
        });
      });
    }
    break;
  case 'gen-docs': {
    // format: "ngx-kit gen-docs PATH_TO_SOURCES"
    // uses .docs-schema.json
    const pkgParam = args[3];
    if (pkgParam) {
      const dir = path.resolve(pkgParam);
      const schema = require(path.resolve(dir, '.docs-schema.json'));
      const docsGen = require('./lib/docs/docs');
      docsGen(dir, pkgParam, schema);
    } else {
      console.log('Param for action gen-docs not passed. %DOCS_LINK%');
    }
    break;
  }
  case 'schematize': {
    const config = getConfig();
    if (config.schematics) {
      const schematicsGen = require('./lib/schematize/schematize');
      schematicsGen(config.schematics);
    } else {
      console.log('Schematics section not found in .ngx-kit.json. %DOCS_LINK%');
    }
    break;
  }
  default:
    console.error('Cli action not passed. %DOCS_LINK%');
}

function getConfig() {
  const configBase = require(path.resolve('.ngx-kit.json'));
  const configEnv = require(path.resolve('.ngx-kit.env.json'));
  return merge(configBase, configEnv);
}
