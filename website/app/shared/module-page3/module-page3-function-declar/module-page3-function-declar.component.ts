import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { DocGen } from '@ngx-kit/docgen';

@Component({
  selector: 'app-module-page3-function-declar',
  templateUrl: './module-page3-function-declar.component.html',
  styleUrls: ['./module-page3-function-declar.component.scss'],
})
export class ModulePage3FunctionDeclarComponent implements OnInit, OnChanges {
  @Input() declar: DocGen.FunctionDeclar;

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges() {
  }
}
