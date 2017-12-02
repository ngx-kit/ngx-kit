import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { KitRepeatDirective } from './kit-repeat.directive';

describe('KitRepeatDirective', () => {
  let fixture: ComponentFixture<any>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestComponent,
        KitRepeatDirective,
      ],
    });
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
  });
  it('should repeat template', async(() => {
    fixture.detectChanges();
    expect(fixture.debugElement.queryAll(By.css('span')).length).toEqual(0);
    fixture.componentInstance.number = 1;
    fixture.detectChanges();
    expect(fixture.debugElement.queryAll(By.css('span')).length).toEqual(1);
    fixture.componentInstance.number = 3;
    fixture.detectChanges();
    expect(fixture.debugElement.queryAll(By.css('span')).length).toEqual(3);
  }));
});

@Component({
  selector: 'test-cmp',
  template: '<span *kitRepeat="number">hello</span>',
})
class TestComponent {
  number = 0;
}
