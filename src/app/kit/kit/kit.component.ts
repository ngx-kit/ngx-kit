import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StylerComponent, StylerModule } from '@ngx-kit/styler';
import { ThemeService } from '../../core/theme.service';
import { Content } from '../../interfaces/content';
import { LayoutStyle } from '../../shared/layout/layout.style';
import { KitStyle } from './kit.style';

@Component({
  selector: 'app-kit',
  templateUrl: './kit.component.html',
  viewProviders: [
    StylerModule.forComponent(LayoutStyle),
    StylerModule.forComponent(KitStyle),
  ],
})
export class KitComponent implements OnInit {
  module = 'string';

  constructor(private styler: StylerComponent,
              private route: ActivatedRoute,
              private theme: ThemeService) {
  }

  get sideMenuInverted() {
    return this.theme.params.sideMenuInverted;
  }

  ngOnInit() {
    this.route.data.subscribe(data => {
      console.log('data', data);
    });
  }
}
