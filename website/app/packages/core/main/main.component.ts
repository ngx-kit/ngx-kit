import { Component, OnInit } from '@angular/core';
import { StylerModule } from '@ngx-kit/styler';
import { KitStyle } from './kit.style';
import { LayoutStyle } from '../../../shared/layout/layout.style';
import { ContentService } from '../../../core/content.service';

@Component({
  selector: 'app-kit',
  templateUrl: './main.component.html',
  viewProviders: [
    StylerModule.forComponent(LayoutStyle),
    StylerModule.forComponent(KitStyle),
  ],
})
export class MainComponent implements OnInit {
  content: any;

  constructor(private contentService: ContentService) {
  }

  ngOnInit() {
    this.content = this.contentService.get('ngx-kit');
  }
}
