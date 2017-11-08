import { AfterViewChecked, ChangeDetectionStrategy, Component } from '@angular/core';
import { KitGlobalListenerService, KitPlatformService } from '@ngx-kit/core';

@Component({
  selector: 'test-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements AfterViewChecked {
  constructor(private platform: KitPlatformService,
              private gl: KitGlobalListenerService) {
    console.log('gl', this.gl);
    if (this.platform.isBrowser()) {
      alert('it is a browser!');
    }
  }

  ngAfterViewChecked() {
    console.log('root vc');
  }
}
