import { Component, ElementRef, Input, OnChanges, OnInit } from '@angular/core';
import { StylerComponent, StylerModule } from '@ngx-kit/styler';
import { Content, ContentFile } from '../../interfaces/content';
import { DemoStyle } from './demo.style';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css'],
  viewProviders: [
    StylerModule.forComponent(DemoStyle),
  ],
})
export class DemoComponent implements OnInit, OnChanges {
  @Input() content: Content;

  file: ContentFile;

  @Input() id: string;

  constructor(private styler: StylerComponent,
              private el: ElementRef) {
  }

  ngOnChanges() {
    if (this.content) {
      this.file = this.content.find(f => f.meta.id === this.id);
    }
  }

  ngOnInit() {
  }
}
