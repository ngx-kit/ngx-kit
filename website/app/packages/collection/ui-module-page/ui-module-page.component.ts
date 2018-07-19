import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DocGen } from '@ngx-kit/docgen';
import { ContentServiceBase } from '../../../content/content';

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
    private route: ActivatedRoute,
    public content: ContentServiceBase,
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.name = params['name'];
      this.files = this.content.getModuleFiles(this.name);
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
