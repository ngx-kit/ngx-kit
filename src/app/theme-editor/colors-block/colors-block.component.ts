import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { KitCoreService } from '@ngx-kit/ngx-kit';

@Component({
  selector: 'app-colors-block',
  templateUrl: './colors-block.component.html',
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
    this.colors[this.colors.indexOf(prev)] = curr;
    this.change.emit([prev, curr]);
  }

  delete(color: string) {
    this.colors.splice(this.colors.indexOf(color), 1);
  }
}
