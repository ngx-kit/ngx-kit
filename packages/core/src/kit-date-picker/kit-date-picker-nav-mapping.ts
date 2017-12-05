import { Injectable } from '@angular/core';
import {
  keyArrowDown,
  keyArrowLeft,
  keyArrowRight,
  keyArrowUp,
  keyEnd,
  keyEnter,
  keyHome,
  keyPageDown,
  keyPageUp,
  keySpace,
} from '../kit-event-manager/meta';
import { KitKeymapAction, KitKeymapActions } from '../kit-keymap/meta';
import { KitDatePickerKeymap } from './meta';

/**
 * Mapping for keyboard navigation.
 */
@Injectable()
export class KitDatePickerNavMapping extends KitKeymapActions {
  keydown(): KitKeymapAction[] {
    return [
      {
        key: keyArrowUp,
        action: KitDatePickerKeymap.prevWeek,
      },
      {
        key: keyArrowRight,
        action: KitDatePickerKeymap.nextDay,
      },
      {
        key: keyArrowDown,
        action: KitDatePickerKeymap.nextWeek,
      },
      {
        key: keyArrowLeft,
        action: KitDatePickerKeymap.prevDay,
      },
      {
        key: keyHome,
        action: KitDatePickerKeymap.firstDayOfMonth,
      },
      {
        key: keyEnd,
        action: KitDatePickerKeymap.lastDayOfMonth,
      },
      {
        key: keyPageUp,
        action: KitDatePickerKeymap.prevMonth,
      },
      {
        key: keyPageDown,
        action: KitDatePickerKeymap.nextMonth,
      },
      {
        key: keyEnter,
        action: KitDatePickerKeymap.pick,
      },
      {
        key: keySpace,
        action: KitDatePickerKeymap.pick,
      },
      {
        key: keyPageUp,
        meta: {alt: true},
        action: KitDatePickerKeymap.prevYear,
      },
      {
        key: keyPageDown,
        meta: {alt: true},
        action: KitDatePickerKeymap.nextYear,
      },
    ];
  }
}
