import { Directive, ElementRef, EventEmitter, NgZone, OnDestroy, OnInit, Output, } from '@angular/core';
import { KitEventManager } from '../kit-event-manager';

@Directive({
  selector: '[kitOutsideClick]',
})
export class KitOutsideClickDirective implements OnInit, OnDestroy {
  @Output() kitOutsideClick = new EventEmitter<MouseEvent>();

  private unsubFn: Function;

  constructor(private el: ElementRef,
              private em: KitEventManager,
              private zone: NgZone) {
  }

  ngOnInit() {
    this.zone.runOutsideAngular(() => {
      this.unsubFn = this.em.listenGlobal(
          'click',
          (event: MouseEvent) => {
            const path = event['path'] || this.em.getEventPath(event);
            if (path.indexOf(this.el.nativeElement) === -1 && path.indexOf(this.el.nativeElement) === -1) {
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
