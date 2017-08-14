import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Content } from '../../interfaces/content';

@Component({
  selector: 'app-kit-module',
  templateUrl: './module.component.html',
})
export class ModuleComponent implements OnInit {
  content: Content;

  module: string;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.content = data.content;
      this.module = data.module;
    });
  }
}
