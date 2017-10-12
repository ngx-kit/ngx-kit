import { Component, Input, OnChanges } from '@angular/core';
import { StylerComponent, StylerModule } from '@ngx-kit/styler';
import { MdRenderService } from '@nvxme/ngx-md-render';
import { highlightAuto } from 'highlight.js';
import { demo } from '../../../packages/ui-base/package/demo/demo-ref';
import { DemoStyle } from './demo.style';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  viewProviders: [
    StylerModule.forComponent(DemoStyle),
  ],
})
export class DemoComponent implements OnChanges {
  add = false;

  class: any;

  code: {[key: string]: string} = {};

  @Input() demo: any;

  @Input() inverted: boolean;

  readme: string;

  constructor(private styler: StylerComponent,
              private md: MdRenderService) {
  }

  ngOnChanges() {
    if (!this.demo) {
      throw new Error('Demo is not passed!');
    }
    if (!demo) {
      throw new Error('demo-ref is not generated!');
    }
    if (!demo[this.demo.class]) {
      throw new Error(`Class ${this.demo.class} not found in demo-ref`);
    }
    this.class = demo[this.demo.class];
    console.log('class', this.class);
    this.readme = this.md.render(this.demo.readme);
    this.code = this.demo.code.reduce((prev, file) => ({
      ...prev,
      [file.file]: highlightAuto(file.content, [file.language]).value,
    }), {});
  }
}
