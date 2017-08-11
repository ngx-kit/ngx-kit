import { ColorsSet } from '../meta/params';

export function applyColorSet(set: ColorsSet, borderWidth = 1, borderStyle = 'solid') {
  return {
    backgroundColor: set.background,
    border: [borderWidth, borderStyle, set.border],
    color: set.text,
  };
}
