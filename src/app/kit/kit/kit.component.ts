import { Component, HostBinding, OnInit } from '@angular/core';
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

  @HostBinding('attr.sid')
  get sid() {
    return this.styler.host.sid;
  }

  ngOnInit() {
  }
}
