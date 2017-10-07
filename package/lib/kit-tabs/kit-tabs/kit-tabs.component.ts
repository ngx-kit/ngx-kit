import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { KitSlideHostService } from '@ngx-kit/ngx-kit';

/**
 * @apiOrder 1
 */
@Component({
  selector: 'kit-tabs,[kitTabs]',
  template: `
    <ng-content select="kit-tabs-nav"></ng-content>
    <div class="wrapper">
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./kit-tabs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    KitSlideHostService,
  ],
})
export class KitTabsComponent implements OnInit {
  /**
   * Automatically activate first tab.
   */
  @Input() activateFirst = true;

  @Input() kitTabs: void;

  constructor(private host: KitSlideHostService) {
  }

  ngOnInit() {
    this.host.activateFirst = this.activateFirst;
  }
}
