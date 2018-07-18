import { isArray } from 'util';
import { DocGen } from '../meta';

export function readJsDoc(nodes: any[]): DocGen.JsDoc[] {
  return nodes
    ? nodes.map(node => {
      return {
        comment: node.comment,
        tags: node.tags
          ? node.tags
            .filter((t: any) => t.tagName)
            .map((t: any) => ({
              name: t.tagName.text,
              value: t.comment,
            }))
          : [],
      };
    })
    : [];
}

export function checkIsInternal(docs: DocGen.JsDoc[]) {
  return checkTag(docs, 'internal');
}

export function checkIsDemo(docs: DocGen.JsDoc[]) {
  return checkTag(docs, 'demo');
}

function checkTag(docs: DocGen.JsDoc[], name: string) {
  let is = false;
  if (docs && isArray(docs)) {
    docs.forEach(doc => {
      if (doc.tags && isArray(doc.tags)) {
        doc.tags.forEach(tag => {
          if (tag.name === name) {
            is = true;
          }
        });
      }
    });
  }
  return is;
}
