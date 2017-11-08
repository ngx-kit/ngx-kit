import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'test-vc',
  templateUrl: './vc.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VcComponent {
}
