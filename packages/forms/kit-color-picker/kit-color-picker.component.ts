import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'kit-color-picker,[kit-color-picker],[kitColorPicker]',
  template: `
    color-picker
  `,
})
export class KitColorPickerComponent implements OnInit {

  @Input() kitColorPicker: any;

  @HostBinding('class') hostClass: string;

  constructor() {
  }

  ngOnInit() {
  }

}
