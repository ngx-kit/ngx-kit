import { Component } from '@angular/core';
import { KitIconsRegistryService } from '@ngx-kit/core';

@Component({
  templateUrl: './ui-button-demo.component.html',
  styleUrls: ['./ui-button-demo.component.scss'],
})
export class UiButtonDemoComponent {
  checkboxModel1 = false;

  checkboxModel2 = false;

  checkboxModel3 = false;

  radioModel = 1;

  constructor(private icons: KitIconsRegistryService) {
    this.icons.add({name: 'star', url: '/assets/star-icon.svg'});
  }
}
