import { Injectable } from '@angular/core';
import { KitInputMiddleware } from '../meta';

/**
 * Currently not working
 * @todo implement
 */
@Injectable()
export class KitMaskMiddleware implements KitInputMiddleware {
  enabled = false;

  mask: string;

  placeholder = '_';

  private value = '';

  getCaret(el: HTMLInputElement): {begin: number; end: number} {
    if (el.setSelectionRange) {
      return {
        begin: el.selectionStart,
        end: el.selectionEnd,
      };
    } else if (document['selection'] && document['selection'].createRange) {
      const range = document['selection'].createRange();
      const begin = 0 - range.duplicate().moveStart('character', -100000);
      return {
        begin,
        end: begin + range.text.length,
      };
    } else {
      return {begin: 0, end: 0};
    }
  }

  setCaret(el: HTMLInputElement, begin: number, end: number) {
    if (el.setSelectionRange) {
      el.setSelectionRange(begin, end);
    } else if (el['createTextRange']) {
      const range = el['createTextRange']();
      range.collapse(true);
      range.moveEnd('character', end);
      range.moveStart('character', begin);
      range.select();
    }
  }

  transform(value: any, el: HTMLInputElement): string {
    // diff
    if (this.value !== value) {
      const add = this.value.length < value;
      // ...
    }
    // masking
    const maskChars = this.mask.split('');
    const viewValue = maskChars.map((c: string, i: number) => {
      if (c === '*') {
        return value && value[i]
            ? value[i]
            : this.placeholder;
      } else {
        return c;
      }
    }).join('');
    const caret = this.getCaret(el).begin;
    this.value = viewValue;
    el.value = viewValue;
    this.setCaret(el, caret, caret);
    return viewValue;
  }
}
