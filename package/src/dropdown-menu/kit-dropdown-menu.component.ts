import { Component, EventEmitter, Inject, Input, OnChanges, OnInit, Output } from '@angular/core';
import { StylerComponent } from '@ngx-kit/styler';
import { KitComponentStyle } from '../core/meta/component';
import { kitComponentDropdownMenu } from '../core/meta/tokens';
import { KitAnchorDirective } from '../core/overlay/anchor.directive';

/**
 * @todo right-click open
 */
@Component({
  selector: 'kit-dropdown-menu,[kit-dropdown-menu],[kitDropdownMenu]',
  template: `
    <kit-overlay [anchor]="anchor"
                 [opened]="opened"
                 [position]="'bottom'"
                 [template]="contentRef"
                 [type]="'dropdown'"
                 [widthType]="'auto'"
                 (outsideClick)="close()"></kit-overlay>
    <ng-template #contentRef>
      <div styler="menu">
        <ng-content></ng-content>
      </div>
    </ng-template>
  `,
  viewProviders: [
    StylerComponent,
  ],
})
export class KitDropdownMenuComponent implements OnInit, OnChanges {
  @Input() anchor: KitAnchorDirective;

  @Output() itemClick = new EventEmitter<MouseEvent>();

  @Input() kitDropdownMenu: any;

  opened = false;

  constructor(private styler: StylerComponent,
              @Inject(kitComponentDropdownMenu) private style: KitComponentStyle) {
    this.styler.register(this.style);
  }

  ngOnChanges() {
    this.anchor.hostClick.subscribe(() => {
      this.toggle();
    });
  }

  ngOnInit() {
  }

  close() {
    this.opened = false;
  }

  toggle() {
    this.opened = !this.opened;
  }
}
