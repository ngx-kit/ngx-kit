import { Component } from '@angular/core';

@Component({
  templateUrl: './ui-carousel-demo.component.html',
})
export class UiCarouselDemoComponent {
  slides = [
    {color: '#F7A1A1', content: 'Slide 1 Content'},
    {color: '#00D791', content: 'Slide 2 Content'},
    {color: '#24B7EC', content: 'Slide 3 Content'},
  ];
}
