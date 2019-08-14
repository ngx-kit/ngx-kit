import { Component, ViewChild } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ClassDirective } from './class.directive';
import { Class } from './class';

describe('KitClassDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let directive: ClassDirective;
  let serviceMock: ServiceMock;
  // setup
  beforeEach(async(() => {
    TestBed
      .configureTestingModule({
        declarations: [TestComponent, ClassDirective],
        providers: [
          ServiceMock,
        ],
      })
      .overrideDirective(ClassDirective, {
        set: {
          providers: [
            {
              provide: Class,
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
  @ViewChild(ClassDirective, /* TODO: add static flag */ {}) directive: ClassDirective;

  className: string;
}
