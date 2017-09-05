import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Inject,
  Input,
  OnChanges,
  Output,
} from '@angular/core';
import { StylerComponent } from '@ngx-kit/styler';
import { KitComponent, KitComponentStyle } from '../core/meta/component';
import { kitAlertStyle } from '../core/meta/tokens';

@Component({
  selector: 'kit-alert,[kitAlert]',
  template: `
    <button *ngIf="closable" (click)="closeAlert()" styler="close">
      <span *ngIf="!closeText; else closeElse">x</span>
      <ng-template #closeElse>{{ closeText }}</ng-template>
    </button>
    <ng-content></ng-content>
  `,
  viewProviders: [
    StylerComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KitAlertComponent implements KitComponent, OnChanges, AfterContentInit {
  @Input() closable: boolean;

  @Output('close') close = new EventEmitter<null>();

  @Input() closeText: string;

  @Input() isOpen = true;

  @Output() isOpenChange = new EventEmitter<boolean>();

  @Input() kitAlert: null;

  constructor(public readonly styler: StylerComponent,
              @Inject(kitAlertStyle) private style: KitComponentStyle) {
    this.styler.classPrefix = 'kit-alert';
    this.styler.register(this.style);
  }

  ngAfterContentInit() {
  }

  ngOnChanges() {
    this.styler.host.applyState({
      closed: !this.isOpen,
    });
  }

  closeAlert() {
    this.styler.host.applyState({closed: true});
    this.close.next(null);
    this.isOpenChange.next(false);
  }
}
