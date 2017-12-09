import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
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
  year = (new Date()).getFullYear();

  constructor() {
  }
}
