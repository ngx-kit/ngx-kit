import { Component, HostListener } from '@angular/core';
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
      z-index: 9999;
    }
  `],
})
export class KitModalBackdropComponent {
  private _click = new Subject<void>();

  get click(): Observable<void> {
    return this._click.asObservable();
  }

  @HostListener('click') clickHandler() {
    this._click.next();
  }
}
