import { Directive, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { KitAnchor } from '../kit-anchor/meta';
import { isArray } from '../util/is-array';
import { KitOutsideClickService } from './kit-outside-click.service';

/**
 * Emitted when user clicks not on current element.
 *
 * Handy for popup closing.
 *
 * ```html
 * <div (kitOutsideClick)="close()">Popup content</div>
 * ```
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
        ? isArray(this.skip) ? this.skip.map(s => s.nativeEl) : [this.skip.nativeEl]
        : [],
    ];
  }
}
