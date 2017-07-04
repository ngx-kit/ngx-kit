import { Component, Inject, Input, OnInit } from '@angular/core';
import { kitComponentBadge, KitComponentStyle } from '@ngx-kit/core';
import { StylerComponent } from '@ngx-kit/styler';

/**
 * @todo overflowCount - max count
 * @todo showZero
 */
@Component({
  selector: 'kit-badge,[kit-badge],[kitBadge]',
  template: `
    {{ count }}
  `,
  viewProviders: [
    StylerComponent,
  ],
})
export class KitBadgeComponent implements OnInit {
  @Input() count: number;

  @Input() kitBadge: any;

  constructor(private styler: StylerComponent,
              @Inject(kitComponentBadge) private style: KitComponentStyle) {
    this.styler.register(this.style);
  }

  @Input()
  set size(size: string) {
    this.styler.host.applyState({size});
  }

  @Input()
  set type(type: string) {
    this.styler.host.applyState({type});
  };

  ngOnInit() {
  }
}
