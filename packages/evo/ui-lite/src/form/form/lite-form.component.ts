import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lite-form,[liteForm]',
  templateUrl: './lite-form.component.html',
  styleUrls: ['./lite-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LiteFormComponent {
  constructor() {
  }
}
