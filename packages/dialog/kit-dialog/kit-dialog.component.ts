import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'kit-dialog',
  template: `
    modal
  `,
})
export class KitDialogComponent implements OnInit {

  @HostBinding('class') hostClass: string;

  constructor() {
  }

  ngOnInit() {
  }

}
