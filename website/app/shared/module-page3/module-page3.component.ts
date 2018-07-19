import { Component, OnInit } from '@angular/core';
import { v } from '@angular/core/src/render3';
import { ActivatedRoute } from '@angular/router';
import { DocGen } from '@ngx-kit/docgen';
import { ContentServiceBase } from '../../content/content';

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
    private route: ActivatedRoute,
    public content: ContentServiceBase,
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.name = params['name'];
      this.files = this.content.getModuleFiles(this.name);
      this.mdFiles = this.files.filter(file => file.type === 'md') as DocGen.MdFile[];
      this.tsFiles = this.files.filter(file => file.type === 'ts') as DocGen.TsFile[];
    });
  }

}
