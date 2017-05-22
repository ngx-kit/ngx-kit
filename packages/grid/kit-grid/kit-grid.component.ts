import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'kit-grid',
  template: `
    grid
  `,
})
export class KitGridComponent implements OnInit {

  @HostBinding('class') hostClass: string;

  constructor() {
  }

  ngOnInit() {
  }

}
