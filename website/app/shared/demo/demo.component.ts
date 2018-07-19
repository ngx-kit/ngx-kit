import { source } from '@angular-devkit/schematics';
import { Component, Input, OnChanges } from '@angular/core';
import { DocGen } from '@ngx-kit/docgen';
import { MdRenderService } from '@nvxme/ngx-md-render';
import { highlightAuto } from 'highlight.js';
import { demoComponentsRef } from '../../../../packages/collection/lib/demo.module';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
})
export class DemoComponent implements OnChanges {
  @Input() declar: DocGen.ClassDeclar;

  @Input() sources: DocGen.File[];

  class: any;

  code: {[key: string]: string} = {};

  @Input() demo: {files: {name: string, ext: string; content: string; class: string}[]};

  @Input() inverted: boolean;

  readme: string;

  constructor(private md: MdRenderService) {
  }

  ngOnChanges() {
    if (this.declar) {
      const cmp = demoComponentsRef.find(d => d[0] === this.declar.name);
      if (!cmp) {
        throw new Error(`Class ${this.declar.name} not found in demo-ref`);
      }
      this.class = cmp[1];
      if (this.sources) {
        this.code = this.sources.reduce((prev: any, file: DocGen.File) => ({
          ...prev,
          [file.fileName]: highlightAuto(file.text, [this.getLangByExt(file.type)]).value,
        }), {});
      }
    }
  }

  getLangByExt(ext: string) {
    switch (ext) {
      case 'ts':
        return 'typescript';
      case 'css':
        return 'css';
      case 'html':
        return 'html';
    }
    return ext;
  }
}
