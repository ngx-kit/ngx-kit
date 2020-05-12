import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

/**
 * @demo
 */
@Component({
  templateUrl: './ui-popup-demo.component.html',
  styleUrls: ['./ui-popup-demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiPopupDemoComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }
}
