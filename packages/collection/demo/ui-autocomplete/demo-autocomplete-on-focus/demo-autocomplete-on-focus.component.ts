import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'demo-autocomplete-on-focus',
  templateUrl: './demo-autocomplete-on-focus.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoAutocompleteOnFocusComponent {
  value: string;

  data: string[] = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December',
  ];

  options = [...this.data];

  searchOptions(query: string) {
    this.options = query
      ? this.data.filter(d => d.toLocaleLowerCase().indexOf(query.toLocaleLowerCase().trim()) !== -1)
      : [...this.data];
  }
}
