import { Component, HostBinding, HostListener, NgZone, } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'kit-modal-backdrop',
  template: '',
  styles: [`
    :host {
      background: rgba(0, 0, 0, .4);
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    }
  `],
//  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KitModalBackdropComponent {
  display = false;

  @HostBinding('style.display') styleDisplay = 'none';

  private _prevDisplay = false;

  private _click = new Subject<void>();

  constructor(
    private zone: NgZone,
  ) {
    this.zone.onStable.subscribe(() => {
      console.log('on stable sub', this.display);
      if (this.display !== this._prevDisplay) {
        this.zone.runTask(() => {
          this._prevDisplay = this.display;
          this.styleDisplay = this.display ? 'block' : 'none';
        });
      }
    });
  }

  get click(): Observable<void> {
    return this._click.asObservable();
  }

  @HostListener('click') clickHandler() {
    this._click.next();
  }
}
