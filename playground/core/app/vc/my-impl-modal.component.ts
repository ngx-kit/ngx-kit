import { animateChild, query, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, HostBinding, Input, OnChanges, Output, SimpleChanges, } from '@angular/core';
import { KitModalCanClose, KitModalService } from '@ngx-kit/core';

@Component({
  selector: 'my-impl-modal',
  template: `
    <my-modal>
      IMPL TEXT HERE!<br>
      Data: {{ dataField | json }}<br>
      <input type="text" [(ngModel)]="input1">
      <input type="text">
      <input type="text">
      <button (click)="displNested = true">Open nested</button>
      <button (click)="fire()">Open nested RECU</button>
      <button (click)="actionDemo.emit()">ACTION DEMO</button>
      <kit-modal (close)="displNested = false">
        <my-modal *kitOverlay="displNested">
          Modal contenty<br>
        </my-modal>
      </kit-modal>
    </my-modal>
  `,
  animations: [
    trigger('fade', [
      transition(':leave', [
        query('my-modal@fade', animateChild()),
      ]),
    ]),
  ],
})
export class MyImplModalComponent implements OnChanges, KitModalCanClose {
  @HostBinding('@fade') fadeTrigger: void;

  displNested = false;

  @Input() dataField: string;

  @Output() actionDemo = new EventEmitter<void>();

  input1 = 'yes';

  constructor(
    private ms: KitModalService,
  ) {
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('onCha', changes);
  }

  fire() {
    this.ms.show(MyImplModalComponent);
  }

  canClose() {
    return this.input1 !== 'no';
  }
}
