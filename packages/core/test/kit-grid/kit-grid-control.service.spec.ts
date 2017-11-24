import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { keyEnter } from '../../src/kit-event-manager/meta';
import { KitGridControlDirective } from '../../src/kit-grid/kit-grid-control/kit-grid-control.directive';
import { KitGridControlService } from '../../src/kit-grid/kit-grid-control/kit-grid-control.service';
import { KitGridModule } from '../../src/kit-grid/kit-grid.module';
import { KitGridControlActionType } from '../../src/kit-grid/meta';
import { dispatchKeyboardEvent } from '../utils/dispatch-events';

describe('kitGridControlService', () => {
  let fixture: ComponentFixture<TestComponent>;
  let service: KitGridControlService;
  beforeEach(async(() => {
    TestBed
        .configureTestingModule({
          declarations: [
            TestComponent,
          ],
          imports: [
            CommonModule,
            KitGridModule,
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

  it('should register kitGridControl directive', async(() => {
    const spy = spyOn(service, 'registerGrid');
    fixture.detectChanges();
    expect(spy).toHaveBeenCalled();
  }));
  it('should emit action on control keyDown', async(() => {
    fixture.detectChanges();
    let action: KitGridControlActionType = KitGridControlActionType.noop;
    service.actions.subscribe(a => {
      action = a;
    });
    const div = fixture.debugElement.query(By.css('div')).nativeElement;
    dispatchKeyboardEvent(div, 'keydown', keyEnter);
    expect(action).toEqual(KitGridControlActionType.enter);
  }));
});

@Component({
  selector: 'test-cmp',
  template: '<div kitGridControl></div>',
  providers: [KitGridControlService],
})
class TestComponent {
  @ViewChild(KitGridControlDirective) directive: KitGridControlDirective;

  constructor(public service: KitGridControlService) {
  }
}
