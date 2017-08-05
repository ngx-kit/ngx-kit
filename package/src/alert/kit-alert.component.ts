import {
  AfterContentInit,
  Component,
  ContentChildren,
  EventEmitter,
  forwardRef,
  Inject,
  Input,
  OnChanges,
  Output,
  QueryList,
} from '@angular/core';
import { StylerComponent } from '@ngx-kit/styler';
import { KitComponentStyle } from '../core/meta/component';
import { kitComponentAlert } from '../core/meta/tokens';
import { KitAlertTitleComponent } from './kit-alert-title.component';

@Component({
  selector: 'kit-alert,[kitAlert]',
  template: `
    <button *ngIf="closable" (click)="closeAlert()" [styler]="['close', {color: color}]">
      <span *ngIf="!closeText; else closeElse">x</span>
      <ng-template #closeElse>{{ closeText }}</ng-template>
    </button>
    <ng-content></ng-content>
  `,
  viewProviders: [
    StylerComponent,
  ],
})
export class KitAlertComponent implements OnChanges, AfterContentInit {
  @Input() closable: boolean;

  @Output('close') close = new EventEmitter<null>();

  @Input() closeText: string;

  @Input() color: string;

  @ContentChildren(forwardRef(() => KitAlertTitleComponent)) titles: QueryList<KitAlertTitleComponent>;

  constructor(private styler: StylerComponent,
              @Inject(kitComponentAlert) private style: KitComponentStyle) {
    this.styler.register(this.style);
  }

  ngAfterContentInit() {
    this.proxyState();
  }

  ngOnChanges() {
    this.styler.host.applyState({
      color: this.color,
    });
    this.proxyState();
  }

  closeAlert() {
    this.styler.host.applyState({closed: true});
    this.close.next(null);
  }

  private proxyState() {
    if (this.titles) {
      this.titles.forEach(title => {
        title.applyHostState(this.color);
      });
    }
  }
}
