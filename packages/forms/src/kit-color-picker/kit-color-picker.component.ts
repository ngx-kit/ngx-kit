import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'kit-color-picker,[kit-color-picker],[kitColorPicker]',
  template: `
    color-picker
  `,
})
export class KitColorPickerComponent implements OnInit {
  @HostBinding('class') hostClass: string;

  @Input() kitColorPicker: any;

  constructor() {
  }

  ngOnInit() {
  }
}
