import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Content, ContentFile } from '../../interfaces/content';

@Component({
  selector: 'app-content-output',
  templateUrl: './content-output.component.html',
  styleUrls: ['./content-output.component.css'],
})
export class ContentOutputComponent implements OnInit, OnChanges {
  @Input() content: Content;

  file: ContentFile;

  @Input() id = 'index';

  constructor() {
  }

  ngOnChanges() {
    this.file = this.content.find(f => f.meta.id === this.id);
  }

  ngOnInit() {
  }
}
