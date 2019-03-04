import { animate, animateChild, query, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component, HostBinding, Input, OnChanges } from '@angular/core';
import { KitModalRef } from '@ngx-kit/core';
import { UiDialogOptions, UiDialogType } from '../meta';

@Component({
  selector: 'ui-dialog',
  templateUrl: './ui-dialog.component.html',
  styleUrls: ['./ui-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('host', [
      transition(':enter, :leave', [
        query('@*', animateChild()),
      ]),
    ]),
    trigger('fade', [
      transition(':enter', [
        style({
          opacity: 0.5,
          transform: 'translateY(25px)',
        }),
        animate('150ms ease-out', style({
          opacity: 1,
          transform: 'translateY(0)',
        })),
      ]),
      transition(':leave', [
        style({opacity: 1}),
        animate('150ms ease-in', style({
          opacity: 0.5,
          transform: 'translateY(-25px)',
        })),
      ]),
    ]),
  ],
})
export class UiDialogComponent implements OnChanges {
  @Input() options: UiDialogOptions;

  @HostBinding('@host') hostTrigger = true;

  result: any;

  constructor(private ref: KitModalRef<UiDialogComponent>) {
  }

  ngOnChanges() {
    if (this.options.type === UiDialogType.Prompt) {
      this.result = {};
    }
  }

  submitHandler() {
    if (this.options.type !== UiDialogType.Prompt) {
      this.result = true;
    }
    this.ref.close();
  }

  cancelHandler() {
    this.result = false;
    this.ref.close();
  }
}
