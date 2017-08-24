import { Component, Inject, Input, OnInit, } from '@angular/core';
import { StylerComponent } from '@ngx-kit/styler';
import { KitComponentStyle } from '../core/meta/component';
import { kitModalBodyStyle } from '../core/meta/tokens';

@Component({
  selector: 'kit-modal-body,[kitModalBody]',
  template: `
    <ng-content></ng-content>
  `,
  viewProviders: [
    StylerComponent,
  ],
})
export class KitModalBodyComponent implements OnInit {
  @Input() kitModalBody: any;

  constructor(private styler: StylerComponent,
              @Inject(kitModalBodyStyle) private style: KitComponentStyle) {
    this.styler.classPrefix = 'kit-modal-body';
    this.styler.register(this.style);
  }

  ngOnInit() {
  }
}
