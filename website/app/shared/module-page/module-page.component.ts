import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentService } from '../../core/content.service';

@Component({
  selector: 'app-module-page',
  templateUrl: './module-page.component.html',
})
export class ModulePageComponent implements OnInit {
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
      this.module.api = this.module.api
        .filter(this.isPublic)
        .sort((x: any, y: any) => {
          const xOrder = this.extractApiOrderValue(x);
          const yOrder = this.extractApiOrderValue(y);
          return xOrder > yOrder ? 1 : -1;
        });
      this.module.demo.sort((x: any, y: any) => {
        const xOrder = this.extractMdOrderValue(x);
        const yOrder = this.extractMdOrderValue(y);
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

  private isPublic(a: any) {
    return !(a.doc && a.doc.tags && a.doc.tags.find((t: any) => t.name === 'internal'));
  }
}
