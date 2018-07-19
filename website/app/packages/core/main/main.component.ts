import { Component, OnInit } from '@angular/core';
import { ContentServiceBase } from '../../../content/content';

@Component({
  selector: 'app-kit',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  sideOpened = false;

  docs: string[];

  modules: string[];

  constructor(
    private content: ContentServiceBase,
  ) {
  }

  ngOnInit() {
    this.docs = this.content.getDocFiles()
      .map(doc => doc.meta && doc.meta.title ? doc.meta.title : doc.name)
      .sort((x, y) => {
        const xPrior = x.meta && x.meta.apiPriority ? x.meta.apiPriority : 0;
        const yPrior = y.meta && y.meta.apiPriority ? y.meta.apiPriority : 0;
        return x < y ? 1 : -1;
      });
    this.modules = Object
      .keys(this.content.doc.filesMap.src)
      .filter(k => typeof this.content.doc.filesMap.src[k] === 'object');
  }
}
