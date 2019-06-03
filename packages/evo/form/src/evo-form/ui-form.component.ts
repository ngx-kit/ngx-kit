import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'evo-form,[evoForm]',
  templateUrl: './ui-form.component.html',
  styleUrls: ['./ui-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiFormComponent {
  constructor() {
  }
}
