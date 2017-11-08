import { AfterViewChecked, ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'test-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements AfterViewChecked {
  ngAfterViewChecked() {
    console.log('root vc');
  }
}
