import { Component, ElementRef, Input, OnChanges } from '@angular/core';
import { StylerComponent, StylerModule } from '@ngx-kit/styler';
import { MdRenderService } from '@nvxme/ngx-md-render';
import { highlightAuto } from 'highlight.js';
import { ContentComponent } from '../../interfaces/content';
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

  code: {[key: string]: string} = {};

  @Input() content: ContentComponent;

  @Input() inverted: boolean;

  readme: string;

  constructor(private styler: StylerComponent,
              private el: ElementRef,
              private md: MdRenderService) {
  }

  ngOnChanges() {
    if (!this.content) {
      throw new Error('Content is not passed!');
    }
    this.readme = this.md.render(this.content.readme);
    this.code = this.content.code.reduce((prev, file) => ({
      ...prev,
      [file.file]: highlightAuto(file.content, [file.language]).value,
    }), {});
  }
}
