import { Injectable } from '@angular/core';
import { DocGen } from '@ngx-kit/docgen';
import { collectionContent, ContentServiceBase } from '../../content/content';

@Injectable()
export class CollectionContentService extends ContentServiceBase {
  readonly doc = collectionContent;

  readonly section = 'collection';

  getModuleFiles(name: string) {
    return this.doc.files.filter(file => {
      return file.fileName.indexOf(`lib/${name}/`) === 0;
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
