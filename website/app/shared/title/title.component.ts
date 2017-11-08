import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css'],
})
export class TitleComponent implements OnInit, OnChanges {
  compiledLink: string;

  @Input() link: string;

  constructor() {
  }

  ngOnChanges() {
    this.compiledLink = `https://github.com/ngx-kit/ngx-kit/tree/master/package/src/${this.link}`;
  }

  ngOnInit() {
  }
}
