import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'demo-tabs-gen',
  templateUrl: './demo-tabs-gen.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoTabsGenComponent {
  tabs = [
    {tab: 'Tab 1', content: 'Tab 1 content'},
    {tab: 'Tab 2', content: 'Tab 2 content'},
    {tab: 'Tab 3', content: 'Tab 3 content'},
  ];
}
