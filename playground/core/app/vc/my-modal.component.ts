import { animate, animation, style, transition, trigger, useAnimation, } from '@angular/animations';
import { Component, HostBinding, OnInit } from '@angular/core';
import { KitFocusManagerService, KitModalRef } from '@ngx-kit/core';

const fadeIn = animation([
  style({opacity: 0}),
  animate(250, style({opacity: 1})),
]);
const fadeOut = animation([
  style({opacity: 1}),
  animate(250, style({opacity: 0})),
]);

@Component({
  selector: 'my-modal',
  template: `
    <div class="modal">
      <h2>MY MEGGA MODAL</h2>
      <div style="background: darkseagreen">
        <ng-content></ng-content>
      </div>
      <div>
        <button (click)="close()">CLOSE</button>
      </div>
    </div>
  `,
  styles: [`
    :host {
      position: fixed;
      left: 50%;
      top: 25%;
      transform: translateX(-50%);
      background: #ffffff;
      padding: 32px;
    }
  `],
  providers: [
    KitFocusManagerService,
  ],
  animations: [
    trigger(
      'fade', [
        transition(':enter', useAnimation(fadeIn)),
        transition(':leave', useAnimation(fadeOut)),
      ],
    ),
  ],
})
export class MyModalComponent implements OnInit {
  @HostBinding('@fade') fadeTrigger: void;

  constructor(
    private ref: KitModalRef<MyModalComponent>,
    private fm: KitFocusManagerService,
  ) {
  }

  ngOnInit() {
    this.fm.autoCapture = true;
    this.fm.init();
  }

  close() {
    this.ref.close();
  }
}
