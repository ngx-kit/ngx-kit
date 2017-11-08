import { ChangeDetectionStrategy, Component } from '@angular/core';
import { KitIconsRegistryService } from '@ngx-kit/ngx-kit';

@Component({
  selector: 'demo-rating-icon',
  templateUrl: './demo-rating-icon.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoRatingIconComponent {
  constructor(private icons: KitIconsRegistryService) {
    this.icons.register('star', '/assets/star-icon.svg');
  }
}
