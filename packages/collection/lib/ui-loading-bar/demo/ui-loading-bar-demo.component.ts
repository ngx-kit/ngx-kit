import { Component } from '@angular/core';
import { KitLoadingService } from '../../../../core';

@Component({
  templateUrl: './ui-loading-bar-demo.component.html',
})
export class UiLoadingBarDemoComponent {
  constructor(private loading: KitLoadingService) {
  }

  start() {
    this.loading.global.start('demo');
  }

  end() {
    this.loading.global.end('demo');
  }

  startLocal() {
    this.loading.progress('local').start('demo');
  }

  endLocal() {
    this.loading.progress('local').end('demo');
  }
}
