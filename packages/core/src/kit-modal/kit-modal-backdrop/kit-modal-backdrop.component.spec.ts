import { Component, ViewChild } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { dispatchMouseEvent } from '../../../test/utils/dispatch-events';
import { KitModalBackdropComponent } from './kit-modal-backdrop.component';

describe('KitModalBackdropComponent', () => {
  let fixture: ComponentFixture<TestComponent>;
  let component: KitModalBackdropComponent;
  // setup
  beforeEach(async(() => {
    TestBed
      .configureTestingModule({
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
      component.click.subscribe(() => {
        expect(true).toBeTruthy();
        done();
      });
      const el = fixture.debugElement.query(By.css('kit-modal-backdrop')).nativeElement;
      dispatchMouseEvent(el, 'click');
    });
  });
  describe('.display', () => {
    it('=true changes host css.display to block', () => {
      component.display = true;
      fixture.detectChanges();
      fixture.detectChanges();
      const styles = fixture.debugElement.query(By.css('kit-modal-backdrop')).styles;
      expect(styles['display']).toEqual('block');
    });
    it('=false changes host css.display to none', () => {
      component.display = false;
      fixture.detectChanges();
      fixture.detectChanges();
      const styles = fixture.debugElement.query(By.css('kit-modal-backdrop')).styles;
      expect(styles['display']).toEqual('none');
    });
  });
});

@Component({
  selector: 'test-component',
  template: `
    <kit-modal-backdrop #cmp></kit-modal-backdrop>
  `,
})
class TestComponent {
  @ViewChild('cmp') cmp: KitModalBackdropComponent;
}
