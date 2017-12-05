import { CommonModule } from '@angular/common';
import { Component, Injectable, ViewChild } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { dispatchKeyboardEvent } from '../../test/utils/dispatch-events';
import { keyEnter } from '../kit-event-manager/meta';
import { KitKeymapDirective } from './kit-keymap.directive';
import { KitKeymapModule } from './kit-keymap.module';
import { KitKeymapService } from './kit-keymap.service';
import { KitKeymapActions } from './meta';

describe('KitKeymapService', () => {
  let fixture: ComponentFixture<TestComponent>;
  let service: KitKeymapService;
  beforeEach(async(() => {
    TestBed
        .configureTestingModule({
          declarations: [
            TestComponent,
          ],
          imports: [
            CommonModule,
            KitKeymapModule,
          ],
          providers: [
            {
              provide: KitKeymapActions,
              useClass: TestNavMapping,
            },
          ],
        });
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    service = getComponent().service;
  });

  function getComponent() {
    return fixture.componentInstance;
  }

  it('should register directive', () => {
    const spy = spyOn(service, 'register');
    fixture.detectChanges();
    expect(spy).toHaveBeenCalled();
  });
  it('should emit action on control keyDown', (done) => {
    fixture.detectChanges();
    service.actions.subscribe(a => {
      expect(a).toEqual(1);
      done();
    });
    const div = fixture.debugElement.query(By.css('div')).nativeElement;
    dispatchKeyboardEvent(div, 'keydown', keyEnter);
  });
  it('should emit action on keyDown with meta', (done) => {
    fixture.detectChanges();
    service.actions.subscribe(a => {
      expect(a).toEqual(2);
      done();
    });
    const div = fixture.debugElement.query(By.css('div')).nativeElement;
    dispatchKeyboardEvent(div, 'keydown', keyEnter, {ctrl: true});
  });
});

@Component({
  selector: 'test-cmp',
  template: '<div kitKeymap></div>',
  providers: [KitKeymapService],
})
class TestComponent {
  @ViewChild(KitKeymapDirective) directive: KitKeymapDirective;

  constructor(public service: KitKeymapService) {
  }
}

@Injectable()
class TestNavMapping extends KitKeymapActions {
  keydown() {
    return [
      {
        key: keyEnter,
        action: 1,
      },
      {
        key: keyEnter,
        meta: {ctrl: true},
        action: 2,
      },
    ];
  }
}
