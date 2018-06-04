import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './<%= dasherize(name) %>-demo.component.html',
  styleUrls: ['./<%= dasherize(name) %>-demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class <%= classify(name) %>DemoComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }
}
