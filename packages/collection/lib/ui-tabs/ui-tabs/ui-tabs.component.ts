import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { KitSlideHostService } from '@ngx-kit/core';

/**
 * @apiOrder 1
 */
@Component({
  selector: 'ui-tabs',
  template: `
    <ng-content select="ui-tabs-nav"></ng-content>
    <div class="wrapper">
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./ui-tabs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    KitSlideHostService,
  ],
})
export class UiTabsComponent implements OnInit {
  /**
   * Automatically activate first tab.
   */
  @Input() activateFirst = true;

  constructor(private host: KitSlideHostService) {
  }

  ngOnInit() {
    this.host.activateFirst = this.activateFirst;
  }
}
