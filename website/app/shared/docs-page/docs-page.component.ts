import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DocGen } from '@ngx-kit/docgen';
import { ContentServiceBase } from '../../content/content';

@Component({
  selector: 'app-docs-page',
  templateUrl: './docs-page.component.html',
})
export class DocsPageComponent implements OnInit {
  file?: DocGen.MdFile;

  private pkg: string;

  constructor(
    private route: ActivatedRoute,
    public content: ContentServiceBase,
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const name: string = params['name'];
      this.file = this.content.getDocFiles()
        .find(d => {
          const dName = d.meta && d.meta.title ? d.meta.title : d.name;
          return dName.toLowerCase() === name.toLowerCase();
        });
    });
  }
}
