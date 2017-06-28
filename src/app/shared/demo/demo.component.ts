import { Component, HostBinding, Input, OnChanges, OnInit } from '@angular/core';
import { StylerComponent, StylerModule } from '@ngx-kit/styler';

import { Content, ContentFile } from '../../interfaces/content';
import { DemoStyle } from './demo.style';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css'],
  viewProviders: [
    StylerModule.forComponent(DemoStyle),
  ]
})
export class DemoComponent implements OnInit, OnChanges {

  @Input() content: Content;
  @Input() id: string;

  file: ContentFile;

  @HostBinding('attr.sid') get sid() {
    return this.styler.host.sid;
  }

  constructor(private styler: StylerComponent) {
  }

  ngOnInit() {
  }

  ngOnChanges() {
    this.file = this.content.find(f => f.meta.id === this.id);
  }

}
