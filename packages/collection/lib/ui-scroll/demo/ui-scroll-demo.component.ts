import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './ui-scroll-demo.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiScrollDemoComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }
}
