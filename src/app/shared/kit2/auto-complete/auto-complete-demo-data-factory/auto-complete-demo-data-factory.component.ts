import { Component } from '@angular/core';
import 'rxjs/add/observable/from';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-kit-auto-complete-demo-data-factory',
  templateUrl: './auto-complete-demo-data-factory.component.html',
})
export class AutoCompleteDemoDataFactoryComponent {
  dataFactory = (value: string) => {
    return Observable
        .from([['123', '123312', '456', 'abc', 'abccba', 'zxc', 'ghj']])
        .map(results => results.filter(r => r.indexOf(value) !== -1));
  };
}
