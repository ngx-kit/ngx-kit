import { chain, noop, Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks';
import { addPackageToPackageJson } from '../util/package';
import { Schema } from './schema';

const pkg = require('../../package.json');

export default function (options: Schema): Rule {
  return chain([
    options && options.skipPackageJson ? noop() : updatePackageJson(),
    options && !options.skipPackageJson ? installNodeDeps() : noop(),
  ]);
}

function updatePackageJson(): (host: Tree) => Tree {
  return (host: Tree) => {
    addPackageToPackageJson(host, 'dependencies', '@ngx-kit/core', pkg.version);
    addPackageToPackageJson(host, 'devDependencies', '@ngx-kit/collection', pkg.version);
    return host;
  };
}

function installNodeDeps(): (host: Tree, context: SchematicContext) => void {
  return (host: Tree, context: SchematicContext) => {
    context.addTask(new NodePackageInstallTask());
  };
}
