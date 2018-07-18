import { inspect, isObject } from 'util';

export function deepLog(raw: any, omitParent = true, depth = 5) {
  const output = omitParent ? omit(raw, 'parent', depth) : raw;
  console.log(inspect(raw, {showHidden: false, depth: null}));
}

function omit(data: any, omitParam: string, level: number) {
  if (isObject(data)) {
    if (data[omitParam]) {
      delete data[omitParam];
    }
    for (const key in data) {
      if (data.hasOwnProperty(key) && level > 0) {
        omit(data[key], omitParam, level - 1);
      }
    }
  }
}
