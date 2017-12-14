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
    `@NgModule({
  ...
  imports: [
    ...
    KitRootModule,
    KitModule,
    KitPlatformBrowserModule,`,
    `ng g ui-button -c=@ngx-kit/collection my-button`,
    `@NgModule({
  ...
  imports: [
    ...
    MyButtonModule,`,
    `<button myButton color="primary">Let's do it!</button>`,
  ];

  constructor() {
  }
}
