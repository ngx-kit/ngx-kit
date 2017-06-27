import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'kit-grid,[kit-grid],[kitGrid]',
  template: `
    grid
  `,
})
export class KitGridComponent implements OnInit {

  @Input() kitGrid: any;

  @HostBinding('class') hostClass: string;

  constructor() {
  }

  ngOnInit() {
  }

}
