import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  year = (new Date()).getFullYear();

  codeExamples = [
    // 0
    'ng add @ngx-kit/core',
    // 1
    `ng g @ngx-kit/collection:ui-button ui-button`,
    // 2
    '@NgModule({\n' +
    '  ...\n' +
    '  imports: [\n' +
    '    ...\n' +
    '    UiButtonModule,',
    // 3
    '<button uiButton color="primary">Let\'s do it!</button>',
  ];

  constructor() {
  }
}
