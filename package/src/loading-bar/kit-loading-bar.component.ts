import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Inject, Input, OnDestroy, OnInit, } from '@angular/core';
import { StylerComponent } from '@ngx-kit/styler';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subscription } from 'rxjs/Subscription';
import { KitComponentStyle } from '../core/meta/component';
import { kitComponentLoadingBar } from '../core/meta/tokens';
import { KitLoadingBarService } from './kit-loading-bar.service';

@Component({
  selector: 'kit-loading-bar,[kitLoadingBar]',
  template: `
    <div styler="bar" [@load]="loadTrigger | async"></div>
  `,
  viewProviders: [
    StylerComponent,
  ],
  animations: [
    trigger('load', [
      state('none', style({
        opacity: 0,
      })),
      state('start', style({
        transform: 'translateX(-100%)',
        opacity: 1,
      })),
      state('in-progress', style({
        transform: 'translateX(0)',
        opacity: 1,
      })),
      state('end', style({
        transform: 'translateX(0)',
        opacity: 1,
      })),
      transition('start => in-progress', animate('50000ms cubic-bezier(0,1.13,.32,.91)')),
      transition('* => end', animate('250ms ease-in')),
      transition('end => none', animate('200ms ease-in')),
      transition('none => start', animate('0ms')),
    ]),
  ],
})
export class KitLoadingBarComponent implements OnInit, OnDestroy {
  @Input() kitLoadingBar: any;

  loadTrigger = new BehaviorSubject<string>('none');

  subs: Subscription[] = [];

  triggerKey: string;

  constructor(private styler: StylerComponent,
              @Inject(kitComponentLoadingBar) private style: KitComponentStyle,
              private service: KitLoadingBarService) {
    this.styler.register(this.style);
  }

  ngOnDestroy() {
    this.subs.forEach(sub => sub.unsubscribe());
  }

  ngOnInit() {
    this.subs.push(this.service.starts.subscribe(key => {
      this.triggerKey = key;
      if (this.loadTrigger.value !== 'start' && this.loadTrigger.value !== 'in-progress') {
        this.loadTrigger.next('start');
        setTimeout(() => {
          if (this.loadTrigger.value == 'start') {
            this.loadTrigger.next('in-progress');
          }
        }, 50);
      }
    }));
    this.subs.push(this.service.ends.subscribe(key => {
      if (this.triggerKey === key) {
        this.loadTrigger.next('end');
        setTimeout(() => {
          this.loadTrigger.next('none');
        }, 400);
      }
    }));
  }
}
