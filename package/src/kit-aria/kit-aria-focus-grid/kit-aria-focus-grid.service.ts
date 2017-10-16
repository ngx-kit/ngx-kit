import { ElementRef, Injectable, OnChanges, Renderer2 } from '@angular/core';
import { keyArrowDown, keyArrowLeft, keyArrowRight, keyArrowUp } from '../meta';

@Injectable()
export class KitAriaFocusGridService implements OnChanges {
  active: any;

  grid: any[][];

  private acitveCol: number;

  private activeRow: number;

  constructor(private el: ElementRef,
              private renderer: Renderer2) {
    this.renderer.listen(this.el.nativeElement, 'keydown', (event: KeyboardEvent) => {
      console.log('keydown event', event);
      switch (event.keyCode) {
        case keyArrowUp:
          console.log('arrow up');
          event.preventDefault();
          break;
        case keyArrowRight:
          console.log('arrow dwon');
          event.preventDefault();
          break;
        case keyArrowDown:
          event.preventDefault();
          break;
        case keyArrowLeft:
          event.preventDefault();
          break;
      }
    });
  }

  ngOnChanges() {
    this.grid.forEach((row: any[], rowIndex: number) => {
      row.forEach((col: any, colIndex: number) => {
        if (col === this.active) {
          this.activeRow = rowIndex;
          this.acitveCol = colIndex;
        }
      });
    });
  }

  private modCol(modifier: 1 | -1) {
  }

  private modRow(modifier: 1 | -1) {
  }
}
