import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/observable/from';
import { Observable } from 'rxjs/Observable';
import { Content } from '../../../interfaces/content';

@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
})
export class AutoCompleteComponent implements OnInit {
  content: Content;

  dataSource = (value: string) => {
    return Observable
        .from([['123', '123312', '456', 'abc', 'abccba', 'zxc', 'ghj']])
        .map(results => results.filter(r => r.indexOf(value) !== -1));
  };

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.content = data.content;
    });
  }
}
