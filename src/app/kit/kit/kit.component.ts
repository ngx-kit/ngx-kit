import { Component, OnInit } from '@angular/core';
import { StylerModule } from '@ngx-kit/styler';
import { ContentService } from '../../core/content.service';
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
  content: any;

  constructor(private contentService: ContentService) {
  }

  ngOnInit() {
    this.content = this.contentService.get('ngx-kit');
  }
}
