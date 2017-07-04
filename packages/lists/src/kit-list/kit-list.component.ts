import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'kit-list,[kit-list],[kitList]',
  template: `
    list
  `,
})
export class KitListComponent implements OnInit {
  @HostBinding('class') hostClass: string;

  @Input() kitList: any;

  constructor() {
  }

  ngOnInit() {
  }
}
