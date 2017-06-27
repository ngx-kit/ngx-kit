import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'kit-list,[kit-list],[kitList]',
  template: `
    list
  `,
})
export class KitListComponent implements OnInit {

  @Input() kitList: any;

  @HostBinding('class') hostClass: string;

  constructor() {
  }

  ngOnInit() {
  }

}
