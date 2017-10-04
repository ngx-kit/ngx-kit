import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'demo-carousel-gen',
  templateUrl: './demo-carousel-gen.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoCarouselGenComponent {
  slides = [
    {color: '#F7A1A1', content: 'Slide 1 Content'},
    {color: '#00D791', content: 'Slide 2 Content'},
    {color: '#24B7EC', content: 'Slide 3 Content'},
  ];
}
