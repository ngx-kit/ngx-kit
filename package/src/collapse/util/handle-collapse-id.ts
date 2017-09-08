import { isArray } from '../../util/is-array';
import { KitCollapseId } from '../meta';

export function handleCollapseId(currentRaw: KitCollapseId | KitCollapseId[], id: KitCollapseId, multiple: boolean) {
  if (multiple) {
    // normalize to array
    const current = currentRaw
        ? isArray(currentRaw) ? currentRaw : [currentRaw]
        : [];
    // toggle multiple
    const index = current.indexOf(id);
    if (index === -1) {
      return [...current, id];
    } else {
      return current.filter(i => i !== id);
    }
  } else {
    // toggle single
    return currentRaw === id ? null : id;
  }
}
