import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentService } from '../../core/content.service';
import { ContentComponents, ContentPosts } from '../../interfaces/content';

@Component({
  selector: 'app-kit-module',
  templateUrl: './module.component.html',
})
export class ModuleComponent implements OnInit {
  components: ContentComponents;

  module: string;

  posts: ContentPosts;

  constructor(private route: ActivatedRoute,
              private content: ContentService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.module = params.module;
    });
  }
}
