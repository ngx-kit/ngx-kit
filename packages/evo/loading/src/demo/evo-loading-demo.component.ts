import { Component } from '@angular/core';
import { EvoLoading } from '../evo-loading';

/**
 * @demo
 */
@Component({
  templateUrl: './evo-loading-demo.component.html',
})
export class EvoLoadingDemoComponent {
  constructor(private loading: EvoLoading) {
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
