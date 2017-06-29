import { Component, EventEmitter, Inject, Input, OnChanges, OnInit, Output } from '@angular/core';
import { KitAnchorDirective, kitComponentDropdownMenu, KitComponentStyle } from '@ngx-kit/core';
import { StylerComponent } from '@ngx-kit/styler';

/**
 * @todo right-click open
 */
@Component({
  selector: 'kit-dropdown-menu,[kit-dropdown-menu],[kitDropdownMenu]',
  template: `
    <div *ngIf="opened">
      <kit-overlay [template]="contentRef"
                   [anchor]="anchor"
                   [type]="'dropdown'"
                   [widthType]="'auto'"
                   [position]="'bottom'"
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
