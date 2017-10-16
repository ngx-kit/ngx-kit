import { normalize } from '@angular-devkit/core';
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
import 'rxjs/add/operator/merge';
import * as stringUtils from '../strings';
import { Schema as ComponentOptions } from './schema';

export default function (options: ComponentOptions): Rule {
  const sourceDir = options.sourceDir;
  if (!sourceDir) {
    throw new SchematicsException(`sourceDir option is required.`);
  }
  return (host: Tree, context: SchematicContext) => {
    options.path = options.path ? normalize(options.path) : options.path;
    const templateSource = apply(url('./files'), [
      template({
        ...stringUtils,
        'if-flat': (s: string) => s,
        selector: stringUtils.dasherize(options.name),
        ...options as object,
      }),
      move(sourceDir),
    ]);
    return chain([
      branchAndMerge(chain([
        mergeWith(templateSource),
      ])),
    ])(host, context);
  };
}
