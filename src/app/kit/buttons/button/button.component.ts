import { Component, HostBinding, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StylerComponent, StylerModule } from '@ngx-kit/styler';

import { Content } from '../../../interfaces/content';
import { ButtonStyle } from './button.style';

@Component({
  selector: 'app-kit-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
  viewProviders: [
    StylerModule.forComponent(ButtonStyle),
  ]
})
export class ButtonComponent implements OnInit {

  content: Content;

  @HostBinding('attr.sid') get sid() {
    return this.styler.host.sid;
  }

  constructor(private route: ActivatedRoute,
              private styler: StylerComponent) {
  }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.content = data.content;
    });
  }

}
