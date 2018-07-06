import { animate, animateChild, query, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component, HostBinding, HostListener, Input, OnInit } from '@angular/core';
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
    trigger('modalHost', [
      transition(':enter, :leave', [
        query('@*', animateChild(), {optional: true}),
      ]),
    ]),
    trigger('fade', [
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'translateY(-20px)',
        }),
        animate('250ms ease-out', style({
          opacity: 1,
          transform: 'translateY(0)',
        })),
      ]),
      transition(':leave', [
        style({opacity: 1}),
        animate('250ms ease-in', style({
          opacity: 0,
          transform: 'translateY(-20px)',
        })),
      ]),
    ]),
  ],
})
export class UiModalComponent implements OnInit {
  @Input() header: string;

  @HostBinding('@modalHost') hostTrigger: void;

  constructor(
    private ref: KitModalRef<UiModalComponent>,
    private fm: KitFocusManagerService,
  ) {
  }

  ngOnInit() {
    this.fm.autoCapture = true;
    this.fm.init();
  }

  @HostListener('click', ['$event']) clickHandler(event: any) {
    if (event.target === event.currentTarget) {
      this.ref.close();
    }
  }

  close() {
    this.ref.close();
  }
}
