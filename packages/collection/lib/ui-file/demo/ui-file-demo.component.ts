import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UiFileSelect } from '../meta';

/**
 * @demo
 */
@Component({
  templateUrl: './ui-file-demo.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiFileDemoComponent {
  files: UiFileSelect;
}
