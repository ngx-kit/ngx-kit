import {
  AfterViewChecked,
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import { KitCoreService } from '@ngx-kit/ngx-kit';
import { StylerModule } from '@ngx-kit/styler';
import { ColorsBlockStyle } from './colors-block.style';

@Component({
  selector: 'app-colors-block',
  templateUrl: './colors-block.component.html',
  viewProviders: [
    StylerModule.forComponent(ColorsBlockStyle),
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ColorsBlockComponent implements OnInit, OnChanges {
  @Output() change = new EventEmitter();

  @Input() colors: string[];

  constructor(private kitCore: KitCoreService) {
  }

  ngOnChanges() {
  }

  ngOnInit() {
  }

  add() {
    this.colors.push('#fff');
  }

  changeHandler(prev: string, curr: string) {
    this.change.emit([prev, curr]);
  }

  delete(color: string) {
    if (confirm('Delete color?')) {
      this.colors.splice(this.colors.indexOf(color), 1);
    }
  }

  trackByFn(index, color) {
    return index;
  }
}
