import { Component, Inject, Input } from '@angular/core';
import { StylerComponent } from '@ngx-kit/styler';
import { KitComponentStyle } from '../core/meta/component';
import { kitSpinnerStyle } from '../core/meta/tokens';

@Component({
  selector: 'kit-spinner,[kitSpinner]',
  template: `
    <div [styler]="['spinner', {size: size, duration: duration, type: type}]"></div>`,
  viewProviders: [
    StylerComponent,
  ],
})
export class KitSpinnerComponent {
  @Input() duration: string;

  @Input() kitSpinner: any;

  @Input() size: number;

  @Input() type: string;

  constructor(private styler: StylerComponent,
              @Inject(kitSpinnerStyle) private style: KitComponentStyle) {
    this.styler.classPrefix = 'kit-spinner';
    this.styler.register(this.style);
  }
}
