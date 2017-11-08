import { Component } from '@angular/core';
import { StylerComponent, StylerModule } from '@ngx-kit/styler';
import { LayoutStyle } from '../../shared/layout/layout.style';
import { HomePageStyle } from './home-page.style';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  viewProviders: [
    StylerModule.forComponent(LayoutStyle),
    StylerModule.forComponent(HomePageStyle),
  ],
  animations: [
    // @todo do not run animations second time (first time from universal, second after ng mount)
//    trigger('products', [
//      transition(':enter', [
//        query('a', style({
//          opacity: 0,
//          transform: 'translateY(-20%)',
//        }), {optional: true}),
//        query('a', stagger(150, animate('400ms ease-in', style({
//          opacity: 1,
//          transform: 'translateY(0)',
//        }))), {optional: true}),
//      ]),
//    ]),
  ],
})
export class HomePageComponent {
  constructor(private styler: StylerComponent) {
  }
}
