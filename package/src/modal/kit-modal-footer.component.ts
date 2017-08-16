import { Component, Inject, Input, OnInit, } from '@angular/core';
import { StylerComponent } from '@ngx-kit/styler';
import { kitComponentModalFooter } from '../core/meta/tokens';
import { KitComponentStyle } from '../core/meta/component';

@Component({
  selector: 'kit-modal-footer,[kitModalFooter]',
  template: `
    <ng-content></ng-content>
  `,
  viewProviders: [
    StylerComponent,
  ],
})
export class KitModalFooterComponent implements OnInit {
  @Input() kitModalFooter: any;

  constructor(private styler: StylerComponent,
              @Inject(kitComponentModalFooter) private style: KitComponentStyle) {
    this.styler.classPrefix = 'kit-modal-footer';
    this.styler.register(this.style);
  }

  ngOnInit() {
  }
}
