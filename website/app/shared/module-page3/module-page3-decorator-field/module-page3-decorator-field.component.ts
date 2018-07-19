import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-module-page3-decorator-field',
  templateUrl: './module-page3-decorator-field.component.html',
  styleUrls: ['./module-page3-decorator-field.component.css'],
})
export class ModulePage3DecoratorFieldComponent implements OnInit, OnChanges {
  @Input() decorator: any;

  @Input() title: string;

  @Input() key: string;

  field: any;

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges() {
    this.field = this.decorator[this.key] || undefined;
  }
}
