export function isArray(object: any): object is any[] {
  const checker = Array.isArray || (<T>(x: any): x is T[] => x && typeof x.length === 'number');
  return checker(object);
}
