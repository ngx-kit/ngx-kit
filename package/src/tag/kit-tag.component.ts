import { ChangeDetectionStrategy, Component, Inject, Input, OnInit } from '@angular/core';
import { StylerComponent } from '@ngx-kit/styler';
import { KitComponent, KitComponentStyle } from '../core/meta/component';
import { kitTagStyle } from '../core/meta/tokens';

/**
 * @todo <tag-group>
 * @todo [closable]
 */
@Component({
  selector: 'kit-tag,[kitTag]',
  template: `
    <ng-content></ng-content>
  `,
  viewProviders: [
    StylerComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KitTagComponent implements KitComponent, OnInit {
  @Input() kitTag: null;

  constructor(public readonly styler: StylerComponent,
              @Inject(kitTagStyle) private style: KitComponentStyle) {
    this.styler.classPrefix = 'kit-tag';
    this.styler.register(this.style);
  }

  ngOnInit() {
  }
}
