#!/usr/bin/env node
'use strict';

console.log('ngx-kit cli');

const path = require('path');
const fs = require('fs-extra');
const merge = require('deepmerge');

const args = process.argv;
const action = args[2];

switch (action) {
  case 'get':
    // format: "ngx-kit get PKG_NAME:MODULE_NAME DEST_DIR"
    const fromParam = args[3];
    const toParam = args[4];
    if (fromParam) {
      const fromChunks = fromParam.split(':');
      // @todo resolve non @ngx-kit scope
      const pkg = fromChunks.length > 1 ? fromChunks[0] : 'ui-base';
      const module = fromChunks.length > 1 ? fromChunks[1] : fromChunks[0];
      const moduleChunks = module.split('/');
      const dest = toParam
          ? path.resolve(toParam, moduleChunks[moduleChunks.length - 1])
          : path.resolve(moduleChunks[moduleChunks.length - 1]);
      // @todo check if dest exist
      fs.copySync(path.resolve('./node_modules/@ngx-kit', pkg, 'lib', module), dest);
      console.log(`Module ${fromParam} copied to ${dest}`);
    } else {
      console.error('Param for action get not passed. %DOCS_LINK%');
    }
    break;
  case 'copy':
    // format: "ngx-kit copy"
    // uses .ngx-kit.json
    const config = getConfig();
    // copy release files
    config.copy.release.from.forEach(source => {
      config.copy.release.to.forEach(dest => {
        fs.copySync(path.resolve(source), path.resolve(dest));
        console.log(`${source} copied to ${path.resolve(dest)}`);
      });
    });
    // copy dest files (keeps dir structure)
    config.copy.src.from.forEach(source => {
      config.copy.src.to.forEach(dest => {
        fs.copySync(path.resolve(source), path.resolve(dest, source));
        console.log(`${source} copied to ${path.resolve(dest, source)}`);
      });
    });
    break;
  case 'gen-docs':
    // format: "ngx-kit gen-docs PKG_NAME"
    // uses .docs-schema.json
    const pkgParam = args[3];
    if (pkgParam) {
      const dir = path.resolve('./node_modules', pkgParam);
      const schema = require(path.resolve(dir, '.docs-schema.json'));
      const docsGen = require('./lib/docs/docs');
      docsGen(dir, pkgParam, schema);
    } else {
      console.log('Param for action gen-docs not passed. %DOCS_LINK%');
    }
    break;
  default:
    console.error('Cli action not passed. %DOCS_LINK%');
}

function getConfig() {
  const configBase = require(path.resolve('.ngx-kit.json'));
  const configEnv = require(path.resolve('.ngx-kit.env.json'));
  return merge(configBase, configEnv);
}
