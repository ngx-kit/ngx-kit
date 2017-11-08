import { ChangeDetectionStrategy, Component } from '@angular/core';
import { KitLoadingBarService } from '@ngx-kit/core';

@Component({
  selector: 'demo-loading-bar-default',
  templateUrl: './demo-loading-bar-default.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoLoadingBarDefaultComponent {
  constructor(private loadingBarService: KitLoadingBarService) {
  }

  end() {
    this.loadingBarService.end('local');
  }

  start() {
    this.loadingBarService.start('local');
  }
}
