import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StylerModule } from '@ngx-kit/styler';
import { ContentService } from '../../core/content.service';
import { LayoutStyle } from '../../shared/layout/layout.style';
import { UiBaseStyle } from './ui-base.style';

@Component({
  selector: 'app-ui-base',
  templateUrl: './ui-base.component.html',
  viewProviders: [
    StylerModule.forComponent(LayoutStyle),
    StylerModule.forComponent(UiBaseStyle),
  ],
})
export class UiBaseComponent implements OnInit {
  content: any;

  constructor(private contentService: ContentService) {
  }

  ngOnInit() {
    this.content = this.contentService.get('ui-base');
  }
}
