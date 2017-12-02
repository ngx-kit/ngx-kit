import { Component, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { dispatchMouseEvent } from '../../../test/utils/dispatch-events';
import { KitPointerLineDirective } from './kit-pointer-line.directive';

describe('KitPointerLineDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let directive: KitPointerLineDirective;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestComponent,
        KitPointerLineDirective,
      ],
    });
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    directive = fixture.componentInstance.pointerLine;
    fixture.detectChanges();
  });
  it('should be created', () => {
    expect(directive).toBeTruthy();
  });
  it('should emit start on mousedown', (done: DoneFn) => {
    const div = fixture.debugElement.query(By.css('div')).nativeElement;
    directive.start.subscribe(() => {
      done();
    });
    dispatchMouseEvent(div, 'mousedown', 0, 0);
  });
  it('should emit move on mousedown+mousemove', (done: DoneFn) => {
    const div = fixture.debugElement.query(By.css('div')).nativeElement;
    directive.move.subscribe(() => {
      done();
    });
    dispatchMouseEvent(div, 'mousedown', 0, 0);
    dispatchMouseEvent(window, 'mousemove', 0, 0);
  });
  it('should emit stop on mouseup', (done: DoneFn) => {
    const div = fixture.debugElement.query(By.css('div')).nativeElement;
    directive.stop.subscribe(() => {
      done();
    });
    dispatchMouseEvent(div, 'mousedown', 0, 0);
    dispatchMouseEvent(window, 'mouseup', 0, 0);
  });
  // @todo check position calculator
});

@Component({
  selector: 'test-cmp',
  template: `
    <div kitPointerLine></div>
  `,
})
class TestComponent {
  @ViewChild(KitPointerLineDirective) pointerLine: KitPointerLineDirective;
}
