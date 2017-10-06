import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: '<%= selector %>,[<%= attrSelector %>]',
  templateUrl: './<%= dasherize(name) %>.component.html',
  styleUrls: ['./<%= dasherize(name) %>.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class <%= classify(name) %>Component {
  @Input() <%= attrSelector %>: void;
}
