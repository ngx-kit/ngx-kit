import { ChangeDetectionStrategy, Component } from '@angular/core';
import { KitLoadingService } from '@ngx-kit/core';

@Component({
  selector: 'demo-loading-bar-global',
  templateUrl: './demo-loading-bar-global.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoLoadingBarGlobalComponent {
  constructor(private loading: KitLoadingService) {
  }

  end() {
    this.loading.global.end('demo');
  }

  start() {
    this.loading.global.start('demo');
  }
}
