import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Content } from '../../../interfaces/content';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
})
export class DatePickerComponent implements OnInit {
  content: Content;

  date = '2017-08-18';

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.content = data.content;
    });
  }
}
