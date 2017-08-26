import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  TemplateRef,
} from '@angular/core';
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

  @Output() change = new EventEmitter<any>();

  @Input() closable = 0;

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

  depth(block) {
    let level = 1;
    let key;
    for (key in block) {
      if (!block.hasOwnProperty(key)) {
        continue
      }
      if (typeof block[key] === 'object') {
        const depth = this.depth(block[key]) + 1;
        level = Math.max(depth, level);
      }
    }
    return level;
  }

  setNumberModel(name: string, value: string) {
    this.themeModel[name] = parseInt(value);
  }
}
