export function clone(obj: any) {
  if (obj === null || typeof(obj) !== 'object' || 'isActiveClone' in obj) {
    return obj;
  }
  const temp = obj instanceof Date
      ? new Date(obj)
      : obj.constructor();
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      obj['isActiveClone'] = null;
      temp[key] = clone(obj[key]);
      delete obj['isActiveClone'];
    }
  }
  return temp;
}
