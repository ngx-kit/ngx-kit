import { isMergeableObject } from './is-mergable';
// @todo add types
function emptyTarget(val: any) {
  return Array.isArray(val) ? [] : {}
}
function cloneIfNecessary(value: any, optionsArgument?: any): any {
  const clone = optionsArgument && optionsArgument.clone === true;
  return (clone && isMergeableObject(value)) ? mergeDeep(emptyTarget(value), value, optionsArgument) : value
}
function defaultArrayMerge(target: any, source: any, optionsArgument: any) {
  const destination = target.slice();
  source.forEach(function (e: any, i: any) {
    if (typeof destination[i] === 'undefined') {
      destination[i] = cloneIfNecessary(e, optionsArgument)
    } else if (isMergeableObject(e)) {
      destination[i] = mergeDeep(target[i], e, optionsArgument)
    } else if (target.indexOf(e) === -1) {
      destination.push(cloneIfNecessary(e, optionsArgument))
    }
  });
  return destination
}
function mergeObject(target: any, source: any, optionsArgument?: any) {
  const destination = {};
  if (isMergeableObject(target)) {
    Object.keys(target).forEach(function (key) {
      destination[key] = cloneIfNecessary(target[key], optionsArgument)
    })
  }
  Object.keys(source).forEach(function (key) {
    if (!isMergeableObject(source[key]) || !target[key]) {
      destination[key] = cloneIfNecessary(source[key], optionsArgument)
    } else {
      destination[key] = mergeDeep(target[key], source[key], optionsArgument)
    }
  });
  return destination
}
export function mergeDeep(target: any, source: any, optionsArgument?: any) {
  const sourceIsArray = Array.isArray(source);
  const targetIsArray = Array.isArray(target);
  const options = optionsArgument || {arrayMerge: defaultArrayMerge};
  const sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;
  if (!sourceAndTargetTypesMatch) {
    return cloneIfNecessary(source, optionsArgument)
  } else if (sourceIsArray) {
    const arrayMerge = options.arrayMerge || defaultArrayMerge;
    return arrayMerge(target, source, optionsArgument)
  } else {
    return mergeObject(target, source, optionsArgument)
  }
}
export function mergeDeepAll(array: any[], optionsArgument?: any) {
  if (!Array.isArray(array) || array.length < 2) {
    throw new Error('first argument should be an array with at least two elements')
  }
  // we are sure there are at least 2 values, so it is safe to have no initial value
  return array.reduce(function (prev, next) {
    return mergeDeep(prev, next, optionsArgument)
  })
}
