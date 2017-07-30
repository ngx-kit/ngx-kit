import { Component, Inject, Input } from '@angular/core';
import { StylerComponent } from '@ngx-kit/styler';
import { KitComponentStyle } from '../core/meta/component';
import { kitComponentSpinner } from '../core/meta/tokens';

@Component({
  selector: 'kit-spinner,[kitSpinner]',
  template: `
    <div [styler]="['spinner', {size: size, color: color, duration: duration, type: type}]"></div>`,
  viewProviders: [
    StylerComponent,
  ],
})
export class KitSpinnerComponent {
  @Input() color: string;

  @Input() duration: string;

  @Input() kitSpinner: any;

  @Input() size: number;

  @Input() type: string;

  constructor(private styler: StylerComponent,
              @Inject(kitComponentSpinner) private style: KitComponentStyle) {
    this.styler.register(this.style);
  }
}
