import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlaygroundComponent {
}
