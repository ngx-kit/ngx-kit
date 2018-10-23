import { DocGen } from '@ngx-kit/docgen';
import * as rawCollectionContent from './collection.json';
import * as rawCoreContent from './core.json';

export abstract class ContentServiceBase {
  readonly doc: DocGen.Doc;

  readonly section: string;

  abstract getModuleFiles(name: string): DocGen.File[];

  abstract getDocFiles(): DocGen.MdFile[];
}

export const coreContent: DocGen.Doc = rawCoreContent.default as any;
export const collectionContent: DocGen.Doc = rawCollectionContent.default as any;
