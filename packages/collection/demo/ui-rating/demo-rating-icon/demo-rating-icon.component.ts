import { ChangeDetectionStrategy, Component } from '@angular/core';
import { KitIconsRegistryService } from '@ngx-kit/core';

@Component({
  selector: 'demo-rating-icon',
  templateUrl: './demo-rating-icon.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoRatingIconComponent {
  constructor(private icons: KitIconsRegistryService) {
    this.icons.add({name: 'star', url: '/assets/star-icon.svg'});
  }
}
