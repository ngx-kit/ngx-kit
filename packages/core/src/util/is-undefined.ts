export function isUndefined(x: any): x is undefined {
  return x === undefined || x === null;
}

export function isNotUndefined<T>(x: T | undefined): x is T {
  return x !== undefined && x !== null;
}
