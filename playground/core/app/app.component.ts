import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'test-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  constructor() {
  }
}
