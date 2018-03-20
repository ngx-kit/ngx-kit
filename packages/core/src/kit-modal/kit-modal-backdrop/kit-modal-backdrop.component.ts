import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'kit-modal-backdrop',
  template: '',
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
  @Output() close = new EventEmitter<void>();

  @HostBinding('style.display') styleDisplay = 'none';

  private _display = false;

  @Input() set display(display: boolean) {
    if (display !== this._display) {
      this._display = display;
      this.styleDisplay = this._display ? 'block' : 'none';
    }
  }

  @HostListener('click') clickHandler() {
    this.close.emit();
  }
}
