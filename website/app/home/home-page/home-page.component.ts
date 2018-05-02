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
npm i @ngx-kit/collection @angular-devkit/core --save-dev`,
    `import { KitRootModule, KitModule } from '@ngx-kit/core';

@NgModule({
  ...
  imports: [
    ...
    KitRootModule,
    KitModule,`,
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
