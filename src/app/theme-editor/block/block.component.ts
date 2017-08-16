import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, TemplateRef, } from '@angular/core';
import { StylerComponent, StylerModule } from '@ngx-kit/styler';
import { BlockStyle } from './block.style';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  viewProviders: [StylerModule.forComponent(BlockStyle)],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlockComponent implements OnInit, OnChanges {
  active: string;

  @Input() colorsModel: string[];

  optionTemplate: TemplateRef<any>;

  @Input() schema: any;

  @Input() themeModel: any;

  constructor(private styler: StylerComponent) {
  }

  ngOnChanges() {
    if (this.schema.length === 1) {
      this.active = this.schema[0].name;
    }
  }

  ngOnInit() {
  }

  setNumberModel(name: string, value: string) {
    this.themeModel[name] = parseInt(value);
  }
}
