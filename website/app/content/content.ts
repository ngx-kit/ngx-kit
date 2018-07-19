import { DocGen } from '@ngx-kit/docgen';
import * as rawCoreContent from './core.json';
import * as rawCollectionContent from './collection.json';

export abstract class ContentServiceBase {
  readonly doc: DocGen.Doc;

  abstract getModuleFiles(name: string): DocGen.File[];

  abstract getDocFiles(): DocGen.MdFile[];
}

export const coreContent: DocGen.Doc = rawCoreContent as any;
export const collectionContent: DocGen.Doc = rawCollectionContent as any;
