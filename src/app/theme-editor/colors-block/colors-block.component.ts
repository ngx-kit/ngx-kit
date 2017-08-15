import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, } from '@angular/core';
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

  @Output() delete = new EventEmitter<string>();

  private _colors: string[];

  private _inputColors: string[];

  constructor(private kitCore: KitCoreService) {
  }

  get colors() {
    return this._colors;
  }

  @Input()
  set colors(colors: string[]) {
    this._colors = [...colors];
    this._inputColors = [...colors];
  }

  ngOnChanges() {
  }

  ngOnInit() {
  }

  add() {
    this._colors.push('');
  }

  changeHandler(index: number, curr: string) {
    this._colors[index] = curr;
  }

  deleteHandler(color: string) {
    if (confirm('Delete color?')) {
      this.delete.emit(color);
    }
  }

  submitChange(index: number) {
    const currColor = this._colors[index];
    if (this._inputColors.filter(c => c === currColor).length > 0) {
      alert('Color already exists!');
    } else {
      this.change.emit([this._inputColors[index], currColor]);
    }
  }

  trackByFn(index, color) {
    return index;
  }
}
