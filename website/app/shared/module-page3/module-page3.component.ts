import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DocGen } from '@ngx-kit/docgen';
import { ContentServiceBase } from '../../content/content';
import { SeoService } from '../../seo.service';

@Component({
  selector: 'app-module-page3',
  templateUrl: './module-page3.component.html',
  styleUrls: ['./module-page3.component.scss'],
})
export class ModulePage3Component implements OnInit {
  name: string;

  files: DocGen.File[] = [];

  tsFiles: DocGen.TsFile[] = [];

  mdFiles: DocGen.MdFile[] = [];

  constructor(
    public content: ContentServiceBase,
    private route: ActivatedRoute,
    private seo: SeoService,
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.name = params['name'];
      this.seo.setTitle(`${this.content.section}/${this.name}`);
      this.files = this.content.getModuleFiles(this.name);
      this.mdFiles = this.files.filter(file => file.type === 'md') as DocGen.MdFile[];
      this.tsFiles = this.files.filter(file => file.type === 'ts') as DocGen.TsFile[];
    });
  }

}
