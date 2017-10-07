import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'demo-side-menu-default',
  templateUrl: './demo-side-menu-default.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoSideMenuDefaultComponent {
}
