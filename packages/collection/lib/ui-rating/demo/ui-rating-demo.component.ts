import { Component } from '@angular/core';
import { KitIconsRegistryService } from '@ngx-kit/core';

@Component({
  templateUrl: './ui-rating-demo.component.html',
})
export class UiRatingDemoComponent {
  constructor(private icons: KitIconsRegistryService) {
    this.icons.add({name: 'star', url: '/assets/star-icon.svg'});
  }
}
