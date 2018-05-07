import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  year = (new Date()).getFullYear();

  codeExamples = [
    `npm i @ngx-kit/core --save
npm i @ngx-kit/collection --save-dev`,
    `ng g @ngx-kit/collection:ui-button ui-button`,
    `@NgModule({
  ...
  imports: [
    ...
    UiButtonModule,`,
    `<button uiButton color="primary">Let's do it!</button>`,
  ];

  constructor() {
  }
}
