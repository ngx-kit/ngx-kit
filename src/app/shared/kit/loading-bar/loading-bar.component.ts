import { Component, Input } from '@angular/core';
import { KitLoadingBarService } from '@ngx-kit/ngx-kit';
import { StylerModule } from '@ngx-kit/styler';
import { Content } from '../../../interfaces/content';
import { LoadingBarStyle } from './loading-bar.style';

@Component({
  selector: 'app-kit-loading-bar',
  templateUrl: './loading-bar.component.html',
  viewProviders: [
    StylerModule.forComponent(LoadingBarStyle),
  ],
})
export class LoadingBarComponent {
  @Input() content: Content;

  constructor(private loadingBarService: KitLoadingBarService) {
  }

  end() {
    this.loadingBarService.end('local');
  }

  start() {
    this.loadingBarService.start('local');
  }
}
