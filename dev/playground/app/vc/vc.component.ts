import { AfterViewChecked, ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'test-vc',
  templateUrl: './vc.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VcComponent implements AfterViewChecked {
  color = '#6fff57';

  color2 = '#ff66aa';

  color3 = '#38d3dd';

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      'color': ['#2ad0ff'],
    })
  }

  ngAfterViewChecked() {
    console.log('vc vc');
  }
}
