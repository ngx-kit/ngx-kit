import { Component, OnInit } from '@angular/core';
import { StylerComponent, StylerModule } from '@ngx-kit/styler';
import { KitStyle } from './kit.style';

@Component({
  selector: 'app-kit',
  templateUrl: './kit.component.html',
  viewProviders: [
    StylerModule.forComponent(KitStyle),
  ],
})
export class KitComponent implements OnInit {
  constructor(private styler: StylerComponent) {
  }

  ngOnInit() {
  }
}
