import { Component } from '@angular/core';
import { EvoIconsRegistry } from '@ngx-kit/evo/icon';

/**
 * @demo
 */
@Component({
  templateUrl: './button-demo.component.html',
  styleUrls: ['./button-demo.component.scss'],
})
export class ButtonDemoComponent {
  checkboxModel1 = false;

  checkboxModel2 = false;

  checkboxModel3 = false;

  radioModel = 1;

  constructor(private icons: EvoIconsRegistry) {
    this.icons.add({
      name: 'star', xml: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 8">
        <path d="M4 0l-1 3h-3l2.5 2-1 3 2.5-2 2.5 2-1-3 2.5-2h-3l-1-3z" />
      </svg>
    `,
    });
  }
}
