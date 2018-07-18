import { readFileSync } from 'fs';
import { extname, resolve } from 'path';
import { DocGen } from '../meta';

export function readTextFile(relativeFilePath: string, filePath: string): DocGen.File {
  return {
    fileName: relativeFilePath,
    type: extname(relativeFilePath).replace('.', ''),
    text: readFileSync(resolve(filePath), {encoding: 'utf8'}),
  };
}
