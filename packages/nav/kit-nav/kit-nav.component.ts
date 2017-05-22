import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'kit-nav',
  template: `
    nav
  `,
})
export class KitNavComponent implements OnInit {

  @HostBinding('class') hostClass: string;

  constructor() {
  }

  ngOnInit() {
  }

}
