import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentService } from '../../content/content.service';

@Component({
  selector: 'app-docs-page',
  templateUrl: './docs-page.component.html',
})
export class DocsPageComponent implements OnInit {
  doc: any;

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
      this.doc = this.contentService.get(this.pkg).docs.find((d: any) => d.name === params['name']);
    });
  }
}
