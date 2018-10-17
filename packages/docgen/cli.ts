import { outputFile } from 'fs-extra';
import * as glob from 'glob';
import { relative, resolve } from 'path';
import * as yargsParser from 'yargs-parser';
import { generateFilesMap } from './generate-files-map';
import { readMdFile } from './md-reader/read-md-file';
import { DocGen, GenArgs } from './meta';
import { readTextFile } from './text-reader/read-text-file';
import { readTsFile } from './ts-reader/read-ts-file';

// Read cli params
const options = {
  alias: {
    project: ['p'],
    output: ['o'],
  },
  string: [
    'project', // Path to lib sources
    'output', // Path to generated file
  ],
};
const args = yargsParser<GenArgs>(process.argv.slice(2), options);
const projectRoot = resolve(args.project);

const doc: DocGen.Doc = {
  files: [],
  filesMap: null,
};

// Read ts files
const tsFiles = glob.sync(projectRoot + '/**/*.ts', {ignore: ['**/*.d.ts', '**/*.spec.ts']});
tsFiles.forEach(fullPath => {
  const relativePath = relative(projectRoot, fullPath).replace(/\\/g, '/');
//    console.log({relativePath});
//  if (relativePath === 'src/kit-overlay/meta.ts') {
//  if (relativePath === 'src/kit-date-picker/kit-date-picker.service.ts') {
  if (relativePath) {
    console.log(`DocGen: parse ${relativePath}`);
    const parsed = readTsFile(relativePath, fullPath);
    doc.files.push(parsed);
  }
});

// Read md files
const mdFiles = glob.sync(projectRoot + '/**/*.md');
mdFiles.forEach(fullPath => {
  const relativePath = relative(projectRoot, fullPath).replace(/\\/g, '/');
  if (relativePath) {
    console.log(`DocGen: parse ${relativePath}`);
    const parsed = readMdFile(relativePath, fullPath);
    doc.files.push(parsed);
  }
});

// Read text files
const textFiles = glob.sync(projectRoot + '/**/*.@(html|css|scss|less|styl)');
textFiles.forEach(fullPath => {
  const relativePath = relative(projectRoot, fullPath).replace(/\\/g, '/');
  if (relativePath) {
    console.log(`DocGen: parse ${relativePath}`);
    const parsed = readTextFile(relativePath, fullPath);
    doc.files.push(parsed);
  }
});

// Generate files map
doc.filesMap = generateFilesMap(doc.files);

// Save json
outputFile(resolve(args.output), JSON.stringify(doc), function (err) {
  if (err) {
    return console.log(err);
  }
});

// deepLog(doc);

console.log('DocGen: Completed!');
