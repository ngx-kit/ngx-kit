import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

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
