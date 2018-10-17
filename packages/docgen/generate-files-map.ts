import { DocGen } from './meta';

export function generateFilesMap(files: DocGen.File[]): any {
  const map = {};
  files.forEach(file => {
    const chunks = file.fileName.split('/');
    let current = map;
    for (let i = 0; i < chunks.length; i++) {
      const chunk = chunks[i];
      if (i === chunks.length - 1) {
        // Is last
        current[chunk] = file.fileName;
      } else {
        if (!(chunk in current)) {
          // Create child
          current[chunk] = {};
        }
        current = current[chunk];
      }
    }
  });
  return map;
}
