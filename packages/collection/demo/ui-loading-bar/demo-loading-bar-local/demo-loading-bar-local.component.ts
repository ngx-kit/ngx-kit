import { ChangeDetectionStrategy, Component } from '@angular/core';
import { KitLoadingService } from '@ngx-kit/core';

@Component({
  selector: 'demo-loading-bar-local',
  templateUrl: './demo-loading-bar-local.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoLoadingBarLocalComponent {
  constructor(private loading: KitLoadingService) {
  }

  end() {
    this.loading.progress('local').end('demo');
  }

  start() {
    this.loading.progress('local').start('demo');
  }
}
