import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'kit-grid,[kit-grid],[kitGrid]',
  template: `
    grid
  `,
})
export class KitGridComponent implements OnInit {
  @HostBinding('class') hostClass: string;

  @Input() kitGrid: any;

  constructor() {
  }

  ngOnInit() {
  }
}
