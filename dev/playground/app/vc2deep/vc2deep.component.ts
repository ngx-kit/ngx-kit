import { AfterViewChecked, ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'test-vc2deep',
  templateUrl: './vc2deep.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Vc2deepComponent implements AfterViewChecked {
  ngAfterViewChecked() {
    console.log('vc2deep vc');
  }
}
