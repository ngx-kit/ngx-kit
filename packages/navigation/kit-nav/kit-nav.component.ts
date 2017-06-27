import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'kit-nav,[kit-nav],[kitNav]',
  template: `
    nav
  `,
})
export class KitNavComponent implements OnInit {

  @Input() kitNav: any;

  @HostBinding('class') hostClass: string;

  constructor() {
  }

  ngOnInit() {
  }

}
