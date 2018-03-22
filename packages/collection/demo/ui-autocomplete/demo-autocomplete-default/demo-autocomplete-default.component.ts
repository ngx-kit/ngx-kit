import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'demo-autocomplete-default',
  templateUrl: './demo-autocomplete-default.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoAutocompleteDefaultComponent {
  value: string;

  options: string[];

  data: string[] = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December',
  ];

  searchOptions(query: string) {
    this.options = query
      ? this.data.filter(d => d.toLocaleLowerCase().indexOf(query.toLocaleLowerCase().trim()) !== -1)
      : [];
  }
}
