import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StylerComponent, StylerModule } from '@ngx-kit/styler';
import { ContentService } from '../../core/content.service';
import { LayoutStyle } from '../../shared/layout/layout.style';
import { UiDefaultStyle } from './ui-default.style';

@Component({
  selector: 'app-ui-default',
  templateUrl: './ui-default.component.html',
  viewProviders: [
    StylerModule.forComponent(LayoutStyle),
    StylerModule.forComponent(UiDefaultStyle),
  ],
})
export class UiDefaultComponent implements OnInit {
  content: any;

  constructor(private contentService: ContentService) {
  }

  ngOnInit() {
    this.content = this.contentService.get('ui-default');
  }
}
