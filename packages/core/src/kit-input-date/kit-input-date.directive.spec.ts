import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { dispatchFakeEvent } from '../../test/utils/dispatch-events';
import { KitPlatformService } from '../kit-platform/kit-platform.service';
import { KitInputDateDirective } from './kit-input-date.directive';
import { KitInputDateModule } from './kit-input-date.module';

describe('KitInputDateDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  beforeEach(async(() => {
    TestBed
      .configureTestingModule({
        declarations: [
          TestComponent,
        ],
        imports: [
          CommonModule,
          FormsModule,
          KitInputDateModule,
        ],
        providers: [
          {
            provide: KitPlatformService,
            useClass: KitPlatformServiceStub,
          },
        ],
      });
  }));

  function getComponent() {
    return fixture.componentInstance;
  }

  it('outputs formatted date', fakeAsync(() => {
    fixture = createTestComponent(baseTemplate);
    fixture.detectChanges();
    tick();
    const inputValue = fixture.debugElement.query(By.css('input')).nativeElement.value;
    expect(inputValue).toEqual(getComponent().model.toDateString());
  }));
  it('parses date', fakeAsync(() => {
    fixture = createTestComponent(baseTemplate);
    fixture.detectChanges();
    const input = fixture.debugElement.query(By.css('input'));
    const date = new Date('2018-01-01');
    input.nativeElement.value = date.toDateString();
    dispatchFakeEvent(input.nativeElement, 'input');
    tick();
    expect(getComponent().model.toDateString()).toEqual(date.toDateString());
  }));
  describe('"format" param', () => {
    it('throws error if moment.js is not exist', () => {
      expect(() => {
        fixture = createTestComponent(formatTemplate);
        fixture.detectChanges();
      }).toThrow();
    });
  });
});

@Component({
  selector: 'test-cmp',
  template: '',
})
class TestComponent {
  model = new Date();
}

const baseTemplate = `
  <input [(ngModel)]="model"
         kitInputDate>
`;

const formatTemplate = `
  <input [(ngModel)]="model"
         kitInputDate
         format="YYYY">
`;

function createTestComponent(template: string): ComponentFixture<TestComponent> {
  return TestBed.overrideComponent(TestComponent, {set: {template: template}})
    .createComponent(TestComponent);
}

class KitPlatformServiceStub {
  isBrowser() {
    return true;
  }

  getMoment() {
    return null;
  }
}
