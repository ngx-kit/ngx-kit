import { Component, HostBinding, Inject, Input, OnInit } from '@angular/core';

import { KitTheme, KitThemeService } from '@ngx-kit/core';
import { StylerService } from '@ngx-kit/styler';

@Component({
  selector: 'kit-button',
  template: `
    <ng-content></ng-content>
  `,
  viewProviders: [
    StylerService,
  ],
})
export class KitButtonComponent implements OnInit {

  @Input() set size(size: string) {
    this.styler.setState('host', {size});
  }

  @Input() set type(type: string) {
    this.styler.setState('host', {type});
  }

  @Input() set disabled(disabled: boolean) {
    this.styler.setState('host', {disabled: disabled ? 'disabled' : null});
  }

  @HostBinding('class') get hostClass() {
    return this.styler.getHostClass();
  };

  constructor(private styler: StylerService,
              @Inject(KitTheme) private theme: KitThemeService) {
    this.theme.style('button', this.styler);
  }

  ngOnInit() {
  }

}
