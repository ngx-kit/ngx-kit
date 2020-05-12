import { Component } from '@angular/core';
import { EvoLoading } from '../../../../loading/src/evo-loading';

/**
 * @demo
 */
@Component({
  templateUrl: './loading-bar-demo.component.html',
})
export class LoadingBarDemoComponent {
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
