import { Component, HostBinding, Inject, Input, OnInit } from '@angular/core';

import { KitTheme, KitThemeService } from '@ngx-kit/core';
import { StylerElement, StylerComponent } from '@ngx-kit/styler';

@Component({
  selector: 'kit-button',
  template: `
    <ng-content></ng-content>
  `,
  viewProviders: [
    StylerComponent,
  ],
})
export class KitButtonComponent implements OnInit {

  @Input() set size(size: string) {
    this.hostStyler.applyState({size});
  }

  @Input() set type(type: string) {
    this.hostStyler.applyState({type});
  }

  @Input() set disabled(disabled: boolean) {
    this.hostStyler.applyState({disabled});
  }

  @HostBinding('attr.sid') get hostClass() {
    return this.hostStyler.sid;
  };

  private hostStyler: StylerElement;

  constructor(private styler: StylerComponent,
              @Inject(KitTheme) private theme: KitThemeService) {
    this.theme.style('button', this.styler);
    this.hostStyler = this.styler.host;
  }

  ngOnInit() {
  }

}
