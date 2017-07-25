import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { KitLoadingBarService } from '@ngx-kit/ngx-kit';
import { StylerModule } from '@ngx-kit/styler';
import { Content } from '../../../interfaces/content';
import { LoadingBarStyle } from './loading-bar.style';

@Component({
  selector: 'app-loading-bar',
  templateUrl: './loading-bar.component.html',
  styleUrls: ['../module-page.css'],
  viewProviders: [
    StylerModule.forComponent(LoadingBarStyle),
  ],
})
export class LoadingBarComponent implements OnInit {
  content: Content;

  constructor(private route: ActivatedRoute,
              private loadingBarService: KitLoadingBarService) {
  }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.content = data.content;
    });
  }

  start() {
    this.loadingBarService.start('local');
  }

  end() {
    this.loadingBarService.end('local');
  }
}
