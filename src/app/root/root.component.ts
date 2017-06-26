import { Component } from '@angular/core';
import { StylerModule } from '@ngx-kit/styler';

import { RootStyle } from './root.style';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  viewProviders: [
      StylerModule.forComponent(RootStyle)
  ]
})
export class RootComponent {
}
