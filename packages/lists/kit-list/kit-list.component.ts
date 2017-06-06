import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'kit-list',
  template: `
    list
  `,
})
export class KitListComponent implements OnInit {

  @HostBinding('class') hostClass: string;

  constructor() {
  }

  ngOnInit() {
  }

}
