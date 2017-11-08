export function isFunction(x: any): x is Function {
  return x !== null && typeof x === 'function';
}
