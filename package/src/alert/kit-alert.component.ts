import { Component, EventEmitter, Inject, Input, OnChanges, Output } from '@angular/core';
import { StylerComponent } from '@ngx-kit/styler';
import { KitComponentStyle } from '../core/meta/component';
import { kitComponentAlert } from '../core/meta/tokens';

@Component({
  selector: 'kit-alert,[kitAlert]',
  template: `
    <button *ngIf="closable" (click)="close()" styler="close">
      <span *ngIf="!closeText; else closeElse">x</span>
      <ng-template #closeElse>{{ closeText }}</ng-template>
    </button>
    <ng-content></ng-content>
  `,
  viewProviders: [
    StylerComponent,
  ],
})
export class KitAlertComponent implements OnChanges {
  @Input() closable: boolean;

  @Output('close') closeEmitter = new EventEmitter<null>();

  @Input() closeText: string;

  @Input() color: string;

  constructor(private styler: StylerComponent,
              @Inject(kitComponentAlert) private style: KitComponentStyle) {
    this.styler.register(this.style);
  }

  ngOnChanges() {
    this.styler.host.state = {
      color: this.color,
    };
  }

  close() {
    this.styler.host.applyState({closed: true});
    this.closeEmitter.next(null);
  }
}
