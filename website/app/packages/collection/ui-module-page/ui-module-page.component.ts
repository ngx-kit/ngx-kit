import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DocGen } from '@ngx-kit/docgen';
import { ContentServiceBase } from '../../../content/content';
import { SeoService } from '../../../seo.service';

@Component({
  selector: 'app-ui-module-page',
  templateUrl: './ui-module-page.component.html',
})
export class UiModulePageComponent implements OnInit {
  name: string;

  files: DocGen.File[] = [];

  mdFiles: DocGen.MdFile[] = [];

  tsFiles: DocGen.TsFile[] = [];

  demoFile?: DocGen.TsFile;

  demoSources: DocGen.File[] = [];

  constructor(
    public content: ContentServiceBase,
    private route: ActivatedRoute,
    private router: Router,
    private seo: SeoService,
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.name = params['name'];
      this.seo.setTitle(`${this.content.section}/${this.name}`);
      this.files = this.content.getModuleFiles(this.name);
      if (this.files && this.files.length > 0) {
        // Pick md
        this.mdFiles = this.files.filter(file => file.type === 'md') as DocGen.MdFile[];
        // Pick ts
        this.tsFiles = this.files
          .filter(tsFilter)
          .filter(demoFilterFactory(false));
        // Pick demo
        const demoFiles = this.files
          .filter(tsFilter)
          .filter(demoFilterFactory(true));
        this.demoFile = demoFiles && demoFiles[0] ? demoFiles[0] : undefined;
        // Gather sources
        this.demoSources = this.demoFile
          ? this.files.filter(demoSourcesFilterFactory(true))
          : [];
      } else {
        this.router.navigate(['/e404']);
      }
    });
  }
}

function tsFilter(file: DocGen.File): file is DocGen.TsFile {
  return file.type === 'ts';
}

function demoFilterFactory(isDemo: boolean) {
  return (file: DocGen.TsFile) => {
    const declar = file.declars[0];
    const curr = declar && declar['isDemo'];
    return curr === isDemo;
  };
}

function demoSourcesFilterFactory(isDemo: boolean) {
  return (file: DocGen.TsFile) => {
    const curr = file.fileName.indexOf('/demo/') !== -1;
    return curr === isDemo;
  };
}
