import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'kit-color-picker',
  template: `
    color-picker
  `,
})
export class KitColorPickerComponent implements OnInit {

  @HostBinding('class') hostClass: string;

  constructor() {
  }

  ngOnInit() {
  }

}
