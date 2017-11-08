import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  templateUrl: './<%= dasherize(name) %>.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class <%= classify(name) %>Component {
}
