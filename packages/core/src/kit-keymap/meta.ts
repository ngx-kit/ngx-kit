export class KitKeymapActions {
  keydown(): KitKeymapAction[] {
    return [];
  }
}

export interface KitKeymapAction {
  key: number;
  meta?: {
    ctrl?: boolean;
    alt?: boolean;
    shift?: boolean;
  };
  action: any
}
