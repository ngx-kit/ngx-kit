import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: '<%= dasherize(name) %>',
  templateUrl: './<%= dasherize(name) %>.component.html',
  styleUrls: ['./<%= dasherize(name) %>.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class <%= classify(name) %>Component implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }
}
