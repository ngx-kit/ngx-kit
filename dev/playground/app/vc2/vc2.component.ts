import { AfterViewChecked, ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'test-vc2',
  templateUrl: './vc2.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Vc2Component implements AfterViewChecked {
  ngAfterViewChecked() {
    console.log('vc2 vc');
  }
}
