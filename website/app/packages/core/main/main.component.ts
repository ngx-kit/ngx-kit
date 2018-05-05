import { Component, OnInit } from '@angular/core';
import { ContentService } from '../../../content/content.service';
import { pkgName } from '../meta';

@Component({
  selector: 'app-kit',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  content: any;

  sideOpened = false;

  constructor(private contentService: ContentService) {
  }

  ngOnInit() {
    this.content = this.contentService.get(pkgName);
  }
}
