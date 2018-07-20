import * as matter from 'front-matter';
import { readFileSync } from 'fs';
import { basename, resolve } from 'path';
import { DocGen } from '../meta';

export function readMdFile(relativeFilePath: string, filePath: string): DocGen.MdFile {
  const file = readFileSync(resolve(filePath), {encoding: 'utf8'});
  const parsed = matter(file);
  return {
    fileName: relativeFilePath,
    type: 'md',
    text: file,
    name: basename(relativeFilePath, '.md'),
    content: parsed.body,
    meta: parsed.attributes,
  };
}
