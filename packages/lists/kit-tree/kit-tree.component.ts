import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'kit-tree,[kit-tree],[kitTree]',
  template: `
    tree
  `,
})
export class KitTreeComponent implements OnInit {
  @HostBinding('class') hostClass: string;

  @Input() kitTree: any;

  constructor() {
  }

  ngOnInit() {
  }
}
