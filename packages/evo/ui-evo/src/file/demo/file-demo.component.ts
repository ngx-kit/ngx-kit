import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UiFileSelect } from '../meta';

/**
 * @demo
 */
@Component({
  templateUrl: './file-demo.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FileDemoComponent {
  files: UiFileSelect;
}
