import { AfterViewChecked, ChangeDetectionStrategy, Component } from '@angular/core';
import { KitPlatformService } from '@ngx-kit/core';

@Component({
  selector: 'test-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements AfterViewChecked {
  constructor(private platform: KitPlatformService) {
    if (this.platform.isBrowser()) {
      alert('it is a browser!');
    }
  }

  ngAfterViewChecked() {
    console.log('root vc');
  }
}
