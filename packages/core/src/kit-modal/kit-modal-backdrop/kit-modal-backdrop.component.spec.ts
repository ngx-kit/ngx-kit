import { Component, ViewChild } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { KitModalBackdropComponent } from './kit-modal-backdrop.component';

describe('KitModalBackdropComponent', () => {
  let fixture: ComponentFixture<TestComponent>;
  let component: KitModalBackdropComponent;
  // setup
  beforeEach(async(() => {
    TestBed
      .configureTestingModule({
        imports: [
          NoopAnimationsModule,
        ],
        declarations: [
          TestComponent,
          KitModalBackdropComponent,
        ],
        providers: [],
      });
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance.cmp;
    fixture.detectChanges();
  });
  // specs
  describe('.click', () => {
    it('outputs event on mouse click', (done) => {
      component.close.subscribe(() => {
        expect(true).toBeTruthy();
        done();
      });
      const el = fixture.debugElement.query(By.css('.backdrop')).nativeElement;
      el.dispatchEvent(new MouseEvent('click'));
    });
  });
  describe('.display', () => {
    it('=true displays backdrop', () => {
      component.display = true;
      fixture.detectChanges();
      fixture.detectChanges();
      const backdrop = fixture.debugElement.query(By.css('.backdrop'));
      expect(backdrop).toBeTruthy();
    });
    it('=false hides backdrop', () => {
      component.display = false;
      fixture.detectChanges();
      fixture.detectChanges();
      const backdrop = fixture.debugElement.query(By.css('.backdrop'));
      expect(backdrop).toBeFalsy();
    });
  });
});

@Component({
  selector: 'test-component',
  template: `
    <kit-modal-backdrop [display]="true" #cmp></kit-modal-backdrop>
  `,
})
class TestComponent {
  @ViewChild('cmp') cmp: KitModalBackdropComponent;
}
