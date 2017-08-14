import { Component, Input } from '@angular/core';
import 'rxjs/add/observable/from';
import { Observable } from 'rxjs/Observable';
import { Content } from '../../../interfaces/content';

@Component({
  selector: 'app-kit-auto-complete',
  templateUrl: './auto-complete.component.html',
})
export class AutoCompleteComponent {
  @Input() content: Content;

  dataSource = (value: string) => {
    return Observable
        .from([['123', '123312', '456', 'abc', 'abccba', 'zxc', 'ghj']])
        .map(results => results.filter(r => r.indexOf(value) !== -1));
  };
}
