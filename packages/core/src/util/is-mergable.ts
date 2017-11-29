export function isMergeableObject(value: any): boolean {
  return isNonNullObject(value) && isNotSpecial(value);
}
export function isNonNullObject(value: any): boolean {
  return !!value && typeof value === 'object';
}
export function isNotSpecial(value: any): boolean {
  const stringValue = Object.prototype.toString.call(value);
  return stringValue !== '[object RegExp]'
      && stringValue !== '[object Date]'
}
