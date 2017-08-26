import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Inject,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import { StylerComponent } from '@ngx-kit/styler';
import { KitComponentStyle } from '../core/meta/component';
import { kitDropdownMenuStyle } from '../core/meta/tokens';
import { KitAnchorDirective } from '../core/overlay/anchor.directive';

/**
 * @todo right-click open
 */
@Component({
  selector: 'kit-dropdown-menu,[kitDropdownMenu]',
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
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KitDropdownMenuComponent implements OnInit, OnChanges {
  @Input() anchor: KitAnchorDirective;

  @Output() itemClick = new EventEmitter<MouseEvent>();

  @Input() kitDropdownMenu: any;

  opened = false;

  constructor(private styler: StylerComponent,
              @Inject(kitDropdownMenuStyle) private style: KitComponentStyle,
              private cdr: ChangeDetectorRef) {
    this.styler.classPrefix = 'kit-dropdown-menu';
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
    this.cdr.markForCheck();
  }
}
