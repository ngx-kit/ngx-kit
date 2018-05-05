import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Subject } from 'rxjs';
import { KitOverlayPositionDirective } from './kit-overlay-position.directive';
import { KitOverlayPositionService } from './kit-overlay-position.service';

describe('KitOverlayPositionDirective', () => {
  let fixture: ComponentFixture<any>;
  let component: TestComponent;
  let service: KitOverlayPositionMockService;
  beforeEach(async(() => {
    TestBed
      .configureTestingModule({
        declarations: [
          TestComponent,
          KitOverlayPositionDirective,
        ],
        providers: [
          KitOverlayPositionMockService,
        ],
      })
      .overrideDirective(KitOverlayPositionDirective, {
        set: {
          providers: [
            {
              provide: KitOverlayPositionService,
              useExisting: KitOverlayPositionMockService,
            },
          ],
        },
      });
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    service = TestBed.get(KitOverlayPositionMockService);
  });
  it('should be created on element', async(() => {
    expect(fixture.debugElement.query(By.directive(KitOverlayPositionDirective))).toBeTruthy();
  }));
  it('should emit outside click from service', async(() => {
    spyOn(component, 'outsideClick');
    fixture.detectChanges();
    service.outsideClicks.next();
    expect(component.outsideClick).toHaveBeenCalled();
  }));
  it('should apply params and run reposition on changes', async(() => {
    spyOn(service, 'applyParams');
    spyOn(service, 'reposition');
    const params = '1';
    component.params = params;
    // detectChanges here checks onInit and onChanges hooks
    fixture.detectChanges();
    expect(service.applyParams).toHaveBeenCalledWith(params);
    expect(service.reposition).toHaveBeenCalled();
  }));
});

@Component({
  selector: 'test-cmp',
  template: '<div [kitOverlayPosition]="params" (outsideClick)="outsideClick()"></div>',
})
class TestComponent {
  params: any;

  outsideClick() {
  }
}

class KitOverlayPositionMockService {
  outsideClicks = new Subject<any>();

  applyParams() {
  }

  reposition() {
  }
}
