import { Component, ViewChild } from '@angular/core';
import { async, ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { FormControl, FormGroup, FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { KitFormTouchDirective } from './kit-form-touch.directive';

describe('KitFormTouchDirective', () => {
  // setup
  beforeEach(async(() => {
    TestBed
      .configureTestingModule({
        imports: [
          FormsModule,
          ReactiveFormsModule,
        ],
        declarations: [
          KitFormTouchDirective,
          TestComponent,
          TestReactiveComponent,
        ],
      });
  }));
  describe('in template-driven forms', () => {
    let fixture: ComponentFixture<TestComponent>;
    beforeEach(() => {
      fixture = TestBed.createComponent(TestComponent);
      fixture.detectChanges();
    });
    it('before click model is not touched', (done) => {
      fixture.whenStable().then(() => {
        expect(fixture.componentInstance.model.touched).toBeFalsy();
        done();
      });
    });
    it('click marks field as touched', (done) => {
      fixture.whenStable().then(() => {
        const button = fixture.debugElement.query(By.css('button')).nativeElement;
        button.dispatchEvent(new MouseEvent('click'));
        expect(fixture.componentInstance.model.touched).toBeTruthy();
        done();
      });
    });
  });
  describe('in reactive forms', () => {
    let fixture: ComponentFixture<TestReactiveComponent>;
    beforeEach(() => {
      fixture = TestBed.createComponent(TestReactiveComponent);
      fixture.detectChanges();
    });
    it('before click model is not touched', fakeAsync(() => {
      expect(fixture.componentInstance.form.controls['field'].touched).toBeFalsy();
    }));
    it('click marks field as touched', fakeAsync(() => {
      const button = fixture.debugElement.query(By.css('button')).nativeElement;
      button.dispatchEvent(new MouseEvent('click'));
      expect(fixture.componentInstance.form.controls['field'].touched).toBeTruthy();
    }));
  });
});

@Component({
  selector: 'test-component',
  template: `
    <form>
      <input [(ngModel)]="field"
             #model="ngModel"
             name="field">
      <button kitFormTouch></button>
    </form>
  `,
})
class TestComponent {
  @ViewChild('model', /* TODO: add static flag */ {}) model: NgModel;

  field: string;
}

@Component({
  selector: 'test-component',
  template: `
    <form [formGroup]="form">
      <input controlName="field">
      <button kitFormTouch></button>
    </form>
  `,
})
class TestReactiveComponent {
  form = new FormGroup({
    field: new FormControl(),
  });
}
