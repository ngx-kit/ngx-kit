import { Component, ViewChild } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { KitRefDirective } from './kit-ref.directive';

describe('KitRepeatDirective', () => {
  let fixture: ComponentFixture<any>;
  let testComponent: TestComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestComponent,
        KitRefDirective,
      ],
    });
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    testComponent = fixture.componentInstance;
  });
  it('should pass template', async(() => {
    const textSample = 'hello';
    testComponent.text = textSample;
    fixture.detectChanges();
    const projectedText = fixture.debugElement.query(By.css('.projected')).nativeElement.innerText.trim();
    expect(projectedText).toEqual(textSample);
  }));
});

@Component({
  selector: 'test-cmp',
  template: `
    <span *kitRef>{{ text }}</span>
    <span class="projected">
      <ng-container *ngTemplateOutlet="ref.template"></ng-container>
    </span>
  `,
})
class TestComponent {
  text: string;
  @ViewChild(KitRefDirective, /* TODO: add static flag */ {}) ref: KitRefDirective;
}
