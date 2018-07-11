import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentService } from '../../../content/content.service';

/**
 * @todo the same as ModulePageComponent
 */
@Component({
  selector: 'app-ui-module-page',
  templateUrl: './ui-module-page.component.html',
})
export class UiModulePageComponent implements OnInit {
  module: any;

  private pkg: string;

  constructor(
    private route: ActivatedRoute,
    private contentService: ContentService,
  ) {
  }

  ngOnInit() {
    this.route.data.subscribe(d => {
      this.pkg = d['pkg'];
    });
    this.route.params.subscribe(params => {
      this.module = this.contentService.get(this.pkg).modules.find((m: any) => m.name === params['name']);
      this.module.api.sort((x: any, y: any) => {
        const xOrder = this.extractApiOrderValue(x);
        const yOrder = this.extractApiOrderValue(y);
        return xOrder > yOrder ? 1 : -1;
      });
    });
  }

  private extractApiOrderValue(api: any) {
    const orderTag = api.doc && api.doc.tags ? api.doc.tags.find((t: any) => t.name === 'apiOrder') : null;
    return orderTag ? orderTag.value : null;
  }

  private extractMdOrderValue(demo: any) {
    return demo.meta && demo.meta['apiOrder'] ? demo.meta['apiOrder'] : null;
  }
}
