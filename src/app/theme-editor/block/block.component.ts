import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { StylerComponent, StylerModule } from '@ngx-kit/styler';
import { BlockStyle } from './block.style';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  viewProviders: [StylerModule.forComponent(BlockStyle)],
})
export class BlockComponent implements OnInit {
  @Input() colorsModel: string[];

  @Input() schema: any;

  @Input() themeModel: any;

  optionTemplate: TemplateRef<any>;

  constructor(private styler: StylerComponent) {
  }

  ngOnInit() {
  }
}
