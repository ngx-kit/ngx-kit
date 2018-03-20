import { ChangeDetectionStrategy, Component, HostBinding, HostListener, Input, } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'kit-modal-backdrop',
  template: '{{ styleDisplay }}',
  styles: [`
    :host {
      background: rgba(0, 0, 0, .4);
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KitModalBackdropComponent {
  @HostBinding('style.display') styleDisplay = 'none';

  private _display = false;

  private _click = new Subject<void>();

  @Input() set display(display: boolean) {
    if (display !== this._display) {
      this._display = display;
      this.styleDisplay = this._display ? 'block' : 'none';
    }
  }

  get click(): Observable<void> {
    return this._click.asObservable();
  }

  @HostListener('click') clickHandler() {
    this._click.next();
  }
}
