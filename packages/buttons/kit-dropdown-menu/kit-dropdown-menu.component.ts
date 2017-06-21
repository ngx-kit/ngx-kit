import { Component, EventEmitter, HostBinding, Inject, Input, OnChanges, OnInit, Output } from '@angular/core';

import { StylerComponent } from '@ngx-kit/styler';
import { KitAnchorDirective, kitComponentDropdownMenu, KitComponentStyle } from '@ngx-kit/core';

/**
 * @todo right-click open
 */
@Component({
  selector: 'kit-dropdown-menu',
  template: `
    <div *ngIf="opened">
      <kit-overlay [template]="contentRef"
                   [anchor]="anchor"
                   [type]="'dropdown'"
                   [widthType]="'auto'"
                   (outsideClick)="close()"></kit-overlay>
      <ng-template #contentRef>
        <div styler="menu">
          <ng-content></ng-content>
        </div>
      </ng-template>
    </div>
  `,
  viewProviders: [
    StylerComponent,
  ],
})
export class KitDropdownMenuComponent implements OnInit, OnChanges {

  @Input() anchor: KitAnchorDirective;

  @Output() itemClick = new EventEmitter<MouseEvent>();

  @HostBinding('attr.sid') get sid() {
    return this.styler.host.sid;
  };

  opened = false;

  constructor(private styler: StylerComponent,
              @Inject(kitComponentDropdownMenu) private style: KitComponentStyle) {
    this.styler.register(this.style.getStyles());
  }

  ngOnInit() {
  }

  ngOnChanges() {
    this.anchor.hostClick.subscribe(() => {
      this.toggle();
    });
  }

  toggle() {
    this.opened = !this.opened;
  }

  close() {
    this.opened = false;
  }

}
