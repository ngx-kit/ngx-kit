#!/usr/bin/env node
'use strict';

console.log('ngx-kit cli');

const path = require('path');
const fs = require('fs-extra');
const merge = require('deepmerge');

const args = process.argv;
const action = args[2];

const configBase = require(path.resolve('.ngx-kit.json'));
const configEnv = require(path.resolve('.ngx-kit.env.json'));
const config = merge(configBase, configEnv);

switch (action) {
    // format: "ngx-kit get pkg:module dest"
  case 'get':
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
      console.error('Param for action get in not passed. %DOCS_LINK%');
    }
    break;
  case 'copy':
    config.copy.source.forEach(source => {
      config.copy.dest.forEach(dest => {
        fs.copySync(path.resolve(source), path.resolve(dest));
        console.log(`${source} copied to ${dest}`);
      });
    });
    break;
  default:
    console.error('Cli action is not passed. %DOCS_LINK%');
}
