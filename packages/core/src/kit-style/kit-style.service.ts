import { ElementRef, Injectable, KeyValueChanges, KeyValueDiffer, KeyValueDiffers, Renderer2 } from '@angular/core';
import { KitStyles } from './meta';

/**
 * Service works exactly like `ngStyle`, but for providing on component or directive.
 *
 * ```typescript
 * providers: [KitStyleService],
 * ...
 * constructor(private styleService: KitStyleService) {
 * }
 * ...
 * this.styleService.style = {
 *  background: 'red',
 *  color: '#fff',
 * };
 * ```
 */
@Injectable()
export class KitStyleService {
  private _differ: KeyValueDiffer<string, string | number>;

  private _style: {[key: string]: string};

  constructor(
    private el: ElementRef,
    private differs: KeyValueDiffers,
    private renderer: Renderer2,
  ) {
  }

  set style(v: KitStyles) {
    this._style = v;
    if (!this._differ && v) {
      this._differ = this.differs.find(v).create();
    }
    const changes = this._differ.diff(this._style);
    if (changes) {
      this._applyChanges(changes);
    }
  }

  private _applyChanges(changes: KeyValueChanges<string, string | number>): void {
    changes.forEachRemovedItem((record) => this._setStyle(record.key, null));
    changes.forEachAddedItem((record) => this._setStyle(record.key, record.currentValue));
    changes.forEachChangedItem((record) => this._setStyle(record.key, record.currentValue));
  }

  private _setStyle(nameAndUnit: string, value: string | number | null | undefined): void {
    const [name, unit] = nameAndUnit.split('.');
    value = value != null && unit ? `${value}${unit}` : value;
    this.renderer.setStyle(this.el.nativeElement, name, value as string);
  }
}
