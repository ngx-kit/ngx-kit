import { ElementRef, Injectable, NgZone, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { KitEventManagerService } from '../kit-event-manager/kit-event-manager.service';

@Injectable()
export class KitOutsideClickService implements OnDestroy {
  skip: HTMLElement[];

  private _outsideClick = new Subject<any>();

  private unsubFn: Function;

  constructor(
    private zone: NgZone,
    private em: KitEventManagerService,
    private elementRef: ElementRef,
  ) {
    this.zone.runOutsideAngular(() => {
      this.unsubFn = this.em.listenGlobal(
        'click',
        (event: MouseEvent) => {
          const path = event['path'] || this.em.getEventPath(event);
          // Check event path
          const skip = [this.elementRef.nativeElement, ...this.skip];
          if (skip.every(e => path.indexOf(e) === -1)) {
            this.zone.run(() => {
              this._outsideClick.next(event);
            });
          }
        },
        true);
    });
  }

  get outsideClick(): Observable<any> {
    return this._outsideClick.asObservable();
  }

  ngOnDestroy() {
    if (this.unsubFn) {
      this.unsubFn();
    }
  }
}
