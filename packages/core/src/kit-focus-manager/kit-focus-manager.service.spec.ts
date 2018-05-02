import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { KitPlatformModule } from '../kit-platform/kit-platform.module';
import { KitEventManagerModule } from '../kit-event-manager/kit-event-manager.module';
import { dispatchKeyboardEvent } from '../../test/utils/dispatch-events';
import { keyTab } from '../kit-event-manager/meta';
import { KitFocusManagerRegistryService } from './kit-focus-manager-registry.service';
import { KitFocusManagerService } from './kit-focus-manager.service';

describe('KitFocusManagerService', () => {
  let fixture: ComponentFixture<TestWrapperComponent>;
  let service: KitFocusManagerService;
  beforeEach(async(() => {
    TestBed
      .configureTestingModule({
        declarations: [
          TestWrapperComponent,
          TestComponent,
        ],
        imports: [
          CommonModule,
          KitEventManagerModule.forRoot(),
          KitPlatformModule.forRoot(),
        ],
        providers: [
          KitFocusManagerRegistryService,
        ],
      });
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(TestWrapperComponent);
    service = fixture.componentInstance.cmp.focusManager;
    service.init();
    fixture.detectChanges();
  });
  it('should create the service', () => {
    expect(service).toBeTruthy();
  });
  it('should focus first', () => {
    service.focusFirst();
    const first = fixture.debugElement.query(By.css('.first')).nativeElement;
    const focused = document.activeElement;
    expect(focused).toEqual(first);
  });
  it('should focus last', () => {
    service.focusLast();
    const first = fixture.debugElement.query(By.css('.last')).nativeElement;
    const focused = document.activeElement;
    expect(focused).toEqual(first);
  });
  it('should focus first on capture', () => {
    service.capture();
    const first = fixture.debugElement.query(By.css('.first')).nativeElement;
    const focused = document.activeElement;
    expect(focused).toEqual(first);
  });
  it('should focus next on tab keypress', (done) => {
    service.capture();
    dispatchKeyboardEvent(fixture.nativeElement, 'keydown', keyTab);
    const second = fixture.debugElement.query(By.css('.second')).nativeElement;
    setTimeout(() => {
      const focused = document.activeElement;
      expect(focused).toEqual(second);
      done();
    }, 1);
  });
  it('should return to the start on tab if captured and reach the end', (done) => {
    service.capture();
    service.focusLast();
    dispatchKeyboardEvent(fixture.nativeElement, 'keydown', keyTab);
    const first = fixture.debugElement.query(By.css('.first')).nativeElement;
    setTimeout(() => {
      const focused = document.activeElement;
      expect(focused).toEqual(first);
      done();
    }, 1);
  });
  // @todo fix
  // Does not work on minimized browser
//  it('should trap the focus', (done) => {
//    service.capture();
//    const outside = fixture.debugElement.query(By.css('.outside')).nativeElement;
//    outside.focus();
//    setTimeout(() => {
//      const first = fixture.debugElement.query(By.css('.first')).nativeElement;
//      const focused = document.activeElement;
//      expect(focused).toEqual(first);
//      done();
//    }, 1);
//  });
  // @todo should focus next
  // @todo should focus prev
  // @todo should focus item
});

@Component({
  selector: 'test-cmp',
  template: `
    <button class="first"></button>
    <button class="second"></button>
    <button class="last"></button>
  `,
  providers: [KitFocusManagerService],
})
class TestComponent {
  constructor(public focusManager: KitFocusManagerService) {
  }
}

@Component({
  selector: 'test-wrapper-cmp',
  template: `
    <button class="outside"></button>
    <test-cmp></test-cmp>
  `,
})
class TestWrapperComponent {
  @ViewChild(TestComponent) cmp: TestComponent;
}
