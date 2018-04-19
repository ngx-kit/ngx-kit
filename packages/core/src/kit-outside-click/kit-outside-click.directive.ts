import { Directive, ElementRef, EventEmitter, Input, NgZone, OnDestroy, OnInit, Output } from '@angular/core';
import { KitAnchorDirective } from '../kit-anchor/kit-anchor.directive';
import { KitEventManagerService } from '../kit-event-manager/kit-event-manager.service';

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
})
export class KitOutsideClickDirective implements OnInit, OnDestroy {
  // @todo also accept HtmlElement
  @Input() anchor: KitAnchorDirective;

  @Output() kitOutsideClick = new EventEmitter<MouseEvent>();

  private unsubFn: Function;

  constructor(
    private el: ElementRef,
    private em: KitEventManagerService,
    private zone: NgZone,
  ) {
  }

  ngOnInit() {
    this.zone.runOutsideAngular(() => {
      this.unsubFn = this.em.listenGlobal(
        'click',
        (event: MouseEvent) => {
          const path = event['path'] || this.em.getEventPath(event);
          const anchorEl = this.anchor ? this.anchor.nativeEl : null;
          if (path.indexOf(this.el.nativeElement) === -1 && (!anchorEl || path.indexOf(anchorEl) === -1)) {
            this.zone.run(() => {
              this.kitOutsideClick.emit(event);
            });
          }
        },
        true);
    });
  }

  ngOnDestroy() {
    return this.unsubFn && this.unsubFn();
  }
}
