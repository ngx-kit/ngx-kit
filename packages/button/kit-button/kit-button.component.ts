import { Component, HostBinding, Inject, Input, OnInit } from '@angular/core';

import { KitTheme, KitThemeService } from '@ngx-kit/core';
import { StylerService, StylerUnit } from '@ngx-kit/styler';

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
    this.hostStyler.setState({size});
  }

  @Input() set type(type: string) {
    this.hostStyler.setState({type});
  }

  @Input() set disabled(disabled: boolean) {
    this.hostStyler.setState({disabled});
  }

  @HostBinding('class') get hostClass() {
    return this.hostStyler.getClass();
  };

  private hostStyler: StylerUnit;

  constructor(private styler: StylerService,
              @Inject(KitTheme) private theme: KitThemeService) {
    this.theme.style('button', this.styler);
    this.hostStyler = this.styler.getHostUnit();
  }

  ngOnInit() {
  }

}
