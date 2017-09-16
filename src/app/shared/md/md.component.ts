import { Component, Input, OnChanges } from '@angular/core';
import { MdRenderService } from '@nvxme/ngx-md-render';
import { ContentPost } from '../../interfaces/content';

@Component({
  selector: 'app-md',
  templateUrl: './md.component.html',
})
export class MdComponent implements OnChanges {
  html: string;

  @Input() post: ContentPost;

  constructor(private md: MdRenderService) {
  }

  ngOnChanges() {
    this.html = this.md.render(this.post.content);
  }
}
