import { animate, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'kit-modal-backdrop',
  template: `
    <div *ngIf="display"
         class="backdrop"
         [@fade]="true"
         (click)="close.emit()">
    </div>
  `,
  styles: [`
    .backdrop {
      background: rgba(0, 0, 0, .4);
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('fade', [
      transition(':enter', [
        style({
          opacity: 0,
        }),
        animate('150ms ease-out', style({
          opacity: 1,
        })),
      ]),
      transition(':leave', [
        style({opacity: 1}),
        animate('150ms ease-in', style({
          opacity: 0,
        })),
      ]),
    ]),
  ],
})
export class KitModalBackdropComponent {
  @Output() close = new EventEmitter<void>();

  private _display = false;

  constructor(private cdr: ChangeDetectorRef) {
  }

  get display() {
    return this._display;
  }

  @Input() set display(display: boolean) {
    if (display !== this._display) {
      this._display = display;
      this.cdr.detectChanges();
    }
  }
}
