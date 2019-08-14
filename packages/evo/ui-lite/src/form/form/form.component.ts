import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'evo-form,[uiForm]',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormComponent {
  constructor() {
  }
}
