import { Component, ViewChild } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { KitClassDirective } from './kit-class.directive';
import { KitClassService } from './kit-class.service';

describe('KitClassDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let directive: KitClassDirective;
  let serviceMock: ServiceMock;
  // setup
  beforeEach(async(() => {
    TestBed
      .configureTestingModule({
        declarations: [TestComponent, KitClassDirective],
        providers: [
          ServiceMock,
        ],
      })
      .overrideDirective(KitClassDirective, {
        set: {
          providers: [
            {
              provide: KitClassService,
              useExisting: ServiceMock,
            },
          ],
        },
      });
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    directive = fixture.componentInstance.directive;
    serviceMock = TestBed.get(ServiceMock);
    fixture.detectChanges();
  });
  // specs
  it('should be created', () => {
    expect(directive).toBeTruthy();
  });
  it('should pass value to service', () => {
    const className = 'class';
    const spy = spyOn(serviceMock, 'apply');
    fixture.componentInstance.className = className;
    fixture.detectChanges();
    expect(spy).toHaveBeenCalledWith(className);
  });
});

class ServiceMock {
  apply() {
  }
}

@Component({
  selector: 'test-component',
  template: `
    <div [kitClass]="className"></div>
  `,
})
class TestComponent {
  @ViewChild(KitClassDirective) directive: KitClassDirective;

  className: string;
}
