import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'kit-tree',
  template: `
    tree
  `,
})
export class KitTreeComponent implements OnInit {

  @HostBinding('class') hostClass: string;

  constructor() {
  }

  ngOnInit() {
  }

}
