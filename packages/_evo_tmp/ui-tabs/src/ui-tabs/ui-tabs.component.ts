import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { KitSlideHostService, KitSlideId } from '@ngx-kit/core';

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

  set active(active: KitSlideId) {
    this.host.active = active;
  }
}
