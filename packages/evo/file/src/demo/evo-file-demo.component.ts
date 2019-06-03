import { ChangeDetectionStrategy, Component } from '@angular/core';
import { EvoFileSelect } from '../meta';

/**
 * @demo
 */
@Component({
  templateUrl: './evo-file-demo.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EvoFileDemoComponent {
  files: EvoFileSelect;
}
