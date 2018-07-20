import { Directive, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { KitAnchor } from '../kit-anchor/meta';
import { isArray } from '../util/is-array';
import { KitOutsideClickService } from './kit-outside-click.service';

/**
 * Emitted when user clicks not on current element.
 *
 *
 * ### Usage
 * ```html
 * <div (kitOutsideClick)="outside()"></div>
 * ```
 *
 * `outside()` method will be called on any click except at this `div` and his children.
 *
 * #### Skip
 *
 * You can define additional elements to skip:
 *
 * ```html
 * <button #skip1>...</button>
 * <button #skip2>...</button>
 * <div (kitOutsideClick)="outside()"
 *      [skip]="[skip1, skip2]">
 * </div>
 * ```
 *
 * Use `kitAnchor` to skip components:
 *
 * ```html
 * <app-some-component kitAnchor #skip1="anchor"></app-some-component>
 * <div (kitOutsideClick)="outside()"
 *      [skip]="[skip1]">
 * </div>
 * ```
 *
 *
 * ### Example
 *
 * * collection:date-picker -
 * [sources](https://github.com/ngx-kit/ngx-kit/tree/master/packages/collection/lib/ui-date-picker),
 * [demo](http://ngx-kit.com/collection/module/ui-date-picker)
 */
@Directive({
  selector: '[kitOutsideClick]',
  providers: [
    KitOutsideClickService,
  ],
})
export class KitOutsideClickDirective implements OnInit, OnChanges {
  // @todo also accept HtmlElement
  // @todo do not capture anchor?
  @Input() anchor: KitAnchor;

  /**
   * Define elements that are not considered as outside.
   */
  @Input() skip: KitAnchor | KitAnchor[];

  @Output() kitOutsideClick = new EventEmitter<any>();

  constructor(
    private service: KitOutsideClickService,
  ) {
  }

  ngOnInit() {
    this.service.outsideClick.subscribe(e => {
      this.kitOutsideClick.emit(e);
    });
  }

  ngOnChanges() {
    this.service.skip = [
      ...this.anchor ? [this.anchor.nativeEl] : [],
      ...this.skip
        ? isArray(this.skip) ? this.skip.map(s => s.nativeEl || s) : [this.skip.nativeEl || this.skip]
        : [],
    ];
  }
}
