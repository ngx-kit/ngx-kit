import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'kit-date-picker',
  template: `
    date picker
  `,
})
export class KitDatePickerComponent implements OnInit {

  @HostBinding('class') hostClass: string;

  constructor() {
  }

  ngOnInit() {
  }

}
