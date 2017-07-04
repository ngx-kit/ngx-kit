import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'kit-nav,[kit-nav],[kitNav]',
  template: `
    nav
  `,
})
export class KitNavComponent implements OnInit {
  @HostBinding('class') hostClass: string;

  @Input() kitNav: any;

  constructor() {
  }

  ngOnInit() {
  }
}
