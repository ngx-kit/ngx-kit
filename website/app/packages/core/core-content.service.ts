import { Injectable } from '@angular/core';
import { DocGen } from '@ngx-kit/docgen';
import { ContentServiceBase, coreContent } from '../../content/content';

@Injectable()
export class CoreContentService extends ContentServiceBase {
  readonly doc = coreContent;

  getModuleFiles(name: string) {
    return this.doc.files.filter(file => {
      return file.fileName.indexOf(`src/${name}/`) === 0;
    });
  }

  getDocFiles() {
    return this.doc.files
      .filter(file => file.type === 'md')
      .filter(file => {
        return file.fileName.indexOf(`docs/`) === 0 || file.fileName.indexOf(`/`) === -1;
      }) as DocGen.MdFile[];
  }
}
