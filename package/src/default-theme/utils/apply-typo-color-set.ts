import { TypoColorsSet } from '../meta/params';

export function applyTypoColorSet(set: TypoColorsSet) {
  return {
    backgroundColor: set.background,
    color: set.text,
  };
}
