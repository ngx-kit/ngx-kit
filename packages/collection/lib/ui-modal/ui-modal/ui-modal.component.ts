import { animate, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component, HostBinding, Input, OnInit, } from '@angular/core';
import { KitFocusManagerService, KitModalRef } from '@ngx-kit/core';

@Component({
  selector: 'ui-modal',
  templateUrl: './ui-modal.component.html',
  styleUrls: ['./ui-modal.component.scss'],
  providers: [
    KitFocusManagerService,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('host', [
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'translate(-50%, -55%)',
        }),
        animate('250ms', style({
          opacity: 1,
          transform: 'translate(-50%, -50%)',
        })),
      ]),
    ]),
  ],
})
export class UiModalComponent implements OnInit {
  @Input() header: string;

  @HostBinding('@host') hostTrigger: void;

  constructor(
    private ref: KitModalRef<UiModalComponent>,
    private fm: KitFocusManagerService,
  ) {
  }

  ngOnInit() {
    this.fm.autoCapture = true;
    this.fm.init();
  }

  close() {
    this.ref.close();
  }
}
