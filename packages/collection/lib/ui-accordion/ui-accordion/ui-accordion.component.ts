import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges, } from '@angular/core';
import { KitCollapseHostService } from '@ngx-kit/core';

/**
 * Main accordion component.
 */
@Component({
  selector: 'ui-accordion',
  template: '<ng-content></ng-content>',
  styleUrls: ['./ui-accordion.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    KitCollapseHostService,
  ],
})
export class UiAccordionComponent implements OnInit, OnChanges {
  /**
   * Automatically open first panel.
   */
  @Input() activateFirst = false;

  /**
   * Allow few panels open at a time.
   */
  @Input() multiple = false;

  constructor(private host: KitCollapseHostService) {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['multiple']) {
      this.host.multiple = this.multiple;
    }
  }

  ngOnInit() {
    if (this.activateFirst) {
      this.host.activateFirst();
    }
  }
}
