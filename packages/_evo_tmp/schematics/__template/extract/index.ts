import {
  apply,
  branchAndMerge,
  chain,
  mergeWith,
  move,
  Rule,
  SchematicContext,
  SchematicsException,
  template,
  Tree,
  url,
} from '@angular-devkit/schematics';
import { getWorkspace } from '../util/config';
import { parseName } from '../util/parse-name';
import * as stringUtils from '../util/strings';
import { Schema as ModuleOptions } from './schema';

export default function (options: ModuleOptions): Rule {
  return (host: Tree, context: SchematicContext) => {
    const workspace = getWorkspace(host);
    if (!options.project) {
      throw new SchematicsException('Option (project) is required.');
    }
    const project = workspace.projects[options.project];
    if (options.path === undefined) {
      const projectDirName = project.projectType === 'application' ? 'app' : 'lib';
      options.path = `/${project.root}/src/${projectDirName}`;
    }

    const parsedPath = parseName(options.path, options.name);
    options.name = parsedPath.name;
    options.path = parsedPath.path;

//    options.path = options.path ? normalize(options.path) : options.path;

    const templateSource = apply(url('./files'), [
      template({
        ...stringUtils,
        'if-flat': (s: string) => s,
        ...options as object,
      }),
      move(parsedPath.path),
    ]);
    return chain([
      branchAndMerge(chain([
        mergeWith(templateSource),
      ])),
    ])(host, context);
  };
}
