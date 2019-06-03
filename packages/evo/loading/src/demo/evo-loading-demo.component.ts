import { Component } from '@angular/core';
import { EvoLoadingService } from '../evo-loading.service';

/**
 * @demo
 */
@Component({
  templateUrl: './evo-loading-demo.component.html',
})
export class EvoLoadingDemoComponent {
  constructor(private loading: EvoLoadingService) {
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
