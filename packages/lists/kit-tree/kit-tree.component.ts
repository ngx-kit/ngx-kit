import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'kit-tree,[kit-tree],[kitTree]',
  template: `
    tree
  `,
})
export class KitTreeComponent implements OnInit {

  @Input() kitTree: any;

  @HostBinding('class') hostClass: string;

  constructor() {
  }

  ngOnInit() {
  }

}
