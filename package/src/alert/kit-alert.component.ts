import {
  AfterContentInit, ChangeDetectionStrategy,
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
import { kitAlertStyle } from '../core/meta/tokens';
import { KitAlertTitleComponent } from './kit-alert-title.component';

@Component({
  selector: 'kit-alert,[kitAlert]',
  template: `
    <button *ngIf="closable" (click)="closeAlert()" [styler]="'close'" [stylerState]="{color: color}">
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
export class KitAlertComponent implements OnChanges, AfterContentInit {
  @Input() closable: boolean;

  @Output('close') close = new EventEmitter<null>();

  @Input() closeText: string;

  @Input() color: string;

  @Input() isOpen = true;

  @Output() isOpenChange = new EventEmitter<boolean>();

  @ContentChildren(forwardRef(() => KitAlertTitleComponent)) titles: QueryList<KitAlertTitleComponent>;

  constructor(private styler: StylerComponent,
              @Inject(kitAlertStyle) private style: KitComponentStyle) {
    this.styler.classPrefix = 'kit-alert';
    this.styler.register(this.style);
  }

  ngAfterContentInit() {
    this.proxyState();
  }

  ngOnChanges() {
    this.styler.host.applyState({
      color: this.color,
      closed: !this.isOpen,
    });
    this.proxyState();
  }

  closeAlert() {
    this.styler.host.applyState({closed: true});
    this.close.next(null);
    this.isOpenChange.next(false);
  }

  private proxyState() {
    if (this.titles) {
      this.titles.forEach(title => {
        title.applyHostState(this.color);
      });
    }
  }
}
