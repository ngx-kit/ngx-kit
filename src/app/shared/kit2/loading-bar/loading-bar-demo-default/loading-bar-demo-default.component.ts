import { Component } from '@angular/core';
import { KitLoadingBarService } from '@ngx-kit/ngx-kit';

@Component({
  selector: 'app-kit-loading-bar-demo-default',
  templateUrl: './loading-bar-demo-default.component.html',
})
export class LoadingBarDemoDefaultComponent {
  constructor(private loadingBarService: KitLoadingBarService) {
  }

  end() {
    this.loadingBarService.end('local');
  }

  start() {
    this.loadingBarService.start('local');
  }
}
