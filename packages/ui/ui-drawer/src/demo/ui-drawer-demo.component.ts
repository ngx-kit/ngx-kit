import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

/**
 * @demo
 */
@Component({
  templateUrl: './ui-drawer-demo.component.html',
  styleUrls: ['./ui-drawer-demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiDrawerDemoComponent implements OnInit {
  display1 = false;

  display2_t = false;

  display2_r = false;

  display2_b = false;

  display2_l = false;

  constructor() {
  }

  ngOnInit() {
  }
}
