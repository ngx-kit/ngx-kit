import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DocGen } from '@ngx-kit/docgen';
import { ContentServiceBase } from '../../content/content';
import { SeoService } from '../../seo.service';

@Component({
  selector: 'app-docs-page',
  templateUrl: './docs-page.component.html',
})
export class DocsPageComponent implements OnInit {
  file?: DocGen.MdFile;

  private pkg: string;

  constructor(
    public content: ContentServiceBase,
    private route: ActivatedRoute,
    private seo: SeoService,
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const name: string = params['name'];
      this.seo.setTitle(`${this.content.section}/${name}`);
      this.file = this.content.getDocFiles()
        .find(d => {
          const dName = d.meta && d.meta.title ? d.meta.title : d.name;
          return dName.toLowerCase() === name.toLowerCase();
        });
    });
  }
}
