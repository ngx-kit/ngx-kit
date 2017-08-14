import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StylerComponent, StylerModule } from '@ngx-kit/styler';
import { Content } from '../../interfaces/content';
import { KitStyle } from './kit.style';

@Component({
  selector: 'app-kit',
  templateUrl: './kit.component.html',
  viewProviders: [
    StylerModule.forComponent(KitStyle),
  ],
})
export class KitComponent implements OnInit {
  content: Content;
  module = 'string';

  constructor(private styler: StylerComponent,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.content = data.content;
    });
  }
}
