import { Component, Input, OnChanges } from '@angular/core';
import { MdRenderService } from '@nvxme/ngx-md-render';
import { ContentPost } from '../../interfaces/content';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
})
export class PostComponent implements OnChanges {
  html: string;

  @Input() post: ContentPost;

  constructor(private md: MdRenderService) {
  }

  ngOnChanges() {
    this.html = this.md.render(this.post.content);
  }
}
