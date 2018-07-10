import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges, } from '@angular/core';
import { KitCollapseHostService } from '@ngx-kit/core';

@Component({
  selector: 'ui-vertical-menu',
  template: '<ng-content></ng-content>',
  styleUrls: ['./ui-vertical-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    KitCollapseHostService,
  ],
})
export class UiVerticalMenuComponent implements OnInit, OnChanges {
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
  }
}
