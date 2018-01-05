import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KitClassService } from './kit-class.service';

describe('KitClassService', () => {
  let fixture: ComponentFixture<TestComponent>;
  let service: KitClassService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestComponent,
      ],
    });
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    service = fixture.componentInstance.service;
    fixture.detectChanges();
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should apply trigger class', () => {
    const className = 'active';
    service.apply({[className]: true});
    expect(fixture.nativeElement.classList[0]).toBe(className);
    expect(fixture.nativeElement.classList.length).toBe(1);
    service.apply({[className]: false});
    expect(fixture.nativeElement.classList.length).toBe(0);
  });
  it('should apply param class', () => {
    const className = 'color';
    const classValue1 = 'red';
    const classValue2 = 'blue';
    service.apply({[className]: classValue1});
    expect(fixture.nativeElement.classList[0]).toBe(`${className}-${classValue1}`);
    expect(fixture.nativeElement.classList.length).toBe(1);
    service.apply({[className]: classValue2});
    expect(fixture.nativeElement.classList[0]).toBe(`${className}-${classValue2}`);
    expect(fixture.nativeElement.classList.length).toBe(1);
    service.apply({[className]: false});
    expect(fixture.nativeElement.classList.length).toBe(0);
  });
  it('should extend class list by apply', () => {
    const className1 = 'active1';
    const className2 = 'active2';
    service.apply({[className1]: true});
    expect(fixture.nativeElement.classList.length).toBe(1);
    service.apply({[className2]: true});
    expect(fixture.nativeElement.classList[0]).toBe(className1);
    expect(fixture.nativeElement.classList[1]).toBe(className2);
    expect(fixture.nativeElement.classList.length).toBe(2);
  });
  it('should replace class by set', () => {
    const className1 = 'active1';
    const className2 = 'active2';
    service.state = {[className1]: true};
    expect(fixture.nativeElement.classList.length).toBe(1);
    service.state = {[className2]: true};
    expect(fixture.nativeElement.classList[0]).toBe(className2);
    expect(fixture.nativeElement.classList.length).toBe(1);
  });
});

@Component({
  selector: 'test-cmp',
  template: ``,
  providers: [
    KitClassService,
  ],
})
class TestComponent {
  constructor(public service: KitClassService) {
  }
}
