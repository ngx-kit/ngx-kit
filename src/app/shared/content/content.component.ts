import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentService } from '../../core/content.service';
import { ContentPost } from '../../interfaces/content';

@Component({
  selector: 'app-kit-content',
  templateUrl: './content.component.html',
})
export class ContentComponent implements OnInit {
  post: ContentPost;

  postId: string;

  constructor(private route: ActivatedRoute,
              private content: ContentService) {
  }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.postId = data.post;
    });
    this.content.posts$
        .map(posts => posts[this.postId])
        .subscribe(post => this.post = post);
  }
}
