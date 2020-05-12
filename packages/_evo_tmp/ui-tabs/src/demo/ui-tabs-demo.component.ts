import { Component } from '@angular/core';

/**
 * @demo
 */
@Component({
  templateUrl: './ui-tabs-demo.component.html',
})
export class UiTabsDemoComponent {
  tabs = [
    {tab: 'Tab 1', content: 'Tab 1 content'},
    {tab: 'Tab 2', content: 'Tab 2 content'},
    {tab: 'Tab 3', content: 'Tab 3 content'},
  ];
}
