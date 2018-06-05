import { Component, Input, OnChanges } from '@angular/core';
import { MdRenderService } from '@nvxme/ngx-md-render';
import { highlightAuto } from 'highlight.js';
import { demoComponentsRef } from '../../../../packages/collection/lib/demo.module';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
})
export class DemoComponent implements OnChanges {
  add = false;

  class: any;

  code: {[key: string]: string} = {};

  @Input() demo: {files: {name: string, ext: string; content: string; class: string}[]};

  @Input() inverted: boolean;

  readme: string;

  constructor(private md: MdRenderService) {
  }

  ngOnChanges() {
    if (this.demo && this.demo.files.length > 0) {
      const main = this.demo.files.find(f => f.name.indexOf('-demo.component.ts') !== -1);
      if (main) {
        const cmp = demoComponentsRef.find(d => d[0] === main.class);
        if (!cmp) {
          throw new Error(`Class ${main.class} not found in demo-ref`);
        }
        this.class = cmp[1];
        this.code = this.demo.files.reduce((prev: any, file: any) => ({
          ...prev,
          [file.name]: highlightAuto(file.content, [this.getLangByExt(file.ext)]).value,
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
